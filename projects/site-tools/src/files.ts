import { listFilesByExtensionSync } from '@bscotch/utility';
import fs from 'fs/promises';
import path from 'path';

export async function writeJson(
  path: string,
  data: unknown,
  options?: { noSpaces?: boolean },
) {
  const spaces = options?.noSpaces ? undefined : 2;
  return await fs.writeFile(path, JSON.stringify(data, null, spaces));
}

export function listArticleUrls(folder: string) {
  const files = listFilesByExtensionSync(folder, 'md');
  const urls = files.map((f) => {
    const asUrl = `/blog/${path.basename(f, '.md')}` as const;
    return asUrl;
  });
  return urls;
}
