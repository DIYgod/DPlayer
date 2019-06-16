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
    "revision": "49dbcbd99402b86a1fc29f1a135f083e"
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
    "url": "assets/js/app.90339c93.js",
    "revision": "687bafb76a77a9a2cebe40e5fa145382"
  },
  {
    "url": "ecosystem.html",
    "revision": "b068fa780811cd92e771897c7db0a553"
  },
  {
    "url": "guide.html",
    "revision": "e86556633b90c76993182633995673a1"
  },
  {
    "url": "index.html",
    "revision": "bcb3bc468e4f0149d00c2489f24367cd"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "a5be4736cbd2b14388ae35e9d803776d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "9f4c0bd500709f0de335ceab02db8246"
  },
  {
    "url": "zh/guide.html",
    "revision": "9c99c7a8e0c87bbd318370048e0bcfbf"
  },
  {
    "url": "zh/index.html",
    "revision": "8dea80c4d31324dd5d67716f770d20d9"
  },
  {
    "url": "zh/support.html",
    "revision": "e191f455107b770b5d18351e92409fe5"
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
