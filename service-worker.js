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
    "revision": "c96a7d1a54f0cadcea9471eeb7e3dd2e"
  },
  {
    "url": "assets/css/0.styles.24714fa9.css",
    "revision": "b6e55b1793038b022bb8c9f393e77b93"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f5789ea4.js",
    "revision": "c3686312832087928e11dfee34ef2b62"
  },
  {
    "url": "assets/js/11.d291dd6e.js",
    "revision": "6aaa6387ca76b7138dcd5e7ef6286866"
  },
  {
    "url": "assets/js/12.c31af61b.js",
    "revision": "d0b253327d3293869197b789218b47fe"
  },
  {
    "url": "assets/js/13.be4d7590.js",
    "revision": "4ad9723a5a1e80bb0195f0c686fed0f6"
  },
  {
    "url": "assets/js/14.44758ca5.js",
    "revision": "680028a0ad0ab2ee5472f9bff90eea11"
  },
  {
    "url": "assets/js/15.cc1349df.js",
    "revision": "aea2868262bc81f5408df3ca78c6bd3e"
  },
  {
    "url": "assets/js/16.3000e04d.js",
    "revision": "0996269cba95b09ca5e1a09c449ddb60"
  },
  {
    "url": "assets/js/2.19361d68.js",
    "revision": "a841d9d3b71c2e0bb880628c1734bbad"
  },
  {
    "url": "assets/js/3.7ffa038d.js",
    "revision": "aebfbd2ce8b3c0fedca9dd2326eadf91"
  },
  {
    "url": "assets/js/4.7904e844.js",
    "revision": "166fe07446be91da99ed6a6b435a4e11"
  },
  {
    "url": "assets/js/5.481cda46.js",
    "revision": "7d767f383914b71a286331a093e74121"
  },
  {
    "url": "assets/js/6.cd7dbe8e.js",
    "revision": "afa216a67095f30235688083b3b7789b"
  },
  {
    "url": "assets/js/7.2e1ffb90.js",
    "revision": "091037a2f56b9d276756eead88e9ab81"
  },
  {
    "url": "assets/js/8.a7960960.js",
    "revision": "223fa6f3347ed005a6bcdba0b6193714"
  },
  {
    "url": "assets/js/9.eac61829.js",
    "revision": "7d4a17f2ca6bafa7a1c9c35e99e01cc2"
  },
  {
    "url": "assets/js/app.73de66d0.js",
    "revision": "1f1b0445ff084fe1efb16db340ad889b"
  },
  {
    "url": "ecosystem.html",
    "revision": "00d9583a3a2f69548bc21a4e1a88a2d8"
  },
  {
    "url": "guide.html",
    "revision": "545b54100cf3b848a5aa0b9cb100116e"
  },
  {
    "url": "index.html",
    "revision": "b2b6609a8d8dd9e68631e542bc8556b9"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "c969973db39a1582a78b48eb5ed3218e"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "6f06a37a2ca08c2a7d8718e6a17a2a91"
  },
  {
    "url": "zh/guide.html",
    "revision": "0db8d03de100bb9d27e52be5febaec7d"
  },
  {
    "url": "zh/index.html",
    "revision": "a351c7949d7314b9c0cbd1d1a15e079f"
  },
  {
    "url": "zh/support.html",
    "revision": "d436b87092ae4a55ed50aef110e64f44"
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
