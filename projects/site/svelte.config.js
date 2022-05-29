import { createConfig } from '@adam-coster/site-tools';
import { Pathy } from '@bscotch/pathy';
import { fileURLToPath } from 'url';

const root = new Pathy(fileURLToPath(import.meta.url)).up();

const config = createConfig({
  staticDir: root.join('./static').absolute,
  articlesDir: root.join('./src/routes/articles').absolute,
  feedsDir: root.join('./static/feeds').absolute,
  productionBaseUrl: 'https://adamcoster.com',
});

export default config;
