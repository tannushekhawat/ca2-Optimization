const CACHE_NAME = "e-library-cache-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/styles.css",
    "/dashboard.html",
    "/books/1984.html",
    "/books/great-gatsby.html",
    "/books/sapiens.html",
    "/books/anne-frank.html",
    "/images/logo.webp",
    "/images/fiction1.webp",
    "/images/fiction2.jpeg",
    "/main.js"
];

// Install Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching assets...");
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch Assets from Cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
