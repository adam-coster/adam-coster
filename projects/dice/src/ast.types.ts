export type Expression = ParentheticalNode | RollNode | BinaryExpressionNode;

export interface ParentheticalNode extends Node {
	kind: 'Parenthetical';
	expression?: Expression;
}

export interface BinaryExpressionNode extends Node {
	kind: 'BinaryExpression';
	left: Expression;
	operator: '+' | '-' | '*' | '/';
	right: Expression;
}

export interface RollNode extends Node {
	kind: 'Roll';
	count: DiceCountNode;
	die: DieSidesNode;
	keep?: KeepNode;
	pool?: PoolNode;
	modifier?: ModifierNode;
}

export interface DiceCountNode extends Node {
	kind: 'DiceCount';
	value: number;
}

export interface DieSidesNode extends Node {
	kind: 'DieSides';
	value: number;
}

export interface KeepNode extends Node {
	kind: 'KeepHighest' | 'KeepLowest';
	value: number;
}

export interface PoolNode extends Node {
	kind: 'PoolGreater' | 'PoolLesser';
	value: number;
}

export interface ModifierNode extends Node {
	kind: 'ModifierPlus' | 'ModifierMinus';
	value: number;
}

interface Node {
	kind: string;
	text: string;
	start: number;
	end: number;
}
