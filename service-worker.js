//sw.js
const cacheName = 'my-cache-v2';
const filesList = [
  '/',
  '/arachni/index.html',
  '/arachni/css/font-face.css',
  '/arachni/vendor/font-awesome-4.7/css/font-awesome.min.css',
  '/arachni/vendor/font-awesome-5/css/fontawesome-all.min.css',
  '/arachni/vendor/mdi-font/css/material-design-iconic-font.min.css',
  '/arachni/vendor/bootstrap-4.1/bootstrap.min.css',
  '/arachni/vendor/animsition/animsition.min.css',
  '/arachni/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css',
  '/arachni/vendor/wow/animate.css',
  '/arachni/vendor/css-hamburgers/hamburgers.min.css',
  '/arachni/vendor/slick/slick.css',
  '/arachni/vendor/select2/select2.min.css',
  '/arachni/vendor/perfect-scrollbar/perfect-scrollbar.css',
  '/arachni/css/theme.css'
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      // Add your file to cache
      .then( (cache) => {
        return cache.addAll(filesList);
      })
      // Tell SW to end 'waiting' state
      .then(() => self.skipWaiting())
  );
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // tell browser to use this service worker and not outdated one
    self.clients.claim()
  );
})