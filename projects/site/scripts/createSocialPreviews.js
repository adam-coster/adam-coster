/**
 * @file Create social-media previews for each
 * pre-rendered page.
 */

import { PreviewGenerator } from '@adam-coster/site-tools';

const cloudFlarePaths = {
  srcRoot: '.svelte-kit/cloudflare',
  outRoot: '.svelte-kit/cloudflare/previews',
};

const generator = new PreviewGenerator(cloudFlarePaths);

await generator.generatePreviews({
  maxParallelPages: 20,
  cropBySelector: '.social-preview',
});
