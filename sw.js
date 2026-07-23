const CACHE_NAME = 'stockfish-gui-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './stockfish-18-lite-single.js',
  './stockfish-18-lite-single.wasm',
  'https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
