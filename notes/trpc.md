## tRPC

Site: https://trpc.io/

## 500 errors when dev api server restarts

Upon temporary connection loss when my API dev-server reboots, the vanilla client throws a fetch error and I lose HMR.

### Search Terms

- tRPC
- reconnect
- retry
- `fetch failed` (error message written to console)
- `500 Internal Error` (response seen in browser)
- `ECONNREFUSED`

### Full Error (from Vite console)

```js
TypeError: fetch failed
fetch failed
    at Object.processResponse (node_modules\undici\lib\fetch\index.js:199:23)
    at node_modules\undici\lib\fetch\index.js:928:38
    at node:internal/process/task_queues:141:7
    at AsyncResource.runInAsyncScope (node:async_hooks:203:9)
    at AsyncResource.runMicrotask (node:internal/process/task_queues:138:8)
    at runMicrotasks (<anonymous>)
TRPCClientError: fetch failed
    at Function.from (node_modules\@trpc\client\dist\transformResult-e15ccdf6.js:15:16)
    at Cnode_modules\@trpc\client\dist\links\httpBatchLink.js:204:80
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  cause: Error: connect ECONNREFUSED 127.0.0.1:3111
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1247:16) {
    errno: -4078,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 3111
  }
}
```

### Solution

Replace tRPC client's `fetch` with one that retries when it gets a connection error:

```ts
function isConnectionError(err: unknown): boolean {
	if (err instanceof Error) {
		if ('code' in err && err.code === 'ECONNREFUSED') {
			return true;
		}
		if ('cause' in err) {
			return isConnectionError(err.cause);
		}
	}
	return false;
}

async function refetch(
	input: RequestInfo | URL,
	init: RequestInit | undefined,
	remaining = 10,
): Promise<Response> {
	try {
		const res = await fetch(input, init);
		console.log('STATUS', res.status);
		return res;
	} catch (err) {
		if (remaining > 0 && isConnectionError(err)) {
			console.log('Could not connect to server, retrying request in 1s');
			await wait(1000);
			return await refetch(input, init, remaining - 1);
		} else {
			throw err;
		}
	}
}

export const trpc = createTRPCProxyClient<Api>({
	links: [
		httpBatchLink({
			url: `http://localhost:3111/trpc`,
			async fetch(input, init) {
				return await refetch(input, { ...init, mode: 'cors' });
			},
		}),
	],
});
```

## TRPCClientError: Unexpected end of input

This can be due to a response not being JSON, but the question is _why isn't it JSON_?

In my case:

- I was making a fetch request within a `trpc` request
- The fetch request was _not_ throwing an error, but `trpc` was choking on the fetch response (throwing `TRPCClientError: Unexpected end of input`)
- Logging the fetch response yielded: `{"type":"opaque", "ok":false, "status": 0 /*...*/}`
- Searching for "trpc opaque" yielded nothing, since it was a fetch issue
- Searching for "fetch opaque" gave answers:
  - Using ["no-cors" mode](https://developer.mozilla.org/en-US/docs/Web/API/Request/mode) in the client doesn't magically cause the server to not require cors. In fact, it just _disables_ cross-origin requests and does lots of other funky stuff.
  - Fetch [response types](https://developer.mozilla.org/en-US/docs/Web/API/Response/type) include an "opaque" one for invalid CORS scenarios.

### Solution

Have to handle CORS at the server level. I removed the client-side request `"no-cors"` mode and let it just be the default, and then updated the express server to allow everything for CORS (since it's a local-only project):

```ts
const app = express();
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header(
		'Access-Control-Allow-Headers',
		req.get('Access-Control-Request-Headers'),
	);
	res.header(
		'Access-Control-Allow-Method',
		req.get('Access-Control-Request-Method'),
	);
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	return next();
});
```
