const CACHE_NAME = 'Video Generator';
const urlsToCache = [
  '/Video-Generator/',
  '/Video-Generator/index.html',
  // Tambahkan file lain yang diperlukan (CSS, JS, gambar)
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Ambil dari cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
