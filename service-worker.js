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
    "revision": "8c673ba4f1dd379d24316040949cf0cd"
  },
  {
    "url": "assets/css/0.styles.fda0cbbe.css",
    "revision": "477d89bb4d11f72a82982b686895b2b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.554ecc14.js",
    "revision": "7feaddcf91b795126b49ddbb4309029b"
  },
  {
    "url": "assets/js/11.4fe51d37.js",
    "revision": "d9eceb5d23fc1237b00e7692e1299146"
  },
  {
    "url": "assets/js/12.4a604a2c.js",
    "revision": "181a98d353d71d08b8560260f84fdcb6"
  },
  {
    "url": "assets/js/13.cc0dc980.js",
    "revision": "8e98678b8c55a8ce0a944472f766b8da"
  },
  {
    "url": "assets/js/14.85c5f83a.js",
    "revision": "f2a33ccb18aa0c5c65e6ea52a0e70412"
  },
  {
    "url": "assets/js/15.03874f3d.js",
    "revision": "6b06e49c9626f422f92c181d13f9cae7"
  },
  {
    "url": "assets/js/16.aa9d4236.js",
    "revision": "994de28acfd1f11df55859c14866cec2"
  },
  {
    "url": "assets/js/2.dfbcce04.js",
    "revision": "3bdc2ee13268a1f5aa1f3019945a675b"
  },
  {
    "url": "assets/js/3.60e1acb9.js",
    "revision": "59ee34152afd91de1f846297525e8c2b"
  },
  {
    "url": "assets/js/4.7345b3d3.js",
    "revision": "2fa132515e3b0a4ba1cc77bda1a2bca3"
  },
  {
    "url": "assets/js/5.6d4e0b79.js",
    "revision": "843d4381c85cdcaf856f63a739cdf3d4"
  },
  {
    "url": "assets/js/6.21313b9a.js",
    "revision": "c3cd1358bffcf8a2bf07ae8561c7479d"
  },
  {
    "url": "assets/js/7.d9a57877.js",
    "revision": "557418d2d6ccd934a856942abd460cb5"
  },
  {
    "url": "assets/js/8.c86dc6e5.js",
    "revision": "14953ef4920f346a74df8b82300f951a"
  },
  {
    "url": "assets/js/9.abc06264.js",
    "revision": "17e6b4f71ecaacbe95bb9dcd3a12dd15"
  },
  {
    "url": "assets/js/app.6a5d9408.js",
    "revision": "5e17eccf665f4f268bfe47f2624d3a20"
  },
  {
    "url": "ecosystem.html",
    "revision": "ff0cc9eb90a32b853519b5265783f7f7"
  },
  {
    "url": "guide.html",
    "revision": "ce8bd596dc2857766ce9514b7ccfd940"
  },
  {
    "url": "index.html",
    "revision": "a1328d89d92212539eb096adda51bd5a"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "d0652d2bc5189590218095c101266b29"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f46f957b0f6c74b712924429f16e37d4"
  },
  {
    "url": "zh/guide.html",
    "revision": "f068b64ea069bde93de2698d9f62853b"
  },
  {
    "url": "zh/index.html",
    "revision": "01a6a7d842671b66f214f6fcc64c1122"
  },
  {
    "url": "zh/support.html",
    "revision": "0ba9169461f61525eb7e315efeea8666"
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
