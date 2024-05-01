import type {
	KeepNode,
	ModifierNode,
	PoolNode,
	RollNode,
} from './ast.types.js';
import {
	diceKeepSuffixPattern,
	dicePoolSuffixPattern,
	diceRollPattern,
	modifierPattern,
} from './constants.js';

export function parseDiceNotation(source: string, offset = 0): RollNode {
	const rollRe = new RegExp(
		`^${diceRollPattern}${diceKeepSuffixPattern}?${dicePoolSuffixPattern}?${modifierPattern}?$`,
		'd',
	);
	const match = source.match(rollRe);
	if (!match) {
		throw new Error('Invalid dice notation');
	}
	let keepNode: KeepNode | undefined;
	if (match.groups?.keep) {
		const keepMatchPos = match.indices!.groups!.keep;
		keepNode = {
			kind: match.groups.keepHighest ? 'KeepHighest' : 'KeepLowest',
			text: match.groups.keep,
			start: offset + keepMatchPos[0],
			end: offset + keepMatchPos[1],
			value: parseInt(match.groups!.keepHighest ?? match.groups!.keepLowest),
		};
	}
	let poolNode: PoolNode | undefined;
	if (match.groups?.pool) {
		const poolMatchPos = match.indices!.groups!.pool;
		poolNode = {
			kind: match.groups.countGreater ? 'PoolGreater' : 'PoolLesser',
			text: match.groups.pool,
			start: offset + poolMatchPos[0],
			end: offset + poolMatchPos[1],
			value: parseInt(match.groups!.countGreater ?? match.groups!.countLesser),
		};
	}
	let modifierNode: ModifierNode | undefined;
	if (match.groups?.modifier) {
		const modifierMatchPos = match.indices!.groups!.modifier;
		modifierNode = {
			kind: match.groups.operator === '+' ? 'ModifierPlus' : 'ModifierMinus',
			text: match.groups.modifier,
			start: offset + modifierMatchPos[0],
			end: offset + modifierMatchPos[1],
			value: parseInt(match.groups.value),
		};
	}
	const roll: RollNode = {
		kind: 'Roll',
		text: match[0],
		start: offset,
		end: match[0].length,
		count: {
			kind: 'DiceCount',
			text: match.groups?.diceCount ?? '1',
			start: offset,
			end: offset + (match.indices?.groups?.diceCount?.[1] ?? 0),
			value: match.groups?.diceCount ? parseInt(match.groups.diceCount) : 1,
		},
		die: {
			kind: 'DieSides',
			text: match.groups!.die!,
			start: offset + match.indices!.groups!.die![0],
			end: offset + match.indices!.groups!.die![1],
			value: match.groups!.sides === '%' ? 100 : parseInt(match.groups!.sides),
		},
		keep: keepNode,
		pool: poolNode,
		modifier: modifierNode,
	};

	return roll;
}
