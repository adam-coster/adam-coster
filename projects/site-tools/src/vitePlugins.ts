import { generateArticleSummaries } from './articles.js';
import { Plugin as VitePlugin } from 'vite';

export function updateArticleSearch(options: {
  productionBaseUrl: string;
  staticDir: string;
  feedsDir: string;
  articlesDir: string;
}): VitePlugin {
  return {
    name: 'vite-plugin-update-articles-search',
    handleHotUpdate(ctx) {
      console.log('HOT UPDATE', ctx.file);
      const isArticle = !!ctx.file.match(/\barticles\/.*\.md/);
      if (isArticle) {
        // Run a full index re-build -- no need to optimize it (yet)!
        console.log('Re-building article search index');
        void generateArticleSummaries(options);
      }
    },
    async buildEnd() {
      console.log('Building article search index');
      await generateArticleSummaries(options);
    },
  };
}
