import type { OneOrMore } from '@adam-coster/site-tools';

export function ensureArray<T>(value: OneOrMore<T>): T[] {
  if (typeof value === 'undefined') {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

export function robotDate(date: string | Date) {
  return new Date(date).toISOString();
}

export function humanDate(date: string | Date) {
  return new Date(date).toLocaleDateString();
}

function dateToEpoch(date: string | Date) {
  return new Date(date).getTime();
}

export function dateToIso(date: string | Date) {
  return new Date(date).toISOString();
}

export function dateIsLater(date: Date | string, comparedTo: Date | string) {
  if (!date || !comparedTo) {
    return false;
  }
  return dateToEpoch(date) > dateToEpoch(comparedTo);
}

/**
 * Sometimes it's useful to have a URL without
 * the starting protocol (e.g. for more concise
 * link content).
 */
export function stripUrlProtocol(url: string) {
  return url.replace(/^https?:\/\//, '');
}

export function getUrlHostName(url: string) {
  return new URL(url).hostname;
}

export function getPatchedUrl(url: URL, queryPatch: Record<string, string>) {
  Object.keys(queryPatch).forEach((key) => {
    if ([null, undefined, ''].includes(queryPatch[key])) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, queryPatch[key]);
    }
  });
  return url;
}

export function asDateIfExists(value: any) {
  const asDate = value && new Date(value);
  if (asDate && asDate.getTime()) {
    return asDate;
  }
}
