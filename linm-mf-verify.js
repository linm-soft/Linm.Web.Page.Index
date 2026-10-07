/**
 * Pages Index — verify per-MFE Ed25519 sig before System.addImportMap.
 * Canonical payload MUST match GHA `mfe-manifest-sign.cjs`.
 */
(function (global) {
  function canonicalValue(value) {
    if (value === null || value === undefined) return 'null';
    var t = typeof value;
    if (t === 'number' || t === 'boolean') return JSON.stringify(value);
    if (t === 'string') return JSON.stringify(value);
    if (Array.isArray(value)) {
      return '[' + value.map(canonicalValue).join(',') + ']';
    }
    if (t === 'object') {
      var keys = Object.keys(value).sort();
      return '{' + keys.map(function (k) {
        return JSON.stringify(k) + ':' + canonicalValue(value[k]);
      }).join(',') + '}';
    }
    return JSON.stringify(String(value));
  }

  function buildSignPayload(mfKey, entry) {
    var envIn = entry.env && typeof entry.env === 'object' && !Array.isArray(entry.env) ? entry.env : {};
    var env = {};
    Object.keys(envIn).sort().forEach(function (k) {
      env[k] = envIn[k] == null ? '' : String(envIn[k]);
    });
    var routes = Array.isArray(entry.routes) ? entry.routes.map(String).sort() : [];
    return {
      default: Boolean(entry.default),
      env: env,
      filename: String(entry.filename || ''),
      integrity: String(entry.integrity || ''),
      name: String(mfKey),
      routes: routes,
      url: String(entry.url || ''),
      version: String(entry.version || ''),
    };
  }

  function pemToSpki(pem) {
    var b64 = String(pem || '')
      .replace(/-----BEGIN PUBLIC KEY-----/g, '')
      .replace(/-----END PUBLIC KEY-----/g, '')
      .replace(/\s+/g, '');
    var bin = atob(b64);
    var buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf.buffer;
  }

  function b64urlToBytes(s) {
    var b64 = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    var bin = atob(b64);
    var buf = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return buf;
  }

  function importEd25519(pem) {
    return crypto.subtle.importKey('spki', pemToSpki(pem), { name: 'Ed25519' }, false, ['verify']);
  }

  function verifySig(pem, canonical, sig) {
    return importEd25519(pem).then(function (key) {
      return crypto.subtle.verify({ name: 'Ed25519' }, key, b64urlToBytes(sig), new TextEncoder().encode(canonical));
    });
  }

  function verifyKeyring(keyring, trustPem) {
    if (!keyring || !trustPem) return Promise.resolve(false);
    var payload = {
      alg: 'Ed25519',
      keys: keyring.keys || {},
      rootKid: keyring.rootKid || 'linm-trust',
    };
    return verifySig(trustPem, canonicalValue(payload), keyring.rootSig);
  }

  function verifyEntry(mfKey, entry, publicPem) {
    if (!entry || !entry.sig || !publicPem) return Promise.resolve(false);
    var canonical = canonicalValue(buildSignPayload(mfKey, entry));
    return verifySig(publicPem, canonical, entry.sig);
  }

  global.LinmMfVerify = {
    canonicalValue: canonicalValue,
    buildSignPayload: buildSignPayload,
    verifyKeyring: verifyKeyring,
    verifyEntry: verifyEntry,
    verifyKeyring: verifyKeyring,
    verifyEntry: verifyEntry,
  };
})(typeof window !== 'undefined' ? window : globalThis);
