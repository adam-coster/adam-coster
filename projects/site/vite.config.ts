import { updateArticleSearch } from '@adam-coster/site-tools';
import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { options } from './project.config.js';

const config: UserConfig = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "personal-96z",
            project: "personal-site"
        }
    }), sveltekit(), updateArticleSearch(options)]
};

export default config;