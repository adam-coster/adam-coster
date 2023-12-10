import fsp from 'fs/promises';

//#region SOLUTIONS

await solve(1, 1, solveDay1Part1);
await solve(1, 2, solveDay1Part2);
await solve(2, 1, solveDay2Part1);
await solve(2, 2, solveDay2Part2);
await solve(3, 1, solveDay3Part1);
// await solve(3, 2, solveDay3Part2);

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

//#region Day 3

/**
 * @typedef Day3Num
 * @prop {number} startCol
 * @prop {number} endCol
 * @prop {number} value
 * @typedef Day3Cell
 * @prop {number} col
 * @prop {string} value
 * @prop {boolean} isSymbol
 * @prop {Day3Num} [num]
 */

/**
 * @param {string} input
 * @returns {Day3Cell[][]}
 */
function parseDay3Input(input) {
	return input
		.trim()
		.split(/[\r\n]+/g)
		.map((row) => {
			const chars = row.split('');

			/** @type {Day3Cell[]} */
			const cells = [];
			for (let col = 0; col < chars.length; col++) {
				const value = chars[col];
				const isSymbol = /[^\d.]/.test(value);
				const isNum = !isSymbol && /\d/.test(value);
				/** @type {Day3Num|undefined} */
				let num;
				if (isNum && cells[col - 1]?.num) {
					// This this is part of the last number and thus
					// already dealt with!
					num = cells[col - 1].num;
				} else if (isNum) {
					// This is the start of a new number
					let numStr = value;
					num = {
						startCol: col,
						endCol: col,
						value: 0,
					};
					for (let j = col + 1; j < chars.length; j++) {
						if (/\d/.test(chars[j])) {
							numStr += chars[j];
							num.endCol++;
						} else break;
					}
					num.value = Number(numStr);
				}
				cells.push({
					col,
					value,
					isSymbol,
					num,
				});
			}
			return cells;
		});
}

/** @param {string} input */
function solveDay3Part1(input) {
	const rows = parseDay3Input(input);
	/** @type {number[]} */
	const nums = [];
	/** @type {Set<Day3Cell>} */
	const alreadyAdded = new Set();
	for (let r = 0; r < rows.length; r++) {
		const row = rows[r];
		for (let col = 0; col < row.length; col++) {
			const cell = row[col];
			if (!cell.num || alreadyAdded.has(cell)) continue;
			// Look at all 9 spots around this cell and,
			// if one of them has a symbol add its num!
			outer: for (let i = -1; i <= 1; i++) {
				for (let j = -1; j <= 1; j++) {
					if (i === 0 && i === j) continue; // skip self
					const otherCellRow = r + i;
					const otherCellCol = col + i;
					const otherCell = rows[otherCellRow]?.[otherCellCol];
					if (!otherCell || !otherCell.isSymbol) continue;
					alreadyAdded.add(cell);
					nums.push(cell.num.value);
					break outer;
				}
			}
		}
	}
	console.log(nums.slice(0, 10));
}

/** @param {string} input */
function solveDay3Part2(input) {}

//#endregion Day 3

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
