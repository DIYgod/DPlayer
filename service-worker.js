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
    "revision": "59066971785b10b36a013a7824cea4e1"
  },
  {
    "url": "assets/css/0.styles.24714fa9.css",
    "revision": "b6e55b1793038b022bb8c9f393e77b93"
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
    "url": "assets/js/app.e7d9fbf7.js",
    "revision": "0783fabd4d50a0d61a477922151a7430"
  },
  {
    "url": "ecosystem.html",
    "revision": "1c95df087d50c428ca80e8e41ff081e6"
  },
  {
    "url": "guide.html",
    "revision": "c4ae2c3784841bdd165a6d0cab0f69bc"
  },
  {
    "url": "index.html",
    "revision": "88d5662ab1d081b6bf4799c3eeb15321"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "dd299f94600c394248728197792826ea"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "dac456aae3e27a74815ab9a31e2492a2"
  },
  {
    "url": "zh/guide.html",
    "revision": "a17ca3c6ee39873468bdda4f66a03585"
  },
  {
    "url": "zh/index.html",
    "revision": "bba004255d18e98022f48c70d338c5bb"
  },
  {
    "url": "zh/support.html",
    "revision": "1ea7599f910075cd3dfd5db2aba5e9f7"
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
