export const diceRollPattern = '(?<diceCount>\\d+)?(?<die>d(?<sides>\\d+|%))';

export const diceKeepSuffixPattern =
	'(?<keep>kh?(?<keepHighest>\\d+)|kl(?<keepLowest>\\d+))';

export const dicePoolSuffixPattern =
	'(?<pool>>(?<countGreater>\\d+)|<(?<countLesser>\\d+))';

export const diceRollWithKeepPattern = `${diceRollPattern}(?:${diceKeepSuffixPattern})?`;

export const diceRollWithPoolPattern = `${diceRollPattern}(?:${dicePoolSuffixPattern})?`;

export const modifierPattern =
	'(?<modifier>\\s*(?<operator>[+-])\\s*(?<value>\\d+))';
