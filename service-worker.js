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
    "revision": "c60d38487c0ff8e2827d88cfbbf10dad"
  },
  {
    "url": "assets/css/0.styles.f27854f6.css",
    "revision": "11521a70bfeb2652918523b1edd7c6c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2088d02d.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.8467bfc4.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.f832bb81.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.5cf1cf67.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.dfac061e.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.0ec960be.js",
    "revision": "ef69f98383b25f26d9d12d4a53e6db40"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.ecefe7bc.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.43b5b994.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.4f6a35c5.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.22578c08.js",
    "revision": "592363ae90f2288e322be859a1b5ac94"
  },
  {
    "url": "assets/js/8.b33f19ea.js",
    "revision": "456aae441032c5d9004c148d174e0c62"
  },
  {
    "url": "assets/js/9.420c08ed.js",
    "revision": "88112ee4b01cad4786f0eab8e76b5e56"
  },
  {
    "url": "assets/js/app.de8ff511.js",
    "revision": "941cbd6ef3ce2b955796e22c9b821ca4"
  },
  {
    "url": "ecosystem.html",
    "revision": "a97f3da345d47c94b828600de126fab9"
  },
  {
    "url": "guide.html",
    "revision": "7a2750c63740327c65baeff2d783b136"
  },
  {
    "url": "index.html",
    "revision": "f0c936c9c380791034118884a73c1ff8"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "004a4f0560bce26a6c94584ca04f5ae0"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f95380a5e9e95467bc37abf8521ef0ab"
  },
  {
    "url": "zh/guide.html",
    "revision": "a061ac6b8843f8b2475499f1d409aa48"
  },
  {
    "url": "zh/index.html",
    "revision": "a4fdc3d7784521843ec805b094d13355"
  },
  {
    "url": "zh/support.html",
    "revision": "a2ae234adac1699317f842a9638624a6"
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
