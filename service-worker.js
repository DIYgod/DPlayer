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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4da3fed6f5e6385f0ef00decdeba64ce"
  },
  {
    "url": "assets/css/0.styles.7532768e.css",
    "revision": "f65e13fcb8aef4adea3506e4a633ccff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.82fa4a58.js",
    "revision": "e36cef7e6eb137dcb7495b371f879df0"
  },
  {
    "url": "assets/js/11.b9839980.js",
    "revision": "81787c65d815c2890e874fa4e9f5e2ba"
  },
  {
    "url": "assets/js/12.d5444c63.js",
    "revision": "4df9c7a7f44515434c1f72c647f71c14"
  },
  {
    "url": "assets/js/13.10c340fa.js",
    "revision": "1849ae518cf3ac5937aa1404f3ba9783"
  },
  {
    "url": "assets/js/14.464fc8da.js",
    "revision": "a265701202c88267bb71453617c55020"
  },
  {
    "url": "assets/js/15.63769c83.js",
    "revision": "891555a224e31116a22a5688e2d4ff6c"
  },
  {
    "url": "assets/js/2.48e42532.js",
    "revision": "684d91cdc533ee735e1c1a174798d07b"
  },
  {
    "url": "assets/js/3.7c57b449.js",
    "revision": "90c0e64f8bf6ac2589b5fa17a5c805c1"
  },
  {
    "url": "assets/js/4.8d8c8217.js",
    "revision": "050ebccaed96960b281738f620b54749"
  },
  {
    "url": "assets/js/5.a22f65f1.js",
    "revision": "aeabc11261fa17939e15dcd1e4836b38"
  },
  {
    "url": "assets/js/6.e871114b.js",
    "revision": "ae5f57cfc237392966df5ed0d18f924d"
  },
  {
    "url": "assets/js/7.9813b36d.js",
    "revision": "807d43d5df18f8bb0a40d114f9ad8f55"
  },
  {
    "url": "assets/js/8.b58f1b57.js",
    "revision": "8596155e6fcdc8eee7c66c633573b294"
  },
  {
    "url": "assets/js/9.4ab266b7.js",
    "revision": "7ee67eee7d7167aca2bb68a4aabc56ca"
  },
  {
    "url": "assets/js/app.6b639388.js",
    "revision": "95f148aeceea07cf3210996597708dc7"
  },
  {
    "url": "ecosystem.html",
    "revision": "3b128c743d542f03ba9944933ad96586"
  },
  {
    "url": "guide.html",
    "revision": "6c2ad6f54a20a8296edb61f2d58153d6"
  },
  {
    "url": "index.html",
    "revision": "2238ce20b0d0d533cfee942498f1cada"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "2251d09b2aad6accce4036deec3fc5a5"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "69c05f6303f7e82c4d7993868ce4e987"
  },
  {
    "url": "zh/guide.html",
    "revision": "9a06a49ec5e1a330cabee39d3ea55f5e"
  },
  {
    "url": "zh/index.html",
    "revision": "ea9729b838dd440d1819e7f1e6fa3649"
  },
  {
    "url": "zh/support.html",
    "revision": "da1a1e9015596da9bb46452cb3d376ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
