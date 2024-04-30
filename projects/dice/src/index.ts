export const diceRollPattern = '(?<diceCount>\\d+)?d(?<sides>\\d+|%)';

export const diceKeepSuffixPattern =
	'kh?(?<keepHighest>\\d+)|kl(?<keepLowest>\\d+)';

export const dicePoolSuffixNotation =
	'>(?<countGreater>\\d+)|<(?<countLesser>\\d+)';

export const diceRollWithKeepPattern = `${diceRollPattern}(?:${diceKeepSuffixPattern})?`;

export const diceRollWithPoolPattern = `${diceRollPattern}(?:${dicePoolSuffixNotation})?`;

export const modifierPattern = '(?<operator>[+-])(?<value>\\d+)';
