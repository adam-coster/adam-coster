import { listFilesByExtensionSync } from '@bscotch/utility';
import fs from 'fs/promises';
import path from 'path';
import { siteFullPath } from './project.js';

export async function writeJson(
  path: string,
  data: unknown,
  options?: { noSpaces?: boolean },
) {
  const spaces = options?.noSpaces ? undefined : 2;
  return await fs.writeFile(path, JSON.stringify(data, null, spaces));
}

export async function readJson<T = unknown>(path: string): Promise<T> {
  return await fs.readFile(path, 'utf8').then((content) => JSON.parse(content));
}

function listArticleFiles() {
  return listFilesByExtensionSync(
    siteFullPath('src', 'routes', 'articles'),
    'md',
  );
}

export function listArticleUrls() {
  return listArticleFiles().map((f) => {
    const asUrl = `/articles/${path.basename(f, '.md')}` as const;
    return asUrl;
  });
}
