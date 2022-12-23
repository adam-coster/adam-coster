export type Selector = AppSelector | TokenSelector | SemanticSelector;

interface BaseSelector {
	kind: 'app' | 'token' | 'semantic';
	selector: string | string[];
}

export interface AppSelector extends BaseSelector {
	kind: 'app';
	selector: string;
}

export interface TokenSelector extends BaseSelector {
	kind: 'token';
	selector: string | string[];
	description?: string;
}

export interface SemanticSelector extends BaseSelector {
	kind: 'semantic';
	selector: string;
}

export function app(selector: string): AppSelector {
	return { kind: 'app', selector };
}
export function token(
	selector: string | string[],
	description?: string,
): TokenSelector {
	return { kind: 'token', selector, description };
}
export function semantic(selector: string): SemanticSelector {
	return { kind: 'semantic', selector };
}
