'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "2738a013293613a73ccd96c990a79afb",
"version.json": "c776ebc03e4b846a86648f6233675005",
"favicon.ico": "35f3310706218efa0d99e33d2927a59f",
"index.html": "01d0ee9661a7614e68fbbcf8a46295d1",
"/": "01d0ee9661a7614e68fbbcf8a46295d1",
"android-chrome-192x192.png": "e5cea32cab3bae2efc9df6755872cae1",
"apple-touch-icon.png": "d31df673143dff45bac6a429cacf8856",
"main.dart.js": "84a633d83a2067e31136889b9a57e5ee",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"android-chrome-512x512.png": "d0f2dfcabfbf996c45b27fa2d64d337b",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3a8c6c9dc349329e26b04304641bc62",
"assets/AssetManifest.json": "41ebfc824f89f6fb30b77a0ff95fee84",
"assets/NOTICES": "7c5c6f77ce9649327cef6b306e456608",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Dashboard.png": "4ffca7c1b88d1c04959f9ef4912b8486",
"assets/assets/images/wallet.png": "2f95802289aa308921937ee17cec3b45",
"assets/assets/images/growgreen_9.png": "2b21d36150e5af1c01a4892e7b2083f4",
"assets/assets/images/download.png": "3278aa9139011527c8446a3f2fd117be",
"assets/assets/images/playsafe_3.png": "a8b95e8a3dee56460b174568b9fefa74",
"assets/assets/images/growgreen_8.png": "51b03658ab24bb86293276cac4bfbce3",
"assets/assets/images/Games.png": "e2c23a555133e029557f3b19f7fc0bd3",
"assets/assets/images/coni_app_2.png": "77efbf450734c09f2cfb2c2cadac7c3a",
"assets/assets/images/coin_app_1.png": "bf0e72dde7d871677979716359890fd9",
"assets/assets/images/coin_app_3.png": "7e49fc88c458007aabaea210bd99acd9",
"assets/assets/images/github.png": "7433692cabbfa132f34adb034e7909fa",
"assets/assets/images/coin_app_6.png": "1f8082285a0a28db6d9a1c9e19c300bb",
"assets/assets/images/coin_app_7.png": "b8dcf17a316a60fc8d13f93af658913d",
"assets/assets/images/under_contruction.png": "c0a2ba6dd4390485a967d07b6835c111",
"assets/assets/images/coin_app_5.png": "5d5244bb07d01a8879a4dbd64d582496",
"assets/assets/images/coin_app_4.png": "d4fc87d129d5e0396497888157926768",
"assets/assets/images/web1.png": "acc0fbdee0f708e46f0600b974cc2a12",
"assets/assets/images/web2.png": "fb0323b788471273e64fb1eac5433358",
"assets/assets/images/onboarding.png": "6c22328131ec637e93c9288ee23a0558",
"assets/assets/images/drive.png": "e4bdd800e3d56ab6883db6806abf9aa2",
"assets/assets/images/growgreen_6.png": "313512896b51a17e8c66db926344e339",
"assets/assets/images/imageA.png": "f13f5931ed3084a1438b2d67d85e48c0",
"assets/assets/images/growgreen_7.png": "1981447bb2f41ae56ef34987c97fd606",
"assets/assets/images/growgreen_5.png": "457218965159db567cd7d54807dbe6a3",
"assets/assets/images/imageB.png": "f13f5931ed3084a1438b2d67d85e48c0",
"assets/assets/images/ImageC.png": "3c81f8072a757ef4adc560957616230b",
"assets/assets/images/growgreen_4.png": "07b682cab9832564dd13f99f00f06ed1",
"assets/assets/images/image1.png": "1356c7606d39622607cddd7d22591835",
"assets/assets/images/phone1.png": "08e8d014531fcbd70fa809c465904284",
"assets/assets/images/dillivry.png": "dd4e19e58c42867177900b0edd3f48fc",
"assets/assets/images/growgreen_1.png": "24f7b41dd5ee325adce5505ea31b3c41",
"assets/assets/images/growgreen_3.png": "a55f03c4b94fb1fd02cbfeb47d52df66",
"assets/assets/images/ImageD.png": "7860de2df64755914e38a84f6438217b",
"assets/assets/images/phone2.png": "641363d5f50136a6ee1fe22bf8a3c6b7",
"assets/assets/images/coder.jpeg": "80f68614d6aae2efa6e2370ae4f8ea94",
"assets/assets/images/imageE.png": "7860de2df64755914e38a84f6438217b",
"assets/assets/images/growgreen_2.png": "d0bc857e4a0b06d6316a5083985cb224",
"assets/assets/icons/appstore.svg": "bdf1aed4220946d21889517ba94a64f1",
"assets/assets/icons/playsafe_3.svg": "bc7e7400c6a5f98a0252e7f3a27d8184",
"assets/assets/icons/playstore.svg": "7e60c13122bf31d758bfc735a6dde68b",
"assets/assets/icons/appetize.svg": "d88777432f4905b16b565d1de01c4219",
"favicon-32x32.png": "2cb0b19f34bfb2207a123466873f6b04",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
