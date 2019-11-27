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
    "revision": "34310c2253e745df39248133662ebfac"
  },
  {
    "url": "assets/css/0.styles.34ca1537.css",
    "revision": "0545017035c60b27c7f94600e93eee42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.298c4c35.js",
    "revision": "24909a0f25ff8109fad629d9f32b7b18"
  },
  {
    "url": "assets/js/11.ebffd9c6.js",
    "revision": "643794ba23c25da4a407cca92c30fd43"
  },
  {
    "url": "assets/js/12.983b4bd0.js",
    "revision": "981ac5bbc88a02213ad4af6687555dec"
  },
  {
    "url": "assets/js/13.369b200c.js",
    "revision": "567fa3eaa14b44872c133574db6c37d4"
  },
  {
    "url": "assets/js/14.754ad0cb.js",
    "revision": "ca3cfa687bfbf2ae028a65797874e790"
  },
  {
    "url": "assets/js/15.e450cd63.js",
    "revision": "da3f084640bfb56e354be2d68e4ab4cf"
  },
  {
    "url": "assets/js/2.cf3d61c6.js",
    "revision": "607f7371abacc4c2618bd682237d9775"
  },
  {
    "url": "assets/js/3.facc44f5.js",
    "revision": "3774a3ee4e0ea1bb5ab1c3f80f90dfae"
  },
  {
    "url": "assets/js/4.6f2707da.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8d7c9dcb.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.9b783f0c.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.7368ee58.js",
    "revision": "6807067ebd0b2115966918868f9e1e42"
  },
  {
    "url": "assets/js/8.cdbd5c78.js",
    "revision": "9037067dcb4f230cd6e1d0c5cb389557"
  },
  {
    "url": "assets/js/9.99a9a83a.js",
    "revision": "5733a60db77fdbfe498061b7c3f69f81"
  },
  {
    "url": "assets/js/app.2de1dd9f.js",
    "revision": "80d5c0b8aff6ecebaad390839de3b983"
  },
  {
    "url": "ecosystem.html",
    "revision": "c91a629eab28d633466dd990ac8248d4"
  },
  {
    "url": "guide.html",
    "revision": "4749a9efd63fc7b25e4ce8043be4db57"
  },
  {
    "url": "index.html",
    "revision": "963f590722b6084803292f4ec9b7f6ed"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "dd6ed9459678cb13f166acb3d0353ecb"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "d38a28a404b411224374ad553899cb8e"
  },
  {
    "url": "zh/guide.html",
    "revision": "5f93bd0e1531891cbb4d110786749cb5"
  },
  {
    "url": "zh/index.html",
    "revision": "daf1092ea48dcd348cf1b27c1d3047e0"
  },
  {
    "url": "zh/support.html",
    "revision": "996f0347757d663c1bdd1e7e4ca60b66"
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
