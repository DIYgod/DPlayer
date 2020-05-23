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
    "revision": "6ce74058108bb7d23e6595495de91ca6"
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
    "url": "assets/js/9.9ac5eb3f.js",
    "revision": "2363e10218a28c246b35a2a3ce07043e"
  },
  {
    "url": "assets/js/app.b6e0a3a5.js",
    "revision": "79650b72c3bc997cc1c76778e39b634b"
  },
  {
    "url": "ecosystem.html",
    "revision": "d52c519d4c4326315deb26c027127926"
  },
  {
    "url": "guide.html",
    "revision": "021c8c919f8c0e80e4812c2784b860a4"
  },
  {
    "url": "index.html",
    "revision": "5cb85fcdc26a6e4ec090c38946ee3425"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "4703b55fc1661e7d33e8a5297923ca6d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "891c4979e1f48e570f3863573e39a36c"
  },
  {
    "url": "zh/guide.html",
    "revision": "5f8936633cd8d2786e6e30a813cf110b"
  },
  {
    "url": "zh/index.html",
    "revision": "1a8d36b83a8b39677966e1bd41a33b68"
  },
  {
    "url": "zh/support.html",
    "revision": "81ff9b8723494845057828ba056a87a3"
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
