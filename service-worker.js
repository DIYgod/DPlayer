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
    "revision": "7b8705d48c5a81466caa38afab7d3ced"
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
    "url": "assets/js/app.5aca643b.js",
    "revision": "64c0e7d61ac5896cd60045f67b530f98"
  },
  {
    "url": "ecosystem.html",
    "revision": "ef0cedb7eef6e6a5d5268e9173db7933"
  },
  {
    "url": "guide.html",
    "revision": "27f3c4f5b2347dfb9174b63b1de42050"
  },
  {
    "url": "index.html",
    "revision": "b529c1f1ae7c006c1d77f7fe423a40c9"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "02a7fbcc97258b614d428c21a383384f"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "39b24424a0d69a0854107353db62604b"
  },
  {
    "url": "zh/guide.html",
    "revision": "d3d256698973ea12fa6cf946dd3b189a"
  },
  {
    "url": "zh/index.html",
    "revision": "61470bbb62abfdf665b44f896ae2e222"
  },
  {
    "url": "zh/support.html",
    "revision": "774ca121f273debd24beb730d488e764"
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
