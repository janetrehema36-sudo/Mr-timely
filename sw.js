const CACHE_NAME = 'mr-timely-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './thrag.png',
  './thrag_square.png'
];

// Install event - caching core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
