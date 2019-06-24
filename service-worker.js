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
    "revision": "d8231935e93822623ece6d96c771c49a"
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
    "url": "assets/js/app.0f2feaba.js",
    "revision": "5671bd0a68bd05b49768f4caf50750bf"
  },
  {
    "url": "ecosystem.html",
    "revision": "163d589b79259671605496c251e5f29c"
  },
  {
    "url": "guide.html",
    "revision": "fb182d893115e2f482cb02c60b7c9d24"
  },
  {
    "url": "index.html",
    "revision": "24a32c2153395e1cfd1b7fb4928e28f5"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "d35f8456d6ebf203bf8458adc623e9fb"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "7707cd112dd43b44ee0b1f263751cccb"
  },
  {
    "url": "zh/guide.html",
    "revision": "8e3f8e5dc6fc4b4c5da56d70d706d777"
  },
  {
    "url": "zh/index.html",
    "revision": "41d7e918787faae68e12c70312a4eb2f"
  },
  {
    "url": "zh/support.html",
    "revision": "2b3f3a68c5075812f8a098fc42b27b4b"
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
