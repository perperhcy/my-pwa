const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/icon.png",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker 安装完成");
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll(["index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
