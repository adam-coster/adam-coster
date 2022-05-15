import adapterStatic from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';
import preprocess from 'svelte-preprocess';

// import { adapterStatic } from './adapterStatic.js';
import { listArticleUrls } from './files.js';
import { markdownToSvelte } from './markdownToHtml.js';
import { updateArticleSearch } from './vitePlugins.js';

const mdsvexExtensions = ['.md'];

export const config: Config = {
  extensions: ['.svelte', ...mdsvexExtensions],

  /** {@link https://github.com/sveltejs/svelte-preprocess} */
  preprocess: [
    preprocess({
      preserve: ['ld+json', 'module'],
    }),
    markdownToSvelte,
  ],
  kit: {
    adapter: adapterStatic(),
    prerender: {
      crawl: true,
      enabled: true,
      entries: ['/', ...listArticleUrls()],
    },
    trailingSlash: 'never',
    vite: {
      plugins: [updateArticleSearch()],
    },
  },
};
