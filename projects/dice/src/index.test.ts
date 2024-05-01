import { deepEqual } from 'node:assert';
import { test } from 'node:test';
import { diceRollWithKeepPattern, diceRollWithPoolPattern } from './index.js';
import { parseDiceNotation } from './parser.js';

console.log({
	diceRollWithKeepPattern: new RegExp(diceRollWithKeepPattern),
	diceRollWithPoolPattern: new RegExp(diceRollWithPoolPattern),
});

await test('can parse valid dice strings', () => {
	const samples = [
		{
			text: '10d6k3>4 + 7',
			ast: {
				kind: 'Roll',
				text: '10d6k3>4 + 7',
				start: 0,
				end: 12,
				count: { kind: 'DiceCount', text: '10', start: 0, end: 2, value: 10 },
				die: { kind: 'DieSides', text: 'd6', start: 2, end: 4, value: 6 },
				keep: { kind: 'KeepHighest', text: 'k3', start: 4, end: 6, value: 3 },
				pool: { kind: 'PoolGreater', text: '>4', start: 6, end: 8, value: 4 },
				modifier: {
					kind: 'ModifierPlus',
					text: ' + 7',
					start: 8,
					end: 12,
					value: 7,
				},
			},
		},
		{
			text: 'd20',
			ast: {
				kind: 'Roll',
				text: 'd20',
				start: 0,
				end: 3,
				count: { kind: 'DiceCount', text: '1', start: 0, end: 0, value: 1 },
				die: { kind: 'DieSides', text: 'd20', start: 0, end: 3, value: 20 },
				keep: undefined,
				pool: undefined,
				modifier: undefined,
			},
		},
		{
			text: '21d%<5 -3',
			ast: {
				kind: 'Roll',
				text: '21d%<5 -3',
				start: 0,
				end: 9,
				count: { kind: 'DiceCount', text: '21', start: 0, end: 2, value: 21 },
				die: { kind: 'DieSides', text: 'd%', start: 2, end: 4, value: 100 },
				keep: undefined,
				pool: { kind: 'PoolLesser', text: '<5', start: 4, end: 6, value: 5 },
				modifier: {
					kind: 'ModifierMinus',
					text: ' -3',
					start: 6,
					end: 9,
					value: 3,
				},
			},
		},
	];
	for (const sample of samples) {
		const ast = parseDiceNotation(sample.text);
		console.log(ast);
		deepEqual(ast, sample.ast);
	}
});
