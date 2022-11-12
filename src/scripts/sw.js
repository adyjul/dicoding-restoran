import CacheHelper from './utils/cache-helper';

const assetsToCache = [
    './',
    './icons/icons8-bento-30.png',
    './icons/icons8-bento-40.png',
    './icons/icons8-bento-80.png',
    './icons/icons8-bento-100.png',    
    './index.html',
    './favicon.png',
    './app.bundle.js',
    './app.webmanifest',
    './sw.bundle.js',
  ];


self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');
   
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});
   
self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');

    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));
    event.respondWith(CacheHelper.revalidateCache(event.request));
});