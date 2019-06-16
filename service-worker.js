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
    "revision": "358c4d535e3f01e3eabf44e1ab3d503f"
  },
  {
    "url": "assets/css/0.styles.d2334894.css",
    "revision": "c1e6a2dcd690715ff1c74bf0f500848c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7e9ba447.js",
    "revision": "6c817c125aa568c3e1de2fa871e8a940"
  },
  {
    "url": "assets/js/11.9599aa46.js",
    "revision": "290037acdcc34e4afc750035e0793f9d"
  },
  {
    "url": "assets/js/12.9db55096.js",
    "revision": "c1c249e745f7dc750be33eb428635c6a"
  },
  {
    "url": "assets/js/13.a9da3c73.js",
    "revision": "b1d6f5726a2833ecb76351d4bf0e1b40"
  },
  {
    "url": "assets/js/2.9e704d64.js",
    "revision": "684d91cdc533ee735e1c1a174798d07b"
  },
  {
    "url": "assets/js/3.7c57b449.js",
    "revision": "90c0e64f8bf6ac2589b5fa17a5c805c1"
  },
  {
    "url": "assets/js/4.17430cde.js",
    "revision": "96c4dfdbb2abaf921bd78e81aa5a7813"
  },
  {
    "url": "assets/js/5.60a63446.js",
    "revision": "924f3153ac2d78db1094d2fb375d27b3"
  },
  {
    "url": "assets/js/6.0a958f91.js",
    "revision": "c0a821261de3805841b5f37b3ef98509"
  },
  {
    "url": "assets/js/7.070431b3.js",
    "revision": "3bb44852edee7178c3afdf9de4319427"
  },
  {
    "url": "assets/js/8.292bc362.js",
    "revision": "f8eaae474934816316772e76f3134ce7"
  },
  {
    "url": "assets/js/9.51ca288a.js",
    "revision": "271a95538930c8f7915cb3ce059facf8"
  },
  {
    "url": "assets/js/app.5c3599c3.js",
    "revision": "c60e32fccfa34aa33d3b534ad36772ab"
  },
  {
    "url": "ecosystem.html",
    "revision": "74d8191845867f913a88f59ba1ab64a0"
  },
  {
    "url": "index.html",
    "revision": "60a9b119908552be99ddf820438a426a"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "870e37fbb62b82fb97a289bf101c775d"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "26e29d09db4b922076dce087f107c699"
  },
  {
    "url": "zh/index.html",
    "revision": "a9165d71d108380b714c8f27bc6b74f8"
  },
  {
    "url": "zh/support.html",
    "revision": "5e5b6bf7e5b0d1fafa9ec414249fe0fe"
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
