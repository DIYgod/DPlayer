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
    "revision": "bf23de80c251def3450a422fa854990c"
  },
  {
    "url": "assets/css/0.styles.5f20ea74.css",
    "revision": "0076add97ca94ef83edf37d04977097b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2baf3d6b.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.45b13a4f.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.c488cb95.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.d4b567c4.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.4786e05b.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.61da0266.js",
    "revision": "c83fbbb3068838a4dc8d1d83bad28253"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.cad65934.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.95b6bbdf.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.133a82ce.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.c8c470cc.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.d03a3b1d.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.6d30e41e.js",
    "revision": "51342f409200508815e10c763f1c08ef"
  },
  {
    "url": "assets/js/app.83514d22.js",
    "revision": "1cb35c5702bb4a43e48ded996d1137d4"
  },
  {
    "url": "ecosystem.html",
    "revision": "c5edf1b8506ea7f6cc7bfcd5b035f6a8"
  },
  {
    "url": "guide.html",
    "revision": "154783862bb2e4f12190102461ca8812"
  },
  {
    "url": "index.html",
    "revision": "86b0589f2fddb0eca9edacb85602bdb3"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "0a49011447ec2bba650ff17029b91b12"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "f56043f655f67d217b536fa388e94297"
  },
  {
    "url": "zh/guide.html",
    "revision": "77287afae689e70187bfff64ff4c7565"
  },
  {
    "url": "zh/index.html",
    "revision": "1020aeda8644031de8f3524dd8d0613d"
  },
  {
    "url": "zh/support.html",
    "revision": "718ad8d1c770a24782f9ddb8bed37e10"
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
