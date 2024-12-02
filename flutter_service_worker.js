'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "383574c5d188873805a917264031c125",
"assets/AssetManifest.bin.json": "4dd0abcdf87ef154cefdefd525a387c1",
"assets/AssetManifest.json": "6939ec6ab0cb4a1f0e1e135df872a6f3",
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
"assets/assets/images/project_6/img_%2520(1).jpeg": "8d2a74d9c1979308f206b334d4ec244b",
"assets/assets/images/project_6/img_%2520(10).jpeg": "6514780dea3d93645aa93455c28e32d5",
"assets/assets/images/project_6/img_%2520(11).jpeg": "f61f95235801a1a7b7f4469c8e2cb9c2",
"assets/assets/images/project_6/img_%2520(12).jpeg": "611a673e2ecb3900fcf1174fad8474ba",
"assets/assets/images/project_6/img_%2520(13).jpeg": "06c7eb7f37610f45fdb66013b094b1ad",
"assets/assets/images/project_6/img_%2520(14).jpeg": "b10ad740f5a0f442e906cacfc8296c51",
"assets/assets/images/project_6/img_%2520(15).jpeg": "518ddf8ab981fa47c27bc659a76bba45",
"assets/assets/images/project_6/img_%2520(16).jpeg": "300f0d51150cf43c41839a0a40d8d314",
"assets/assets/images/project_6/img_%2520(17).jpeg": "c045086fbf220620a61ca6de61870594",
"assets/assets/images/project_6/img_%2520(18).jpeg": "d44a84e172d1120294812327fc643a55",
"assets/assets/images/project_6/img_%2520(19).jpeg": "8980f3d5677601a116338217f84b20f2",
"assets/assets/images/project_6/img_%2520(2).jpeg": "015e3ebb89d4aef21901155164e5ecba",
"assets/assets/images/project_6/img_%2520(20).jpeg": "3544ecd53725091edb386810772ba7ff",
"assets/assets/images/project_6/img_%2520(21).jpeg": "ebb224b38528a417720c992fca4a82ee",
"assets/assets/images/project_6/img_%2520(22).jpeg": "919fcb435d4f79681cf8169ab9857814",
"assets/assets/images/project_6/img_%2520(23).jpeg": "a45496ac5a35190a19cf655105e8a9ab",
"assets/assets/images/project_6/img_%2520(24).jpeg": "bf5c06c02f0eb075ec85a1996a61588c",
"assets/assets/images/project_6/img_%2520(25).jpeg": "ea38da6be3d7dc797c49fb622a09c112",
"assets/assets/images/project_6/img_%2520(26).jpeg": "88d26c0e6c4156dae356e771bfa720d9",
"assets/assets/images/project_6/img_%2520(27).jpeg": "af8ab5e44231edf9f3a36c2f45ad9136",
"assets/assets/images/project_6/img_%2520(28).jpeg": "7c865555c857eb2d3080f4116227272f",
"assets/assets/images/project_6/img_%2520(29).jpeg": "d1392fe1927593c9d268d77a4958f283",
"assets/assets/images/project_6/img_%2520(3).jpeg": "9bb733c8f67c651029f195df6c47627e",
"assets/assets/images/project_6/img_%2520(30).jpeg": "0c3a92c4438885bba50e2351656e32b7",
"assets/assets/images/project_6/img_%2520(31).jpeg": "132f3c1da79b54bd830dba0837c0fdee",
"assets/assets/images/project_6/img_%2520(32).jpeg": "c0cbe760964edbc95677f81847c7bb58",
"assets/assets/images/project_6/img_%2520(33).jpeg": "11485374b0d1b4534365b831a694314f",
"assets/assets/images/project_6/img_%2520(4).jpeg": "162cfba4a6b19eec7cc5a46991a1843a",
"assets/assets/images/project_6/img_%2520(5).jpeg": "f0ad84d05f527f9efd6a9a48a6e53b3d",
"assets/assets/images/project_6/img_%2520(6).jpeg": "97c6f6a81e4c2a7b867ccc449ee5e4f6",
"assets/assets/images/project_6/img_%2520(7).jpeg": "adbbad434f4932f4014d438c7445ea37",
"assets/assets/images/project_6/img_%2520(8).jpeg": "7b7e79d5d51bf4680099499290e9fa79",
"assets/assets/images/project_6/img_%2520(9).jpeg": "a61f457cb47a82ece11ce5eb9971d004",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "99a1b7620f2d3c920b18c0f5166f4051",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c5473fd29e179c50641b964eb739706c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3ee643f39790b4fcba7fdd65198a480d",
"icons/Icon-192.png": "d17f849e8043fa5f4ae9864a2c45c812",
"icons/Icon-512.png": "c3adc2e1591e844763e68903753c3773",
"icons/Icon-maskable-192.png": "d17f849e8043fa5f4ae9864a2c45c812",
"icons/Icon-maskable-512.png": "c3adc2e1591e844763e68903753c3773",
"index.html": "c9660f2ccd5688413e427119ef995098",
"/": "c9660f2ccd5688413e427119ef995098",
"main.dart.js": "845a76576dc603c4817b8499370d20fe",
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
