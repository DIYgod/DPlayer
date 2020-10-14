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
    "revision": "f485ebfc00e2fb4dfa5ea10b14f6e426"
  },
  {
    "url": "assets/css/0.styles.2501d5c9.css",
    "revision": "168362060e3aa4f6d62d13112a214df4"
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
    "url": "assets/js/5.7e53ce46.js",
    "revision": "0f030d4568c08a39740be1d8cf4ee7db"
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
    "url": "assets/js/app.2e253535.js",
    "revision": "dbd2de16268dbbd61e48e9916655b57d"
  },
  {
    "url": "ecosystem.html",
    "revision": "86c8449761a3e4c582f89beb40378a41"
  },
  {
    "url": "guide.html",
    "revision": "8a682fd116461d92ce50b1968b2b0d59"
  },
  {
    "url": "index.html",
    "revision": "22bf590fa0e52a0042900385b1021a4b"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "3d3f1d907f02a8bcaedfe3dcae1abe8b"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "2685b346e26209e1fcb23d4546cca188"
  },
  {
    "url": "zh/guide.html",
    "revision": "a6184b618d9c2cddba4026a551b985bf"
  },
  {
    "url": "zh/index.html",
    "revision": "b1dc1ed1b29963dd8842b52950b8fbb5"
  },
  {
    "url": "zh/support.html",
    "revision": "9432596ce21613f69c02aaa72619770b"
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
