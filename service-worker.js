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
    "revision": "563e2e0850833f9003f74e06994d8d88"
  },
  {
    "url": "assets/css/0.styles.24714fa9.css",
    "revision": "9bad32b0f77ac23629a718b83efa8480"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.78101a46.js",
    "revision": "57b3f7d3af44fd0e9a3d533be504d89d"
  },
  {
    "url": "assets/js/11.6e17bf2b.js",
    "revision": "555896a338bb170cde6341276dbab5b3"
  },
  {
    "url": "assets/js/12.447b0f93.js",
    "revision": "7338b0b7f35ec9a4098fe82296e5302a"
  },
  {
    "url": "assets/js/13.05d009ee.js",
    "revision": "9b7f18fe433ebc5b7716b4d651ee804a"
  },
  {
    "url": "assets/js/14.a4979563.js",
    "revision": "fe3616ad3442213679a852b4f7b97f73"
  },
  {
    "url": "assets/js/15.2f6c1e70.js",
    "revision": "3a982955be2ca2a03c31c12173a6583c"
  },
  {
    "url": "assets/js/2.cad2296b.js",
    "revision": "0ff60476a993c2175cfbcefbece27b28"
  },
  {
    "url": "assets/js/3.b9c5228f.js",
    "revision": "7e9aba984948a2ffde00b267fff24539"
  },
  {
    "url": "assets/js/4.fbae7efc.js",
    "revision": "d49bd0be161c266e3e999b886e9482cf"
  },
  {
    "url": "assets/js/5.481cda46.js",
    "revision": "7d767f383914b71a286331a093e74121"
  },
  {
    "url": "assets/js/6.262a396a.js",
    "revision": "28677b06dd7064b6b55a9ee5aafb4a15"
  },
  {
    "url": "assets/js/7.ba8a91fa.js",
    "revision": "8967f6b2377c37233daefc7c1cfee787"
  },
  {
    "url": "assets/js/8.493f963e.js",
    "revision": "7de1a8441fe111927caf775ae8c1cad9"
  },
  {
    "url": "assets/js/9.eac61829.js",
    "revision": "7d4a17f2ca6bafa7a1c9c35e99e01cc2"
  },
  {
    "url": "assets/js/app.73222451.js",
    "revision": "df253042537698b7aef52027379964e4"
  },
  {
    "url": "ecosystem.html",
    "revision": "75bfe906d492e9a122968f7e0e336cbc"
  },
  {
    "url": "guide.html",
    "revision": "f5f66e9a5ea37c0a045c66b4171609c3"
  },
  {
    "url": "index.html",
    "revision": "85ef58f209d651a371b317245ae6cc40"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "9f45f631bb377a4c28d826bc7ff7a33f"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "cc3c8854d949bdfbca59256e1664feb1"
  },
  {
    "url": "zh/guide.html",
    "revision": "8e314de86468a47611f5e149e6e340bd"
  },
  {
    "url": "zh/index.html",
    "revision": "af765a2fb5db3f619d6f77ec6cc2614a"
  },
  {
    "url": "zh/support.html",
    "revision": "dde22cfd6ca98a4d5eebce90be33eef6"
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
