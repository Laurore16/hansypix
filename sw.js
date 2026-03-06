const CACHE_NAME = 'hansypix-v6';
const urlsToCache = [
  '/src/pages/index.html',
  '/src/css/global.css',
  '/src/css/navigation.css',
  '/src/css/home.css',
  '/src/css/animations.css',
  '/src/css/chat.css',
  '/src/css/mobile.css',
  '/src/css/pwa.css',
  '/src/js/navigation.js',
  '/src/js/mobile-nav.js',
  '/src/js/home.js',
  '/src/js/animations.js',
  '/src/js/chat.js',
  '/src/js/pwa-install.js',
  '/src/logo.png',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache v5');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Cache addAll error:', err))
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

// Fetch handler (Required for PWA installability)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
