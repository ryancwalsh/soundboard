const version = 'v2'; // If you ever update sounds or code and want to force-refresh the cache, increment the cache name to 'v2', etc.

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(version).then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './sounds/eat.mp3',
        './sounds/play.mp3',
        './sounds/catio.mp3',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});