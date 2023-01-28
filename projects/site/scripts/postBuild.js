/**
 * @file Create social-media previews for each
 * pre-rendered page.
 */

import { PreviewGenerator } from '@adam-coster/site-tools';
import { Pathy, pathy } from '@bscotch/pathy';

const generator = new PreviewGenerator({
	srcRoot: '.svelte-kit/cloudflare',
	outRoot: '.svelte-kit/cloudflare/previews',
});

await generator.generatePreviews({
	maxParallelPages: 20,
	cropBySelector: '.social-preview',
});

// Fix the .svelte-kit/cloudflare/_routes.json file
// so that its "excludes" use wildcards instead of each individual file.
/** @type {Pathy<{include:string[],exclude:string[]}>} */
const routesPath = pathy('.svelte-kit/cloudflare/_routes.json');
const routes = await routesPath.read();
const excludedExtensions = [
	'json',
	'png',
	'jpg',
	'txt',
	'xml',
	'atom',
	'ico',
	'rss',
	'svg',
	'webmanifest',
];
routes.exclude = routes.exclude.filter((path) => {
	const ext = path.replace(/^.*\.([^.]+)$/, '$1');
	const isExcluded = excludedExtensions.includes(ext);
	return !isExcluded;
});
routes.exclude = [
	...routes.exclude,
	...excludedExtensions.map((ext) => `/*.${ext}`),
];
await routesPath.write(routes);
