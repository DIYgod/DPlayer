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
    "revision": "a10b1f1c60f2b1110613766e8b7d9b1d"
  },
  {
    "url": "assets/css/0.styles.bd1996cd.css",
    "revision": "878d5293d3d7e17d7ccb0652f4d575e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56239a00.js",
    "revision": "5b82108d714446654d96206cda51076a"
  },
  {
    "url": "assets/js/11.d30a9894.js",
    "revision": "d0f115e8c287f5181dd5602f16619225"
  },
  {
    "url": "assets/js/12.f5f0e9b9.js",
    "revision": "a51b207a48b03abb1d859b0fd513ef45"
  },
  {
    "url": "assets/js/13.dd455631.js",
    "revision": "c5d88bdcdb16fb46c76ba6bd122e509a"
  },
  {
    "url": "assets/js/14.d4915dad.js",
    "revision": "69c417961193c7c80d190e64e16bd3cb"
  },
  {
    "url": "assets/js/15.c1fbb3e9.js",
    "revision": "7e2f45a8fc522ebb5c4ed5538e90213e"
  },
  {
    "url": "assets/js/16.4138ce98.js",
    "revision": "3af11b8e79660252af642ca0ae2ed6b4"
  },
  {
    "url": "assets/js/17.ad6c2470.js",
    "revision": "2d73e780ff2676bb2c4f560f65e45f85"
  },
  {
    "url": "assets/js/2.e37b7fbc.js",
    "revision": "cc0764fb6dee7997625f9dbee7c39a44"
  },
  {
    "url": "assets/js/3.6a5ff2b0.js",
    "revision": "8a962babaafe3c965b9292ca29ff19df"
  },
  {
    "url": "assets/js/4.5b116e55.js",
    "revision": "e928a6fefe6ac15d30030a01a3e202af"
  },
  {
    "url": "assets/js/5.d8fe6c26.js",
    "revision": "942add5e339df207c699fcb6f6ad2486"
  },
  {
    "url": "assets/js/6.9d2c5c89.js",
    "revision": "45200bd97ddea00a466757f423679a0a"
  },
  {
    "url": "assets/js/7.5889047f.js",
    "revision": "2866930d7f2c11cc43429dc284ce309c"
  },
  {
    "url": "assets/js/8.f0c7be93.js",
    "revision": "1814b1c0cd120222257afbbaaddd3f5c"
  },
  {
    "url": "assets/js/9.e378491f.js",
    "revision": "05d9a71d1c8c19cd018da4346b50bb76"
  },
  {
    "url": "assets/js/app.81f64fa7.js",
    "revision": "4cede3444d1eee0ee6ea48c34e2d07b0"
  },
  {
    "url": "ecosystem.html",
    "revision": "daefa1aef30b591ddb47bef3dd46947e"
  },
  {
    "url": "guide.html",
    "revision": "269dea5844b119410dcadc1c5336ab20"
  },
  {
    "url": "index.html",
    "revision": "629e03bef2335555b60fffdc7ae6f39f"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "c86a848c008e43495dcc1e8ccf57cf57"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "47504e1df242ea2a0c567293dadd3047"
  },
  {
    "url": "zh/guide.html",
    "revision": "cb57369826a60ec3d80084d2bd28faa7"
  },
  {
    "url": "zh/index.html",
    "revision": "b3317ab5623d9ceaf937a8d958d5016e"
  },
  {
    "url": "zh/support.html",
    "revision": "42f3abf7c68a562cefc87651df707ba6"
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
