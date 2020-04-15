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
    "revision": "991ab1d48d47585e0ba459ced9e698b2"
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
    "url": "assets/js/10.3debca85.js",
    "revision": "032fdfcd76d27b6cee3d1dfa26a2a775"
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
    "url": "assets/js/8.c5208fd3.js",
    "revision": "c4fe133366e1d0398ce35bbc1c8bb226"
  },
  {
    "url": "assets/js/9.c71a9881.js",
    "revision": "cb0d75d718e089582cbd2d2c5b27836c"
  },
  {
    "url": "assets/js/app.e4abc048.js",
    "revision": "7978492097d8f221b447c3df6aa7d8f4"
  },
  {
    "url": "ecosystem.html",
    "revision": "21c4ce6a743ac2a92f3bddc664cdc414"
  },
  {
    "url": "guide.html",
    "revision": "703ae661d5eeb1b48643024c246a8f95"
  },
  {
    "url": "index.html",
    "revision": "1502063fd5bd4913631b02f0e09b7840"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "628f79f47dddb4954efaed378db7b654"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "218e3cec96f366c8b4d6c064e97db6a5"
  },
  {
    "url": "zh/guide.html",
    "revision": "3ec46c4ebe2d3481b9585284f148afee"
  },
  {
    "url": "zh/index.html",
    "revision": "2afee9a71fdeef0c4b13960c2f5f2dff"
  },
  {
    "url": "zh/support.html",
    "revision": "5b1b6d981adaea5663464ffce6855e95"
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
