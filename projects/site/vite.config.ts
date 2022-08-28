import { updateArticleSearch } from '@adam-coster/site-tools';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { options } from './project.config.js';

const config: UserConfig = {
	plugins: [sveltekit(), updateArticleSearch(options)],
};

export default config;
