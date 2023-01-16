import type { Pathy } from '@bscotch/pathy';

export type LanguageId = string;

export type NestedScopes = { [scope: string]: NestedScopes };

export interface GrammarConfig {
	scopeName: string;
	path: string;
	language?: LanguageId;
	embededLanguages?: { [scope: string]: string };
	/**
	 * List of scopes this grammar is injected into.
	 * Could be the scope for a top-level language, or
	 * something more internal (for modularization)
	 */
	injectTo?: string[];
}

export interface ExtensionManifest {
	name: string;
	dir: Pathy;
	version: string;
	displayName: string;
	contributes: {
		grammars?: GrammarConfig[];
		languages?: {
			/** Language ID */
			id: string;
			aliases?: string[];
			extensions?: string[];
			configuration?: string;
		}[];
		semanticTokenScopes?: {
			/** Language ID */
			language: string;
			scopes: {
				[scope: string]: string[];
			};
		}[];
	};
}
