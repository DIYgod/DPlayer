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
    "revision": "b722be10ebffe33e6baf7986ae4ee0a4"
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
    "url": "assets/js/10.f2f99d29.js",
    "revision": "1093dc5d154ddcd8631178f29ed7212c"
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
    "url": "assets/js/13.cdd5f013.js",
    "revision": "dc88642fdfa52939ce4f22ca8be0bd8f"
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
    "url": "assets/js/8.881e3c93.js",
    "revision": "5d5ee321d5fdad58b6b4cd4a0888cd86"
  },
  {
    "url": "assets/js/9.93f650e2.js",
    "revision": "c10db7bb4387bd375c7d4301fdd55cc0"
  },
  {
    "url": "assets/js/app.c6837695.js",
    "revision": "efb7598ea0bdc4becfa532befb3bb789"
  },
  {
    "url": "ecosystem.html",
    "revision": "cc7e4ccd533cb1eb5d643381418543ef"
  },
  {
    "url": "guide.html",
    "revision": "37da2ba2d510d2184981ee0ed6f46073"
  },
  {
    "url": "index.html",
    "revision": "552f6f2f4123b74e655b02f9ab347e0c"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "8fa6eb9f205ee3216626a718787f73b2"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f4482ec67d196aded601db40c3dec8a6"
  },
  {
    "url": "zh/guide.html",
    "revision": "c0fcb1a3bc4d2fcb17e840342c1a7a82"
  },
  {
    "url": "zh/index.html",
    "revision": "6b05dbf846b5c58006ce81f60e49f3e9"
  },
  {
    "url": "zh/support.html",
    "revision": "0a9bfd32ec1c7ed61f173148a69e015a"
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
