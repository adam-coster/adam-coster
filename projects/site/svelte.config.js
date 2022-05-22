import { createConfig } from '@adam-coster/site-tools';

const config = createConfig({
  staticDir: './static',
  articlesDir: './src/routes/articles',
  feedsDir: './static',
  productionBaseUrl: 'https://adamcoster.com',
});

export default config;
