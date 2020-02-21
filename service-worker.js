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
    "revision": "23c87ddfa63f9a49e36f397e6b66544d"
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
    "url": "assets/js/10.364feced.js",
    "revision": "c3087138dc3d2cfc17740533dc5359f5"
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
    "url": "assets/js/8.c706f11f.js",
    "revision": "9d29a33feeea9fefb7e122a16ea2132c"
  },
  {
    "url": "assets/js/9.77a10579.js",
    "revision": "42cfd93d712b82180fb3d93cbfb50ef5"
  },
  {
    "url": "assets/js/app.f03f1743.js",
    "revision": "aaadce595acc8bb80e8bf68ccaddbaa0"
  },
  {
    "url": "ecosystem.html",
    "revision": "9db0ff8a9d5c4bfbf3fc8d3a685aff7f"
  },
  {
    "url": "guide.html",
    "revision": "cbdee2cdc1c4a2fa27de8ee5a1e8cf5b"
  },
  {
    "url": "index.html",
    "revision": "f13451a46df65e03dba9c60e3c4323df"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "061dfbf6e906677565ac0860e967e665"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "0007e54abbc4aa4d0922333a636c3ae4"
  },
  {
    "url": "zh/guide.html",
    "revision": "b9c205cd98e10fc781e5e6a0026bc78c"
  },
  {
    "url": "zh/index.html",
    "revision": "9d9ba47ffe67f72c49c19484cefe5fd4"
  },
  {
    "url": "zh/support.html",
    "revision": "4d2018e8753158e0646e73252fbd47ff"
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
