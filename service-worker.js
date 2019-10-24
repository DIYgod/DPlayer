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
    "revision": "b626358ad0e6b5c3fa3ca788f2da96b8"
  },
  {
    "url": "assets/css/0.styles.85854fc7.css",
    "revision": "0c366b78289a15eaac3608b7fca7eb3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.298c4c35.js",
    "revision": "24909a0f25ff8109fad629d9f32b7b18"
  },
  {
    "url": "assets/js/11.45cf3f6d.js",
    "revision": "e4df946dc571f6b0333f8f1c8f3252af"
  },
  {
    "url": "assets/js/12.7da793bf.js",
    "revision": "e81ca499b5bfc8d38d19e67a38972d88"
  },
  {
    "url": "assets/js/13.fae01fee.js",
    "revision": "151d5e79f6174d4bee869ba8ba20e508"
  },
  {
    "url": "assets/js/14.b7f2f039.js",
    "revision": "18eb6edf4e00f18a5bf2648ab6053288"
  },
  {
    "url": "assets/js/15.477f5372.js",
    "revision": "e805e8869d8533d56b457781d0e67e79"
  },
  {
    "url": "assets/js/2.cf3d61c6.js",
    "revision": "607f7371abacc4c2618bd682237d9775"
  },
  {
    "url": "assets/js/3.facc44f5.js",
    "revision": "3774a3ee4e0ea1bb5ab1c3f80f90dfae"
  },
  {
    "url": "assets/js/4.6f2707da.js",
    "revision": "9134077ec20d3d2aaf51c25e684a2181"
  },
  {
    "url": "assets/js/5.8d7c9dcb.js",
    "revision": "c58fa29211ea33e35abc04d5d9a5f30b"
  },
  {
    "url": "assets/js/6.9b783f0c.js",
    "revision": "243ec6f0bcb942254adfa7624767eee5"
  },
  {
    "url": "assets/js/7.7368ee58.js",
    "revision": "6807067ebd0b2115966918868f9e1e42"
  },
  {
    "url": "assets/js/8.cdbd5c78.js",
    "revision": "9037067dcb4f230cd6e1d0c5cb389557"
  },
  {
    "url": "assets/js/9.99a9a83a.js",
    "revision": "5733a60db77fdbfe498061b7c3f69f81"
  },
  {
    "url": "assets/js/app.bc70bd02.js",
    "revision": "5efb3c1e5f862bf4a189c789d51bea48"
  },
  {
    "url": "ecosystem.html",
    "revision": "ac582674c4e26573b456500b9507eeb0"
  },
  {
    "url": "guide.html",
    "revision": "d66ecd5654ac37204c7e276ba95bc5af"
  },
  {
    "url": "index.html",
    "revision": "83a95e077e8f5343b5af0ba7c2404633"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "93c83533486abf413ed5bee1e9a3ab59"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "3e2c8f7dae33f4d98aa9180a71d2c22d"
  },
  {
    "url": "zh/guide.html",
    "revision": "819663820c31b7788ff031c0a533a6fb"
  },
  {
    "url": "zh/index.html",
    "revision": "8767463ea669afaf2e74679ea3ee93f3"
  },
  {
    "url": "zh/support.html",
    "revision": "17c18eefe80b7b02d77bda34c8bbf89d"
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
