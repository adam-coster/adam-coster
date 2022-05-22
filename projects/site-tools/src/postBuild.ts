/**
 * @file After the site is built, I need to do some post-processing.
 * In particular, I need to create:
 *
 * - Sitemap
 * - Preview images for each page
 */

import fs from 'fs/promises';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

async function generateSitemap(
  urls: string[],
  options: {
    productionBaseUrl: string;
    staticDir: string;
  },
) {
  const articleSitemap = await streamToPromise(
    Readable.from(urls).pipe(
      new SitemapStream({
        hostname: options.productionBaseUrl,
      }),
    ),
  ).then((data) => data.toString());
  await fs.writeFile(
    path.join(options.staticDir, 'sitemap.xml'),
    articleSitemap,
  );
  return articleSitemap;
}

export async function runPostBuildProcessors(options: {
  paths: string[];
  productionBaseUrl: string;
  staticDir: string;
}) {
  await generateSitemap(options.paths, options);
}
