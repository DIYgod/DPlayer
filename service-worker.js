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
    "revision": "0ba3307bae03b8c490b5fc7ec8c32557"
  },
  {
    "url": "assets/css/0.styles.f27854f6.css",
    "revision": "11521a70bfeb2652918523b1edd7c6c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.47e1c555.js",
    "revision": "1093dc5d154ddcd8631178f29ed7212c"
  },
  {
    "url": "assets/js/11.8467bfc4.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.f832bb81.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.5cf1cf67.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.dfac061e.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.0ec960be.js",
    "revision": "ef69f98383b25f26d9d12d4a53e6db40"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.ecefe7bc.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.43b5b994.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.4f6a35c5.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.0ddf0f5f.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.96e56ce6.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.dc27c7fb.js",
    "revision": "6ca152f516136ad4f5bf4c951660e43f"
  },
  {
    "url": "assets/js/app.e42989a1.js",
    "revision": "be664b7c262c52049e2387d0ec941341"
  },
  {
    "url": "ecosystem.html",
    "revision": "559aef865b4bc4508ca7d9cff234bbc2"
  },
  {
    "url": "guide.html",
    "revision": "082e7e9d4ef9954fbf9875a696a11ad2"
  },
  {
    "url": "index.html",
    "revision": "c26cd8e3320456473d5ab434019842e0"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "a5b89bcac07b86dfd8fa3249b407fe9c"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "bacd6b0735d770b61e0b496b54a64043"
  },
  {
    "url": "zh/guide.html",
    "revision": "7414b6b5d4aad7f4f9048e1ef56e4997"
  },
  {
    "url": "zh/index.html",
    "revision": "b5b8b569b40016eb1de9dcdfea4105b6"
  },
  {
    "url": "zh/support.html",
    "revision": "2eab23f3150a0d049c83ed06d8a00467"
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
