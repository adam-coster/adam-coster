How to use modules in an Electron app.

As of writing, Electron only works well with CommonJS. But since modern Electron uses Node 16+, which supports modules just fine, we can use modules in an Electron app with a few tricks.

1. The `package.json` should *not* specify `"type": "module"`.
2. Write your code using the `.mjs` (or `.mts`) extension.
3. Have your entrypoint files be regular `.js` (or `.cjs`) that import your modules using async `import()`

https://github.com/bscotch/stitch/blob/develop/packages/desktop/src/index.cts