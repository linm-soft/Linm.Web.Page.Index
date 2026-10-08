/* Minimal PWA service worker — install prompt only; no fetch interception.
 * Intercepting same-origin fetches caused uncaught "Failed to fetch" during
 * version deploy when hashed bundles briefly 404 or CDN propagates.
 *
 * v3: Notifies all clients on activate so the shell can reload stale windows. */
const SW_VERSION = '1.15.0';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Take control of all clients
      await self.clients.claim();

      // Notify all pages that a new SW version is active.
      // The page can then schedule a deploy reload if any MFEs are broken.
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({
          type: 'SW_ACTIVATED',
          version: SW_VERSION,
          timestamp: Date.now(),
        });
      }
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
