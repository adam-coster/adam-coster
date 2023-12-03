import fsp from 'fs/promises';

//#region SOLUTIONS

await solve(1, 1, solveDay1Part1);
await solve(1, 2, solveDay1Part2);
await solve(2, 1, solveDay2Part1);
await solve(2, 2, solveDay2Part2);

//#endregion SOLUTIONS

//#region Day 1: Trebuchet?!

/** @param {string} input */
function solveDay1Part1(input) {
	return input
		.trim() // Ensure no trailing newline
		.split(/[\r\n]+/g)
		.reduce((sum, row) => {
			const allNums = row.match(/\d/g);
			const num = +(allNums[0] + allNums.at(-1));
			return sum + num;
		}, 0);
}

/** @param {string} input */
function solveDay1Part2(input) {
	const numNames = [
		'\\d',
		'one', // The index position of the number's name is also its numeric value!
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	const pattern = new RegExp(numNames.join('|'), 'y');
	return input
		.trim() // Ensure no trailing newline
		.split(/[\r\n]+/g)
		.reduce((sum, row) => {
			/** @type {string[]} */
			const allNums = [];
			for (let i = 0; i < row.length; i++) {
				pattern.lastIndex = i;
				const match = pattern.exec(row);
				if (!match) continue;
				const namedValue = numNames.findIndex((name) => name === match[0]);
				allNums.push(namedValue > 0 ? `${namedValue}` : match[0]);
			}
			const num = +(allNums[0] + allNums.at(-1));
			return sum + num;
		}, 0);
}

//#endregion Day 1

//#region Day 2

/**
 * @param {string} input
 * @returns {{id:number, samples: {red:number, green: number, blue: number}[]}[]}
 */
function parseDay2Input(input) {
	const rowPattern = /Game (?<id>\d+): (?<allSamples>.*)/;
	const sampleColorPattern = /(?<count>\d+) (?<color>red|green|blue)/;
	return input
		.trim()
		.split(/[\r\n]+/g)
		.map((row) => {
			const { id, allSamples } = row.match(rowPattern).groups;
			const samples = allSamples.split(/\s*;\s*/g).map((sample) =>
				sample.split(/\s*,\s*/g).reduce((cleaned, valueString) => {
					const { count, color } = valueString.match(sampleColorPattern).groups;
					cleaned[color] = Number(count);
					return cleaned;
				}, {}),
			);
			return { id: Number(id), samples };
		});
}

/** @param {string} input */
function solveDay2Part1(input) {
	const maxCounts = {
		red: 12,
		green: 13,
		blue: 14,
	};
	return parseDay2Input(input).reduce((sum, game) => {
		const isPossible = game.samples.every((sample) =>
			['red', 'green', 'blue'].every(
				(color) => !sample[color] || sample[color] <= maxCounts[color],
			),
		);
		return isPossible ? sum + game.id : sum;
	}, 0);
}

/** @param {string} input */
function solveDay2Part2(input) {
	return parseDay2Input(input).reduce((sum, game) => {
		const maxes = {
			red: 0,
			green: 0,
			blue: 0,
		};
		game.samples.forEach((sample) =>
			['red', 'green', 'blue'].forEach(
				(color) => (maxes[color] = Math.max(sample[color] || 0, maxes[color])),
			),
		);
		const power = maxes.red * maxes.green * maxes.blue;
		return sum + power;
	}, 0);
}

//#endregion Day 2

//#region UTILITIES

/**
 * @template T
 * @param {string} input The sample input from Advent of Code
 * @param {(str:string)=>T} solver The function that converts a sample row into its solution
 * @returns {T[]} The output from all rows, as a single newline-separated string
 */
function solveRowBasedSample(solver, input) {
	const rows = rowsFromInput(input);
	return rows.map(solver);
}

/**
 * Given an input string with line breaks, get an array of
 * the values (excluding line breaks and any empty rows).
 * @param {string} input
 * @returns {string[]}
 */
function rowsFromInput(input) {
	return input.split(/[\r\n]+/g).filter(Boolean);
}

/**
 * Given a value, throw if it is undefined. Mostly useful for cases where we KNOW the value is defined but Typescript does not.
 * @template T
 * @param {T} x
 * @returns {Exclude<T,undefined|null>}
 */
function defined(x) {
	if (x === undefined || x === null) {
		throw new Error('Expected a defined value');
	}
	// @ts-expect-error We know this is fine, but Typescript doesn't!
	return x;
}

//#endregion UTILITIES

//#region LOCAL UTILITIES

/**
 * @param {number} day
 * @param {number} part
 * @param {(input:string)=>any} solver
 */
async function solve(day, part, solver) {
	const input = await readInput(day, part);
	const output = solver(input);
	console.log(`Day ${day} Part ${part}: ${output}`);
}

async function readInput(day, part = 1) {
	return await fsp.readFile(`${filepath('inputs', day, part)}`, 'utf8');
}

/**
 * @param {'inputs'|'outputs'} type
 * @param {number} day
 * @param {number} part
 */
function filepath(type, day, part) {
	return `${curdir()}${type}/${`${day}`.padStart(2, '0')}-${part}.txt`;
}

function curdir() {
	return new URL('.', import.meta.url).pathname;
}

//#endregion LOCAL UTILITIES
