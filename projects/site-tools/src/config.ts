// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import type { Config } from '@sveltejs/kit';
import { default as preprocess } from 'svelte-preprocess';
import { markdownToSvelte } from './markdownToHtml.js';

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
			adapter: adapter(),
			prerender: {
				crawl: true,
				enabled: true,
				// entries: ['/', ...listArticleUrls(options.articlesDir)],
			},
			trailingSlash: 'never',
			// // @ts-expect-error This type misbehaving weirdly with latest Vite
			// vite: {
			//   plugins: [updateArticleSearch(options)],
			// },
		},
	};
}
