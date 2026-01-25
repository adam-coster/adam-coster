import {
	generateArticleSummaries,
	markdownToSvelte,
} from '@adam-coster/site-tools';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { options } from './project.config.js';

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
			fallback: 'spa',
		}),
		prerender: {
			crawl: true,
		},
	},
};

export default config;
