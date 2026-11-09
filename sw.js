// Service worker: deja la app disponible sin conexión.
// Con internet siempre intenta traer la versión más nueva; sin internet usa la guardada.
var CACHE = 'organizador-v7';
var FILES = ['./', 'index.html', 'manifest.json', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // cache:'reload' evita copiar versiones viejas desde la caché HTTP del navegador
      return Promise.all(FILES.map(function (f) {
        return fetch(new Request(f, { cache: 'reload' })).then(function (r) { return c.put(f, r); });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Red primero (versión nueva); si no hay internet, la guardada
  e.respondWith(
    fetch(new Request(e.request, { cache: 'no-cache' })).then(function (r) {
      if (r && r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
      return r;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
    })
  );
});
