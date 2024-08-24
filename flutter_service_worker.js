'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5609d6784df5d2e2fce544e93aa40bc7",
"assets/AssetManifest.bin.json": "91d0ed1a7d0aff563411366acec060ba",
"assets/AssetManifest.json": "483d4af2cd6d538b0e16b8453b4a390c",
"assets/assets/gifs/loading_2.gif": "57615b8c0092a66c1d4058b1692955cc",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/github_svg.svg": "edd2906685e30d7b5ea8febe2a4bcec0",
"assets/assets/icons/gmail_svg.svg": "2677eee145226619d39e771d22a7ce2e",
"assets/assets/icons/linkedon_svg.svg": "700470459a2f1b3739b34a33b7af593d",
"assets/assets/icons/whatsapp_svg.svg": "c0c827f0a5a1f11bfdd8fc60a4087d5c",
"assets/assets/images/bg_10.jpeg": "3070f0eebacc3dbf36e10ba4720ee7a3",
"assets/assets/images/bg_11.jpeg": "6af2a2cec09a52d52461579cc5f5ae05",
"assets/assets/images/bg_2.jpeg": "b7cef4dfc78b61e79c7025156603537a",
"assets/assets/images/bg_3.jpeg": "73e78512d53d3196b3b55b7e0ba13794",
"assets/assets/images/bg_4.jpeg": "b501dbea7c236e5754a19c1c91eaeb53",
"assets/assets/images/bg_5.jpeg": "b3894595b25c0e4a3b2130e7df9c1d39",
"assets/assets/images/bg_6.jpeg": "51bf5be0447fc12f1f8af4915bae1e3b",
"assets/assets/images/bg_7.jpeg": "9f9ab4dbc366a13b82c025a2fdfe0a99",
"assets/assets/images/bg_8.jpeg": "2d9e0439beb3fefe2205822ae8bd03fb",
"assets/assets/images/bg_9.jpeg": "1cb5e7857e2e5367c31bfd7cf4597cc3",
"assets/assets/images/me_2.png": "8228ccc05212dc6b68c970e60b917f6c",
"assets/assets/images/project_1/img_%2520(1).jpeg": "0ca226f4df98957dd857c97a5f5a4f13",
"assets/assets/images/project_1/img_%2520(10).jpeg": "7b45d024d59520e6e6f25ab64b053944",
"assets/assets/images/project_1/img_%2520(11).jpeg": "15f3ffd434eca484fae0df3274dd5ff9",
"assets/assets/images/project_1/img_%2520(12).jpeg": "a38b4ec80e98cd13eb961e0289291360",
"assets/assets/images/project_1/img_%2520(13).jpeg": "b1e21c26d8399d416e31f54037cb9136",
"assets/assets/images/project_1/img_%2520(14).jpeg": "8c068d2280c16176802699d655d44648",
"assets/assets/images/project_1/img_%2520(15).jpeg": "38cb099b08cee43de8e5e1204b1bfadc",
"assets/assets/images/project_1/img_%2520(16).jpeg": "723c23ba0979ee31e0d5624715dce7e3",
"assets/assets/images/project_1/img_%2520(17).jpeg": "f7c07cb9a37f886f8e2a43d78efe0299",
"assets/assets/images/project_1/img_%2520(18).jpeg": "eb96c5617fdfd6405369511fec7a16c5",
"assets/assets/images/project_1/img_%2520(2).jpeg": "e673d9965e917ee3703017cd70e45178",
"assets/assets/images/project_1/img_%2520(3).jpeg": "a58c5ee02798ca5abadefdb36da66d5a",
"assets/assets/images/project_1/img_%2520(4).jpeg": "334c2a4f4e50f512efb8e4cbb6084da2",
"assets/assets/images/project_1/img_%2520(5).jpeg": "bf9da23c5f72034c200e7fc534550df8",
"assets/assets/images/project_1/img_%2520(6).jpeg": "ee9dcb2ed7b37456658f2293e218d150",
"assets/assets/images/project_1/img_%2520(7).jpeg": "f38d04f44899727bf47c314891c2e9e8",
"assets/assets/images/project_1/img_%2520(8).jpeg": "2822784900b6e74dde05b193d0145930",
"assets/assets/images/project_1/img_%2520(9).jpeg": "b0e666f18f6610b4ed9a49cde536ba0d",
"assets/assets/images/project_2/img_%2520(1).jpeg": "757b542d9e4f3a2ec9254bf761949d06",
"assets/assets/images/project_2/img_%2520(2).jpeg": "614831541883c90b1f6cc497ecf8a454",
"assets/assets/images/project_2/img_%2520(3).jpeg": "fabd9f5e663fe4f8d7a31e611e262224",
"assets/assets/images/project_2/img_%2520(4).jpeg": "76030333bf28ac8819f69558b837c6b0",
"assets/assets/images/project_2/img_%2520(5).jpeg": "4674f519bc2db3a84fedcb3e7b2ad92c",
"assets/assets/images/project_2/img_%2520(6).jpeg": "5742a69103294ace085db90e0e9ba3ba",
"assets/assets/images/project_2/img_%2520(7).jpeg": "9109d74c428ddc5a2073fb320df8d2f0",
"assets/assets/images/project_2/img_%2520(8).jpeg": "acc7e2c114fdfc0c558f2e84c95a6311",
"assets/assets/images/project_3/img_%2520(1).jpeg": "2afb689186b042fad840624d221593f0",
"assets/assets/images/project_3/img_%2520(2).jpeg": "f16dcfc4b057f9c584c9b74fba7b9c84",
"assets/assets/images/project_3/img_%2520(3).jpeg": "089aa6b359e19f2651907455e8a498f3",
"assets/assets/images/project_3/img_%2520(4).jpeg": "c75da90c44a362f319deb1c5c8d8a29c",
"assets/assets/images/project_3/img_%2520(5).jpeg": "606fb657c86bbcd8333d496b764d0abf",
"assets/assets/images/project_3/img_%2520(6).jpeg": "5a28637e98a5b8857aa37aa5e6021823",
"assets/assets/images/project_3/img_%2520(7).jpeg": "7d8c29e0d6b6267406fd8019149d9e9c",
"assets/assets/images/project_4/img_%2520(1).jpeg": "25d5671c3603c0614549246e3183d51c",
"assets/assets/images/project_4/img_%2520(2).jpeg": "9753df2618d253b73dd4f24a39b8f3d4",
"assets/assets/images/project_4/img_%2520(3).jpeg": "cdfb10b3a000eaf159c4814795990d00",
"assets/assets/images/project_4/img_%2520(4).jpeg": "4e4c4a2ec968054feb3871f740cd97b2",
"assets/assets/images/project_4/img_%2520(5).jpeg": "c596074a9c082dfd0e7fef56997f89e1",
"assets/assets/images/project_5/img_%2520(1).jpeg": "b70069369d125513f4ebcecbc54952b5",
"assets/assets/images/project_5/img_%2520(2).jpeg": "ba8b8e008f4a54c698825d64884a9f9d",
"assets/assets/images/project_5/img_%2520(3).jpeg": "a0e2b2bb17f8ca3c27f262f98229e995",
"assets/assets/images/project_5/img_%2520(4).jpeg": "bbd5470c899d95b6a2fa843fec5710de",
"assets/assets/images/project_5/img_%2520(5).jpeg": "07dfbd11b3706525207ec6143f7d0878",
"assets/assets/images/project_6/img_%2520(1).jpeg": "088385582f1ac0ae55529b6c4508ea41",
"assets/assets/images/project_6/img_%2520(2).jpeg": "162e37c6ed38d94d31feedc48ca40e03",
"assets/assets/images/project_6/img_%2520(3).jpeg": "dd1bbb5b78401055d6126250b7c4a945",
"assets/assets/images/project_6/img_%2520(4).jpeg": "fde957f97b32a6b05542b6c9447e981f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "088031cb38655f06a9b9e35adf8865e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c5473fd29e179c50641b964eb739706c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b2d2dec02ea3b852f6e5cb0b80e7888b",
"icons/Icon-192.png": "d17f849e8043fa5f4ae9864a2c45c812",
"icons/Icon-512.png": "c3adc2e1591e844763e68903753c3773",
"icons/Icon-maskable-192.png": "d17f849e8043fa5f4ae9864a2c45c812",
"icons/Icon-maskable-512.png": "c3adc2e1591e844763e68903753c3773",
"index.html": "21566351de3298f771e20e65bda9bfb3",
"/": "21566351de3298f771e20e65bda9bfb3",
"main.dart.js": "ebfa12d5cbab0b6070e8b5b11c66d4dd",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
