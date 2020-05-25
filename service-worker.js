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
    "revision": "50b499a190ce0df9fd068d8989d19431"
  },
  {
    "url": "assets/css/0.styles.5f20ea74.css",
    "revision": "0076add97ca94ef83edf37d04977097b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ba5cb9b.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.c355536e.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.e023b0de.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.95e7d811.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.be5427b7.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.b2709c0a.js",
    "revision": "c83fbbb3068838a4dc8d1d83bad28253"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.f72dec27.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.7fd2d482.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.62b62e05.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.b4d37333.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.057a4c99.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.e0a46fd7.js",
    "revision": "51342f409200508815e10c763f1c08ef"
  },
  {
    "url": "assets/js/app.1a698b15.js",
    "revision": "64bc3f02cde6abd8ba5ebf121778ab0d"
  },
  {
    "url": "ecosystem.html",
    "revision": "b729defe330f7be9c270457ba85d5f4b"
  },
  {
    "url": "guide.html",
    "revision": "ed2c994c06681fa6a6777876e6c0585a"
  },
  {
    "url": "index.html",
    "revision": "63c71cf9833cdce6a52afdf9e25ce3ed"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "5f08d325df5c9db67b881a33bdcd12a3"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "4725aed83fc0b63f520a5339878be79b"
  },
  {
    "url": "zh/guide.html",
    "revision": "ce2f23200adc7ae08d9872fea3246399"
  },
  {
    "url": "zh/index.html",
    "revision": "f2ccb0ff02ce2343ac1ca396bea45d38"
  },
  {
    "url": "zh/support.html",
    "revision": "a603709a8a301a078226e3de7917b31d"
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
