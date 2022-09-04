/**
 * @file Create social-media previews for each
 * pre-rendered page.
 */

import { PreviewGenerator } from '@adam-coster/site-tools';

const generator = new PreviewGenerator({
	srcRoot: '.svelte-kit/cloudflare',
	outRoot: '.svelte-kit/cloudflare/previews',
});

await generator.generatePreviews({
	maxParallelPages: 20,
	cropBySelector: '.social-preview',
});
