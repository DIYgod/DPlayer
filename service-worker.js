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
    "revision": "c4457c736fb63780d88543b242499d9f"
  },
  {
    "url": "assets/css/0.styles.5b64d8c4.css",
    "revision": "faaf04d512aeeb36f5651dd0800c6577"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7185e15a.js",
    "revision": "5b82108d714446654d96206cda51076a"
  },
  {
    "url": "assets/js/11.51b4fbc5.js",
    "revision": "12b6251de3dbaf60131f92c478dee435"
  },
  {
    "url": "assets/js/12.dc05cfa0.js",
    "revision": "a51b207a48b03abb1d859b0fd513ef45"
  },
  {
    "url": "assets/js/13.e622af51.js",
    "revision": "c5d88bdcdb16fb46c76ba6bd122e509a"
  },
  {
    "url": "assets/js/14.27702caa.js",
    "revision": "69c417961193c7c80d190e64e16bd3cb"
  },
  {
    "url": "assets/js/15.0e83afc9.js",
    "revision": "4b130138144cbe2597ea87dba67b56ff"
  },
  {
    "url": "assets/js/16.f595db1a.js",
    "revision": "3af11b8e79660252af642ca0ae2ed6b4"
  },
  {
    "url": "assets/js/17.ad6c2470.js",
    "revision": "2d73e780ff2676bb2c4f560f65e45f85"
  },
  {
    "url": "assets/js/2.0d56f3a9.js",
    "revision": "cc0764fb6dee7997625f9dbee7c39a44"
  },
  {
    "url": "assets/js/3.6a5ff2b0.js",
    "revision": "8a962babaafe3c965b9292ca29ff19df"
  },
  {
    "url": "assets/js/4.039da093.js",
    "revision": "95335eb232e0d234516d90f835c60125"
  },
  {
    "url": "assets/js/5.acc9a0c6.js",
    "revision": "0f030d4568c08a39740be1d8cf4ee7db"
  },
  {
    "url": "assets/js/6.b768d5f8.js",
    "revision": "45200bd97ddea00a466757f423679a0a"
  },
  {
    "url": "assets/js/7.f9630445.js",
    "revision": "2866930d7f2c11cc43429dc284ce309c"
  },
  {
    "url": "assets/js/8.f9a7eacb.js",
    "revision": "1814b1c0cd120222257afbbaaddd3f5c"
  },
  {
    "url": "assets/js/9.43fb424b.js",
    "revision": "05d9a71d1c8c19cd018da4346b50bb76"
  },
  {
    "url": "assets/js/app.d1a9c156.js",
    "revision": "6e844c0ffb5d0e6db4875f8a043e899b"
  },
  {
    "url": "ecosystem.html",
    "revision": "1854d39b2ccb95505ba4f9a390f98a30"
  },
  {
    "url": "guide.html",
    "revision": "db88b530755d4d4c9a33af11df796da4"
  },
  {
    "url": "index.html",
    "revision": "a898f7221ef0f33967de7ec99dedf1db"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "87649f14f613f48a3f356370780a4360"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "0e9853545e35f9213ce077db63458347"
  },
  {
    "url": "zh/guide.html",
    "revision": "6de3797961b288bddba9f7c74fc7a168"
  },
  {
    "url": "zh/index.html",
    "revision": "086eea4365507458d947e69ee5968497"
  },
  {
    "url": "zh/support.html",
    "revision": "6cbe6dce52cafec13c752a6f5bcf1238"
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
