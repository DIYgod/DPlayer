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
    "revision": "4cb1a0e2b48b2c74aadddeca71b13aa4"
  },
  {
    "url": "assets/css/0.styles.a9ca4fc5.css",
    "revision": "67c80014283c32390318a2b7e8bb3a94"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.199179f4.js",
    "revision": "97f88b5a357dee50d1ff542df6a33221"
  },
  {
    "url": "assets/js/11.cf09abff.js",
    "revision": "4d48657a0384f8b6640a599ace778df9"
  },
  {
    "url": "assets/js/12.3a108e25.js",
    "revision": "cc36050460c0825279456727cf0775b0"
  },
  {
    "url": "assets/js/13.0b5fac36.js",
    "revision": "0d436cf34d366ea6628d852b17f1b3fb"
  },
  {
    "url": "assets/js/14.29496139.js",
    "revision": "c3ec27b9bde42cf7eb4dbc1372fa248f"
  },
  {
    "url": "assets/js/15.63769c83.js",
    "revision": "891555a224e31116a22a5688e2d4ff6c"
  },
  {
    "url": "assets/js/2.68ec83bc.js",
    "revision": "87f10116c06555296773c67392e13b51"
  },
  {
    "url": "assets/js/3.c899985f.js",
    "revision": "c4f952c41154a36a4876917b46472329"
  },
  {
    "url": "assets/js/4.cbf1806c.js",
    "revision": "6a8b74e78caf92b6218730d8a2b525d3"
  },
  {
    "url": "assets/js/5.bac05b96.js",
    "revision": "0d8dde1fc37745a8b3b602ee702b4d28"
  },
  {
    "url": "assets/js/6.73a2bd1c.js",
    "revision": "379068092ce384f999c7c19c077983ea"
  },
  {
    "url": "assets/js/7.354895a0.js",
    "revision": "3cfbb13ff7daf6c2234100b4ec661269"
  },
  {
    "url": "assets/js/8.04efa537.js",
    "revision": "22e6d9c36040d5482d49732ccee7ea43"
  },
  {
    "url": "assets/js/9.32780aef.js",
    "revision": "589a7701527dfe428067a139fa236337"
  },
  {
    "url": "assets/js/app.db5f26c6.js",
    "revision": "33f60ba47982b3de4e752cbad491853b"
  },
  {
    "url": "ecosystem.html",
    "revision": "2d63e319bd83d8c04d2cd982b46d2f15"
  },
  {
    "url": "guide.html",
    "revision": "e8283f159b3a3340c8e887c838488468"
  },
  {
    "url": "index.html",
    "revision": "9137505c9858e513a47493f0bd05b219"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "29e93655803b870f295b7cd0f80a3665"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "566ae6175e8809449f8a80034c7e2ad5"
  },
  {
    "url": "zh/guide.html",
    "revision": "8f009e61b6d2fafc464f140790dd1be5"
  },
  {
    "url": "zh/index.html",
    "revision": "27a62e97ed5d136edef8b9609e7c74cb"
  },
  {
    "url": "zh/support.html",
    "revision": "f99db7471c626206ebdb5bf4df82b2bb"
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
