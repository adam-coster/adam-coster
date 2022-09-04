import { Pathy } from '@bscotch/pathy';
import { fileURLToPath } from 'url';

const root = new Pathy(fileURLToPath(import.meta.url)).up();

export const options = {
	staticDir: root.join('./static').absolute,
	articlesDir: root.join('./src/articles').absolute,
	feedsDir: root.join('./static/feeds').absolute,
	productionBaseUrl: 'https://adamcoster.com',
};
