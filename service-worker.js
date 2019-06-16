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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4316865071d484946a958121742e31b5"
  },
  {
    "url": "assets/css/0.styles.5677b0ce.css",
    "revision": "c1e6a2dcd690715ff1c74bf0f500848c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9aa4cc77.js",
    "revision": "2711bad4ecfe5f6b6d072cb6a07e147e"
  },
  {
    "url": "assets/js/11.ccc6c15f.js",
    "revision": "5c11bbd55f52b8d2295a5cf37e2a3919"
  },
  {
    "url": "assets/js/12.a4e790ac.js",
    "revision": "f1d30b4fa197287789c831064f9417b4"
  },
  {
    "url": "assets/js/13.a9da3c73.js",
    "revision": "b1d6f5726a2833ecb76351d4bf0e1b40"
  },
  {
    "url": "assets/js/2.48e42532.js",
    "revision": "684d91cdc533ee735e1c1a174798d07b"
  },
  {
    "url": "assets/js/3.7c57b449.js",
    "revision": "90c0e64f8bf6ac2589b5fa17a5c805c1"
  },
  {
    "url": "assets/js/4.67ec63dd.js",
    "revision": "48db692f73da3b892968eb5cf7447260"
  },
  {
    "url": "assets/js/5.707b2be2.js",
    "revision": "26ec8929e73527e013ba9fc4ce223582"
  },
  {
    "url": "assets/js/6.e871114b.js",
    "revision": "ae5f57cfc237392966df5ed0d18f924d"
  },
  {
    "url": "assets/js/7.35bbd1fd.js",
    "revision": "ab5f188baf73186a9e95e511987a31a6"
  },
  {
    "url": "assets/js/8.76e605a5.js",
    "revision": "bafd377b34cb6a0fafb205dbe7b49ba6"
  },
  {
    "url": "assets/js/9.44d81a20.js",
    "revision": "93479c47971eda359d7f900e3e08e225"
  },
  {
    "url": "assets/js/app.ed4665ff.js",
    "revision": "d1cf170cb107fb9a147a3900d6d6f7e2"
  },
  {
    "url": "ecosystem.html",
    "revision": "81b01a449dbf1edf765250de05ed6ea2"
  },
  {
    "url": "index.html",
    "revision": "9613dbe42d6ea4f74e7803c66035c0ff"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "0cf39cf3639e0974b0c7bda62903e802"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "5ceab26d1add5c7a7a1d4bcf2d7b68c3"
  },
  {
    "url": "zh/index.html",
    "revision": "f4c4c89ee96897aef9c5164af5366d6c"
  },
  {
    "url": "zh/support.html",
    "revision": "2926554f81150866914fcc7d875eeee5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
