// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import type { Config } from '@sveltejs/kit';
import { default as preprocess } from 'svelte-preprocess';
import { markdownToSvelte } from './markdownToHtml.js';

export function createConfig(): Config {
	return {
		extensions: ['.svelte', '.md'],

		preprocess: [
			preprocess({
				preserve: ['ld+json', 'module'],
			}),
			markdownToSvelte,
		],
		kit: {
			adapter: adapter({
				routes: {
					exclude: [
						'/_app/*',
						'/',
						'/blog',
						'/blog/*',
						'/previews/*',
						'/icons/*',
						'/images/*',
						'/feeds/*',
						'/404',
						'/microdata/*',
					],
				},
			}),
			prerender: {
				crawl: true,
			},
		},
	};
}
