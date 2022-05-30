(The following is from something I posted in Discord.)

Answering my own question from earlier, in case it's of interest to someone else:

**Question:** If I want to trigger an update of something (1) on hot-update of a page and (2) upon full build completion, where should I hook into `svelte.config`?

I just used a few Rollup build hooks, and it's no big deal (<https://rollupjs.org/guide/en/#build-hooks>):

```js
/** @file svelte.config.js */
export default {
  // ... (all other options ellided to keep the example short)
  kit: {
    vite: {
      plugins: [{
        name: 're-indexer', // required field for Vite/Rollup plugins
        handleHotUpdate(ctx){
          // This is a hook that Vite/Rollup calls whenever it live-reloads
          // in development.
          doTheThing();
        },
        buildEnd(){
          // This gets called after everything is built but before it's baked into output files,
          doTheThing();
      }]
    }
  }
}
```
