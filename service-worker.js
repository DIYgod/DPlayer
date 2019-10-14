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
    "revision": "b8a68e08bc0cc056dd845d139d68792b"
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
    "url": "assets/js/app.6037f6b5.js",
    "revision": "9e229e6388ecfc9f67b423e4a7ae4c0e"
  },
  {
    "url": "ecosystem.html",
    "revision": "581d667fac40a6d77a64438435bff94c"
  },
  {
    "url": "guide.html",
    "revision": "2f788c2e8f0c898c2826e1cde275696a"
  },
  {
    "url": "index.html",
    "revision": "b8f8a08c1b8eaf0cea3eb0ca9926e919"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "994b35fe62772b4ebc9a065a0f302875"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "beeb154ff7f35865b521821d904e39a5"
  },
  {
    "url": "zh/guide.html",
    "revision": "6db3a5cf474aebab2359366af531e72c"
  },
  {
    "url": "zh/index.html",
    "revision": "ff42dd967882551810f038267032e2ae"
  },
  {
    "url": "zh/support.html",
    "revision": "767232f5a1d2c67e61ccdc0f7eb8154b"
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
