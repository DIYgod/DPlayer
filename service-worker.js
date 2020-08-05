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
    "revision": "14877f33f9859598db28dc7232a679ae"
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
    "url": "assets/js/7.80f793f3.js",
    "revision": "592363ae90f2288e322be859a1b5ac94"
  },
  {
    "url": "assets/js/8.49478738.js",
    "revision": "456aae441032c5d9004c148d174e0c62"
  },
  {
    "url": "assets/js/9.4a6a6176.js",
    "revision": "88112ee4b01cad4786f0eab8e76b5e56"
  },
  {
    "url": "assets/js/app.7159a12b.js",
    "revision": "f9d2e6e7feab450a843565584b48742a"
  },
  {
    "url": "ecosystem.html",
    "revision": "0505d681c66f91cf8d3d17a6f1739310"
  },
  {
    "url": "guide.html",
    "revision": "8d1ab32f9f49024010038159cb129772"
  },
  {
    "url": "index.html",
    "revision": "ed6c870e658de2da5c4f364afa061d91"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "bcf981ff54ac580dd3b252b7232faa14"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "92a5a415e6c3e42f28cca064de4bb15d"
  },
  {
    "url": "zh/guide.html",
    "revision": "0a25980e97bf7ee0fb83317e2fc5887b"
  },
  {
    "url": "zh/index.html",
    "revision": "bad2011e7d5daa34f6257cf859ef9f8b"
  },
  {
    "url": "zh/support.html",
    "revision": "76c7640f84c4d9b87eaa261500d3ba2a"
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
