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
    "revision": "99ab522c8d369e7bafa8cf36836c9efe"
  },
  {
    "url": "assets/css/0.styles.e0a9de16.css",
    "revision": "7967dec2396abfa6e899fee267ced242"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8eb2a731.js",
    "revision": "7a2ced87202ff7124520366e6ef07670"
  },
  {
    "url": "assets/js/11.81095c3a.js",
    "revision": "2c6e05b03fecb0c92ba6c24682b5edfd"
  },
  {
    "url": "assets/js/12.8ddd5b25.js",
    "revision": "3fb3c8e3abcc29a9751c5523965037bc"
  },
  {
    "url": "assets/js/13.1ef3070e.js",
    "revision": "f2992e546caa4d12b133fc3526ee640f"
  },
  {
    "url": "assets/js/14.082e3f00.js",
    "revision": "ba465e067127a45cfcde4b932402925b"
  },
  {
    "url": "assets/js/15.37a8772c.js",
    "revision": "9bce8c9144084852e16fbbdb7479846e"
  },
  {
    "url": "assets/js/16.cd8c4e4c.js",
    "revision": "a7840723b05cf5d7dcecb808c1996218"
  },
  {
    "url": "assets/js/17.e5cc5772.js",
    "revision": "d99d0bff5b02a4110cc8be8901cc6879"
  },
  {
    "url": "assets/js/2.ab92ff27.js",
    "revision": "d1f2c7b96c3ae60552fcf8025472d186"
  },
  {
    "url": "assets/js/3.e42f0a20.js",
    "revision": "b674cd65a5add47236f13e027cc0a791"
  },
  {
    "url": "assets/js/4.b585ffd4.js",
    "revision": "85e90651eec58478f8deded3e9325542"
  },
  {
    "url": "assets/js/5.11e0d704.js",
    "revision": "93f2b1121e26d10186f636d169266426"
  },
  {
    "url": "assets/js/6.5f38766b.js",
    "revision": "64f660bceebc2c9853beee70d96e5460"
  },
  {
    "url": "assets/js/7.c95b7639.js",
    "revision": "113637b4d628d4da3a26227d450b4a6c"
  },
  {
    "url": "assets/js/8.59b2d833.js",
    "revision": "3d714068d4c8cf2d1f44a8abde6f4964"
  },
  {
    "url": "assets/js/9.117e1601.js",
    "revision": "fac5ded90fe4c499b47bc88b62107a49"
  },
  {
    "url": "assets/js/app.61534994.js",
    "revision": "41810b00d2bf93fca63136393b4b48ee"
  },
  {
    "url": "ecosystem.html",
    "revision": "47f6166ee4a5f1d1258a932da694f312"
  },
  {
    "url": "guide.html",
    "revision": "57fe4cef8dbf7e2908ce8f51be257b4a"
  },
  {
    "url": "index.html",
    "revision": "681b3f4fc6bf4068d675390412535a0e"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "428ef01402fa08ad47e3053c147f5bc8"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "4712f951e382a257cb654b902e9ac77f"
  },
  {
    "url": "zh/guide.html",
    "revision": "279a2cb20396cc280007908407a9480a"
  },
  {
    "url": "zh/index.html",
    "revision": "1122f8ee417f499c88058dbc5187cc4c"
  },
  {
    "url": "zh/support.html",
    "revision": "63922e9b66422742c8714d7e058e739a"
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
