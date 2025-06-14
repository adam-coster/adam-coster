import {
	generateArticleSummaries,
	markdownToSvelte,
} from '@adam-coster/site-tools';
import { options } from './project.config.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

// Run during import to ensure that article summary files exist, to prevent downstream errors.
generateArticleSummaries(options);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), markdownToSvelte],
	kit: {
		serviceWorker: {
			register: false,
		},
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

export default config;
