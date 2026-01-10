'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "efede09bd9337d8fc78f35cd0e67bd97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd04595806853c16797097e3d17717c7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78a2fd24aecbdea4b6e3c69b6fe80316",
".git/logs/refs/heads/main": "78a2fd24aecbdea4b6e3c69b6fe80316",
".git/logs/refs/remotes/origin/main": "068b57e4172b9359b3f73861519f7cda",
".git/objects/00/acb57b832b26d1d8e25f4d38d7117cc2f324e9": "615d732d1d456463122c2d4f36ad2d6d",
".git/objects/03/2376d618c82561053826c0e6bc504612d39aab": "31cdeb88d05e7e892d901b0ba7f5cb1f",
".git/objects/05/dfe893273cec1c309f2c7bae1f2943850bcc6e": "51fc396568980af1a7f6d0348689069a",
".git/objects/07/c72a67c8c015b5c93f06c7f74fb32cc01d01f5": "781bda83c9be9950f4fc358ba8d02544",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/12/aed01c1106156e4f663bc079981b04f3d3259b": "a3e25b0876ec7a292f3b56caa493ae6d",
".git/objects/17/3af96f10a34637ea6589743d81c2209fcda4c1": "85ee350ec41deeaa09c7b739c9d5f44f",
".git/objects/18/c92af20aa13e5483f325fdeb383090410a3a65": "0bcc1b96eb5e95e96872b660e70929e7",
".git/objects/1e/5175402cdc5018d57b00321ccbe5e64d4c953e": "d795cff17307837077a415d0646b20cb",
".git/objects/23/f4d4652b7c6dd2763572f9015242579fa53385": "d6ec283b23ad6de34ad865bf912074f3",
".git/objects/35/d735d09986110b35a5283653e77e81372d05bd": "4dab6fcbba439208d46831f655cebb17",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/5d11eb6f722f314a55edd557b421775d017678": "becfcd862bc3a011824c271d94d6c500",
".git/objects/43/6664ec8853331c63a8043723c4467fc507bf34": "badf3ec531dc9ac3e4671eb937667194",
".git/objects/48/fbd2ed7d54c2dc7bee08c2a761f8611f79c34e": "3ba1808925a81ebc0d726a61485ceeea",
".git/objects/4b/da8eee72877d6d73c6066f37c2c4f9e76a7334": "7c2b11eb7eab2764e783e495cd6cdae3",
".git/objects/4e/23d1d285ecb6f33ba10a01d1e52c9732d784ec": "038dbd8a7e1902a4ca0e48195663f243",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/dd4a9679b55171ce57875458cb582418c5e44d": "fcd638367c2aaaaf20abbc9b2858cdc3",
".git/objects/55/3b871c55409bbca8db5f1366205ee9424cb185": "906d17877876b1deb0d228c923528bb5",
".git/objects/5a/9011f3627a82f33fc23956887565fca7e3b032": "963c8e5e5f3e8909560e38a7d79a54e6",
".git/objects/61/661c0a601990ed354a967a1f0cf08aec400be5": "f3c63422cec740ee004e410a7f2c3622",
".git/objects/62/59db66bf53f65d876c1f5ffa287838cb604ba8": "2658a8d3f202f6406d7a6f39def269bf",
".git/objects/66/d2e0caafcb0763b5e5d156fbf8de1cd4f678ff": "55283e94976b29b6e146f557fb9c1bf4",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/9702ba49543d535b0cb0b31a0a766f8a1f8649": "69746965b7efe08a9a970fca5c9bcff5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/200a03ea24c4d95122e9a8ee73e8a332e12400": "48c37375e41af525b9870ea4a77659b9",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/c415b66e5243d7c575f9e33854a359c2c6858b": "d9d25cdd425a893fc4d907f0923b01de",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/95f05531764b375757d59b624d54ac1a44ede6": "9b6dd6e6ada2113611c76a31d36dca2b",
".git/objects/81/fd2ce861c74ba1548ed41f557e18b4b344631d": "ec7019a6521861bf6a8991c6dbbf154a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/c7e5540c7762de1a37e1e43c4e4ca0a256952a": "92895ebea3ca82a5f0b926189bb0aec6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4b7449ff21345696cb954e81690833caaad870": "b89e123e8d59565c01db383ee9021329",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/a93792cc5489f67b9988d69d1a5b8972bfbfda": "1e789d1338060399219b1c202b4f43f4",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9e/10aa35fbc9ca28a90cad436eea02507b0f349c": "221ce981cc92fb473635772944e5bf4f",
".git/objects/9f/bb0cdca3109ef380801c7db425667f7cc03b95": "9af44da57669dcc553962b4d47d6256b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/bf51085f0b3275193caee189e92bfccccbb772": "af831b0eb819162048acaa06ee834f46",
".git/objects/b0/591c10d8e2ad1d258095a92e4d0fde0050c803": "f292e39768eaeee0617cbd3e0d733f00",
".git/objects/b2/7d80b01ef4d3d0b8ece0141edc85f5267dd043": "c3112f60b810a22e8f1eefc7cd324d88",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/897ab0c34a1aa7ad5fbf4b703f2beb2031b6ee": "6abdead07d3175d1282be3f402aa57bd",
".git/objects/cf/5692adb3a965a9673a4efedbbfd50abe45c45a": "df2558b8b5fd0fa76c0eda812e45b7aa",
".git/objects/d1/2f05bc5f5c0dc1e45e6c2757deb71917cb8371": "faafc1b65a6fe76fcfbf45bcab954fc6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fefcfd49e922b7da5be2933d65892d7e946f0c": "541c3af0a0b9b5f2aea64efeb93ce876",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/ce9a2edcff08e61d574b971587a4faf2c694e1": "f09831b763919ced019853e74dfab401",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/fd1882b1143de8b37bbf47ded2fb3679a7c82d": "ee4c2fbf249b7a83f63de029ab7b4745",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/fec0f46b7589442ea9fdd3d7e6639fa042d4f9": "12ae9f9d4a55903a0140a7fce0c9ae07",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "9cf6622360fd9116aca41810ab815d90",
".git/refs/remotes/origin/main": "9cf6622360fd9116aca41810ab815d90",
"assets/AssetManifest.bin": "3ac219ccf4f031e5ef9f75f1caf6f087",
"assets/AssetManifest.bin.json": "854930c3cce3ba01c53a84e6552bd563",
"assets/assets/icons/neurovault_icon.png": "a2c8b7cf27d421f8caf048dd0b381b5f",
"assets/assets/models/embedding_model.tflite": "8535636ba9a86a30230a7d95d558511a",
"assets/FontManifest.json": "e8ffcdb543de3457df4202315dd59741",
"assets/fonts/MaterialIcons-Regular.otf": "4d08a25dc9a232e2da433d9208b5b7e2",
"assets/NOTICES": "c5cd712f2358ae0b7d2c09cd904c7dd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "165123cf809bb7cea0f60cdb8658f67a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_filter.frag": "7a69a481c4b01af713dc9d1ba40463fa",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_final_render.frag": "77416b256a173eb8a39a26e00899bc1a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_geometry_blended.frag": "884d38ba3a7ab0ab72a463611f229e53",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "243094a9effd3dc3eab4477146354266",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "c62d427003f203068f4b7120b1f83085",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "e9fb4792d10318116e8a3ea224ddb5e0",
"assets/packages/pdfrx/assets/pdfium.wasm": "e45b1bd7c49fb3c1b265367302856ed6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "adcae9fa02fc61df6c478f3a81275436",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "9ba6759a6a79d16f1e0499ad552326f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30f0c7b1abb354883b6099ef27ff71b0",
"/": "30f0c7b1abb354883b6099ef27ff71b0",
"main.dart.js": "4bd49f3b237f3c5dff9756f611b93c95",
"manifest.json": "a3f93c3dcb8d7df5575a44f04804c421",
"version.json": "4a5bf1af2c5503fd625cf32b39451d6c"};
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
