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
    "revision": "fafde7a67ef26fd57e54acb8641b3233"
  },
  {
    "url": "assets/css/0.styles.c6b0d222.css",
    "revision": "fa54d1d74262ce5cfa6f619e74c0a59e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.250a4d47.js",
    "revision": "7a9609fdf550f551e03d0a7ec263db67"
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
    "url": "assets/js/14.c2ada687.js",
    "revision": "63a5bff7e968e7e1ffe723287b023117"
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
    "url": "assets/js/app.739ad64e.js",
    "revision": "7344db42a78275806e28693a006e95a9"
  },
  {
    "url": "ecosystem.html",
    "revision": "71387aa787e21cd0d1c23e003e3d1ad2"
  },
  {
    "url": "guide.html",
    "revision": "634dd3731043156925362006e57e51d2"
  },
  {
    "url": "index.html",
    "revision": "5670fecb53a183d44780146370859ad7"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "0a915ba5458a23d3ed8fb81d1c4344b4"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "7d7228916eb03001dcb7ec8a11594bd4"
  },
  {
    "url": "zh/guide.html",
    "revision": "27f03e0627417c470172e9b67a935b6d"
  },
  {
    "url": "zh/index.html",
    "revision": "381b29d740423c28d8863c92b1f27ade"
  },
  {
    "url": "zh/support.html",
    "revision": "677f872f39d039066113f9f02addecb6"
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
