import { test } from 'node:test';
import {
	parseRegexLiteralString,
	assert,
	search,
	markSearchResults,
} from './index.js';

await test('can parse regex-literal-like strings', () => {
	let parsed = parseRegexLiteralString('/hello/');
	assert(parsed, 'Should have parsed');
	assert(parsed.pattern === 'hello', 'Should have parsed the pattern');
	assert(parsed.flags === '', 'Should have parsed the flags');

	parsed = parseRegexLiteralString('/hello/gdi');
	assert(parsed, 'Should have parsed');
	assert(parsed.pattern === 'hello', 'Should have parsed the pattern');
	assert(parsed.flags === 'gdi', 'Should have parsed the flags');

	parsed = parseRegexLiteralString('/hello/gdiz');
	assert(!parsed, 'Should not have parsed invalid flags');

	parsed = parseRegexLiteralString('//gdi');
	assert(!parsed, 'Should not have parsed');

	parsed = parseRegexLiteralString('/hello/gdix/');
	assert(parsed, 'Should have parsed');
	assert(parsed.pattern === 'hello/gdix', 'Should have parsed the pattern');

	parsed = parseRegexLiteralString('not a regex');
	assert(!parsed, 'Should not have parsed');
});

await test('can find substring locations', () => {
	const source = 'hello what fun oh what fun hello world';
	let matches = search(source, 'hello');
	assert(matches.length === 2, 'Should have found 2 matches');
	assert(matches[0][0] === 0, 'Should have found the first match');
	assert(matches[0][1] === 5, 'Should have found the first match');
	assert(matches[1][0] === 27, 'Should have found the second match');
	assert(matches[1][1] === 32, 'Should have found the second match');

	matches = search(source, 'world');
	assert(matches.length === 1, 'Should have found 1 match');
	assert(matches[0][0] === 33, 'Should have found the match');
	assert(matches[0][1] === 38, 'Should have found the match');

	matches = search(source, 'nope');
	assert(matches.length === 0, 'Should not have found any matches');
});

await test('can find substring locations with ignoreCase', () => {
	const source = 'hello what fun oh what fun hello world';
	let matches = search(source, 'HELLO', { ignoreCase: true });
	assert(matches.length === 2, 'Should have found 2 matches');
	assert(matches[0][0] === 0, 'Should have found the first match');
	assert(matches[0][1] === 5, 'Should have found the first match');
	assert(matches[1][0] === 27, 'Should have found the second match');
	assert(matches[1][1] === 32, 'Should have found the second match');

	matches = search(source, 'WoRlD', { ignoreCase: true });
	assert(matches.length === 1, 'Should have found 1 match');
	assert(matches[0][0] === 33, 'Should have found the match');
	assert(matches[0][1] === 38, 'Should have found the match');
});

await test('can find regex matches', () => {
	const source = 'hello what fun oh whatwhat fun hello world';
	let matches = search(source, '/WHAT/i');
	assert(matches.length === 3, 'Should have found 3 matches');
	assert(matches[0][0] === 6, 'Should have found the first match');
	assert(matches[0][1] === 10, 'Should have found the first match');
	assert(matches[1][0] === 18, 'Should have found the second match');
	assert(matches[1][1] === 22, 'Should have found the second match');
	assert(matches[2][0] === 22, 'Should have found the third match');
	assert(matches[2][1] === 26, 'Should have found the third match');

	matches = search(source, '/what/');
	assert(matches.length === 3, 'Should have found 3 matches');

	matches = search(source, '/\\bo/');
	assert(matches.length === 1, 'Should have found 1 match');
	assert(matches[0][0] === 15, 'Should have found the match');
	assert(matches[0][1] === 16, 'Should have found the match');
});

await test('can mark substrings', () => {
	const source = 'hello what fun oh what fun hello world';
	let marked = markSearchResults(source, 'hello');
	assert(
		marked ===
			'<mark>hello</mark> what fun oh what fun <mark>hello</mark> world',
		'Should have marked the substrings',
	);

	marked = markSearchResults(source, 'oh what');
	assert(
		marked === 'hello what fun <mark>oh what</mark> fun hello world',
		'Should have marked the substrings',
	);

	marked = markSearchResults(source, 'nope');
	assert(marked === source, 'Should not have marked anything');

	marked = markSearchResults(source, '/WHAT/i');
	assert(
		marked ===
			'hello <mark>what</mark> fun oh <mark>what</mark> fun hello world',
		'Should have marked the substrings',
	);
});
