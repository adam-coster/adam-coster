It's been a few years since I did [Advent of Code](https://adventofcode.com/), the annual "Advent Calendar" of programming challenges. The other times I did it I had fun, but just sorta got distracted after the first week or two -- no doubt that'll happen this year, too! Until that happens, though, I'll update this post with solutions as I go.

(I had to disable copilot while solving these to prevent it from solving them for me!)

**⚠️SPOILERS AHEAD⚠️** *if you want to solve these yourself, don't read any further!*

## General Notes

The format of the puzzles largely follows the pattern:

1. Take newline-separated input of a bunch of strings
2. Apply some sort of conversion to each row
3. Apply some sort of cumulative function to the value from each row

The base functionality to accomplish that looks like this:

```js
/** @param {string} input */
function solvePuzzle(input) {
	return input
		.trim() // Ensure no trailing newlines
		.split(/[\r\n]+/g) // Convert to array of strings
		.reduce((sum, row) => {
			const converted = someFunction(row); // Puzzle-specific
			return sum + converted; // If we're doing a cumulative sum
		}, 0);
```

So you'll see that pattern throughout the solutions, where the actual puzzle-specific logic is inside the reducer function.

## Day 1: Trebuchet?!

### Day 1 Part 1

The data for this puzzle is described like this:

> On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

With the examples:

```bash
1abc2 # 12
pqr3stu8vwx # 38
a1b2c3d4e5f # 15
treb7uchet # 77
```

The samples show that there can be *more than 2* numbers, so we can't just grab the numbers and be done with it. The 4th sample shows that there can be *exactly one* number. So if we were to get all numbers, in order, as an array, we can just grab the first and last entry (which might be the same!).

```js
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
```

### Day 1 Part 2

For part 2, the puzzle uses the same input but adds another layer of detail:

> It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

They provide the examples:

```bash
two1nine # 29
eightwothree # 83
abcone2threexyz # 13
xtwone3four # 24
4nineeightseven2 # 42
zoneight234 # 14
7pqrstsixteen # 76
```

Note that the spelled-out numbers can share a letter, so it's a bit more complicated than just directly using a regex like `/\d|one|two|three)/`, since one match can block an overlapping one. But we can do *basically* that, just grabbing one match at a time and keeping track of the index position.

To do that I used a ["sticky" regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) which, when used with `.execute` checks for a match starting *exactly* at `pattern.lastIndex`.


```js
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
```

## Day 2: Cube Conundrum


The data for this puzzle is described comes from a game. That game works like this:

- A bag has an unknown number of red, green, and blue cubes in it.
- Each game is done with a different number of cubes.
- For each game, we'll get several random samples of cubes (the selected cubes are put back before the next sample)

Games are documented as in these examples:

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

Where the semi-colons separate each sample. Here's the function I'm using to parse this input into usable data for the two puzzles:

```js
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
					cleaned[color] = +count;
					return cleaned;
				}, {}),
			);
			return { id: Number(id), samples };
		});
}
```

This results in data that looks like this:

```jsonc
[
	{
		"id": 1, // The Game ID
		"samples": [
			{ "green": 1, "blue": 1, "red": 1 },
			{ "green": 3, "blue": 1, "red": 1 },
			{ "green": 4, "blue": 3, "red": 1 },
			{ "green": 4, "blue": 2, "red": 1 },
			{ "blue": 3, "green": 3 }
		]
	},
	// ...
]
```

### Day 2 Part 1

For Part 1, our goal is to:

1. Identify which games would have been possible if the bag contained:
	- 12 red cubes
	- 13 green cubes 
	- 14 blue cubes
2. Sum the IDs of all possible games to get the puzzle solution.

To solve this, for each game we need to use the samples to get the *max* number of each color and make sure that maximum value isn't greater than the target values.

```js
/** @param {string} input */
function solveDay2Part1(input) {
	const maxCounts = {
		red: 12,
		green: 13,
		blue: 14,
	};
	return parseDay2Input(input).reduce((sum, game) => {
		const isPossible = game.samples.every((sample) =>
			// Is every color <= the max allowed value?
			['red', 'green', 'blue'].every(
				(color) => !sample[color] || sample[color] <= maxCounts[color],
			),
		);
		return isPossible ? sum + game.id : sum;
	}, 0);
}
```

### Day 2 Part 2

Part 2 uses the same dataset but asks a different question, which boils down to:

1. Get the maximum `rgb` values for each Game
2. Multiply those values together to get the "Power" for that game
3. Add up the Powers for all games to get the puzzle solution

This is very similar to Part 1:

```js
/** @param {string} input */
function solveDay2Part2(input) {
	return parseDay2Input(input).reduce((sum, game) => {
		const maxes = {
			red: 0,
			green: 0,
			blue: 0,
		};
		// Update the max values
		game.samples.forEach((sample) =>
			['red', 'green', 'blue'].forEach(
				(color) => (maxes[color] = Math.max(sample[color] || 0, maxes[color])),
			),
		);
		const power = maxes.red * maxes.green * maxes.blue;
		return sum + power;
	}, 0);
}
```