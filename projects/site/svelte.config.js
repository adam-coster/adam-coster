import {
  createConfig,
  generateArticleSummaries,
} from '@adam-coster/site-tools';
import { Pathy } from '@bscotch/pathy';
import { fileURLToPath } from 'url';

const root = new Pathy(fileURLToPath(import.meta.url)).up();

const options = {
  staticDir: root.join('./static').absolute,
  articlesDir: root.join('./src/routes/articles').absolute,
  feedsDir: root.join('./static/feeds').absolute,
  productionBaseUrl: 'https://adamcoster.com',
};

// Run during import to ensure that article summary files exist, to prevent downstream errors.
generateArticleSummaries(options);

const config = createConfig(options);

export default config;
