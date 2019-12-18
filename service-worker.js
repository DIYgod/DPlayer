/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "da4422afd9e75f216f659474a66a5642"
  },
  {
    "url": "assets/css/0.styles.f4278836.css",
    "revision": "0545017035c60b27c7f94600e93eee42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.670dcc51.js",
    "revision": "c3087138dc3d2cfc17740533dc5359f5"
  },
  {
    "url": "assets/js/11.e180a58d.js",
    "revision": "6040348693c8f1ebc9789d696359cd4d"
  },
  {
    "url": "assets/js/12.5728bfe7.js",
    "revision": "981ac5bbc88a02213ad4af6687555dec"
  },
  {
    "url": "assets/js/13.37e23281.js",
    "revision": "151d5e79f6174d4bee869ba8ba20e508"
  },
  {
    "url": "assets/js/14.aaf9f425.js",
    "revision": "18eb6edf4e00f18a5bf2648ab6053288"
  },
  {
    "url": "assets/js/15.503f7471.js",
    "revision": "e805e8869d8533d56b457781d0e67e79"
  },
  {
    "url": "assets/js/2.e05f9068.js",
    "revision": "607f7371abacc4c2618bd682237d9775"
  },
  {
    "url": "assets/js/3.ca2028c6.js",
    "revision": "3774a3ee4e0ea1bb5ab1c3f80f90dfae"
  },
  {
    "url": "assets/js/4.7dd499f3.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8a25d8b8.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.db70b736.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.838176f6.js",
    "revision": "6807067ebd0b2115966918868f9e1e42"
  },
  {
    "url": "assets/js/8.9eebb2bc.js",
    "revision": "f90e1b5f6bf53528322155d1172db301"
  },
  {
    "url": "assets/js/9.0cd988b8.js",
    "revision": "42cfd93d712b82180fb3d93cbfb50ef5"
  },
  {
    "url": "assets/js/app.2962225c.js",
    "revision": "155294f4765a02462ea7957c5463d1b0"
  },
  {
    "url": "ecosystem.html",
    "revision": "c556fc6c3ce87b6a15367da3b4ea4033"
  },
  {
    "url": "guide.html",
    "revision": "c21cfb011e457fd9c766f9453349b7ae"
  },
  {
    "url": "index.html",
    "revision": "848f702a68014c5f0f60bfb04d0726de"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "bab2e0cee786c86425ba25ab820714d0"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "1ebc9dda953923c53b88cb097fa6325c"
  },
  {
    "url": "zh/guide.html",
    "revision": "d320891594fc5c71295f9f71fcce6d88"
  },
  {
    "url": "zh/index.html",
    "revision": "c8bdc21a1c4ab4a85ad1342d24e546e7"
  },
  {
    "url": "zh/support.html",
    "revision": "18bd96f6a7c277e9475f1d90dc8b2d0a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
