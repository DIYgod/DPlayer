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
    "revision": "3e4f056d9f78fccd2a74437de9f61cac"
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
    "url": "assets/js/13.0739237b.js",
    "revision": "c686b594fc99cc49048b928d8351506a"
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
    "url": "assets/js/5.37606377.js",
    "revision": "09abd4337fd448ee8737cc1aeb1a9cde"
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
    "url": "assets/js/9.a0e12845.js",
    "revision": "1331933232f162c9561da86e3b7984fc"
  },
  {
    "url": "assets/js/app.f9c1d522.js",
    "revision": "4c5585e5a4d92271b242808f3a102625"
  },
  {
    "url": "ecosystem.html",
    "revision": "9fb0d9323174ab967389d1e5cba54106"
  },
  {
    "url": "guide.html",
    "revision": "84f730758099c44ffdda09c9ebf6691a"
  },
  {
    "url": "index.html",
    "revision": "5f595b1eebff7a06269220e6ecff16a6"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "266ba1b4f9ac78aa9f4a331d4398dba7"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "7a60386757e2fb1a1798ae569a2168e0"
  },
  {
    "url": "zh/guide.html",
    "revision": "ccc8c2d97b9383366afed4917b3aa361"
  },
  {
    "url": "zh/index.html",
    "revision": "183a3fc111906b0228d80fd3c6bd33f2"
  },
  {
    "url": "zh/support.html",
    "revision": "a1678859de840cdc8f70a6266f3363fd"
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
