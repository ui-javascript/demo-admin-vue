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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gulp-pwa-mpa"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_deprecated/circle-player-slider.html",
    "revision": "0fde0cb57fbbb436a006484c8b4863e7"
  },
  {
    "url": "_deprecated/nav-drawer.html",
    "revision": "035e7c5aed7f7673c3657bae7648cd7c"
  },
  {
    "url": "_deprecated/nav-step/css/component.css",
    "revision": "24af6e45140f30798c882c9e2e94863e"
  },
  {
    "url": "_deprecated/nav-step/css/default.css",
    "revision": "dc1358770c48b6bb1c1140da39ba5f5d"
  },
  {
    "url": "_deprecated/nav-step/index.html",
    "revision": "fb3d7c69964e0120c3201d47a98f1c93"
  },
  {
    "url": "_deprecated/nav-step/index2.html",
    "revision": "baf400e35401ef67cf9df76ab7c5028e"
  },
  {
    "url": "_deprecated/nav-step/index3.html",
    "revision": "d6df1736baed5513380c44db7cda0b7f"
  },
  {
    "url": "_deprecated/nav-step/index4.html",
    "revision": "d70445fac0f257e43c75a5cf90579d2f"
  },
  {
    "url": "_deprecated/nav-step/index5.html",
    "revision": "f06ae59d287d2ea9d81edf90594fc9d4"
  },
  {
    "url": "_deprecated/nav-step/js/jquery.dlmenu.js",
    "revision": "ec9a3119f840df4a2e6f7d06839c06b1"
  },
  {
    "url": "_deprecated/nav-step/js/jquery.min.js",
    "revision": "383771ef1692bfcc3f2b6917ca985778"
  },
  {
    "url": "_deprecated/nav-step/js/modernizr.custom.js",
    "revision": "3cc5ef14eaaca61a6ea6d88346815fb4"
  },
  {
    "url": "_other/cleanflat-gallery/css/general.css",
    "revision": "a8d89fd608f8339f9037ebd202f700c6"
  },
  {
    "url": "_other/cleanflat-gallery/css/owl-custom.css",
    "revision": "34a54d0a298e09e58466e3b4579b512a"
  },
  {
    "url": "_other/cleanflat-gallery/css/style.css",
    "revision": "10578b7c302b5d8038d9246be1d87346"
  },
  {
    "url": "_other/cleanflat-gallery/index.html",
    "revision": "b160409a54a668b75dd5189fc66de755"
  },
  {
    "url": "_other/cleanflat-gallery/js/jquery.corner.js",
    "revision": "0b49f1e2fda5a49ab364d0766ff30b86"
  },
  {
    "url": "_other/cleanflat-gallery/js/script.js",
    "revision": "beae481f8cf91c031fcd105b01970858"
  },
  {
    "url": "_other/cleanflat-gallery/js/uiMorphingButton_inflow.js",
    "revision": "c604f4f0bf3c4c0360e41a1ea6dcd5c3"
  },
  {
    "url": "_other/cool-js-dialog/css/rainbow.monokai.css",
    "revision": "65cffcb3132282dfbc7d5d9dde91dde6"
  },
  {
    "url": "_other/cool-js-dialog/css/style.css",
    "revision": "64a55d93c5cd3ab9255c611eeea4a8a3"
  },
  {
    "url": "_other/cool-js-dialog/css/x0popup.min.css",
    "revision": "01dc7726215ec9d38687c324d812bb6a"
  },
  {
    "url": "_other/cool-js-dialog/index.html",
    "revision": "9200080605150519b7316c3da991654e"
  },
  {
    "url": "_other/cool-js-dialog/js/rainbow.linenumbers.min.js",
    "revision": "3e93e13c5fecedd3ef860f16e69da1e4"
  },
  {
    "url": "_other/cool-js-dialog/js/rainbow.min.js",
    "revision": "1fc1c85cc3e1c612658cca9dc4bc42f0"
  },
  {
    "url": "_other/cool-js-dialog/js/x0popup.min.js",
    "revision": "fe152110036827c0c024568a86e5ac4f"
  },
  {
    "url": "_other/device-diff.html",
    "revision": "bf391333482174583fa1dccda0904628"
  },
  {
    "url": "_other/dialog-effects/cartoon.html",
    "revision": "532bc0ce3de2510f3802028ec0494d88"
  },
  {
    "url": "_other/dialog-effects/clones.html",
    "revision": "2b0fe4f51fe2b76030eff39aa61f7911"
  },
  {
    "url": "_other/dialog-effects/diamond.html",
    "revision": "37fb9e6f2b9922e4c97a6f6d6adf749d"
  },
  {
    "url": "_other/dialog-effects/fire-extinguisher.html",
    "revision": "60e3680a078b1a67ea490a5b8785c770"
  },
  {
    "url": "_other/dialog-effects/glitch.html",
    "revision": "ded95a726e07e59fb586e20c7a8f4518"
  },
  {
    "url": "_other/dialog-effects/gooey.html",
    "revision": "5e329d4f4af90a1143f94d635ec14f49"
  },
  {
    "url": "_other/dialog-effects/gummy.html",
    "revision": "dce09c7548c6492c479f3276c477c6cd"
  },
  {
    "url": "_other/dialog-effects/index.html",
    "revision": "92d00a9ca2e15d51a0fc3810652d039d"
  },
  {
    "url": "_other/dialog-effects/js/main.js",
    "revision": "72c126dd8837cf40ec7aab146d3d5ad3"
  },
  {
    "url": "_other/dialog-effects/js/modernizr.js",
    "revision": "e2baff1328a8a4d4205ec8bf04962ac0"
  },
  {
    "url": "_other/dialog-effects/kaleidoscope.html",
    "revision": "c89d6076085f48ed1a32e7e506074672"
  },
  {
    "url": "_other/dialog-effects/mirror.html",
    "revision": "33f2c67d74c91acc09aba3fe07ef89ac"
  },
  {
    "url": "_other/dialog-effects/scribble.html",
    "revision": "4e8b7edfd4ca5f3ab2f3a97d1b3452f8"
  },
  {
    "url": "_other/elasticity-slider/css/component.css",
    "revision": "ccfcfd7b1a4ccb5e941fb3d7c89a4a95"
  },
  {
    "url": "_other/elasticity-slider/fonts/feather/style.css",
    "revision": "7a95a2d50bbf92955ddccfca831f2e10"
  },
  {
    "url": "_other/elasticity-slider/index.html",
    "revision": "0243da6e7a8b45a4a0e295fd738cce77"
  },
  {
    "url": "_other/elasticity-slider/js/main.js",
    "revision": "ea84c5f8c6191c1224c50289f015a421"
  },
  {
    "url": "_other/fullpae-mask/css/demo.css",
    "revision": "7cff8bdda2a36856f11b92934581404b"
  },
  {
    "url": "_other/fullpae-mask/css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "_other/fullpae-mask/css/style1.css",
    "revision": "8759df595179cf1a7e4b5d287a5de19e"
  },
  {
    "url": "_other/fullpae-mask/css/style10.css",
    "revision": "04bf831dcb3320b2dae1b1342040efaf"
  },
  {
    "url": "_other/fullpae-mask/css/style11.css",
    "revision": "b3323fce3696286cc2261b3a8aa2d9eb"
  },
  {
    "url": "_other/fullpae-mask/css/style12.css",
    "revision": "976087403dbfc935ec2b6f87988163c9"
  },
  {
    "url": "_other/fullpae-mask/css/style2.css",
    "revision": "93fbfe66dff1adaf1b72ea4c38c4a21d"
  },
  {
    "url": "_other/fullpae-mask/css/style3.css",
    "revision": "6ff0e5131d6cef8632329c851e7b56db"
  },
  {
    "url": "_other/fullpae-mask/css/style5.css",
    "revision": "6dec117ce5156c6fe806eb2b39de30bb"
  },
  {
    "url": "_other/fullpae-mask/css/style6.css",
    "revision": "caeda1a041a1551665c67f2290657679"
  },
  {
    "url": "_other/fullpae-mask/css/style7.css",
    "revision": "2f45c04360772e7722c10e8f9cd39e70"
  },
  {
    "url": "_other/fullpae-mask/css/style8.css",
    "revision": "e20a079f516cda8fc8d831cb50331949"
  },
  {
    "url": "_other/fullpae-mask/css/style9.css",
    "revision": "d557935795d84be0b62efddd94c1cda8"
  },
  {
    "url": "_other/fullpae-mask/index.html",
    "revision": "bc7f8c906a8ccb41ada31b0fd5c9c63d"
  },
  {
    "url": "_other/fullpae-mask/index10.html",
    "revision": "8aa80710767866ab007cda4c172d647c"
  },
  {
    "url": "_other/fullpae-mask/index11.html",
    "revision": "2f35dda5b2ea5b7db30c58c83d015e4e"
  },
  {
    "url": "_other/fullpae-mask/index12.html",
    "revision": "b1d50093ba149931c5ffc95787cbdde0"
  },
  {
    "url": "_other/fullpae-mask/index2.html",
    "revision": "c84c697cb3bc24a9a19d3d86ade509fe"
  },
  {
    "url": "_other/fullpae-mask/index3.html",
    "revision": "3fe57fd49bf53a7d4a4424ea8b71cd0f"
  },
  {
    "url": "_other/fullpae-mask/index5.html",
    "revision": "185a71d0471ae284cca19b7184652010"
  },
  {
    "url": "_other/fullpae-mask/index6.html",
    "revision": "5aa3f2ba9ec25bf47e3305ec157f72f7"
  },
  {
    "url": "_other/fullpae-mask/index7.html",
    "revision": "7924edfeb139d971616ceda6fe0813ca"
  },
  {
    "url": "_other/fullpae-mask/index8.html",
    "revision": "516969abc55722f5622e1502df78d043"
  },
  {
    "url": "_other/fullpae-mask/index9.html",
    "revision": "f2708939e99dcbd8fa9d6b4f5154c92a"
  },
  {
    "url": "_other/fullpae-mask/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "_other/fullpae-mask/js/demo1.js",
    "revision": "b10b99482bb2ecc2725a608d3cad2ce1"
  },
  {
    "url": "_other/fullpae-mask/js/demo10.js",
    "revision": "08ce2715e094dc228749484bc3d73157"
  },
  {
    "url": "_other/fullpae-mask/js/demo12.js",
    "revision": "8eddcfa44ece924a31a519134ebd3131"
  },
  {
    "url": "_other/fullpae-mask/js/demo7.js",
    "revision": "6ea95530365cf61fb8b0e3af81ef343a"
  },
  {
    "url": "_other/fullpae-mask/js/demo9.js",
    "revision": "876b3b8a27ec8298444a716f0e0f61a4"
  },
  {
    "url": "_other/fullpae-mask/js/modernizr.custom.js",
    "revision": "dabcacf07db3d6aec740f2ea3513fa28"
  },
  {
    "url": "_other/fullpae-mask/js/snap.svg-min.js",
    "revision": "d22cfea4ec3c373bca85f8a4b4d535d1"
  },
  {
    "url": "_other/grid-card-layout/css/styles.css",
    "revision": "9033e7625b1a8ab0f991fb3b01c7dbbb"
  },
  {
    "url": "_other/grid-card-layout/index.html",
    "revision": "162b60b3821d5b0d92761e10dd44acdd"
  },
  {
    "url": "_other/grid-card-layout/js/main.js",
    "revision": "1a9ae28c1b364fc73135c01a97d3c387"
  },
  {
    "url": "_other/grid-card-layout/js/stopExecutionOnTimeout.js",
    "revision": "01c0a331480ea9f6a4a0bcf657c64db1"
  },
  {
    "url": "_other/multi-img-slider/index.css",
    "revision": "bdf97dbd20833e785d52e0bb4c05c825"
  },
  {
    "url": "_other/multi-img-slider/index.html",
    "revision": "c5397c83a43224a74bb0cec595c6fa34"
  },
  {
    "url": "_other/multi-img-slider/index.js",
    "revision": "64457cfa1e6bc6a996dedb2edc4c3834"
  },
  {
    "url": "_other/nav-follow-pure/css/htmleaf-demo.css",
    "revision": "90adc06bb23c5a43d4b67aa3d29e491a"
  },
  {
    "url": "_other/nav-follow-pure/css/normalize.css",
    "revision": "1676a7e96131ed11b019d843dae0105b"
  },
  {
    "url": "_other/nav-follow-pure/css/style.css",
    "revision": "6d72421fef8d0dcdb9b8d4c90d3a488d"
  },
  {
    "url": "_other/nav-follow-pure/index.html",
    "revision": "62f60056012ee8612f6c3ce454ee127c"
  },
  {
    "url": "_other/pull-menu/css/component.css",
    "revision": "af4f4ebb7054584cc4544cb67a53c348"
  },
  {
    "url": "_other/pull-menu/css/default.css",
    "revision": "1dca0100a939bcfbad46a3d3f7cf5f1e"
  },
  {
    "url": "_other/pull-menu/index.html",
    "revision": "bc20b106370ecf141baccfeb2d3515d0"
  },
  {
    "url": "_other/pull-menu/js/cbpHorizontalSlideOutMenu.js",
    "revision": "374bbc19464912dfd0765d8dc6aec10a"
  },
  {
    "url": "_other/pull-menu/js/cbpHorizontalSlideOutMenu.min.js",
    "revision": "ba21b157778552d802e7a1b98f3d4b71"
  },
  {
    "url": "_other/pull-menu/js/modernizr.custom.js",
    "revision": "0cb817fe3042cfa92174c7fb4a7d8317"
  },
  {
    "url": "_other/quote-slider/index.html",
    "revision": "ff818a752101878426488d36a05bcef5"
  },
  {
    "url": "_other/quote-slider/js/bocfe.js",
    "revision": "7cc4b25303f4e7645a1f712d3cf2e020"
  },
  {
    "url": "_other/quote-slider/js/jquery.transit.js",
    "revision": "cd447a62657bd1c55a39ed831f33cb71"
  },
  {
    "url": "_other/quote-slider/style.css",
    "revision": "a966e093e285d6c6086ed38676c87892"
  },
  {
    "url": "_other/tab-sexy/index.html",
    "revision": "f5a01fe17551768c8d4b1f5dd0ffd835"
  },
  {
    "url": "_other/tab-sexy/index.js",
    "revision": "c094695f366b3de544e050e71ea02fa4"
  },
  {
    "url": "_other/tab-sexy/style.css",
    "revision": "236249c09d07ed27864985d4de4a5266"
  },
  {
    "url": "ch1-layout/01-shape/shape-hex.html",
    "revision": "d744fd415f5ce2582beeece7c6421c1c"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/contact.css",
    "revision": "dd81bc23a806bfe586656b220f95c6f9"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/flexslider.css",
    "revision": "dbe22da7ceff1e24dd5a1dda887270e1"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/jquery.fancybox-1.3.4.css",
    "revision": "7647ee1840c81cf6f75c52a287d1f89a"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/print.css",
    "revision": "d120f93a969293095c2aacd8b1ce07cb"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/reset.css",
    "revision": "f7093db04dadd0954296eeb13ef4e03d"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/css/styles.css",
    "revision": "fa12284a42ff3f0478eed9ab3e689eb8"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/index-2.html",
    "revision": "dc98ee9ee20a20029f337522e83306d1"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/index.html",
    "revision": "3de6d778f54c4e268bd27cd5cae7b547"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/custom.js",
    "revision": "92d2c5c6192fb74149a688da42bca880"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/input.fields.js",
    "revision": "2ed6fcc3607fd04a7d43bbf18f5ff1f2"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery-1.7.1.js",
    "revision": "968e84789263b1e440f7cb4b9a07855a"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery-easing-1.3.js",
    "revision": "c1f9ce3b7ae378e2e50bc92e1e97e517"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.fancybox-1.3.4.pack.js",
    "revision": "36052538a27a6e87a8bfa325f0a966b2"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.flexslider-min.js",
    "revision": "4e3e36dbd0238f22fea1cfdcf19d0274"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.form.js",
    "revision": "8e77c035cbe6e74add350180f57a2188"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.gomap-1.3.2.min.js",
    "revision": "c0a3bd94fd076c62351785c2272a5b4e"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.isotope.load.simple.js",
    "revision": "0765db6f7bb498c9362da3653e146776"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.isotope.load.withflexslider.js",
    "revision": "a90e9a4dd13dc3651b3b83098861ce67"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.isotope.min.js",
    "revision": "fcb6952b7d208c7d6a76d2764984c879"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/jquery.jtweetsanywhere-1.3.1.min.js",
    "revision": "8916e9f950628a999b60b52556377ba0"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/modernizr.js",
    "revision": "50c97756108257db07a8154d53dd6112"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/responsive-nav.js",
    "revision": "d2d2c62e9bebb839cc4844a423039212"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/retina.js",
    "revision": "1fc3b0d9f12f50dd6c26d1b4d4905f80"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/js/stayOnTop.js",
    "revision": "128db8c59ccab36efa174d31da8ac422"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/single-post.html",
    "revision": "fed11e4210807b0fc742c775e476752c"
  },
  {
    "url": "ch1-layout/02-grid/black-gallery-demo/single-work.html",
    "revision": "6d5999b962c54b46849da2565a5d429f"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/css/component.css",
    "revision": "9d25c2752cd56aa72df4b36d9511ee99"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/css/default.css",
    "revision": "51b3d53ae11c36729cd7fb2cfaffa104"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/index.html",
    "revision": "676294246acb3be0e4adf12dd1b3a91c"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/index2.html",
    "revision": "7df0f9b2f88d9107c07e1570287f7847"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/index3.html",
    "revision": "f03730687e0c9cc596a5aafa36d79ae7"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/js/grid.js",
    "revision": "5942766678f6f34b27179d0844252cf8"
  },
  {
    "url": "ch1-layout/02-grid/google-grid-custom-layout/js/gridSelector.js",
    "revision": "f195e38558f0801fa190fee501cae7c6"
  },
  {
    "url": "ch1-layout/02-grid/layout-pills.html",
    "revision": "9be3b38f804e3f33801971c9d79eb6c0"
  },
  {
    "url": "ch1-layout/03-scroll/scroll-news-auto.html",
    "revision": "36595fe069131940786109694986b080"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/css/default.css",
    "revision": "12b3c66c7b402cb29693282ffd393f0a"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/css/reset.css",
    "revision": "0b0ba4d21e4c9ae9c934576fef3df565"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/css/style.css",
    "revision": "39ae9f067b9040217b147be29a9cda2d"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/index.html",
    "revision": "bc5436d4c24e24771b3120cc0877754a"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/js/main.js",
    "revision": "df17596f07a12717b599d08eec8e7e8e"
  },
  {
    "url": "ch1-layout/04-layout/nav-fullpage-slice/js/modernizr.js",
    "revision": "26ce1cd0cc8110b8fc398692fdb8b1e9"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/css/component.css",
    "revision": "efb83d8a3e024e166d51168a3a4f11db"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/css/demo.css",
    "revision": "0106d564715c023e67286e97e2abe79c"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/css/dragdealer.css",
    "revision": "642696204ce84b6333c2c1d04e418346"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/index.html",
    "revision": "7255e1ebeae0c9b1ff091e55a782e5bc"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/js/dragdealer.js",
    "revision": "8e3770764e08e87a9b20ca185d4adc77"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/js/dragslideshow.js",
    "revision": "f15fd99ec135eb54536943ffe11e0381"
  },
  {
    "url": "ch1-layout/04-layout/navbar-gesture/js/modernizr.custom.js",
    "revision": "439b8ae9fd3d2e0175b2979b105f120a"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/css/component.css",
    "revision": "a246da16d33110330ed6a4229a7ddef7"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/css/default.css",
    "revision": "edbc338a4d728bc1512e9d26ff2f3d9b"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/index.html",
    "revision": "1e613d8ee6ca5fbdf0fdcbe1939f82c7"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/js/css-filters-polyfill.js",
    "revision": "282131ef56e0dd4169a118a7babf5e7e"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/js/cssParser.js",
    "revision": "0b969b8353185f48fa431b7361a3d0d4"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/js/modalEffects.js",
    "revision": "6f43f0c511bdffe396b9a5cfebe57022"
  },
  {
    "url": "ch2-panel/01-layer/css3-layer/js/modernizr.custom.js",
    "revision": "69aeeea1add903dc60601b04f3e5bc22"
  },
  {
    "url": "ch2-panel/01-layer/layer-artcile.html",
    "revision": "7a390600a8ffe676e240aa92e4d54aad"
  },
  {
    "url": "ch2-panel/01-layer/layer-win8-metro.html",
    "revision": "30eb0471fe7762b8a12976be0bcf00b1"
  },
  {
    "url": "ch2-panel/01-layer/win7-layer/AeroWindow.css",
    "revision": "4b96edf71b1c7842778d238ed2fffb06"
  },
  {
    "url": "ch2-panel/01-layer/win7-layer/index2.html",
    "revision": "e00f1548690d0d9d5bf7f6a85bab89d1"
  },
  {
    "url": "ch2-panel/01-layer/win7-layer/jquery-AeroWindow.js",
    "revision": "acd0e3d824e90b1cf56fd645453a865b"
  },
  {
    "url": "ch2-panel/02-slider/csslider-text.html",
    "revision": "986548516ffccbfca00321d1f56f562a"
  },
  {
    "url": "ch2-panel/02-slider/flip-3d-slider.html",
    "revision": "74a2b5547ab94e798203b0745d960b63"
  },
  {
    "url": "ch2-panel/02-slider/fullpage-slider/index.html",
    "revision": "364e8556dcfecb6cdfc70be6945ccd50"
  },
  {
    "url": "ch2-panel/02-slider/fullpage-slider/styles.css",
    "revision": "ef6ae06b57ddf7bfc92ef759c63eb152"
  },
  {
    "url": "ch2-panel/02-slider/jflex-mobile-slider/index.html",
    "revision": "88dc55d961d9833c33f6581b7fda8007"
  },
  {
    "url": "ch2-panel/02-slider/lazy-load-slider/index.html",
    "revision": "792bbe93b46360db133d3235668bc6c9"
  },
  {
    "url": "ch2-panel/02-slider/lazy-load-slider/scripts.js",
    "revision": "98c9faca01ec252fd909d3a44cb54729"
  },
  {
    "url": "ch2-panel/02-slider/lazy-load-slider/styles.css",
    "revision": "7efd16419cc7eb735bf81b66e4c9d275"
  },
  {
    "url": "ch2-panel/02-slider/parallax-slider/index.html",
    "revision": "536852f1c709446287ce18f08c4743f5"
  },
  {
    "url": "ch2-panel/02-slider/parallax-slider/style.css",
    "revision": "35872be1f34d7d60c8d057cdb6951502"
  },
  {
    "url": "ch2-panel/02-slider/schedule-slider/index.html",
    "revision": "71dc75017588b2eabda9646fda9a4829"
  },
  {
    "url": "ch2-panel/02-slider/schedule-slider/script.js",
    "revision": "23eab37278e87c39c60308c4fd7778bb"
  },
  {
    "url": "ch2-panel/02-slider/schedule-slider/style.css",
    "revision": "3353f195b57de4335831de6b3c9cb006"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/index.html",
    "revision": "15833f8fde58dccbcbbe936059742c75"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/index.js",
    "revision": "003524217d56f73071bfcdd962861c93"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/slicebox/css/custom.css",
    "revision": "f8b5e964b06b0af7c5c436186757d137"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/slicebox/css/demo.css",
    "revision": "1cba8ee118ca749c8b733c71acc346fb"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/slicebox/css/slicebox.css",
    "revision": "85cfb5c21378c055bfeafe1b8140ab74"
  },
  {
    "url": "ch2-panel/02-slider/slicebox-slider/slicebox/js/jquery.slicebox.js",
    "revision": "249639ec70b7714558b62836ef1e67f5"
  },
  {
    "url": "ch2-panel/02-slider/slick-blurry-mobile-slider/index.html",
    "revision": "c145f3c03d523d3984064716e6f52051"
  },
  {
    "url": "ch2-panel/02-slider/slick-blurry-mobile-slider/style.css",
    "revision": "802acb81eb3f4aa3fa949e410dade012"
  },
  {
    "url": "ch2-panel/02-slider/slick-bounce-slider/index2.html",
    "revision": "164e3893a688599fbd2834960db15010"
  },
  {
    "url": "ch2-panel/02-slider/slick-bounce-slider/style.css",
    "revision": "ed0d8a88580ea78392107e49e9f9f596"
  },
  {
    "url": "ch2-panel/02-slider/slider-3d-sqrt.html",
    "revision": "b5ada10d8fd90aacf773cfb8760d7653"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/css/component.css",
    "revision": "72297f21268ab66b2aa8ca29b3b7c059"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/css/fxfullwidth.css",
    "revision": "d71075d701a2f1f0649b2073eccaeb97"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/css/fxsmall.css",
    "revision": "7a2cefb9c6b9414704ff586a63602fed"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/css/fxtransparent.css",
    "revision": "7a9d9aff28b272af7e4e10c3043442b0"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/index.html",
    "revision": "b75f316702759548391d95e723956359"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/index2.html",
    "revision": "abcfc78d99aa5fe69f0e6a42e64badbd"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/index3.html",
    "revision": "1fe3cbbe65ab20e27d6a70eae2af0a12"
  },
  {
    "url": "ch2-panel/02-slider/typical-css3-slider/js/main.js",
    "revision": "eebaaa8108f47a42f925c39bce2dc53d"
  },
  {
    "url": "ch2-panel/03-gallery/gallery-magic-3d.html",
    "revision": "a93cbb9b1a172cf533afebc21b2dffa3"
  },
  {
    "url": "ch2-panel/03-gallery/gallery-magic-3d.js",
    "revision": "ef3a76df62a6303b2f63555d2a24ea02"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/index.html",
    "revision": "6743618301c8ad029f296d4ebbababb0"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/dist/css/lg-fb-comment-box.css",
    "revision": "25e8091a25ca04062edc2f90d4579d8c"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/dist/css/lg-transitions.css",
    "revision": "f8229f2408731fa1969fffdd91a16e7a"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/dist/css/lightgallery.css",
    "revision": "2f6c42e52fa7cbba38222d90ad544377"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/dist/js/lightgallery.js",
    "revision": "532cd085f2fc5ddb2782731eed3073b7"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-autoplay.js",
    "revision": "11078ae9fc302a72a1a0ad719871bbb1"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-fullscreen.js",
    "revision": "53c9180c4f5766ed4b7d5eaf85d39c86"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-hash.js",
    "revision": "1a452ee7e7316ad36c4aa700744a21cb"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-pager.js",
    "revision": "ce2a22ec173d5110646a254ea3141301"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-share.js",
    "revision": "383f43dd1a7697c48852076702ce4d97"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-thumbnail.js",
    "revision": "fc6a68ba55063815aaf45d5b7e2a0629"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-video.js",
    "revision": "af37c7bae1b5d1e8e9b7d9ea4cd35ce1"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lg-zoom.js",
    "revision": "901d1407554692b3e6dad0b17ef11f90"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/lightgallery.js",
    "revision": "2cbc196f77009482db77063ef6439cb9"
  },
  {
    "url": "ch2-panel/03-gallery/preview-gallery/lightgallery/js/picturefill.min.js",
    "revision": "57bb1129ee989aaa9090076c1b25f3e8"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/css/layout.css",
    "revision": "37a97492344808d2cb3f500fdba1a543"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/css/skeleton.css",
    "revision": "b9bfa20704ccc62a29019bff584b209a"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/index.html",
    "revision": "2c58ecccd19fa35beec81491475df0e3"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/js/modernizr-2.6.2.html",
    "revision": "31c38e1d25d4f81eae485b8b1f351574"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/css/layout-white.css",
    "revision": "2af6a99858dc35025e6cf668c535031b"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/css/layout.css",
    "revision": "2d79129727b6b3a1bee2f505d65538f9"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/css/prettyPhoto.css",
    "revision": "b57fb1f87a48fd07de6143c213487567"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/css/skeleton.css",
    "revision": "b9bfa20704ccc62a29019bff584b209a"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/images/bg.html",
    "revision": "893a40c7439dca5a3e19ee03ddc5102c"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/index-video.html",
    "revision": "ee8e05e3d60c1a2b0faa9dfcf2e39712"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/index-white-video.html",
    "revision": "41e7593730cf77a9bc48153dca1e72fa"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/index-white.html",
    "revision": "077ccec3faeffa3c080c90c0c24cc323"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/index.html",
    "revision": "6b113debad7bb7654a2fd66e218a18ba"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/contact_form.js",
    "revision": "edd1b48f757cac3a81c32783c5db57d5"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/custom-video.js",
    "revision": "ff2f3bf8d2632e882d7460b01bc4a94a"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/custom.js",
    "revision": "59ef8b49246fe290a7a6e0d94da2e9d3"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/iOS-timer.js",
    "revision": "e2b0be033c24686782724274cd6544c3"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery-1.8.3.min.js",
    "revision": "e1288116312e4728f98923c79b034b67"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.easing.min.js",
    "revision": "ca422256d2ec39cea84a322b84c9bc0b"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.flexslider.js",
    "revision": "276d47794987d73a5ecaa65b4ce8d815"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.isotope.min.js",
    "revision": "00034d2fc61b1ab58e454ea8b26e9eb0"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.isotope.run.js",
    "revision": "dd1b31f8b785ccb49eb083c279e46c65"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.lazyload.js",
    "revision": "413d439de7171e5a19feff080be5e6f7"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.mb.YTPlayer.js",
    "revision": "6978d7056ab611a5e5b983399935bf48"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.mobile-touch-swipe-1.0.js",
    "revision": "48b96be5d6df47a5974d982dbd2bbe5c"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.parallax-1.1.3.js",
    "revision": "ea1a462a849b07c62ef24efdf4a7ee4d"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.prettyPhoto.js",
    "revision": "ed8d65bc67276b81da26465c9b3883b6"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/jquery.sticky.js",
    "revision": "02a0907231c32d1ad8cde24f5f77cede"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/modernizr-2.6.2.js",
    "revision": "ca6595ac4bbeaa92c82c4c3313cb0f4a"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/prefixfree.min.js",
    "revision": "fb349c56f1ed5a0d4222add194d74581"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/supersized.3.2.7.min.js",
    "revision": "e7f770300c417800721e9c45d31adbd1"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/supersized.shutter.min.js",
    "revision": "66a2f0ec269962e8430f6f3a5c34af94"
  },
  {
    "url": "ch2-panel/03-gallery/waterfall-gallery/templates/js/tooltip.js",
    "revision": "6111ee9a4f5953a00a32e338e660b46e"
  },
  {
    "url": "ch2-panel/04-mask/mask-pic.html",
    "revision": "9f039ece609635e3c1599a71a4f3358e"
  },
  {
    "url": "ch2-panel/04-mask/product-intro-remark/css/demo.css",
    "revision": "5084442037ab17bd8f2a2fb7ce071d4e"
  },
  {
    "url": "ch2-panel/04-mask/product-intro-remark/css/style.css",
    "revision": "1096d82f3c516c9e8d70c38dc296b338"
  },
  {
    "url": "ch2-panel/04-mask/product-intro-remark/index.html",
    "revision": "e18d317a039f9a930dd39a16211e2855"
  },
  {
    "url": "ch2-panel/05-notification/index.html",
    "revision": "bd35132324c77941801aff8d41ab7d89"
  },
  {
    "url": "ch2-panel/05-notification/notyf.js",
    "revision": "510392e2a217566d6719e0b2926cfda2"
  },
  {
    "url": "ch2-panel/06-accordion/accordion-flat.html",
    "revision": "777bd8793c197a2e073220bafbadf99f"
  },
  {
    "url": "ch2-panel/06-accordion/accordion-ribbon.html",
    "revision": "cf814b64d0be5eada66fd82a19ac8221"
  },
  {
    "url": "ch2-panel/06-accordion/accordion.html",
    "revision": "ddaa86eb6a7ff8963cd61d764dd797e4"
  },
  {
    "url": "ch3-nav/01-nav-typical/dropdown-menu-mall/index.html",
    "revision": "15c4511dc149087088581582b414ec48"
  },
  {
    "url": "ch3-nav/01-nav-typical/dropdown-menu-mall/style.css",
    "revision": "e2339e22ead2ae343c6a95b80f736ced"
  },
  {
    "url": "ch3-nav/01-nav-typical/nav-fixed-top.html",
    "revision": "3508fa62caa436e899134edb00743bc8"
  },
  {
    "url": "ch3-nav/02-nav-xy/nav-gn-menu.html",
    "revision": "0cb0b1b8f0de1869d3ecb3c645db081d"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/demo.css",
    "revision": "7413af2414c8377321538d64ac4f3730"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/icons.css",
    "revision": "3e8b5971010f7a244c3d92b0b24d346b"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style1.css",
    "revision": "0033ab43506b25199abeab90566d46c7"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style2.css",
    "revision": "4d2a0534dfe7953aa68ac1b8d5887b87"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style3.css",
    "revision": "560f821346cddf216ebf65212fd59bdf"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style4.css",
    "revision": "281fa72a56c74bdd713846650ff02848"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style5.css",
    "revision": "c67e7cb20a82bcc6cf485dd5ddf2ed11"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/css/style6.css",
    "revision": "00e72d12af1afd212106cd7a47836ef2"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index.html",
    "revision": "30a12665c7f427056c5fff16b7221eab"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index2.html",
    "revision": "a33ebbbe6f7fd66ad8a5f68272a016d0"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index3.html",
    "revision": "13a42e0cee62786506abae35a971c3f6"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index4.html",
    "revision": "dfc8b6b1f6b658dd0437fdfa8bc4b3a9"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index5.html",
    "revision": "ed76f193620c99eaf649aca47622afbc"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/index6.html",
    "revision": "c2d893605bb91999c9ddf08a31710011"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/js/borderMenu.js",
    "revision": "33bd9655b0f167c26957617f37da2e86"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-xy/js/modernizr.custom.js",
    "revision": "69aeeea1add903dc60601b04f3e5bc22"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-y/css/default.css",
    "revision": "a91228a1c1bdc7edde25ff1bcca7112b"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-y/css/styles.css",
    "revision": "dfacdd4d7a2e73569f8e8c03c6133457"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-y/index.html",
    "revision": "5c035a040a477cb639f96fcf2cd9983c"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-y/js/jquery-2.1.1.min.js",
    "revision": "e22f82a5194d1f03ecb712baad2df66c"
  },
  {
    "url": "ch3-nav/02-nav-xy/navbar-y/js/stopExecutionOnTimeout.js",
    "revision": "01c0a331480ea9f6a4a0bcf657c64db1"
  },
  {
    "url": "ch3-nav/02-nav-xy/pagination-y.html",
    "revision": "9b93dceb37c59c35cf9bc04a6f04b0a0"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/bubble.html",
    "revision": "d9cc9164300c9ee7361d3caa04eaab1f"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/cornerbox_nested.html",
    "revision": "fbb642d97b0463ded80b7804acfcf508"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/cornerbox.html",
    "revision": "696eb7db9666b2813f02bebbb76ef134"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/cornermorph.html",
    "revision": "0287a118ec68361fec2dde74a09ba1e1"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/demo.css",
    "revision": "b7c3c29e688c6ac37114f179766328fe"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_bubble.css",
    "revision": "6d09190e666a656186ccb6a55f295336"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_cornerbox_nested.css",
    "revision": "e1a73ccfc5840da09d50061d029d30b9"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_cornerbox.css",
    "revision": "6b2c10c2207f4251c8699f28f827bdef"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_cornermorph.css",
    "revision": "5265a69dfcbe95950bd2bab9bc60cff5"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_elastic.css",
    "revision": "631d8998a3db18f53645403d6cd82d96"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_sideslide.css",
    "revision": "2a56de410dcbd1a448245b6958759a1a"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_topexpand.css",
    "revision": "8efbf318a243721b993e01b6f1f6d86d"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_topside.css",
    "revision": "9bc65b399af02322f4192256199d8d1f"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/menu_wave.css",
    "revision": "5d620ac3c6cc93ad7b8270b8d8d01477"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/elastic.html",
    "revision": "c06f7360cee1346af572c4c2bb72b268"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/index.html",
    "revision": "9bead233fc5883185f4b2be26a470501"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/main.js",
    "revision": "aad1bd1f8e13ae242bdd7b0adbf848d1"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/main2.js",
    "revision": "9b8faee26d55876f7fb85acd8d852337"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/main3.js",
    "revision": "90ad552bcae6b83133b5a0fa1bed4d87"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/main4.js",
    "revision": "c8ec37de3d37736c5e4d50d265879f3a"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/js/snap.svg-min.js",
    "revision": "ac35d2a714a1996be3f24cbfa5bbf877"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/sideslide.html",
    "revision": "c05cf3165e7be8724f38bed6ce7b59e4"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/topexpand.html",
    "revision": "0e86cf1491213f0cbdce8b0eb86ff6c2"
  },
  {
    "url": "ch3-nav/03-sidebar/beautiful-animation-nice/wave.html",
    "revision": "3a4eedad26f40c369599d8c7e92ee41b"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/css/component.css",
    "revision": "529c1980b9cb2d94923e0c2c7a0b3f0b"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/css/default.css",
    "revision": "f4946257df0dde37384871ab75b534cd"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/css/demo.css",
    "revision": "045d4214f5203e08c5e6df1100bb96ee"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/index.html",
    "revision": "adde98b86d8c08ebfcff6bf50ca631f4"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/js/classie.js",
    "revision": "1173336587c5e5d6a7cf8ae3e6a23d25"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/js/main.js",
    "revision": "40970891414a553700b30b3966872d1b"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-pile/js/modernizr-custom.js",
    "revision": "ef08621517580b82690371ff9247a876"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-right-hand/css/styles.css",
    "revision": "e35a0f0beb56ccce3c6122e18825e833"
  },
  {
    "url": "ch3-nav/03-sidebar/navbar-right-hand/index.html",
    "revision": "00920a6102bc0678b2c6a21a7dd2c677"
  },
  {
    "url": "ch3-nav/04-animation/navbar-lean/index.html",
    "revision": "85775691e736a5b1060361f04f5374ac"
  },
  {
    "url": "ch3-nav/04-animation/navbar-lean/styles.css",
    "revision": "bcbaf64a055a6af92c428abca4ce8689"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/css/component.css",
    "revision": "296e5853501c26440c7e390cf0be93a3"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/css/demo.css",
    "revision": "511b9cb2097abeb33e588881cd5f74b9"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/css/icons.css",
    "revision": "248be373ce1ff1e9f0ca8b7216eeecc3"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/fonts/linecons/lte-ie7.js",
    "revision": "30a07fc86fcd259416d31eff0486b417"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/index.html",
    "revision": "11b7008f3c26e0e4dc76c93c6d105e8d"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/js/modernizr.custom.js",
    "revision": "6ecad16dfdffc2027af8a639421b8c92"
  },
  {
    "url": "ch3-nav/04-animation/navbar-open-animation/js/sidebarEffects.js",
    "revision": "d3ff1a41077c0696623e114437fe9d85"
  },
  {
    "url": "ch3-nav/04-animation/navbar-rotate-lean/css/styles.css",
    "revision": "71c11bd6050bc53cc0581d5a7817504a"
  },
  {
    "url": "ch3-nav/04-animation/navbar-rotate-lean/index.html",
    "revision": "eb76b8527ada8355eae2c90b2a0886d3"
  },
  {
    "url": "ch3-nav/05-tab/index.html",
    "revision": "8c34c55baef635f8cd8cee2566c0fa29"
  },
  {
    "url": "ch3-nav/05-tab/tab-pure.html",
    "revision": "99434ca7c58b15501bce367ff27571ba"
  },
  {
    "url": "ch3-nav/05-tab/tab-streamline/index.html",
    "revision": "5ebaa757da2580fdfd8f399cffea5858"
  },
  {
    "url": "ch3-nav/05-tab/tab-streamline/stopExecutionOnTimeout.js",
    "revision": "01c0a331480ea9f6a4a0bcf657c64db1"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/css/style.css",
    "revision": "0eda3d8de7414c0a02e0c541743dc2c7"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/css/style2.css",
    "revision": "4e94afbc95712d3eb2a830df0dac7ec5"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/css/style3.css",
    "revision": "13dc3964f9c00c01be5cceb59b834cf3"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/css/style4.css",
    "revision": "416a7fea01703011a0d8eed7a93ac38d"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/index.html",
    "revision": "2e9bb9f6684736179b83d7f4519b13b2"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/index2.html",
    "revision": "6104b305cc72d0f93ed1ac2147f07eb4"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/index3.html",
    "revision": "926e91a3d4acc6a3394b6df72d5a5734"
  },
  {
    "url": "ch3-nav/05-tab/tab-typical/index4.html",
    "revision": "3a1d278c815c64a030fc7e1de67e6705"
  },
  {
    "url": "ch3-nav/06-breadcrumb/breadcrumb-simple.html",
    "revision": "98fdaad8adabf82b9fef4c369fbdc3c2"
  },
  {
    "url": "ch3-nav/06-breadcrumb/breadcrumb-step.html",
    "revision": "d86d36edcd2724f9281841fe17317c5f"
  },
  {
    "url": "ch3-nav/nav-animate.html",
    "revision": "6878aee0b9923d7416fccc8c92bdeb97"
  },
  {
    "url": "ch4-table/02-pagination/pagination-mobile.html",
    "revision": "e3325b81f486fe462a17abe7889f15b4"
  },
  {
    "url": "ch4-table/timeline-slider/index.html",
    "revision": "28bc7309df707601892d23aa46aa20e8"
  },
  {
    "url": "ch4-table/timeline-slider/main.js",
    "revision": "0eb904e9b61216821601a3a64d77079b"
  },
  {
    "url": "ch4-table/timeline-slider/style.css",
    "revision": "b7bad23940087861f0e7c3f73843a69e"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/css/component.css",
    "revision": "0182fb17bd6e83fa9a5aa64a8a4f95ce"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/css/demo.css",
    "revision": "7e8fc9bc118aa8e70e005b3ecfe24921"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/css/icons.css",
    "revision": "480390f89af6fdad05651a7e922ca187"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/fonts/linecons/lte-ie7.js",
    "revision": "30a07fc86fcd259416d31eff0486b417"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/index.html",
    "revision": "907cd0b2df20b35410a02ba859737f2a"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/index2.html",
    "revision": "4eb0e37576893b94ff5ec91979f8817c"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/index3.html",
    "revision": "d5f6e659398a6502e36a994f6a167e5f"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/js/classie.js",
    "revision": "70fc7d9e10c107d1e20326108f5f5e1f"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/js/mlpushmenu.js",
    "revision": "62b085468fdcde77f2e48e299665f39c"
  },
  {
    "url": "ch5-mobile/multi-level-mobile/js/modernizr.custom.js",
    "revision": "6ecad16dfdffc2027af8a639421b8c92"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/css/component.css",
    "revision": "d3f6f948a50d09d70d0c92727f26c58e"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/css/default.css",
    "revision": "45ba11a7c4f3839ee6ae370675bc515e"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/css/organicfoodicons.css",
    "revision": "23022f68483760c7b3cc67ce579e4989"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/index.html",
    "revision": "42b758f565fc04749601fb42bb861766"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/js/classie.js",
    "revision": "1173336587c5e5d6a7cf8ae3e6a23d25"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/js/dummydata.js",
    "revision": "77b7fe03d652adb5c9c9f41409c1e79e"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/js/main.js",
    "revision": "8449b8209223ed75d4ab47dcbad8d1a0"
  },
  {
    "url": "ch5-mobile/navbar-beautiful-mobile/js/modernizr-custom.js",
    "revision": "badf1098c07bff5f311cafc2be93a70a"
  },
  {
    "url": "ch5-mobile/navbar-mobile/css/demo-1.css",
    "revision": "f5f2d8aa205ff18b66807af01d193361"
  },
  {
    "url": "ch5-mobile/navbar-mobile/css/demo-2.css",
    "revision": "9ce277de4a9b0e5277b7ab3001973e8b"
  },
  {
    "url": "ch5-mobile/navbar-mobile/css/demo-3.css",
    "revision": "0406431fe5698f135654bacf6b8999e5"
  },
  {
    "url": "ch5-mobile/navbar-mobile/index.html",
    "revision": "73f60b0fb6136be104d2e641a4b99831"
  },
  {
    "url": "ch5-mobile/navbar-mobile/index2.html",
    "revision": "9520cc3c1adee481057ba839758fbc79"
  },
  {
    "url": "ch5-mobile/navbar-mobile/index3.html",
    "revision": "0974f505fda5a99826bd40b769005b40"
  },
  {
    "url": "ch5-mobile/navbar-mobile/js/stopExecutionOnTimeout.js",
    "revision": "01c0a331480ea9f6a4a0bcf657c64db1"
  },
  {
    "url": "corner.js/index.html",
    "revision": "1ba8ffd02795ad14b34083242e87a788"
  },
  {
    "url": "layui-admin/index.html",
    "revision": "486b9acb2531fd53544ddfd681409ccf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, workbox.strategies.staleWhileRevalidate({ plugins: [{"cacheableResponse":{"statuses":[0,200]}}] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ plugins: [{"expiration":{"maxAgeSeconds":86400,"maxEntries":50}}] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, workbox.strategies.networkFirst(), 'GET');
