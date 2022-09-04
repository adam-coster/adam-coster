import { Plugin as VitePlugin } from 'vite';
import { generateArticleSummaries } from './blog.js';

export function updateArticleSearch(options: {
	productionBaseUrl: string;
	staticDir: string;
	feedsDir: string;
	articlesDir: string;
}): VitePlugin {
	return {
		name: 'vite-plugin-update-blog-search',
		async handleHotUpdate(ctx) {
			const isArticle = !!ctx.file.match(/\/blog\/\[slug\]\/.*\.md/);
			if (isArticle) {
				console.log('Article updated', ctx.file);
				// Run a full index re-build -- no need to optimize it (yet)!
				console.log('Re-building article search index');
				await generateArticleSummaries(options);
			}
		},
		async buildEnd() {
			console.log('Building article search index');
			await generateArticleSummaries(options);
		},
	};
}
