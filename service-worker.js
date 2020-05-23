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
    "revision": "4ad19820369432533452f08eb3486625"
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
    "url": "assets/js/13.be0571d1.js",
    "revision": "e9c18c962212ddb4bd48bb731ba50284"
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
    "url": "assets/js/9.ba02460c.js",
    "revision": "79874ebe72b80ce825703a572375f493"
  },
  {
    "url": "assets/js/app.58320976.js",
    "revision": "6d359e08287d8b8873fbc4913bf23fc6"
  },
  {
    "url": "ecosystem.html",
    "revision": "4f1f62ff8bddf8c1ecf99281ad5c30c7"
  },
  {
    "url": "guide.html",
    "revision": "11be3ff72a0a1f870530bea135285546"
  },
  {
    "url": "index.html",
    "revision": "34c4833398c6150b8cdde7a9b23a4786"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "eb2d25ad13433e00f64c195b341fd4a5"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "72ee64dfbf21af1b9f11ede6d798505f"
  },
  {
    "url": "zh/guide.html",
    "revision": "31fe956a3004bebb669dffbffd6b6c70"
  },
  {
    "url": "zh/index.html",
    "revision": "64f3cc01f36d6dab27ee6bd6e0f46035"
  },
  {
    "url": "zh/support.html",
    "revision": "f55691ddd74341347069a0c2663ace61"
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
