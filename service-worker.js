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
