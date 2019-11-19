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
    "revision": "74e34d888f52e5b605a7bfad2f326d63"
  },
  {
    "url": "assets/css/0.styles.34ca1537.css",
    "revision": "0545017035c60b27c7f94600e93eee42"
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
    "url": "assets/js/app.eddae341.js",
    "revision": "086fb65b87bbdeb01e1c57b527729d61"
  },
  {
    "url": "ecosystem.html",
    "revision": "96b59e8cacd775ac72e7152313f0da1c"
  },
  {
    "url": "guide.html",
    "revision": "4a068f2b4fdf87624b5aff86052d6032"
  },
  {
    "url": "index.html",
    "revision": "9958e5e43b8a649da92d7bd5ba5b28ea"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "e9f812f5d64015fe071ed1aa8fea65b7"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "e4eb010da7dab77384776ed7538989a2"
  },
  {
    "url": "zh/guide.html",
    "revision": "b1af2b7c043a8c72f3c7a30e51919189"
  },
  {
    "url": "zh/index.html",
    "revision": "b541483efdc59dbe68dd6c13dbfa49d3"
  },
  {
    "url": "zh/support.html",
    "revision": "e3a031cf1dbf46f47df7287d9e3c8749"
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
