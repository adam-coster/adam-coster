import { generateArticleSummaries } from './articles.js';

export function updateArticleSearch() {
  return {
    name: 'vite-plugin-update-articles-search',
    handleHotUpdate(ctx) {
      console.log('HOT UPDATE', ctx.file);
      const isArticle = !!ctx.file.match(/\barticles\/.*\.md/);
      if (isArticle) {
        // Run a full index re-build -- no need to optimize it (yet)!
        console.log('Re-building article search index');
        void generateArticleSummaries();
      }
    },
    async buildEnd() {
      console.log('Building article search index');
      await generateArticleSummaries();
    },
  };
}
