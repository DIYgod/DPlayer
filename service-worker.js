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
    "revision": "192ee92b45d992dbb88ddd9925f42d4e"
  },
  {
    "url": "assets/css/0.styles.0d901613.css",
    "revision": "7306e270077c14d7828514b1c8b241ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.00067cb1.js",
    "revision": "2aaae67d5d787341d2cbb745292e3e3f"
  },
  {
    "url": "assets/js/11.2ce3b889.js",
    "revision": "092c3b668fd30e550ee9c3fc20384a73"
  },
  {
    "url": "assets/js/12.61926250.js",
    "revision": "d9597230cc2dafcfade8a3a2953d81eb"
  },
  {
    "url": "assets/js/13.34f0b29b.js",
    "revision": "ed44efc0081d233e3ce06cef50ea7987"
  },
  {
    "url": "assets/js/14.f7751f45.js",
    "revision": "a3dca97ceded66b55c022df8d76e473a"
  },
  {
    "url": "assets/js/15.b726ef97.js",
    "revision": "60014eaf60ad016d25c43777a2898d5c"
  },
  {
    "url": "assets/js/16.fe30d146.js",
    "revision": "b4c6f8ccde4e6362bce8acf83fddaeab"
  },
  {
    "url": "assets/js/17.cdc9b305.js",
    "revision": "9c2b8be32272eefda257f79f7d834250"
  },
  {
    "url": "assets/js/18.993ec4f7.js",
    "revision": "160707af5e80fa023ade13f508534498"
  },
  {
    "url": "assets/js/2.84dd0af2.js",
    "revision": "75650e6bb9d139e10228cf27dc5f41aa"
  },
  {
    "url": "assets/js/3.39748dbc.js",
    "revision": "44c8b54b20adc61bcb59932d9aeb18e4"
  },
  {
    "url": "assets/js/4.48498f46.js",
    "revision": "e80d71ca33b49d0fcd8a831d82e0210e"
  },
  {
    "url": "assets/js/5.1d34f339.js",
    "revision": "9dfc954d6f3bf4cc974bdd9a6da92a1e"
  },
  {
    "url": "assets/js/6.719e56b4.js",
    "revision": "faee7331f2292719ece914fbc10ff34f"
  },
  {
    "url": "assets/js/7.267a6475.js",
    "revision": "ef958c22a26ae7592f9b7b33bf470a77"
  },
  {
    "url": "assets/js/8.d6baaf9b.js",
    "revision": "12b3f6feecc494fe8226292d86459be1"
  },
  {
    "url": "assets/js/9.1c664cd1.js",
    "revision": "d335ce7e69f417f2146162359803c6a4"
  },
  {
    "url": "assets/js/app.d616f804.js",
    "revision": "44949bcf58fdc23b834271004d56375f"
  },
  {
    "url": "ecosystem.html",
    "revision": "30f807c548d63d4d5fd82761f4624d10"
  },
  {
    "url": "guide.html",
    "revision": "c36febbd93f867275492f0043372d97c"
  },
  {
    "url": "index.html",
    "revision": "aa5ba90dbf67e7841c998e0165562d67"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "394df5dba39b627a35a196b50778df2d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "ab105cceae57a3dde39e39a61cc0fb4a"
  },
  {
    "url": "zh/guide.html",
    "revision": "2eace7721530c48e0cf25bf34c3134e7"
  },
  {
    "url": "zh/index.html",
    "revision": "b1c1982429cdb9080bccc5e785fb1c15"
  },
  {
    "url": "zh/support.html",
    "revision": "49d368715d4667de7a10afded4adf737"
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
