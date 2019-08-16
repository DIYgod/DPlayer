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
    "revision": "ab876e836f0e4408b5b763fe64e59cb8"
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
    "url": "assets/js/11.eb11204f.js",
    "revision": "83f2a4c53591c1d3dad48bf92517856b"
  },
  {
    "url": "assets/js/12.d5444c63.js",
    "revision": "4df9c7a7f44515434c1f72c647f71c14"
  },
  {
    "url": "assets/js/13.002beadd.js",
    "revision": "53ec45c7920f98652665287cb791cc14"
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
    "url": "assets/js/7.b7c98697.js",
    "revision": "8eaa8bb54a4115ae021b909491cafedd"
  },
  {
    "url": "assets/js/8.b58f1b57.js",
    "revision": "8596155e6fcdc8eee7c66c633573b294"
  },
  {
    "url": "assets/js/9.8782d46a.js",
    "revision": "7d35472440dbf004e9407e253e73b8af"
  },
  {
    "url": "assets/js/app.eaa93baf.js",
    "revision": "2cc30bcdb2fe0a2d3b8810654675ab27"
  },
  {
    "url": "ecosystem.html",
    "revision": "e0562721178c4299d39f80f84f65ed43"
  },
  {
    "url": "guide.html",
    "revision": "eb49341827fb2405099802ea211185ba"
  },
  {
    "url": "index.html",
    "revision": "d05d653f18a861bb6b03a4466967e45e"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "505521a9dfeb9e3477b1aed9e6918c4f"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "54281e5af14916557f29c90b497579a6"
  },
  {
    "url": "zh/guide.html",
    "revision": "50d50f26ab30757bb4c9bd13853d16ed"
  },
  {
    "url": "zh/index.html",
    "revision": "fad0ca822190fc50ec33e99c88f7f2b8"
  },
  {
    "url": "zh/support.html",
    "revision": "e25a036bccdc45f0934edc398e4ce547"
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
