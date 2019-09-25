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
    "revision": "932a7ebe94c57507a0ad71b2996793ee"
  },
  {
    "url": "assets/css/0.styles.c6b0d222.css",
    "revision": "67c80014283c32390318a2b7e8bb3a94"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e4553f2.js",
    "revision": "e1fa0dc0c27f4a0114e91383378b6fdb"
  },
  {
    "url": "assets/js/11.8d11b53c.js",
    "revision": "507866b0a7939bcc929bc823872aba89"
  },
  {
    "url": "assets/js/12.bb4ffaae.js",
    "revision": "cbc968b2a998b02b110d310bca0911f1"
  },
  {
    "url": "assets/js/13.a98a215b.js",
    "revision": "9b2a6e40f7922f1bfa3365bd3f6d354c"
  },
  {
    "url": "assets/js/14.74f448ad.js",
    "revision": "f13829390bb4b7fb14d1da39c62141e5"
  },
  {
    "url": "assets/js/15.afa2911e.js",
    "revision": "3e07c64b68ebcf7ef896439089c38914"
  },
  {
    "url": "assets/js/2.8eb73b8a.js",
    "revision": "36d941706a72691aeb466e85f7e7be86"
  },
  {
    "url": "assets/js/3.cf67a78f.js",
    "revision": "d63c6347d9c73fa207c301185ddce8f1"
  },
  {
    "url": "assets/js/4.aab79324.js",
    "revision": "7179b6da1b72870083a250222f8bd673"
  },
  {
    "url": "assets/js/5.c2d7f53a.js",
    "revision": "a94195f9b95f458335db619287f16c07"
  },
  {
    "url": "assets/js/6.8d4363f5.js",
    "revision": "11992475c20a9d6302d7e112fafb9c42"
  },
  {
    "url": "assets/js/7.6b847da8.js",
    "revision": "c787019eae482a5d0c1b3077627ce513"
  },
  {
    "url": "assets/js/8.6c972a1b.js",
    "revision": "5c914ffad0b970dfc8e41871a72ed7a2"
  },
  {
    "url": "assets/js/9.ca6ac02b.js",
    "revision": "b55f016a460ce4d12054ac85704c64f2"
  },
  {
    "url": "assets/js/app.8c18dd8c.js",
    "revision": "dcbfc5d5d84b7262aec3893e94b7515c"
  },
  {
    "url": "ecosystem.html",
    "revision": "bcc1d0fd4f6029878e4468a3a7c67c00"
  },
  {
    "url": "guide.html",
    "revision": "6af423736e2402a2c214525ef2e9059c"
  },
  {
    "url": "index.html",
    "revision": "8c4a4a2cc29663dfd340cb8a8a33a054"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "5b64fa272102acf8892a89cbfea1315d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f0a9eb00d3e9314bf20af62f3b86a7ab"
  },
  {
    "url": "zh/guide.html",
    "revision": "2dd1b3719425cd2bd07725b8e441ae27"
  },
  {
    "url": "zh/index.html",
    "revision": "3875cb57286edc269a632adf01d435dd"
  },
  {
    "url": "zh/support.html",
    "revision": "52b3c28f9ecc79dfa5f8c46f76918371"
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
