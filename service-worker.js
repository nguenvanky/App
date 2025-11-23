// Service Worker for Xiaozhi Device Control PWA
const CACHE_NAME = 'xiaozhi-control-v2';
const urlsToCache = [
  '/',
  '/otto',
  '/servo-calibration',
  '/api/otto/status',
  '/manifest.json',
  '/favicon.ico'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(function() {
          // If network fails and no cache, return offline page
          if (event.request.destination === 'document') {
            // Try to return cached page based on URL
            const url = new URL(event.request.url);
            if (url.pathname.startsWith('/otto')) {
              return caches.match('/otto');
            } else if (url.pathname.startsWith('/servo-calibration')) {
              return caches.match('/servo-calibration');
            } else {
              return caches.match('/');
            }
          }
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

