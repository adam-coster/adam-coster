---
slug: create-a-live-reload-server-for-front-end-development
title: Create a live-reload server for front-end development
description: >
  Manually reloading a webpage when you make changes
  is a pain. You can solve this with a live-reload server.
  Here's how to make one.
editedAt: 2021-01-23T23:48:41.643Z
publishedAt: 2020-08-23T23:31:47.284Z
tags:
  - node
  - webdev
  - javascript
  - tools
crossPosts:
  - https://dev.to/adamcoster/create-a-live-reload-server-for-front-end-development-3gnp
  - https://www.bscotch.net/post/create-a-live-reload-server
---

I spent my first few years of web development alt-tabbing over to my browser to manually refresh the page every time I made a change to the code. I didn't realize just how annoying this was until I started using modern frameworks (Vue and React), which come out of the box with "hot reloading". I didn't even know that was a thing, but now I can never go back.

If you're currently making webpages without automatic reloading, **drop everything** and get that hooked up _now_!

## Live/hot reloads

What _is_ automatic reloading?

In short, it's having a development server watch for changes to your code, then telling your browser to refresh itself so that the rendered page stays in sync with your code.

It's already helpful if the page simply does a full reload whenever any source file changes. But things get much fancier than that.

Modern frameworks like Vue and React have what they call "hot" reloading, which is a huge improvement to "live" reloading. The goal of hot reloading is to refresh the minimum possible portion of content on the page when something changes, instead of the entire page. This is amazing because the rest of your website's state (form content, open/closed state of widgets, etc) stays intact while only the stuff you've changed gets changed on the page.

## Get an off-the-shelf hot-reload server

Fortunately, very smart people have solved the hot-reload problem for you. Which pre-existing solution you use depends on your project, but if you're doing modern webdev there's a good chance you're using a framework or a module bundler (like Webpack) that provides a hot/live-reload server out of the box. If not, a bit of googling will get you to some open source projects that will do the trick to some degree or another.

## Or roll your own!

You should definitely get an off-the-shelf, hot-reload server for serious development work. But it's a fun exercise to make your own, and remove some of the mystery in the process. We'll make a simple, live-reload development server that refreshes your browser whenever you change a source file.

There are two reasonable choices for how the server would inform the browser to trigger a reload:

1. **Polling.** We could set plain old vanilla HTTP route that the site pings every 100 milliseconds (or so) to ask if something has changed.
2. **[Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).** We could set up a 2-way websocket so that the server can _push_ information to the browser. That way there's no lag between a change and that change becoming visible on the site.

Websockets are more fun and will give a lot of flexibility in the future (in case you want to turn this live-reloader into something hotter), so let's go that route. Eventually it might be useful to know _what_ has changed, but to start we just need to know that _anything_ has changed and reload the site as a consequence.

Here's the simple approach I'm starting with:

1. Run a websocket server alongside the development HTTP server.
2. Run the dev server with [nodemon](https://www.npmjs.com/package/nodemon) so that it will be rebooted whenever any source file changes.
3. Inject a script into served HTML files that opens a websocket client. Have that script reload the page when the connection closes.

Collectively, this makes it so that any change to a source file causes the server to reboot and therefore break the websocket connection to any pages loaded in the browser. Upon breaking those connections, the pages immediately reload and end up establishing a new connection to the newly-rebooted server. And thus: live reloading!

Note that while "injection" sounds like something fancy, here it's nothing more than wrapping the "injected" code in `<script/>` tags and appending that to the end of the HTML documents when the server sends them to the browser. This works because HTML parsers are so loosey-goosey. Sure, script tags should all be _within_ the `<html/>` tags, but if they aren't the browser will run them anyway.

Now it's time for the code.

#### Dependencies

- [nodemon](https://www.npmjs.com/package/nodemon) for detecting file changes and rebooting the server as a consequence. (`npm install nodemon`)
- [ws](https://www.npmjs.com/package/ws) for setting up server-side websockets. (`npm install ws`)
- [Node.js](https://nodejs.org/en/) for running the development server. I'm using v14, since I can't live without [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

#### Client-side injected code

I started with a dead-simple script that starts a websocket connection, listens for the `close` event, and reloads the page when that happens:

```js
/**
 * @file site/client-websocket.js
 */
const socket = new WebSocket('ws://localhost:8090');
socket.addEventListener('close', () => {
  location.reload();
});
```

That script turned out to be _too_ simple. Its core flaws are:

1. It pollutes the global namespace (the `socket` variable name might get used by something else in the document scope.).
2. If the server doesn't reboot fast enough the page will not be able to reload, and you'll be stuck with a dead page you have to manually refresh.

To resolve the first problem we can wrap the code in an IFFE (["Immediately Invoked Function Expression"](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)). To resolve the second problem we need some more complexity so that we can get retries. That results in:

```js
/**
 * @file site/client-websocket.js
 */
(() => {
  const socketUrl = 'ws://localhost:8090';
  let socket = new WebSocket(socketUrl);
  socket.addEventListener('close', () => {
    // Then the server has been turned off,
    // either due to file-change-triggered reboot,
    // or to truly being turned off.

    // Attempt to re-establish a connection until it works,
    // failing after a few seconds (at that point things are likely
    // turned off/permanantly broken instead of rebooting)
    const interAttemptTimeoutMilliseconds = 100;
    const maxDisconnectedTimeMilliseconds = 3000;
    const maxAttempts = Math.round(
      maxDisconnectedTimeMilliseconds / interAttemptTimeoutMilliseconds,
    );
    let attempts = 0;
    const reloadIfCanConnect = () => {
      attempts++;
      if (attempts > maxAttempts) {
        console.error('Could not reconnect to dev server.');
        return;
      }
      socket = new WebSocket(socketUrl);
      socket.addEventListener('error', () => {
        setTimeout(reloadIfCanConnect, interAttemptTimeoutMilliseconds);
      });
      socket.addEventListener('open', () => {
        location.reload();
      });
    };
    reloadIfCanConnect();
  });
})();
```

#### Development server code

If you want to do things the long way, without using a framework like Express.js:

```js
/** @file site/dev-server.js */
const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const HTTP_PORT = 8089;
const WEBSOCKET_PORT = 8090;
const CLIENT_WEBSOCKET_CODE = fs.readFileSync(
  path.join(__dirname, 'client-websocket.js'),
  'utf8',
);

// Websocket server (for allowing browser and dev server to have 2-way communication)
// We don't even need to do anything except create the instance!
const wss = new WebSocket.Server({
  port: WEBSOCKET_PORT,
});

/**
 * @typedef {import('http').IncomingMessage} req
 * @typedef {import('http').ServerResponse} res
 */

/** Use classic server-logic to serve a static file (e.g. default to 'index.html' etc)
 * @param {string} route
 * @param {res} res
 * @returns {boolean} Whether or not the page exists and was served
 */
function serveStaticPageIfExists(route, res) {
  // We don't care about performance for a dev server, so sync functions are fine.
  // If the route exists it's either the exact file we want or the path to a directory
  // in which case we'd serve up the 'index.html' file.
  if (fs.existsSync(route)) {
    if (fs.statSync(route).isDirectory()) {
      return serveStaticPageIfExists(path.join(route, 'index.html'), res);
    } else if (fs.statSync(route).isFile()) {
      res.writeHead(200);
      /** @type {string|Buffer} */
      let file = fs.readFileSync(route);
      if (route.endsWith('.html')) {
        // Inject the client-side websocket code.
        // This sounds fancier than it is; simply
        // append the script to the end since
        // browsers allow for tons of deviation
        // from *technically correct* HTML.
        file = `${file.toString()}\n\n<script>${CLIENT_WEBSOCKET_CODE}</script>`;
      }
      res.end(file);
      return true;
    }
  }
  return false;
}

/** General request handler and router
 * @param {req} req
 * @param {res} res
 */
const requestHandler = function (req, res) {
  const method = req.method.toLowerCase();
  if (method == 'get') {
    // No need to ensure the route can't access other local files,
    // since this is for development only.
    const route = path.normalize(path.join(__dirname, 'src', req.url));
    if (serveStaticPageIfExists(route, res)) {
      return;
    }
  }
  res.writeHead(404);
  res.end();
};

const server = http.createServer(requestHandler);
server.listen(HTTP_PORT);
```

Note that you could make your web server a lot more code-efficiently with a framework like [Express.js](https://www.npmjs.com/package/express) (and you probably should!), but sometimes it's to make things with what's built into Node.

#### Getting it all running

Finally, run this server using nodemon:

```bash
npx nodemon ./site/dev-server.js --ext js,html,css,md
```

Open up a browser tab to `http://localhost:8089` and that's it! Now we have a dead-simple development server with live reloading.
