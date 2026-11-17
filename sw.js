const CACHE = "japan26-offline-6";
const BASE = new URL("./", self.registration.scope);
const FILES = [
  "index.html",
  "styles.css?v=board1",
  "app.js?v=board1",
  "manifest.webmanifest",
  "photos/intro-border.png?v=scale",
  "photos/intro-border.png",
  "photos/reveal-cutout.png",
  "photos/p15.jpg",
  "photos/p14b.png",
  "photos/p14a.png",
  "photos/p13b.png",
  "photos/p13a.png",
  "photos/p12b.png",
  "photos/p12a.png",
  "photos/p11b.png",
  "photos/p11a.png",
  "photos/p10.png",
  "photos/p8b.png",
  "photos/p8a.png",
  "photos/p7b.png",
  "photos/p7a.png",
  "photos/p6b.png",
  "photos/p6a.png",
  "photos/p5b.png",
  "photos/p5a.png",
  "photos/p4.png",
  "photos/p1-portrait.png",
  "photos/p1-shibuya.jpg",
].map((path) => new URL(path, BASE).href);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function save(request, response) {
  if (!response.ok) return response;
  const copy = response.clone();
  caches.open(CACHE).then((cache) => cache.put(request, copy));
  return response;
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || url.pathname.includes("/api/")) return;
  const refresh =
    event.request.mode === "navigate" ||
    url.pathname.includes("/data/") ||
    /\.(html|css|js|json|webmanifest)$/.test(url.pathname);
  if (refresh) {
    event.respondWith(
      fetch(event.request)
        .then((response) => save(event.request, response))
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match(new URL("index.html", BASE).href)))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => save(event.request, response))
        .catch(() => Promise.reject());
    })
  );
});
