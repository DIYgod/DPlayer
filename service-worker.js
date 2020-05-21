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
    "revision": "8a8735962ddcccc1940a6c1f3f4596cb"
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
    "url": "assets/js/10.9ba5cb9b.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.b8466af3.js",
    "revision": "274a7eafa7d1265c4914addddbbe5e38"
  },
  {
    "url": "assets/js/12.e023b0de.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.fd140fb2.js",
    "revision": "187287fdedadf4147eef37ec8386566c"
  },
  {
    "url": "assets/js/14.be5427b7.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.b2709c0a.js",
    "revision": "c83fbbb3068838a4dc8d1d83bad28253"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.f72dec27.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.6950de50.js",
    "revision": "e3e2f087a4e39aea985661cbc349e8b6"
  },
  {
    "url": "assets/js/6.62b62e05.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.44570bf1.js",
    "revision": "5077c1c7987e842c2a661423f9486823"
  },
  {
    "url": "assets/js/8.881e3c93.js",
    "revision": "5d5ee321d5fdad58b6b4cd4a0888cd86"
  },
  {
    "url": "assets/js/9.c2d0664f.js",
    "revision": "74077d9e0d1f54d27c5eba508a321cc0"
  },
  {
    "url": "assets/js/app.79bf8d9a.js",
    "revision": "d5449effcd329735c87a6cb2876b274a"
  },
  {
    "url": "ecosystem.html",
    "revision": "ea4b738ee934577e0cd03008a2cbe948"
  },
  {
    "url": "guide.html",
    "revision": "21af4a2dafcbc4e6d57d2e2be601ff66"
  },
  {
    "url": "index.html",
    "revision": "44f7bbeb97d03e91a0f44234c37b0936"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "26eb1fd300d3c3b33721eb6de795ab6e"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "c5fb79bfaf10bcf2ebc4d1d01751a4cb"
  },
  {
    "url": "zh/guide.html",
    "revision": "a8b8e6f5023069375b9acfbbcd02221a"
  },
  {
    "url": "zh/index.html",
    "revision": "c4d7cc6755ec6a6666ea425505399ac3"
  },
  {
    "url": "zh/support.html",
    "revision": "3da97d7688309ccfb35d62592b88a6a2"
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
