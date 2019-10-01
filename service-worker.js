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
    "revision": "e851d947b25f02a648fd5789f72dfb46"
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
    "url": "assets/js/app.f52ccd03.js",
    "revision": "e84d3b8ff06027ae57b8f82c920be479"
  },
  {
    "url": "ecosystem.html",
    "revision": "5df4742a3ec6d24876c1679a0cc3de15"
  },
  {
    "url": "guide.html",
    "revision": "f76cbfd8b90f14d172d977034af79091"
  },
  {
    "url": "index.html",
    "revision": "b89464f80026636a3e2a8b07057124f0"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "07df1f4effe7f987d505b0629ecde5ef"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "241af255e81ae68a0bc9400ce5888be6"
  },
  {
    "url": "zh/guide.html",
    "revision": "20689741a52d6c323afe5eb9a0ebae4e"
  },
  {
    "url": "zh/index.html",
    "revision": "7924689d771ee3ccecc692f8bdc7bf86"
  },
  {
    "url": "zh/support.html",
    "revision": "b472fe09a7649bce43bd727126fd02f2"
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
