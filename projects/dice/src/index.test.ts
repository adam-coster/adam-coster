import {} from 'node:assert';
import { test } from 'node:test';
import { diceRollWithKeepPattern, diceRollWithPoolPattern } from './index.js';

console.log({
	diceRollWithKeepPattern: new RegExp(diceRollWithKeepPattern),
	diceRollWithPoolPattern: new RegExp(diceRollWithPoolPattern),
});

await test('can parse valid dice strings', () => {
	console.log('');
});
