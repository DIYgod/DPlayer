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
    "revision": "33c84c1b51051a867da8564d3cbd3081"
  },
  {
    "url": "assets/css/0.styles.927b754e.css",
    "revision": "24305057208ca0e6a4ed3252a92138c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d70bb1fe.js",
    "revision": "24909a0f25ff8109fad629d9f32b7b18"
  },
  {
    "url": "assets/js/11.3e89929c.js",
    "revision": "e4df946dc571f6b0333f8f1c8f3252af"
  },
  {
    "url": "assets/js/12.23b148a2.js",
    "revision": "e81ca499b5bfc8d38d19e67a38972d88"
  },
  {
    "url": "assets/js/13.1cb36d68.js",
    "revision": "151d5e79f6174d4bee869ba8ba20e508"
  },
  {
    "url": "assets/js/14.e8d2df9a.js",
    "revision": "18eb6edf4e00f18a5bf2648ab6053288"
  },
  {
    "url": "assets/js/15.64ae5f4f.js",
    "revision": "e805e8869d8533d56b457781d0e67e79"
  },
  {
    "url": "assets/js/2.9b42b0ed.js",
    "revision": "975c9148504f38e49b24c60f7301daf2"
  },
  {
    "url": "assets/js/3.b9874551.js",
    "revision": "289f78280104ba0978e6534d9cf30c77"
  },
  {
    "url": "assets/js/4.9fdd8fff.js",
    "revision": "58d079e0a9fa5d71fb00c50f2d556430"
  },
  {
    "url": "assets/js/5.8a25d8b8.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.4a29edd7.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.1adc7784.js",
    "revision": "ab7be216da9f2c4e35d7a5a50508f168"
  },
  {
    "url": "assets/js/8.ad1f752b.js",
    "revision": "9037067dcb4f230cd6e1d0c5cb389557"
  },
  {
    "url": "assets/js/9.df3f11f5.js",
    "revision": "5733a60db77fdbfe498061b7c3f69f81"
  },
  {
    "url": "assets/js/app.9e26588d.js",
    "revision": "44b03de68fd70b72904cdf7d21fb1448"
  },
  {
    "url": "ecosystem.html",
    "revision": "fbf49d3b02bc48d031361e2872c4671c"
  },
  {
    "url": "guide.html",
    "revision": "2e68fcc92004df2041b0e72a5d7e8d06"
  },
  {
    "url": "index.html",
    "revision": "fd5a9bdfac92d851e1494c9a306c7538"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "1b6e07183368cb68b9c8ccad060d745d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "d4d56920f088c8793a177eaa60d1bc91"
  },
  {
    "url": "zh/guide.html",
    "revision": "5518efcafa54e2003d8ee3c2e1d764c9"
  },
  {
    "url": "zh/index.html",
    "revision": "cdd78ca08b108fa6feac3bee28d536ed"
  },
  {
    "url": "zh/support.html",
    "revision": "daefc74c81c9bc124b118ff6d97dff99"
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
