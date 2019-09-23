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
    "revision": "a3c8aa69d933fb50c6d65b48b22fb746"
  },
  {
    "url": "assets/css/0.styles.efe65f2d.css",
    "revision": "709d4311818ca6be782bc6610098d3fa"
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
    "url": "assets/js/app.a7445348.js",
    "revision": "2423fb68246bba8bd1d5dcb05bb1ed73"
  },
  {
    "url": "ecosystem.html",
    "revision": "06c65ca57369fdf7c321f71591369a66"
  },
  {
    "url": "guide.html",
    "revision": "25e3d24d7b5e9d333e9a7eefa5dc94b2"
  },
  {
    "url": "index.html",
    "revision": "018c44097cec338ff67fb94ed7d85422"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "3bceb0fda2387ced0b50437f649b61d6"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "a4e464f89567a56e2956b816f9e35e3c"
  },
  {
    "url": "zh/guide.html",
    "revision": "a9d57e79ebb009647eb0c8b67cf91b1e"
  },
  {
    "url": "zh/index.html",
    "revision": "60a5b7b15b98fa4b76cda191f53e7fb3"
  },
  {
    "url": "zh/support.html",
    "revision": "ddc06df76e3dc61ff2a289660d7e7402"
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
