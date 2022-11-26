export type EnsuredDefinedArray<T> = T extends any[]
	? T
	: T extends undefined
	? []
	: [Exclude<T, undefined>];

export function ensureArray<T>(value: T): EnsuredDefinedArray<T> {
	if (typeof value === 'undefined') {
		return [] as any;
	}
	return Array.isArray(value) ? value : ([value] as any);
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

export function dateIsLater(
	date: Date | string | undefined,
	comparedTo: Date | string | undefined,
) {
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

export function patchQueryParams(
	url: URL,
	queryPatch: Record<string, string | undefined | null>,
) {
	Object.keys(queryPatch).forEach((key) => {
		if ([null, undefined, ''].includes(queryPatch[key])) {
			url.searchParams.delete(key);
		} else {
			url.searchParams.set(key, `${queryPatch[key]}`);
		}
	});
	return url;
}

export function asDateIfExists(value: any): Date | undefined {
	const asDate = value && new Date(value);
	if (asDate && asDate.getTime()) {
		return asDate;
	}
}

export function assert(claim: any, message?: string): asserts claim {
	if (!claim) {
		throw new Error(message || 'Assertion failed');
	}
}
