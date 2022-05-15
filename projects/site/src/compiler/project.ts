import path from 'path';
import fs from 'fs';

export function assert(claim: any, failureMessage: string): asserts claim {
  if (!claim) {
    throw new Error(failureMessage);
  }
}

/**
 * Work backwards from a directory, looking for a
 * directory path that contains a `package.json` file
 * with a particular name field.
 *
 * @remarks This is useful for being able to get paths
 * relative to package roots, in a manner independent from
 * how the whole project is organized (since that's subject to change).
 */
export function findPackageRoot(
  packageName: string,
  startingFrom: string,
  _recursionDepth = 0,
): string {
  // if (_recursionDepth === 0) {
  //   console.log('findPackageRoot', packageName, startingFrom);
  // }
  assert(fs.existsSync(startingFrom), `${startingFrom} does not exist`);
  const info = fs.statSync(startingFrom);
  if (info.isDirectory()) {
    const packageJsonPath = path.join(startingFrom, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (packageJson.name === packageName) {
        return startingFrom;
      }
    }
  }
  const parent = path.dirname(startingFrom);
  assert(parent !== startingFrom, `${startingFrom} has no parent`);
  return findPackageRoot(packageName, parent, _recursionDepth + 1);
}

const currentPath = path.normalize(import.meta.url.replace(/^file:\/\/\//, ''));

const getLocalRoot = (packageName?: 'utility' | 'site') => {
  const root = findPackageRoot(`@adam-coster/adam-coster`, currentPath);
  assert(root, `Could not find package ${packageName}`);
  if (!packageName) {
    return root;
  }
  return path.join(root, 'packages', packageName);
};

/**
 * Absolute URL to the site's project root
 */
export const basePath = getLocalRoot();
export const utilityBasePath = getLocalRoot('utility');
export const siteBasePath = getLocalRoot('site');
export const articlesDir = siteFullPath('src/routes/articles');
export const staticDir = siteFullPath('static');
export const feedsDir = siteFullPath('static/feeds');

export function rootFullPath(...pathSegments: string[]) {
  return path.resolve(basePath, ...pathSegments);
}

export function siteFullPath(...pathSegments: string[]) {
  return path.resolve(siteBasePath, ...pathSegments);
}

export function utilityFullPath(...pathSegments: string[]) {
  return path.resolve(utilityBasePath, ...pathSegments);
}
