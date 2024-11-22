  // Register the service worker
  self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('image-compressor-cache').then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                'js/app.js',
                'android-chrome-192x192.png',
                'android-chrome-512x512.png'
            ]);
        })
    );
});

// Handle requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});