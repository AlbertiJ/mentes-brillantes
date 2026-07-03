// Service Worker — Claude para Mentes Brillantes
// Guarda todo para que funcione SIN internet
const CACHE = 'mentes-brillantes-v1';
const ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './js/app.js',
  './js/lecciones.js',
  './manifest.json'
];

// Al instalar: guardar todo
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Al activar: limpiar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

// Al pedir algo: primero el cache (offline-first), después la red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).catch(() => caches.match('./index.html'))
    )
  );
});
