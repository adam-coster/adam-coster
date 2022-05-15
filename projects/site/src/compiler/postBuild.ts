/**
 * @file After the site is built, I need to do some post-processing.
 * In particular, I need to create:
 *
 * - Sitemap
 * - Preview images for each page
 */

import fs from 'fs/promises';
import path from 'path';
import { siteFullPath } from './project.js';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { productionBaseUrl } from '../lib/constants.js';

const staticDir = siteFullPath('static');

async function generateSitemap(urls: string[]) {
  const articleSitemap = await streamToPromise(
    Readable.from(urls).pipe(
      new SitemapStream({
        hostname: productionBaseUrl,
      }),
    ),
  ).then((data) => data.toString());
  await fs.writeFile(path.join(staticDir, 'sitemap.xml'), articleSitemap);
  return articleSitemap;
}

export async function runPostBuildProcessors(options: { paths: string[] }) {
  await generateSitemap(options.paths);
}
