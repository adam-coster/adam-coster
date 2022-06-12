---
slug: commonjs-and-esm-importexport-compatibility-examples
title: CommonJS and ESM import/export compatibility examples
description: >
  Node.js is partway through transitioning from CommonJS to Modules, so we often
  need to use both together. Here's how!
publishedAt: 2022-03-09T06:00:00.000Z
tags:
  - javascript
  - learn
  - node
  - webdev
  - programming
crossPosts:
  - https://dev.to/adamcoster/commonjs-and-esm-importexport-compatibility-by-simple-example-50pl
---

Node's [CommonJS](https://nodejs.org/docs/latest-v16.x/api/modules.html) vs. [ECMAScript ("ESM")](https://nodejs.org/docs/latest-v16.x/api/esm.html) divide is probably the source of _most_ of my quality of life frustrations as a fullstack Typescript/Node/Javascript programmer.

I can often go for weeks at a time before running into new incompatibility problems, so then each time I have to remind myself how interoperability works between them. Well, this time I made a tiny, simple demo so that _next_ time I can just refer to it. And now you can, too!

Short summary of the CommonJS/ESM distinction and problem:

- CommonJS uses the `require('./file.js')` syntax for importing other modules and the `module.exports =` syntax for exporting stuff from modules
- ESM uses the `import {stuff} from './file.js'` syntax for importing and the `export stuff` syntax for exports
- CommonJS files can use the `.cjs` extension to tell Node that they are in CommonJS
- ESM files can use the `.mjs` extension to tell Node that they are in ESM
- CommonJS imports are _synchronous_
- ESM imports are _asynchronous_ (which also allows for [top-level `await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await))
- CommonJS works in Node but does **not** work in browsers
- ESM is supported by all modern browsers and the latest versions of Node, but does **not** work at all in Node versions below 12
- Tons of the core JavaScript ecosystem tooling was developed in Node and Node only recently supported ESM, so a huge fraction of existing Node projects are in CommonJS

So that's our situation. Now, to the problem at hand: If you are using ESM, can you import CommonJS? What about the other way around?

In short, YES! But with considerations.

## Sample export modules

Let's start with some _importable_ modules. One in CommonJS, the other in ESM:

```js
/**
 * @file `exporter.mjs`
 * (An ESM module exporting a default and named entity.)
 */

export function namedMjsExport() {}

export default function defaultMjsExport() {}
```

```js
/**
 * @file `exporter.cjs`
 * (A CommonJS module exporting a default and named entity.)
 */

module.exports = function defaultCjsExport() {};

module.exports.namedCjsExport = function namedCjsExport() {};
```

## Importing _from_ ESM and CommonJS _to_ ESM

What does it look like to import _both_ of those modules into another ESM module? Simple! If you are importing _into_ an ESM module, it looks the same either way:

```js
/**
 * @file `importer.mjs`
 *
 * An ESM module that imports stuff
 */

import defaultCjsExport, { namedCjsExport } from './exporter.cjs';
import defaultMjsExport, { namedMjsExport } from './exporter.mjs';

console.log({
  title: 'Importing into an ESM module.',
  defaultCjsExport,
  namedCjsExport,
  defaultMjsExport,
  namedMjsExport,
});
```

And after we run that script via `node importer.mjs` (Node v16):

```
{
  title: 'Importing into an ESM module.',
  defaultCjsExport: [Function: defaultCjsExport] {
    namedCjsExport: [Function: namedCjsExport]
  },
  namedCjsExport: [Function: namedCjsExport],
  defaultMjsExport: [Function: defaultMjsExport],
  namedMjsExport: [Function: namedMjsExport]
}
```

Perfect! If we're using ESM we can basically treat _all_ code as if it's also ESM. (There are some nuances, but we can usually get away with ignoring them.)

## Importing _from_ ESM and CommonJS _to_ CommonJS

So importing into ESM is no biggie, are we so lucky with importing into CommonJS?

NOPE!

Since `require()` is synchronous, you can't use it to import ESM modules _at all_! In CommonJS you have to use `require` syntax for other CommonJS modules and an `import()` _function_ (distinct from the `import` keyword used in ESM!), a function that returns a _promise_, to import ESM.

Let's take a look:

```js
/**
 * @file `importer.cjs`
 *
 * From a require-style Node script, import cjs and mjs modules.
 */

/**
 * Import a module by `require()`ing it. If that results in
 * an error, return the error code.
 */
function requireModule(modulePath, exportName) {
  try {
    const imported = require(modulePath);
    return exportName ? imported[exportName] : imported;
  } catch (err) {
    return err.code;
  }
}

/**
 * CommonJS does not have top-level `await`, so we can wrap
 * everything in an `async` IIFE to make our lives a little easier.
 */
(async function () {
  console.log({
    title: 'Importing into a CommonJS module',

    // CJS<-CJS and MJS<-CJS are equivalent
    defaultCjsExport: requireModule('./exporter.cjs'),
    namedCjsExport: requireModule('./exporter.cjs', 'namedCjsExport'),

    // Cannot `require` an ESM module
    defaultMjsExportUsingRequire: requireModule('./exporter.mjs'),
    namedMjsExportUsingRequire: requireModule(
      './exporter.mjs',
      'namedMjsExport',
    ),

    defaultMjsExport: (await import('./exporter.mjs')).default,
    namedMjsExport: (await import('./exporter.mjs')).namedMjsExport,
  });
})();
```

And the output of `node importer.cjs`:

```
{
  title: 'Importing into a CommonJS module',
  defaultCjsExport: [Function: defaultCjsExport] {
    namedCjsExport: [Function: namedCjsExport]
  },
  namedCjsExport: [Function: namedCjsExport],
  defaultMjsExportUsingRequire: 'ERR_REQUIRE_ESM',
  namedMjsExportUsingRequire: 'ERR_REQUIRE_ESM',
  defaultMjsExport: [Function: defaultMjsExport],
  namedMjsExport: [Function: namedMjsExport]
}
```

Oh, wow, look at how much more code we needed and how careful we need to be!

## Advice

I've been all-in on ESM for a while now. It's a better developer experience and is clearly what we'll be using in the future. But it comes with headaches because so much of the Node ecosystem is still in CommonJS, and you should think carefully before going all-in.

- Don't forget about the file extensions! Modern Node handles the `.mjs` and `.cjs` extensions, so if you need to use one module type in one place and another somewhere else, feel free to mix it up! This also works in Typescript (v4.5+) with the `.mts` and `.cts` extensions.
- (But also note that some tools don't know about those extensions...)
- Tools written in CommonJS (i.e. _most_ existing Node-based tools) usually handle ESM poorly. Even extremely popular projects. If you want to guarantee that you can use a tool with your code, you may want to stick with CommonJS.
- If you will mostly be importing other packages into your project (versus having yours imported into others), ESM will let you not have to worry much about what kind of modules you're importing.
- ESM spec requires that import paths be valid paths, meaning you need the file extension and everything (CommonJS doesn't require that). Node has an option [to skip out on that requirement](https://nodejs.org/docs/latest-v16.x/api/esm.html#customizing-esm-specifier-resolution-algorithm) for ESM modules, if you want to keep it old-school: `node --es-module-specifier-resolution=node your-dope-module.mjs`
- If you do decide to go all-in on ESM in Node, be ready to do a lot of very annoying troubleshooting!
