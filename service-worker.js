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
    "revision": "b14c5ef522ea19fbd3b2151dd9835e47"
  },
  {
    "url": "assets/css/0.styles.fda0cbbe.css",
    "revision": "477d89bb4d11f72a82982b686895b2b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b6363294.js",
    "revision": "28a471850e5a583fcea502ecb2f05e9c"
  },
  {
    "url": "assets/js/11.659a3afe.js",
    "revision": "b436c4c7c18364a788e7ff3ef2cfb232"
  },
  {
    "url": "assets/js/12.e2138564.js",
    "revision": "3374203be4fc03c17b48632df2a2dabc"
  },
  {
    "url": "assets/js/13.c0de04eb.js",
    "revision": "4c6f4a6c45b4444d4cd556245d696d17"
  },
  {
    "url": "assets/js/14.2951094a.js",
    "revision": "a90f670f15b0d0fd7be52600dd89c73d"
  },
  {
    "url": "assets/js/15.9d34509b.js",
    "revision": "57f5874d6df7ad974a497257504f5323"
  },
  {
    "url": "assets/js/16.aa9d4236.js",
    "revision": "994de28acfd1f11df55859c14866cec2"
  },
  {
    "url": "assets/js/2.dfbcce04.js",
    "revision": "3bdc2ee13268a1f5aa1f3019945a675b"
  },
  {
    "url": "assets/js/3.60e1acb9.js",
    "revision": "59ee34152afd91de1f846297525e8c2b"
  },
  {
    "url": "assets/js/4.7345b3d3.js",
    "revision": "2fa132515e3b0a4ba1cc77bda1a2bca3"
  },
  {
    "url": "assets/js/5.6d4e0b79.js",
    "revision": "843d4381c85cdcaf856f63a739cdf3d4"
  },
  {
    "url": "assets/js/6.21313b9a.js",
    "revision": "c3cd1358bffcf8a2bf07ae8561c7479d"
  },
  {
    "url": "assets/js/7.d9a57877.js",
    "revision": "557418d2d6ccd934a856942abd460cb5"
  },
  {
    "url": "assets/js/8.7e6dbd5f.js",
    "revision": "3127739c9ab1016201fd9791d24a84cd"
  },
  {
    "url": "assets/js/9.09ef8986.js",
    "revision": "bd065e351b7433c3ca26adca10bf1d3e"
  },
  {
    "url": "assets/js/app.46b3f53d.js",
    "revision": "844c18f0e45cd03299bc17d4f88c424c"
  },
  {
    "url": "ecosystem.html",
    "revision": "b42a03d3cbcbe3eae6d41a168ee58019"
  },
  {
    "url": "guide.html",
    "revision": "d6938b8f5b2b771e86d65bb372bbe9b3"
  },
  {
    "url": "index.html",
    "revision": "9e2fcff76b2c0ce6cdb8006b40fcd4a4"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "341faa436cd05943ee0fd0dea781114a"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "9c6d1fded9f78e8b2a1699ed9728e6fe"
  },
  {
    "url": "zh/guide.html",
    "revision": "5db02d5b8366a1008b90334affcce214"
  },
  {
    "url": "zh/index.html",
    "revision": "15b0abaa30d456a0f543283aeff94e51"
  },
  {
    "url": "zh/support.html",
    "revision": "9d22c9d267dd1b404ae4ec8728ae7311"
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
