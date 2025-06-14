/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { version } from '$service-worker';

const sw = self as unknown as ServiceWorkerGlobalScope;

const versionedCacheName = `adamcoster.com-${version}`;

sw.addEventListener('install', (event) => {
	console.log('Service worker installing...', version);
	event.waitUntil(sw.skipWaiting());
});

sw.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== versionedCacheName && key.startsWith('adamcoster.com-'))
				await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

sw.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(versionedCacheName);

		// Everything is static, so we can just cache all requests
		let response = await cache.match(url.pathname);

		if (response) {
			console.log('Serving from cache:', url.pathname);
			return response;
		}

		// Otherwise try to fetch from network
		response = await fetch(event.request);

		// if we're offline, fetch can return a value that is not a Response
		// instead of throwing - and we can't pass this non-Response to respondWith
		if (!(response instanceof Response)) {
			throw new Error('invalid response from fetch');
		}

		if (response.status === 200) {
			cache.put(event.request, response.clone());
		}

		return response;
	}

	event.respondWith(respond());
});

// When navigating as a SPA, the client will need to send a message to
// tell the SW to update the cache
sw.addEventListener('message', (event) => {
	if (event.data.type === 'addUrlToCache' && event.data.url) {
		console.log('Adding to cache:', event.data.url);
		const url = new URL(event.data.url);
		event.waitUntil(
			caches.open(versionedCacheName).then((cache) => {
				return fetch(url.pathname).then((response) => {
					if (response.status === 200) {
						return cache.put(url.pathname, response);
					}
				});
			}),
		);
	}
});
