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
    "revision": "ee54560a8fc42c0c0e9cc5e65ae12140"
  },
  {
    "url": "about.html",
    "revision": "c6a2233a2db133bb80d59c76df192663"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b9a47229f8fc343bf316d24370c840b8"
  },
  {
    "url": "assets/css/0.styles.9db588da.css",
    "revision": "c279c4b44bd0eb8834a4874559bdf303"
  },
  {
    "url": "assets/img/deploy1.a60bcd59.png",
    "revision": "a60bcd597639b3d10a5834f3028bf0fd"
  },
  {
    "url": "assets/img/pwa.ef8c6556.png",
    "revision": "ef8c6556ff8a965f83a7b9eaac5c0e95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.966477d2.js",
    "revision": "8f917236d438d7f1e4e8a465dea4b682"
  },
  {
    "url": "assets/js/11.c1e60dd1.js",
    "revision": "cb2f715f4edc27085f1372180331f2f1"
  },
  {
    "url": "assets/js/12.ef5915b3.js",
    "revision": "f700d63a39df90d40081de22f8e7a725"
  },
  {
    "url": "assets/js/13.0839faed.js",
    "revision": "706f43e0500e1323c56f902766a19d8d"
  },
  {
    "url": "assets/js/14.e2e49f7a.js",
    "revision": "16f545f5d254a9888543255ac88d47a3"
  },
  {
    "url": "assets/js/15.110ffbaf.js",
    "revision": "5543175f15d0e9e0839961fe5523f70a"
  },
  {
    "url": "assets/js/16.895331e4.js",
    "revision": "55e6de4a27b30a4a28d9eaa229fee556"
  },
  {
    "url": "assets/js/17.852c8a34.js",
    "revision": "b238fb8a4d016db7e592081f6107460a"
  },
  {
    "url": "assets/js/18.c1eb0c91.js",
    "revision": "64f10fa1f1ff1b298f2225b9c41fd326"
  },
  {
    "url": "assets/js/19.202e972f.js",
    "revision": "4b1ef85452291effdd806c4d01919c71"
  },
  {
    "url": "assets/js/2.74069bf9.js",
    "revision": "01f61d3f88597a579c609434d8757525"
  },
  {
    "url": "assets/js/20.46f946f3.js",
    "revision": "fa79b58611c59b6ab6f359636a418ef5"
  },
  {
    "url": "assets/js/21.23141ea8.js",
    "revision": "541beca6dde1bb2d5f8fba024d8a28ec"
  },
  {
    "url": "assets/js/22.0711d4bd.js",
    "revision": "81a33f94e738b8fa32fc644be86f1037"
  },
  {
    "url": "assets/js/23.fa6efd17.js",
    "revision": "c2e63201309e749a0232493c930f46ad"
  },
  {
    "url": "assets/js/24.9fd268c2.js",
    "revision": "c990706a4dd66f90b88fc110197622ea"
  },
  {
    "url": "assets/js/25.9b9d2e50.js",
    "revision": "e03cbd9c101baf80f69f6f4ada9032c6"
  },
  {
    "url": "assets/js/26.671db004.js",
    "revision": "e1e1abf89d0ae5afd3e748bb018c4d0e"
  },
  {
    "url": "assets/js/3.78921c3a.js",
    "revision": "c242f13b122e6e9af433f93be332eb56"
  },
  {
    "url": "assets/js/4.9e8986bf.js",
    "revision": "5731a6fd1d35b2e7799d97e235a4938c"
  },
  {
    "url": "assets/js/5.a9dbf1ed.js",
    "revision": "ed4a00bac605dea82ec033490e7a7057"
  },
  {
    "url": "assets/js/6.a8dcb13d.js",
    "revision": "da2335bd58c9dfbf73e6cf7291a957e6"
  },
  {
    "url": "assets/js/7.30ccf9c3.js",
    "revision": "bf3c2df5e9b8f0dc8160d1e5839da9dd"
  },
  {
    "url": "assets/js/8.a1a79ff7.js",
    "revision": "ce7a3d2b023ec7f97f2d9ad6aa572ace"
  },
  {
    "url": "assets/js/9.1acdd930.js",
    "revision": "c14e5c1a2ebb83ec515307e93bfc0d21"
  },
  {
    "url": "assets/js/app.4b9f73a3.js",
    "revision": "54bbf4aa72c20131eb86ef314f9da8f8"
  },
  {
    "url": "games/snake.html",
    "revision": "a97735b3bb1f7d1eea1e5503d6d83628"
  },
  {
    "url": "guide/css.html",
    "revision": "ea43928f7b7d3d40363d8e502c9f6b51"
  },
  {
    "url": "guide/deploy.html",
    "revision": "636a85aea03ff45a172ff4b7fecbc908"
  },
  {
    "url": "guide/index.html",
    "revision": "1c64a7f46d69753481a2703fd3f4d5b4"
  },
  {
    "url": "guide/JavaScript.html",
    "revision": "f6e81c7f27214738e095814aac0faadc"
  },
  {
    "url": "guide/sql.html",
    "revision": "fd631ddd0df5cd0b7296e4b07b890c75"
  },
  {
    "url": "guide/TypeScript.html",
    "revision": "1e6877e91c6cac702ae20d133e062591"
  },
  {
    "url": "guide/vue.html",
    "revision": "efc6a490e528fea607ea68d5439dd874"
  },
  {
    "url": "guide/VuePress.html",
    "revision": "2bb32a419d486346a75fa18cd6c72670"
  },
  {
    "url": "guide/webpackTS.html",
    "revision": "26534d35aceaf0b4ed9d3babae96edf9"
  },
  {
    "url": "hero.png",
    "revision": "7aa9de2eb39ae3126a0f33bcc4fed559"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "7b6e353d127876073e88278416597ea7"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a77af568b10dbe0bba4434f69d7e1bdd"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "fa9a01269beab7e122e322d5b8dd97e9"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "13610a27a0c55a6cb78a8a554e998d78"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "d7d50ecaa8f816fce3117a5fcd64b781"
  },
  {
    "url": "index.html",
    "revision": "9e54e8f3f1578ecc752510cce034e3ff"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "news/index.html",
    "revision": "eb5bed4e27afbe6a3a41b567467c9670"
  },
  {
    "url": "tools/git.html",
    "revision": "0634b627d8cf603cbfd7e4f46badafd7"
  },
  {
    "url": "tools/index.html",
    "revision": "358d67128ccbbb4c2ad0c5003566758d"
  },
  {
    "url": "tools/npm.html",
    "revision": "3b05caf18998c99d722fa20cd62b9fc3"
  },
  {
    "url": "tools/regExp.html",
    "revision": "33cd87a604f2e601772f4e16c1e6ee73"
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
