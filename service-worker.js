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
    "revision": "12946dc969fc558c910ab336d35d23b7"
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
    "url": "assets/js/10.f55a375d.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.14ca67f7.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.36741caa.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.876c1307.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.1ac6b37a.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.55130b6a.js",
    "revision": "c3926d553580e79cef0694495e97982f"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.ab20e8af.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.fd27ad6f.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.84e324a3.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.982b3169.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.7524d5b6.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.704b30cf.js",
    "revision": "51342f409200508815e10c763f1c08ef"
  },
  {
    "url": "assets/js/app.fca1b671.js",
    "revision": "44521685b454e2f643f2032076fdaa9f"
  },
  {
    "url": "ecosystem.html",
    "revision": "e99f332c967dbe17d41e03e60be69359"
  },
  {
    "url": "guide.html",
    "revision": "e5b7996aed75920b4bba8fcb1c86e28c"
  },
  {
    "url": "index.html",
    "revision": "003acc04bae2e321e806e3909826c4bc"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "7ea2d9a880534bc18807037b35ff214e"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "da82929892f3197c64885e31f71f82a9"
  },
  {
    "url": "zh/guide.html",
    "revision": "a9501ac18204d6ad72189c4a7e4632c5"
  },
  {
    "url": "zh/index.html",
    "revision": "6f8a199f3e1a5358f48660bf5864512c"
  },
  {
    "url": "zh/support.html",
    "revision": "d70dfd2f97fae425050ce63b630d1890"
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
