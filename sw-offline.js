const SW_OFFLINE_VERSION = '1.17.0';
const OFFLINE_SCOPES = [];
const OFFLINE_MF_NAMES = {};
// OFFLINE_MF_NAMES is informational only (rewritten at build time; the build
// expects the line). Decisions use what pages of this scope request.

/* Offline service worker — registered once per offline scope (e.g. `/m/`),
 * never for `/`. It keeps a copy of what pages of its scope load from this
 * origin (document, MFE manifest + keyring, shell scripts, MFE bundles,
 * images) plus an allow-listed stylesheet/font host, and answers from that
 * copy when the network fails.
 *
 * It never makes a response up: what a page gets is either the network's
 * response or one stored earlier from the network. When the network fails and
 * nothing is stored, the original failure reaches the page.
 *
 * The old `sw.js` dropped fetch interception because, during a deploy, hashed
 * bundles briefly 404 and the SPA fallback answers a `.js` request with
 * `index.html`. Here an HTML response is never stored for anything but a
 * navigation, and errors are never stored.
 *
 * Manifest generations. Each time a manifest (`/_manifest.json` or
 * `/_manifest.local.json`) arrives from the network the worker builds a unit
 * itself: the manifest, plus — when the scope is signed — the keyring
 * (`/_mfe-keys.json`) it fetches right then. Units are stored as
 * `__manifest@<g>` / `__keys@<g>`; one pointer entry `__gen` =
 * { active, pending, state, signed, readySeen, path } names the ACTIVE unit
 * (answered offline, manifest and keys together) and at most one PENDING unit
 * (a newer fingerprint). Every change of meaning is one pointer write.
 * Pending becomes active (then other versions are pruned) when the entry
 * bundle of every microfrontend the pages requested while it was pending is
 * stored, and either the page sent `LINM_OFFLINE_WARM` with `ready: true` or
 * enough network-answered navigations were counted (2, or 5 once a `ready`
 * was ever seen). */

const OFFLINE_FONT_HOSTS = ['cdnjs.cloudflare.com'];
const OFFLINE_CACHE_PREFIX = 'linm-offline:';
const OFFLINE_NETWORK_LIMIT_MS = 4000;
const OFFLINE_BODY_LIMIT_MS = 30000;
const OFFLINE_KEYS_PATH = '/_mfe-keys.json';
const OFFLINE_MAIN_MANIFEST_PATH = '/_manifest.json';
const OFFLINE_ANSWERED_MAX = 32;
const OFFLINE_WARM_PARALLEL = 6;
const OFFLINE_STATIC_EXT = /\.(js|css|json|webmanifest|png|jpe?g|webp|svg|gif|ico|woff2?|ttf)$/i;
const OFFLINE_HASH_PART = /^[0-9a-f]{8,}$/i;
const OFFLINE_VERSION_SEGMENT = /^\d+\.\d+\.\d+/;
const OFFLINE_URL_BASE = 'http://manifest.invalid';

/* ---------------------------------------------------------------------------
 * Pure decision functions (unit-tested; no service-worker globals).
 * ------------------------------------------------------------------------- */

function parseUrl(url, base) {
  try {
    return base ? new URL(url, base) : new URL(url);
  } catch (e) {
    return null;
  }
}

function pathSegments(pathname) {
  return pathname.split('/').filter((s) => s.length > 0);
}

/** The offline scope a path belongs to (longest matching prefix), or null. */
function scopeOf(pathname, scopes) {
  let found = null;
  if (typeof pathname !== 'string' || !Array.isArray(scopes)) return null;
  for (const scope of scopes) {
    if (typeof scope !== 'string' || !scope) continue;
    if (pathname.indexOf(scope) === 0 && (!found || scope.length > found.length)) found = scope;
  }
  return found;
}

/** `/<folder>/<version>/…` with a version-like second segment, or null. */
function versionFolderOf(pathname) {
  const segs = pathSegments(pathname);
  if (segs.length < 3 || !OFFLINE_VERSION_SEGMENT.test(segs[1])) return null;
  return { folder: segs[0], version: segs[1] };
}

/** `/<mf>/<version>/…<hash>….<ext>`: a version folder and a file name with
 * an 8+ hex-char part between dots. */
function isVersionedPath(pathname) {
  if (!versionFolderOf(pathname)) return false;
  const segs = pathSegments(pathname);
  const parts = segs[segs.length - 1].split('.');
  if (parts.length < 2) return false;
  for (let i = 0; i < parts.length - 1; i++) {
    if (OFFLINE_HASH_PART.test(parts[i])) return true;
  }
  return false;
}

function hasRangeHeader(req) {
  try {
    return !!(req.headers && typeof req.headers.get === 'function' && req.headers.get('range'));
  } catch (e) {
    return false;
  }
}

/** 'manifest' for `/_manifest.json` and `/_manifest.local.json`, 'keys' for
 * `/_mfe-keys.json`, otherwise null. */
function manifestRole(url) {
  const u = parseUrl(url, OFFLINE_URL_BASE);
  if (!u) return null;
  if (isMainManifestPath(u.pathname) || u.pathname === '/_manifest.local.json') return 'manifest';
  if (u.pathname === '/_mfe-keys.json') return 'keys';
  return null;
}

/** The main manifest file (the local one is a dev override the page falls
 * back from by itself). */
function isMainManifestPath(pathname) {
  return pathname === OFFLINE_MAIN_MANIFEST_PATH;
}

function hasAuthorizationHeader(req) {
  try {
    return !!(req.headers && typeof req.headers.get === 'function' && req.headers.get('authorization'));
  } catch (e) {
    return false;
  }
}

/** A stored copy that may be answered: never an opaque one (answered to a
 * cors request it is a network error; older versions stored such copies). */
function answerable(res) {
  return !!res && res.type !== 'opaque';
}

/** Fetch options for a warm-up fetch. Font-host files are fetched the way the
 * page requests them (cors, no credentials), so the stored copy is readable. */
function warmInit(kind) {
  if (kind === 'fonts') return { cache: 'reload', mode: 'cors', credentials: 'omit' };
  return { cache: 'reload', credentials: 'same-origin' };
}

/**
 * Which strategy a request gets.
 * @param req { method, mode, url, headers? }
 * @returns 'probe' | 'navigate' | 'manifest' | 'versioned' | 'static' | 'fonts' | 'ignore'
 */
function classify(req, scope, origin, fontHosts) {
  if (!req || !scope) return 'ignore';
  const u = parseUrl(req.url);
  if (!u || (u.protocol !== 'https:' && u.protocol !== 'http:')) return 'ignore';
  if (String(req.method || 'GET').toUpperCase() !== 'GET') return 'ignore';
  if (hasRangeHeader(req)) return 'ignore';
  // Authenticated requests: network only, never stored, never answered from storage.
  if (hasAuthorizationHeader(req)) return 'ignore';
  if (u.searchParams.get('linm-probe') === '1') return 'probe';
  if (u.origin !== origin) {
    return Array.isArray(fontHosts) && fontHosts.indexOf(u.host) !== -1 ? 'fonts' : 'ignore';
  }
  if (req.mode === 'navigate') return scopeOf(u.pathname, [scope]) ? 'navigate' : 'ignore';
  if (manifestRole(u.href)) return 'manifest';
  if (isVersionedPath(u.pathname)) return 'versioned';
  if (OFFLINE_STATIC_EXT.test(u.pathname)) return 'static';
  return 'ignore';
}

/** Cache key (absolute URL string) for a request of the given kind, or null. */
function cacheKeyFor(kind, url, scope) {
  const u = parseUrl(url);
  if (!u) return null;
  u.hash = '';
  if (kind === 'navigate') return u.origin + scope + '__document';
  if (kind === 'manifest' || kind === 'static') {
    u.searchParams.delete('v');
    u.searchParams.delete('_');
    return u.origin + u.pathname + u.search;
  }
  if (kind === 'versioned' || kind === 'fonts') return u.href;
  return null;
}

/**
 * Whether a network response may be stored.
 * @param res { ok, type, status, contentType, redirected? }
 */
function storable(kind, res, requestUrl) {
  if (!res || kind === 'probe' || kind === 'ignore') return false;
  // Opaque responses (no-cors, other origin) are never stored: `ok` is false.
  if (res.type === 'opaque' || !res.ok || res.status === 206) return false;
  const html = String(res.contentType || '').toLowerCase().indexOf('text/html') === 0;
  if (kind === 'navigate') {
    // The scope's document: HTML, not redirected (browsers refuse a redirected
    // response for a navigation), and only for app routes, not files.
    if (!html || res.redirected) return false;
    const u = parseUrl(requestUrl);
    if (!u) return false;
    const segs = pathSegments(u.pathname);
    return segs.length === 0 || segs[segs.length - 1].indexOf('.') === -1;
  }
  // HTML answered for anything but a navigation is the SPA fallback (e.g. a
  // bundle missing during a deploy, a request ending in `.js`): never store it.
  return !html;
}

/* ----- manifests -------------------------------------------------------- */

/** A manifest given as JSON text or as an object → { obj, text }, or null. */
function readManifest(m) {
  if (m == null) return null;
  if (typeof m === 'string') {
    try {
      const obj = JSON.parse(m);
      return obj && typeof obj === 'object' && !Array.isArray(obj) ? { obj, text: m } : null;
    } catch (e) {
      return null;
    }
  }
  if (typeof m === 'object' && !Array.isArray(m)) return { obj: m, text: JSON.stringify(m) };
  return null;
}

/** The microfrontend map: `microfrontends` if present, else the top level. */
function microfrontendsOf(obj) {
  if (!obj || typeof obj !== 'object') return {};
  if (obj.microfrontends && typeof obj.microfrontends === 'object') return obj.microfrontends;
  return obj;
}

/** Entries whose `url` is a versioned path: [{ url, abs, folder, version }].
 * With `origin`, entries on another origin are left out (never storable). */
function versionedEntries(m, origin) {
  const read = readManifest(m);
  if (!read) return [];
  const map = microfrontendsOf(read.obj);
  const out = [];
  for (const name of Object.keys(map)) {
    const entry = map[name];
    if (!entry || typeof entry !== 'object' || typeof entry.url !== 'string') continue;
    const u = parseUrl(entry.url, origin || OFFLINE_URL_BASE);
    if (!u || !isVersionedPath(u.pathname)) continue;
    if (origin && u.origin !== origin) continue;
    const vf = versionFolderOf(u.pathname);
    out.push({ url: entry.url, abs: u.href, folder: vf.folder, version: vf.version });
  }
  return out;
}

/** Entry bundle URLs (as written in the manifest) of all versioned entries. */
function entryUrls(manifest) {
  return versionedEntries(manifest).map((e) => e.url);
}

/** Sorted versioned entry urls: what identifies a version of the site. */
function manifestFingerprint(m) {
  return JSON.stringify(entryUrls(m).sort());
}

/** Small stable text hash (FNV-1a 32 bit + length) for comparing texts. */
function hashText(text) {
  let h = 0x811c9dc5;
  const s = String(text);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16) + ':' + s.length;
}

/** A unit { id, fp, m, k } for manifest text (+ keys text or null), or null
 * when the manifest has no versioned entry. */
function unitOf(id, manifestText, keysText) {
  if (versionedEntries(manifestText).length === 0) return null;
  const read = readManifest(manifestText);
  return {
    id,
    fp: manifestFingerprint(manifestText),
    m: hashText(read.text),
    k: keysText == null ? null : hashText(keysText),
  };
}

/* ----- pointer ---------------------------------------------------------- */

function pointerKeyFor(origin, scope) {
  return origin + scope + '__gen';
}

function genManifestKey(origin, scope, id) {
  return origin + scope + '__manifest@' + id;
}

function genKeysKey(origin, scope, id) {
  return origin + scope + '__keys@' + id;
}

function emptyPointer() {
  return { active: null, pending: null, state: null, signed: false, readySeen: false, path: null };
}

function readUnit(u) {
  if (!u || typeof u !== 'object') return null;
  if (typeof u.id !== 'string' || typeof u.fp !== 'string' || typeof u.m !== 'string') return null;
  return { id: u.id, fp: u.fp, m: u.m, k: typeof u.k === 'string' ? u.k : null };
}

/** Pointer from stored JSON text (or object); anything unreadable → empty. */
function readPointer(value) {
  let obj = value;
  if (typeof value === 'string') {
    try {
      obj = JSON.parse(value);
    } catch (e) {
      obj = null;
    }
  }
  const P = emptyPointer();
  if (!obj || typeof obj !== 'object') return P;
  P.active = readUnit(obj.active);
  P.pending = readUnit(obj.pending);
  if (P.pending) {
    const s = obj.state && typeof obj.state === 'object' ? obj.state : {};
    P.state = {
      since: typeof s.since === 'number' ? s.since : 0,
      navigations: typeof s.navigations === 'number' ? s.navigations : 0,
      folders: Array.isArray(s.folders) ? s.folders.filter((f) => typeof f === 'string') : [],
    };
  }
  P.signed = obj.signed === true;
  P.readySeen = obj.readySeen === true;
  P.path = typeof obj.path === 'string' ? obj.path : null;
  return P;
}

function withPointer(P, changes) {
  return Object.assign({}, P, changes);
}

/**
 * What the worker's own keyring fetch got: 'ok' (store it), 'gone' (404 / 410,
 * or an ok answer that is HTML — the SPA fallback: the file is not deployed),
 * or 'error' (any other status — 5xx, 429, … — handled like a network failure).
 * @param res { ok, status, contentType }
 */
function keysFetchOutcome(res) {
  if (!res) return 'error';
  if (res.status === 404 || res.status === 410) return 'gone';
  if (!res.ok || res.status === 206) return 'error';
  return String(res.contentType || '').toLowerCase().indexOf('text/html') === 0 ? 'gone' : 'ok';
}

/**
 * Complete a unit built by the worker from a network manifest.
 * keys: null (not fetched) | { error: true } (network failure / timeout /
 * unexpected status) | { ok: false } (the file is gone) | { ok: true, text }.
 * Returns null (drop: nothing changes) or { unit, keysGone }.
 * When the keyring was fetched, its outcome decides — whatever `signed` says
 * by commit time (another build may have flipped it meanwhile): fetched keys
 * are kept, a "gone" answer keeps its guard, a failure drops the unit.
 * `signed` only matters when no fetch was made.
 */
function completeUnit(id, manifestText, signed, keys) {
  if (keys && keys.error) return null;
  if (keys && keys.ok === false) {
    const unit = unitOf(id, manifestText, null);
    return unit ? { unit, keysGone: true } : null;
  }
  if (keys && keys.ok === true && typeof keys.text === 'string') {
    const unit = unitOf(id, manifestText, keys.text);
    return unit ? { unit, keysGone: false } : null;
  }
  if (signed) return null;
  const unit = unitOf(id, manifestText, null);
  return unit ? { unit, keysGone: false } : null;
}

function sameUnit(a, b) {
  return a.fp === b.fp && a.m === b.m && a.k === b.k;
}

/**
 * Commit a completed unit (one pointer write).
 * - no active (or its entries are missing: opts.activeMissing) → active;
 * - same fingerprint as active: everything equal → nothing (pending, if any,
 *   is cleared); manifest or keys text differs → replaces active (pending
 *   cleared);
 * - same fingerprint as pending: equal → nothing; else replaces pending, state
 *   kept;
 * - otherwise → new pending with a fresh state.
 * opts.keysGone (the worker's keys fetch got a non-ok answer): signed becomes
 * false and the unit is committed keyless — except that it never replaces a
 * keyed unit of the same fingerprint (a transient 404 cannot strip the keys of
 * the pair that verifies; the bundles are the same anyway).
 */
function commitUnit(P, unit, now, opts) {
  const o = opts || {};
  if (!unit) return P;
  let base = P;
  if (o.keysGone && P.signed) base = withPointer(P, { signed: false });
  if (!base.active || o.activeMissing) {
    return withPointer(base, { active: unit, pending: null, state: null });
  }
  const keepsKeys = (target) => o.keysGone && !unit.k && target.k && target.fp === unit.fp;
  if (unit.fp === base.active.fp) {
    if (sameUnit(unit, base.active) || keepsKeys(base.active)) {
      return base.pending ? withPointer(base, { pending: null, state: null }) : base;
    }
    return withPointer(base, { active: unit, pending: null, state: null });
  }
  if (base.pending && unit.fp === base.pending.fp) {
    if (sameUnit(unit, base.pending) || keepsKeys(base.pending)) return base;
    return withPointer(base, { pending: unit, state: base.state || { since: now, navigations: 0, folders: [] } });
  }
  return withPointer(base, { pending: unit, state: { since: now, navigations: 0, folders: [] } });
}

/** A page asked for the keyring: the scope is signed. A repair (the worker
 * fetches manifest + keys itself) is needed when the active unit has none, or
 * when a pending unit has none (it would be promoted keyless otherwise). */
function onKeysRequest(P) {
  const pointer = P.signed ? P : withPointer(P, { signed: true });
  const keyless = (u) => !!(u && !u.k);
  return { pointer, repair: keyless(pointer.active) || keyless(pointer.pending) };
}

/**
 * Where a page's manifest request that the network answered is answered from.
 * A usable answer always goes to the page. A non-usable one (non-ok, or HTML)
 * is replaced by the stored active manifest only when the request is for the
 * main manifest file AND that is the path the stored units were built from
 * (`P.path`). For the local manifest every network answer reaches the page
 * unchanged — it falls back from `/_manifest.local.json` to `/_manifest.json`
 * itself, only on a non-ok answer; substituting there would pin an online
 * page to the stored manifest.
 * @returns 'network' | 'store'
 */
function manifestAnswerSource(usable, requestPath, P) {
  if (usable || !P || !P.active) return 'network';
  if (!isMainManifestPath(requestPath)) return 'network';
  return typeof P.path === 'string' && P.path === requestPath ? 'store' : 'network';
}

function setReadySeen(P) {
  return P.readySeen ? P : withPointer(P, { readySeen: true });
}

/** Record folders requested while a unit is pending (sorted, unique). Returns
 * the same pointer when nothing changes. */
function addFolders(P, folders) {
  if (!P.pending || !P.state || !Array.isArray(folders)) return P;
  const set = {};
  for (const f of P.state.folders) set[f] = true;
  let added = false;
  for (const f of folders) {
    if (typeof f === 'string' && f && !set[f]) {
      set[f] = true;
      added = true;
    }
  }
  if (!added) return P;
  return withPointer(P, { state: Object.assign({}, P.state, { folders: Object.keys(set).sort() }) });
}

/** Folders of the same-origin versioned urls in a list (sorted, unique). */
function versionedFolders(urls, origin) {
  const set = {};
  for (const raw of urls || []) {
    const u = typeof raw === 'string' ? parseUrl(raw, origin) : null;
    if (!u || u.origin !== origin || !isVersionedPath(u.pathname)) continue;
    set[versionFolderOf(u.pathname).folder] = true;
  }
  return Object.keys(set).sort();
}

/** Versioned same-origin entries of the manifest whose folder was requested. */
function relevantEntries(manifest, folders, origin) {
  const want = {};
  for (const f of folders || []) want[f] = true;
  return versionedEntries(manifest, origin).filter((e) => want[e.folder]);
}

/** Whether a pending manifest may become active: at least one relevant entry,
 * and the entry url of every relevant entry stored. Keys are checked by
 * promotionPlan (a keyless pending waits while the scope is signed). */
function canPromote(input) {
  if (!input || !input.pending) return false;
  const relevant = relevantEntries(input.pending, input.folders, input.origin);
  if (relevant.length === 0) return false;
  const stored = {};
  for (const k of input.storedKeys || []) stored[k] = true;
  return relevant.every((e) => stored[e.abs]);
}

/**
 * Stored keys (on `origin`) to delete once `manifest` is active: for every
 * versioned same-origin entry, keys under `/<folder>/<other version>/`. Keys
 * outside version folders are never pruned.
 */
function pruneKeys(keys, manifest, origin) {
  const current = {};
  for (const e of versionedEntries(manifest, origin)) {
    if (!current[e.folder]) current[e.folder] = {};
    current[e.folder][e.version] = true;
  }
  const out = [];
  for (const key of keys || []) {
    const u = parseUrl(key);
    if (!u || (origin && u.origin !== origin)) continue;
    const vf = versionFolderOf(u.pathname);
    if (!vf || !Object.prototype.hasOwnProperty.call(current, vf.folder)) continue;
    if (!current[vf.folder][vf.version]) out.push(key);
  }
  return out;
}

/** Promotion: null, or { pointer (active = pending), prune }. A keyless
 * pending is never promoted while the scope is signed (its repair is still
 * running or failed; an offline launch from it could not be verified). */
function promotionPlan(input) {
  const P = input.pointer;
  if (!P || !P.pending) return null;
  if (P.signed && !P.pending.k) return null;
  const ok = canPromote({
    pending: input.pendingManifest,
    storedKeys: input.storedKeys,
    origin: input.origin,
    folders: P.state ? P.state.folders : [],
  });
  if (!ok) return null;
  return {
    pointer: withPointer(P, { active: P.pending, pending: null, state: null }),
    prune: pruneKeys(input.storedKeys || [], input.pendingManifest, input.origin),
  };
}

/** Writes for a pointer change, in a crash-safe order: the pointer first (one
 * put flips everything), then generation entries nothing references any more
 * — except protected ones (a unit being committed, or a generation a page was
 * just answered from). */
function pointerOps(P, storedKeys, origin, scope, protectedIds) {
  const keep = {};
  for (const u of [P.active, P.pending]) {
    if (!u) continue;
    keep[genManifestKey(origin, scope, u.id)] = true;
    if (u.k) keep[genKeysKey(origin, scope, u.id)] = true;
  }
  for (const id of protectedIds || []) {
    keep[genManifestKey(origin, scope, id)] = true;
    keep[genKeysKey(origin, scope, id)] = true;
  }
  const ops = [{ op: 'put', key: pointerKeyFor(origin, scope), value: JSON.stringify(P) }];
  const prefixes = [origin + scope + '__manifest@', origin + scope + '__keys@'];
  for (const key of storedKeys || []) {
    if (prefixes.some((p) => key.indexOf(p) === 0) && !keep[key]) ops.push({ op: 'delete', key });
  }
  return ops;
}

/** Keys answered offline: the active unit's manifest and keys. */
function activeAnswerKeys(P, origin, scope) {
  if (!P || !P.active) return { manifest: null, keys: null };
  return {
    manifest: genManifestKey(origin, scope, P.active.id),
    keys: P.active.k ? genKeysKey(origin, scope, P.active.id) : null,
  };
}

/** Key of the stored copy answered when the network fails (null: none). */
function offlineAnswerKey(kind, url, scope, pointer) {
  const role = kind === 'manifest' ? manifestRole(url) : null;
  if (role) {
    const u = parseUrl(url);
    if (!u) return null;
    const ans = activeAnswerKeys(readPointer(pointer), u.origin, scope);
    return role === 'manifest' ? ans.manifest : ans.keys;
  }
  return cacheKeyFor(kind, url, scope);
}

/**
 * Fallback for a navigation whose network response was stored: promotion is
 * asked for on the 2nd navigation counted since the pending manifest appeared,
 * or on the 5th once a `ready` message was ever seen for this scope.
 */
function onNetworkNavigation(state, readySeen) {
  if (!state || typeof state !== 'object') return { promote: false, next: null };
  const seen = typeof state.navigations === 'number' && state.navigations > 0 ? state.navigations : 0;
  const threshold = readySeen ? 4 : 1;
  return { promote: seen >= threshold, next: Object.assign({}, state, { navigations: seen + 1 }) };
}

function navigationStep(P) {
  if (!P.pending) return { promote: false, pointer: P };
  const step = onNetworkNavigation(P.state || { since: 0, navigations: 0, folders: [] }, P.readySeen);
  return { promote: step.promote, pointer: withPointer(P, { state: step.next }) };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SW_OFFLINE_VERSION,
    OFFLINE_SCOPES,
    OFFLINE_MF_NAMES,
    OFFLINE_FONT_HOSTS,
    scopeOf,
    classify,
    manifestRole,
    isMainManifestPath,
    answerable,
    warmInit,
    cacheKeyFor,
    storable,
    entryUrls,
    manifestFingerprint,
    hashText,
    unitOf,
    pointerKeyFor,
    genManifestKey,
    genKeysKey,
    emptyPointer,
    readPointer,
    keysFetchOutcome,
    completeUnit,
    commitUnit,
    onKeysRequest,
    manifestAnswerSource,
    setReadySeen,
    addFolders,
    versionedFolders,
    relevantEntries,
    canPromote,
    pruneKeys,
    promotionPlan,
    pointerOps,
    activeAnswerKeys,
    offlineAnswerKey,
    onNetworkNavigation,
    navigationStep,
  };
}

/* ---------------------------------------------------------------------------
 * Worker runtime — only inside a real service-worker global scope.
 * ------------------------------------------------------------------------- */

if (
  typeof self !== 'undefined' &&
  typeof ServiceWorkerGlobalScope !== 'undefined' &&
  self instanceof ServiceWorkerGlobalScope &&
  typeof caches !== 'undefined'
) {
  const warned = {};
  const warnOnce = (what, err) => {
    if (warned[what]) return;
    warned[what] = true;
    try {
      console.warn('[sw-offline] ' + what + ' failed; continuing with the network', err);
    } catch (e) {
      /* ignore */
    }
  };
  const noop = () => undefined;
  const origin = () => self.location.origin;

  const workerScope = () => {
    try {
      return scopeOf(new URL(self.registration.scope).pathname, OFFLINE_SCOPES);
    } catch (e) {
      return null;
    }
  };

  const openCache = (scope) => caches.open(OFFLINE_CACHE_PREFIX + scope);

  const stored = async (scope, key) => {
    if (!key) return undefined;
    try {
      const cache = await openCache(scope);
      const hit = await cache.match(key);
      return answerable(hit) ? hit : undefined;
    } catch (e) {
      warnOnce('cache read', e);
      return undefined;
    }
  };

  const responseMeta = (res) => ({
    ok: res.ok,
    type: res.type,
    status: res.status,
    redirected: !!res.redirected,
    contentType: (res.headers && res.headers.get('content-type')) || '',
  });

  const withLimit = (promise, ms) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('sw-offline: time limit')), ms);
      promise.then(
        (v) => {
          clearTimeout(timer);
          resolve(v);
        },
        (e) => {
          clearTimeout(timer);
          reject(e);
        },
      );
    });

  /* Pointer reads/writes, unit commits and promotions run one at a time. */
  let stateChain = Promise.resolve();
  const locked = (fn) => {
    const run = stateChain.then(() => fn());
    stateChain = run.catch(noop);
    return run;
  };

  /** Last pointer read or written by this worker (all writes happen here). */
  let lastPointer = null;
  const readPointerNow = async (scope) => {
    const cache = await openCache(scope);
    const res = await cache.match(pointerKeyFor(origin(), scope));
    lastPointer = readPointer(res ? await res.text() : null);
    return lastPointer;
  };

  /* Units being committed, and the generation each client's last manifest
   * was answered from (bounded): both protected from orphan cleanup. */
  const inFlight = new Set();
  const answered = new Map();
  /* One more slot: the generation most recently answered from storage for a
   * client with an empty id (used only for a keys request that has none too).
   * It is shared by all empty-id clients, so it may pair stored keys with
   * another empty-id client's network manifest; accepted because documents
   * have non-empty ids in current browsers. */
  let answeredNoClient = null;
  const rememberAnswer = (clientId, id) => {
    if (!clientId) {
      answeredNoClient = id;
      return;
    }
    answered.delete(clientId);
    answered.set(clientId, id);
    while (answered.size > OFFLINE_ANSWERED_MAX) answered.delete(answered.keys().next().value);
  };
  const forgetAnswer = (clientId) => {
    if (clientId) answered.delete(clientId);
    else answeredNoClient = null;
  };
  const answeredFor = (clientId) => (clientId ? answered.get(clientId) : answeredNoClient) || null;
  const protectedIds = () => [...inFlight, ...answered.values(), ...(answeredNoClient ? [answeredNoClient] : [])];

  let genCounter = 0;
  const newGenId = () =>
    Date.now().toString(36) + '-' + (++genCounter).toString(36) + '-' + Math.random().toString(36).slice(2, 8);

  /** Write a pointer change (pointer first, then unreferenced entries). Caller
   * holds the lock. */
  const applyPointer = async (scope, P) => {
    const cache = await openCache(scope);
    const keys = (await cache.keys()).map((r) => r.url);
    for (const o of pointerOps(P, keys, origin(), scope, protectedIds())) {
      if (o.op === 'put') {
        await cache.put(o.key, new Response(o.value, { headers: { 'content-type': 'application/json' } }));
        lastPointer = P;
      } else {
        await cache.delete(o.key);
      }
    }
  };

  const updatePointer = (scope, change) =>
    locked(async () => {
      const P = await readPointerNow(scope);
      const P2 = change(P);
      if (P2 !== P) await applyPointer(scope, P2);
      return P;
    });

  /**
   * Build and commit a unit from a manifest the network delivered: in signed
   * mode the worker fetches the keyring itself (30 s cap). The unit stays
   * protected from cleanup until its own pointer write has finished; entries
   * are written before the pointer, under the lock.
   */
  const buildUnit = async (scope, manifestCopy, manifestText, path) => {
    const id = newGenId();
    inFlight.add(id);
    try {
      const before = lastPointer || (await readPointerNow(scope));
      let keys = null;
      let keysCopy = null;
      if (before.signed) {
        try {
          const res = await withLimit(fetch(origin() + OFFLINE_KEYS_PATH, { cache: 'no-store' }), OFFLINE_BODY_LIMIT_MS);
          const outcome = keysFetchOutcome(responseMeta(res));
          if (outcome === 'gone') {
            keys = { ok: false };
          } else if (outcome === 'error') {
            warnOnce('keyring fetch', new Error('HTTP ' + res.status));
            keys = { error: true };
          } else {
            keysCopy = res.clone();
            keys = { ok: true, text: await withLimit(res.text(), OFFLINE_BODY_LIMIT_MS) };
          }
        } catch (e) {
          keys = { error: true };
        }
      }
      await locked(async () => {
        const P = await readPointerNow(scope);
        // Became signed while building without keys: drop; the keys request
        // that set `signed` repairs a keyless active unit.
        if (P.signed && !before.signed) return;
        const done = completeUnit(id, manifestText, P.signed, keys);
        if (!done) return;
        const cache = await openCache(scope);
        let activeMissing = false;
        if (P.active) {
          const m = await cache.match(genManifestKey(origin(), scope, P.active.id));
          const k = P.active.k ? await cache.match(genKeysKey(origin(), scope, P.active.id)) : true;
          activeMissing = !m || !k;
        }
        let P2 = commitUnit(P, done.unit, Date.now(), { activeMissing, keysGone: done.keysGone });
        if (path && P2.path !== path) P2 = withPointer(P2, { path });
        // Bundles the page requested while this unit was being built count as
        // requested while pending (the page imports them right after reading
        // the manifest, often before the commit).
        if (P2.pending && P2.pending.id === id) P2 = addFolders(P2, [...recentFolders]);
        const used = [P2.active, P2.pending].some((u) => u && u.id === id);
        if (used) {
          await cache.put(genManifestKey(origin(), scope, id), manifestCopy);
          if (done.unit.k && keysCopy) await cache.put(genKeysKey(origin(), scope, id), keysCopy);
        }
        if (P2 !== P) await applyPointer(scope, P2);
      });
    } catch (e) {
      warnOnce('manifest unit', e);
    } finally {
      inFlight.delete(id);
    }
  };

  const processNetworkManifest = async (scope, copy, path) => {
    let text;
    try {
      text = await withLimit(copy.clone().text(), OFFLINE_BODY_LIMIT_MS);
    } catch (e) {
      return;
    }
    await buildUnit(scope, copy, text, path);
  };

  /** The worker fetches the manifest itself (first visit, or repair). */
  let selfFetching = null;
  const selfFetchManifest = (scope, path) => {
    if (selfFetching) return selfFetching;
    selfFetching = (async () => {
      const p = path || (lastPointer && lastPointer.path) || OFFLINE_MAIN_MANIFEST_PATH;
      try {
        const res = await withLimit(fetch(origin() + p, { cache: 'no-store' }), OFFLINE_BODY_LIMIT_MS);
        if (!storable('manifest', responseMeta(res), origin() + p)) return;
        await processNetworkManifest(scope, res.clone(), p);
      } catch (e) {
        /* offline: nothing to build */
      }
    })().finally(() => {
      selfFetching = null;
    });
    return selfFetching;
  };

  /** A page (or warm-up list) asked for the keyring. */
  const onKeysSeen = async (scope) => {
    let repair = false;
    await updatePointer(scope, (P) => {
      const r = onKeysRequest(P);
      repair = r.repair;
      return r.pointer;
    }).catch((e) => warnOnce('signed flag', e));
    if (repair) await selfFetchManifest(scope, null);
  };

  /** Pending → active in one pointer write, then prune. Caller holds the lock. */
  const promoteNow = async (scope) => {
    const P = await readPointerNow(scope);
    if (!P.pending) return false;
    const cache = await openCache(scope);
    const res = await cache.match(genManifestKey(origin(), scope, P.pending.id));
    if (!res) return false;
    const storedKeys = (await cache.keys()).map((r) => r.url);
    const plan = promotionPlan({ pointer: P, pendingManifest: await res.text(), storedKeys, origin: origin() });
    if (!plan) return false;
    await applyPointer(scope, plan.pointer);
    for (const key of plan.prune) await cache.delete(key);
    return true;
  };

  const tryPromote = (scope) =>
    locked(() => promoteNow(scope)).catch((e) => {
      warnOnce('promote', e);
      return false;
    });

  /** Fallback: a navigation whose network response was stored. */
  const onNavigationStored = (scope) =>
    locked(async () => {
      const P = await readPointerNow(scope);
      if (!P.pending) return;
      const step = navigationStep(P);
      if (step.promote && (await promoteNow(scope))) return;
      await applyPointer(scope, step.pointer);
    }).catch((e) => warnOnce('pending state', e));

  /** Folders requested while something is pending (versioned requests and
   * warm-up lists). Written only when a folder is new. */
  const recentFolders = new Set(); // since the last page manifest request
  const recordFolders = (scope, folders) => {
    if (!folders.length) return Promise.resolve();
    for (const f of folders) recentFolders.add(f);
    const P0 = lastPointer;
    if (P0 && (!P0.pending || (P0.state && folders.every((f) => P0.state.folders.indexOf(f) !== -1)))) {
      return Promise.resolve();
    }
    return updatePointer(scope, (P) => addFolders(P, folders)).catch((e) => warnOnce('folders', e));
  };

  /**
   * Manifest and keyring requests from a page.
   * - Manifest: network first (4 s); a storable network answer, even late,
   *   builds a unit. When the network fails, is late, or answers something
   *   that is not a manifest (non-ok, or HTML: a captive portal, a 5xx — and
   *   then only for the stored manifest path), the
   *   ACTIVE unit's manifest is answered and the client is remembered as
   *   answered from that generation; with nothing stored, the network's
   *   answer (or failure) reaches the page unchanged.
   * - Keys: marks the scope signed. If this client's last manifest came from a
   *   stored generation, its keys are answered from that same generation;
   *   otherwise network only (a failure reaches the page).
   */
  const respondManifest = (event, scope, keep) => {
    const request = event.request;
    const role = manifestRole(request.url);
    const clientId = event.clientId || '';
    if (role === 'keys') {
      keep(onKeysSeen(scope));
      const g = answeredFor(clientId);
      if (!g) return fetch(request);
      return stored(scope, genKeysKey(origin(), scope, g)).then((hit) => hit || fetch(request));
    }
    if (clientId) answered.delete(clientId);
    recentFolders.clear();
    const path = new URL(request.url).pathname;
    const net = fetch(request).then((res) => {
      const usable = storable('manifest', responseMeta(res), request.url);
      if (usable) keep(processNetworkManifest(scope, res.clone(), path));
      return { res, usable };
    });
    keep(net.catch(noop));
    // The stored active manifest, or undefined. The generation is remembered
    // before the cache read (so a cleanup running meanwhile spares its keys)
    // and forgotten again when the read misses.
    // `samePathOnly`: the network did answer (non-usable) — only a request for
    // the stored manifest path is answered from storage (manifestAnswerSource).
    const fromStore = async (samePathOnly) => {
      const P = await readPointerNow(scope).catch(() => emptyPointer());
      if (!P.active) return undefined;
      if (samePathOnly && manifestAnswerSource(false, path, P) !== 'store') return undefined;
      rememberAnswer(clientId, P.active.id);
      const hit = await stored(scope, offlineAnswerKey('manifest', request.url, scope, P));
      if (!hit && answeredFor(clientId) === P.active.id) forgetAnswer(clientId);
      return hit;
    };
    return withLimit(net, OFFLINE_NETWORK_LIMIT_MS).then(
      async (r) => {
        if (r.usable) {
          if (!clientId) forgetAnswer(clientId);
          return r.res;
        }
        return (await fromStore(true)) || r.res;
      },
      async () => (await fromStore(false)) || net.then((r) => r.res),
    );
  };

  /**
   * Fetch from the network; a storable response is cloned before anyone reads
   * it and stored in the background (`keep` extends the event's lifetime, so
   * a result arriving after the 4 s limit is still stored). `afterStore` runs
   * once the copy was stored.
   */
  const fetchAndStore = (scope, kind, request, key, keep, init, afterStore) => {
    let storing = null;
    const net = fetch(request, init).then((res) => {
      if (key && storable(kind, responseMeta(res), request.url)) {
        const copy = res.clone(); // before the page can read the body
        storing = (async () => {
          try {
            const cache = await openCache(scope);
            await cache.put(key, copy);
            return true;
          } catch (e) {
            warnOnce('store ' + kind, e);
            return false;
          }
        })().then((ok) => (ok && afterStore ? afterStore() : undefined));
      }
      return res;
    });
    keep(net.then(() => storing, noop).catch(noop));
    return net;
  };

  const networkFirst = (scope, kind, request, key, keep, afterStore) => {
    const net = fetchAndStore(scope, kind, request, key, keep, undefined, afterStore);
    return withLimit(net, OFFLINE_NETWORK_LIMIT_MS).catch(async () => {
      const hit = await stored(scope, key);
      return hit || net;
    });
  };

  const cacheFirst = async (scope, kind, request, key, keep) => {
    const hit = await stored(scope, key);
    if (hit) return hit;
    return fetchAndStore(scope, kind, request, key, keep);
  };

  const staleWhileRevalidate = async (scope, kind, request, key, keep) => {
    const hit = await stored(scope, key);
    if (hit) {
      fetchAndStore(scope, kind, request, key, keep).catch(noop);
      return hit;
    }
    return fetchAndStore(scope, kind, request, key, keep);
  };

  const respond = (event, scope, kind, keep) => {
    const request = event.request;
    const key = cacheKeyFor(kind, request.url, scope);
    switch (kind) {
      case 'navigate':
        return networkFirst(scope, kind, request, key, keep, () => onNavigationStored(scope));
      case 'manifest':
        return respondManifest(event, scope, keep);
      case 'static':
        return networkFirst(scope, kind, request, key, keep, null);
      case 'versioned':
        keep(recordFolders(scope, versionedFolders([request.url], origin())));
        return cacheFirst(scope, kind, request, key, keep);
      case 'fonts':
        return staleWhileRevalidate(scope, kind, request, key, keep);
      default:
        return fetch(request);
    }
  };

  self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
  });

  self.addEventListener('activate', (event) => {
    // Take over open pages at once; no message is posted to them.
    event.waitUntil(self.clients.claim());
  });

  self.addEventListener('fetch', (event) => {
    const scope = workerScope();
    if (!scope) return;
    const request = event.request;
    let kind;
    try {
      kind = classify(request, scope, origin(), OFFLINE_FONT_HOSTS);
    } catch (e) {
      return;
    }
    if (kind === 'ignore') return;
    if (kind === 'probe') {
      event.respondWith(fetch(request));
      return;
    }
    const keep = (p) => {
      try {
        event.waitUntil(p);
      } catch (e) {
        /* event already finished; the promise still runs */
      }
    };
    event.respondWith(respond(event, scope, kind, keep));
  });

  /* Warm-up: a page controlled for the first time loaded its files without
   * this worker; it sends their URLs and the worker stores what it lacks.
   * Manifest and keyring URLs are not warmed (units are built by the worker). */
  const warm = async (scope, urls, keep) => {
    const jobs = [];
    const seen = {};
    for (const raw of urls) {
      if (typeof raw !== 'string') continue;
      const u = parseUrl(raw, origin());
      if (!u) continue;
      u.hash = '';
      let kind = classify({ method: 'GET', mode: 'same-origin', url: u.href }, scope, origin(), OFFLINE_FONT_HOSTS);
      // The page's own URL: a document inside the scope.
      if (kind === 'ignore' && u.origin === origin() && scopeOf(u.pathname, [scope])) kind = 'navigate';
      if (kind === 'ignore' || kind === 'probe' || kind === 'manifest') continue;
      // Font-host files other than stylesheets are stored when the page asks.
      if (kind === 'fonts' && !/\.css$/i.test(u.pathname)) continue;
      const key = cacheKeyFor(kind, u.href, scope);
      if (!key || seen[key]) continue;
      seen[key] = true;
      jobs.push({ kind, url: u.href, key });
    }
    let next = 0;
    const worker = async () => {
      while (next < jobs.length) {
        const job = jobs[next++];
        try {
          if (await stored(scope, job.key)) continue;
          await fetchAndStore(scope, job.kind, new Request(job.url, warmInit(job.kind)), job.key, keep);
        } catch (e) {
          /* offline or failed: nothing to store */
        }
      }
    };
    const runners = [];
    for (let i = 0; i < Math.min(OFFLINE_WARM_PARALLEL, jobs.length); i++) runners.push(worker());
    await Promise.all(runners);
  };

  /* `{ type: 'LINM_OFFLINE_WARM', urls, ready? }`.
   * - a keys URL in the list marks the scope signed;
   * - a manifest URL in the list with no active unit (first visit: the head
   *   script fetched it before this worker controlled the page) makes the
   *   worker fetch the manifest itself and build the unit;
   * - its versioned folders count as requested;
   * - `ready: true` is remembered (readySeen) and, once the warm-up fetches
   *   have settled, the pending manifest is promoted if allowed. */
  self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || data.type !== 'LINM_OFFLINE_WARM' || !Array.isArray(data.urls)) return;
    const scope = workerScope();
    if (!scope) return;
    const urls = data.urls.filter((x) => typeof x === 'string');
    const manifestUrl = urls.find((x) => manifestRole(x) === 'manifest' && parseUrl(x, origin()).origin === origin());
    const hasKeys = urls.some((x) => manifestRole(x) === 'keys');
    const pending = [];
    const keep = (p) => pending.push(p);
    const job = (async () => {
      if (hasKeys) await onKeysSeen(scope);
      const P = await readPointerNow(scope);
      if (manifestUrl && !P.active) await selfFetchManifest(scope, parseUrl(manifestUrl, origin()).pathname);
      if (data.ready === true) await updatePointer(scope, setReadySeen);
      await recordFolders(scope, versionedFolders(urls, origin()));
      await warm(scope, urls, keep);
      await Promise.all(pending);
      if (data.ready === true) await tryPromote(scope);
    })().catch(noop);
    if (typeof event.waitUntil === 'function') event.waitUntil(job);
  });
}
