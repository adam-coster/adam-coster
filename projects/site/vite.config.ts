import { updateArticleSearch } from '@adam-coster/site-tools';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { options } from './project.config.js';
import manifest from './package.json' with { type: 'json' };
import { pathToFileURL } from 'url';

const dev = process.argv.includes('dev');

const config: UserConfig = {
	plugins: [sveltekit(), updateArticleSearch(options)],
	build: {
		target: 'esnext',
	},
	esbuild: {
		define: {
			SITE_VERSION: `"${manifest.version}"`,
			CWD: dev ? `"${pathToFileURL(process.cwd()).toString()}"` : 'undefined',
			DEV: dev ? 'true' : 'false',
		},
	},
};

export default config;
