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
    "revision": "e5708bdbd156d34aae05e45091bf2ea6"
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
    "url": "assets/js/10.f5789ea4.js",
    "revision": "c3686312832087928e11dfee34ef2b62"
  },
  {
    "url": "assets/js/11.d291dd6e.js",
    "revision": "6aaa6387ca76b7138dcd5e7ef6286866"
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
    "url": "assets/js/app.bdcb15b0.js",
    "revision": "2232b3d1ade5a2fd96a2b3e34b43e2c8"
  },
  {
    "url": "ecosystem.html",
    "revision": "8044b017ce5b6274d6fe868090fc0b7e"
  },
  {
    "url": "guide.html",
    "revision": "8b70cf88a4d2708270521f0d0c22f676"
  },
  {
    "url": "index.html",
    "revision": "dbf45eba2dcf295d97f0d24d7f64db7e"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "2d209c868c9e26d373389e125acb75f7"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f104ec20ade56fd1938f04457eb2391b"
  },
  {
    "url": "zh/guide.html",
    "revision": "1d2819116e69d75b691ca441891b42a4"
  },
  {
    "url": "zh/index.html",
    "revision": "98e2eacc783bafd8974e5455d35aa5c2"
  },
  {
    "url": "zh/support.html",
    "revision": "3804ae921d08cdfffc79d2b4036a0c1f"
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
