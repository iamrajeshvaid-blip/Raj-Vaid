// ============================================
// WOLF PACK FITNESS - SERVICE WORKER
// ============================================

const CACHE_NAME = 'wolf-pack-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/particles.js',
    '/manifest.json',
    '/wolf-logo.png',
];

// ============================================
// INSTALL EVENT
// ============================================

self.addEventListener('install', event => {
    console.log('🐺 Service Worker: INSTALL event');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✓ Cache opened');
                return cache.addAll(urlsToCache).catch(err => {
                    // Some assets might not exist yet (like wolf-logo.png)
                    // Skip errors and continue
                    console.warn('Some assets not cached:', err);
                    return cache.addAll(urlsToCache.filter(url =>
                        !url.includes('wolf-logo') &&
                        !url.includes('png')
                    ));
                });
            })
    );

    self.skipWaiting(); // Activate immediately
});

// ============================================
// FETCH EVENT - NETWORK-FIRST STRATEGY
// ============================================

self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    const { request } = event;

    event.respondWith(
        // Try network first
        fetch(request)
            .then(response => {
                // Clone the response
                const responseClone = response.clone();

                // Cache successful responses
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, responseClone);
                });

                return response;
            })
            .catch(() => {
                // Fall back to cache on network failure
                return caches.match(request)
                    .then(response => {
                        return response || caches.match('/index.html');
                    });
            })
    );
});

// ============================================
// ACTIVATE EVENT - CLEANUP OLD CACHES
// ============================================

self.addEventListener('activate', event => {
    console.log('🐺 Service Worker: ACTIVATE event');

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => {
                        console.log('✓ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    })
            );
        })
    );

    self.clients.claim(); // Claim all clients immediately
});

// ============================================
// MESSAGE EVENT - FOR COMMUNICATION
// ============================================

self.addEventListener('message', event => {
    console.log('📨 Service Worker received message:', event.data);

    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// ============================================
// PUSH EVENT - FOR NOTIFICATIONS (Future)
// ============================================

self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New update from Wolf Pack Fitness',
        icon: '/wolf-logo.png',
        badge: '/wolf-logo.png',
        tag: 'wolf-pack-notification',
    };

    event.waitUntil(
        self.registration.showNotification('🐺 Wolf Pack', options)
    );
});

console.log('🐺 Service Worker ready to hunt!');
