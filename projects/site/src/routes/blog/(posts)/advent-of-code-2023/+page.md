It's been a few years since I did [Advent of Code](https://adventofcode.com/), the annual "Advent Calendar" of programming challenges. The other times I did it I had fun, but just sorta got distracted after the first week or two -- no doubt that'll happen this year, too! Until that happens, though, I'll update this post with solutions as I go.

(I had to disable copilot while solving these to prevent it from solving them for me!)

**⚠️SPOILERS AHEAD⚠️** *if you want to solve these yourself, don't read any further!*


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
		.split(/[\r\n]+/g)
		.filter(Boolean)
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
		.filter(Boolean)
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