import adapterStatic from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';
import { default as preprocess } from 'svelte-preprocess';
import { listArticleUrls } from './files.js';
import { markdownToSvelte } from './markdownToHtml.js';
import { updateArticleSearch } from './vitePlugins.js';

export function createConfig(options: {
  articlesDir: string;
  productionBaseUrl: string;
  staticDir: string;
  feedsDir: string;
}): Config {
  return {
    extensions: ['.svelte', '.md'],

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
        entries: ['/', ...listArticleUrls(options.articlesDir)],
      },
      trailingSlash: 'never',
      vite: {
        plugins: [updateArticleSearch(options)],
      },
    },
  };
}
