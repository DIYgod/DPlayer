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
    "revision": "86c7dc42996c0e24e7a6346e44e3fcf3"
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
    "url": "assets/js/10.1b5f8bde.js",
    "revision": "d7d139570c83651c4e1d6bbc419933fc"
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
    "url": "assets/js/13.eaf14c4a.js",
    "revision": "a91a1bb143065d9a896e8289ae548f07"
  },
  {
    "url": "assets/js/14.69698dfc.js",
    "revision": "4a8fd41c19a5567dbd61fd3c7c2973fb"
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
    "url": "assets/js/9.566e4eb0.js",
    "revision": "2c2c1d5f2ff004965cf5bc76b0a03334"
  },
  {
    "url": "assets/js/app.4c6ac63f.js",
    "revision": "ba729bcae167ddc8b8a16e388c5f238e"
  },
  {
    "url": "ecosystem.html",
    "revision": "05bfa01ec0b744d4f97cb3a0dd94c27a"
  },
  {
    "url": "guide.html",
    "revision": "c6255445fbfe399d87ed164f9541fd62"
  },
  {
    "url": "index.html",
    "revision": "3ea3a6cd8ecc0b5c11235e32d5d5b74c"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "f5144da26552bbb03d9dbfc40d543544"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "2817fe57281ed609de0da29517a91fa2"
  },
  {
    "url": "zh/guide.html",
    "revision": "06c7fd13ff176112a97104a6dc2808ff"
  },
  {
    "url": "zh/index.html",
    "revision": "e520547041045f53088607c108116ac0"
  },
  {
    "url": "zh/support.html",
    "revision": "2b83f1985992aa45b587c394d8aa2fc6"
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
