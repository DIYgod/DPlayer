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
    "revision": "8b8a6c9a8d8e8c5e89adc64da7599e05"
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
    "url": "assets/js/11.b8466af3.js",
    "revision": "274a7eafa7d1265c4914addddbbe5e38"
  },
  {
    "url": "assets/js/12.e023b0de.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.d0011941.js",
    "revision": "387b25d02ec85afa97d1e50d4145e36d"
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
    "url": "assets/js/5.6950de50.js",
    "revision": "e3e2f087a4e39aea985661cbc349e8b6"
  },
  {
    "url": "assets/js/6.62b62e05.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.44570bf1.js",
    "revision": "5077c1c7987e842c2a661423f9486823"
  },
  {
    "url": "assets/js/8.881e3c93.js",
    "revision": "5d5ee321d5fdad58b6b4cd4a0888cd86"
  },
  {
    "url": "assets/js/9.7cec374d.js",
    "revision": "0136028ff2284a776484b5ee59895307"
  },
  {
    "url": "assets/js/app.ff76cb1f.js",
    "revision": "4b437e4e0f475d99e241133471ada614"
  },
  {
    "url": "ecosystem.html",
    "revision": "321d26bd15c45fa3f89bb2bfde34b192"
  },
  {
    "url": "guide.html",
    "revision": "c1965e46b95b1d6085b343d04922e029"
  },
  {
    "url": "index.html",
    "revision": "a518bdc5dbc842b0654460a2667b5330"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "01cec88b45f506dd16d27b02adfb61cb"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "a2d5fd48adec0637dbd5853e6e3576de"
  },
  {
    "url": "zh/guide.html",
    "revision": "1ab155b6c758700621ecf64e0b95b882"
  },
  {
    "url": "zh/index.html",
    "revision": "42549b2c3c0835b2edcfdd9faed5f4c5"
  },
  {
    "url": "zh/support.html",
    "revision": "b14560e410df27a0c876eb28d1f101eb"
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
