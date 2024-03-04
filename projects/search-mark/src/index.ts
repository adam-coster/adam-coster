const allowedFlagsString = 'dgimsuvy';
const allowedFlags = new Set(allowedFlagsString);
const regexLiteralPatternString = `^/(?<pattern>.+)/(?<flags>[${allowedFlagsString}]*)$`;

/**
 * A regex that matches regex-literal-like strings, e.g. `/pattern/flags/`,
 * with groups `{pattern:string, flags:string}` */
export const regexLiteralPattern = new RegExp(regexLiteralPatternString, 'u');

/**
 * Given a source string and a search pattern, return an array of
 * match positions within the source string.
 *
 * If the string is formatted as a JavaScript-style regex (e.g. `/pattern/flags`) it will be treated as such. Otherwise the string will be checked for *exact* matches to the pattern.
 *
 * The search pattern will always be treated as global (i.e. all matches will be returned).
 */
export function search(
	source: string,
	pattern: string,
	options?: { ignoreCase?: boolean },
): [start: number, end: number][] {
	const matches: [start: number, end: number][] = [];
	assertIsString(source, 'Expected source to be a string');
	assertIsString(pattern, 'Expected pattern to be a string');
	if (!source || !pattern) return matches;

	const searchPattern =
		regexLiteralStringToRegExp(
			pattern,
			`g${options?.ignoreCase ? 'i' : ''}`,
			'y',
		) || pattern;
	if (typeof searchPattern === 'string') {
		// Find the indices of each instance of the pattern.
		source = options?.ignoreCase ? source.toLowerCase() : source;
		pattern = options?.ignoreCase ? pattern.toLowerCase() : pattern;
		let index = -1;
		while ((index = source.indexOf(pattern, index + 1)) !== -1) {
			matches.push([index, index + pattern.length]);
		}
		return matches;
	} else {
		let match: RegExpExecArray | null;
		while ((match = searchPattern.exec(source)) !== null) {
			matches.push([match.index, match.index + match[0].length]);
			searchPattern.lastIndex = match.index + match[0].length;
		}
		return matches;
	}
}

/**
 * Given a string, if it looks like a regex literal (e.g. `/pattern/flags`), return a `RegExp` object. Otherwise return `undefined`.
 * @param ensureFlags If provided, the flags will be appended to the result if they are not already present.
 */
export function regexLiteralStringToRegExp(
	pattern: string,
	ensureFlags?: string,
	excludeFlags?: string,
): RegExp | undefined {
	assertIsString(pattern, 'Expected a string');
	assert(
		typeof ensureFlags === 'undefined' || typeof ensureFlags === 'string',
		'Expected ensureFlags to be a string or undefined',
	);
	assert(
		typeof excludeFlags === 'undefined' || typeof excludeFlags === 'string',
		'Expected excludeFlags to be a string or undefined',
	);
	const parts = parseRegexLiteralString(pattern);
	if (!parts) return;
	const flags = new Set([
		...(parts.flags ? parts.flags.split('') : []),
		...(ensureFlags ? ensureFlags.split('') : []),
	]);
	if (excludeFlags) {
		excludeFlags.split('').forEach((f) => flags.delete(f));
	}
	return new RegExp(
		parts.pattern,
		[...flags].filter((f) => allowedFlags.has(f)).join(''),
	);
}

/**
 * Given a string that looks like a regex literal (e.g. `/pattern/flags`), return the pattern and flags as a tuple. Returns `undefined` if the string is not a valid regex literal.
 */
export function parseRegexLiteralString(
	str: string,
): { pattern: string; flags: string } | undefined {
	assertIsString(str, 'Expected a string');
	const regexLiteralPattern = `^/(?<pattern>.+)/(?<flags>[${allowedFlagsString}]*)$`;
	const match = str.match(regexLiteralPattern);
	return match?.groups as { pattern: string; flags: string } | undefined;
}

export class SearchMarkError extends Error {
	constructor(message: string, asserter?: Function) {
		super(message);
		this.name = 'SearchMarkError';
		Error.captureStackTrace?.(this, asserter || this.constructor);
	}
}

export function assert(claim: any, message: string): asserts claim {
	if (!claim) {
		throw new SearchMarkError(message, assert);
	}
}

function assertIsString(value: any, message?: string): asserts value is string {
	assert(
		typeof value === 'string',
		message || `Expected a string, but got ${typeof value}`,
	);
}
