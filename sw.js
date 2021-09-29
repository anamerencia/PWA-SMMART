var filesToCache = [
    './',
    './index.html',
    './src/master.css',
    './images/books.png',
    './images/Home.svg',
    './images/ic_refresh_white_24px.svg',
    './images/profile.png',
    './images/push-off.png',
    './images/push-on.png',
    './images/icons/icon-192-192.png',
    './images/icons/icon-512-512.png',
];

self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
          return cache.addAll(filesToCache);
      })
    );
});

self.addEventListener("fetch", e => {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
});
