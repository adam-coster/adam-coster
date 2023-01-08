// Textmate Grammar Discovery
import { Pathy, pathy } from '@bscotch/pathy';
import semver from 'semver';
import { stringify } from '../utils/json.js';
import { extensionRoots } from './definitions.path.js';

type LanguageId = string;

interface GrammarConfig {
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

interface ExtensionManifest {
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

async function findExtensionManifests(): Promise<ExtensionManifest[]> {
	/** May have multiple installs in different locations, so when duplicate names found only keep the one with the highest version. */
	const extensions: Map<string, ExtensionManifest> = new Map();
	await Promise.all(
		extensionRoots.map(async (root) => {
			if (!(await root.exists())) {
				return;
			}
			console.log('Checking for extensions in:', root.absolute);
			await root.listChildrenRecursively({
				maxDepth: 2,
				async filter(p) {
					return (
						((await p.isFile()) && p.basename === 'package.json') || undefined
					);
				},
				async onInclude(path) {
					const content = (await path.read()) as ExtensionManifest;
					if (!content.name || !content.contributes) {
						return;
					}
					// Must have either grammars or semanticTokenScopes
					if (
						!content.contributes.grammars?.length &&
						!content.contributes.semanticTokenScopes?.length
					) {
						return;
					}
					content.dir = path.up();
					const existing = extensions.get(content.name);
					const isHigherVersion =
						!existing || semver.gt(content.version, existing.version);
					if (isHigherVersion) {
						extensions.set(content.name, content);
					}
				},
			});
		}),
	);
	return [...extensions.values()].sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
}

export function findGrammarNames(
	fileContent: unknown,
	onFind: (name: string) => void,
) {
	function recurse(obj: unknown, isRoot = false): void {
		if (Array.isArray(obj)) {
			return obj.forEach((item) => recurse(item));
		}
		if (typeof obj !== 'object' || obj === null) {
			return;
		}
		const keys = Object.keys(obj) as (keyof typeof obj)[];
		for (const key of keys) {
			const value = obj[key];
			if (key === 'name' && !isRoot && typeof value === 'string') {
				// @ts-expect-error
				for (const token of value.split(' ')) {
					if (token.match(/^[a-z0-9_.-]+$/)) {
						onFind(token);
					}
				}
			} else if (typeof value === 'object' && value !== null) {
				recurse(value);
			}
		}
	}
	recurse(fileContent, true);
}

export class Grammar {
	static grammars: Grammar[] = [];

	selectors: SyntaxSelectors = new Map();
	scopeNames: Set<string> = new Set();

	constructor(readonly languageId: string) {}

	static ensureGrammar(languageId: string): Grammar {
		let grammar = Grammar.grammars.find((g) => g.languageId === languageId);
		if (!grammar) {
			grammar = new Grammar(languageId);
			Grammar.grammars.push(grammar);
		}
		return grammar;
	}

	static compile(manifests: ExtensionManifest[]) {
		// First find all languages and scopeNames that map onto them
		const languages = new Set<string>();
		const languageIdToScopeName: Map<string, Set<string>> = new Map();
		for (const manifest of manifests) {
			for (const grammarConfig of manifest.contributes?.grammars || []) {
				if (!grammarConfig.language) {
					continue;
				}
				languages.add(grammarConfig.language);
				const grammar = Grammar.ensureGrammar(grammarConfig.language);
				if (grammarConfig.scopeName) {
					grammar.scopeNames.add(grammarConfig.scopeName);
				}
			}
			for (const semantics of manifest.contributes?.semanticTokenScopes || []) {
				if (semantics.language) {
					languages.add(semantics.language);
				}
			}
		}

		//
		return {
			languages,
			languageIdToScopeName,
		};
	}
}

export type SyntaxSelectors = Map<string, SyntaxSelectors>;
export async function compileGrammars(): Promise<SyntaxSelectors> {
	const extensions = await findExtensionManifests();
	const selectors = new Set<string>();
	const selectorsByLanguage: { [scopeName: string]: Set<string> } = {
		'': selectors,
	};
	const compiled = Grammar.compile(extensions);
	await pathy('tmp/grammars.json').write(stringify(compiled));

	/** scope:name pairs */
	await Promise.all(
		extensions.map(async (manifest) => {
			const grammars = (manifest.contributes.grammars || []).filter(
				(g) => g.language,
			);
			const semantics = manifest.contributes.semanticTokenScopes || [];
			for (const grammar of grammars) {
				const grammarPath = manifest.dir.join(grammar.path);
				if (!(await grammarPath.exists())) {
					// console.error("Grammar file doesn't exist:", grammar);
					continue;
				}
				if (!grammar.scopeName) {
					// console.error("Grammar doesn't have a scopeName:", grammar);
					continue;
				}
				selectors.add(grammar.scopeName);

				selectorsByLanguage[grammar.scopeName] ||= new Set();
				const grammarContent = await grammarPath.read();
				findGrammarNames(grammarContent, (name) => {
					selectors.add(name);
					selectorsByLanguage[grammar.scopeName].add(name);
				});
			}
		}),
	);
	const syntaxTokens: SyntaxSelectors = new Map();
	for (const scope of Object.keys(selectorsByLanguage)) {
		syntaxTokens.set(scope, syntaxTokens.get(scope) ?? new Map());
		for (const name of selectorsByLanguage[scope]) {
			let current = syntaxTokens.get(scope)!;
			for (const part of name.split('.')) {
				current.set(part, current.get(part) ?? new Map());
				current = current.get(part)!;
			}
		}
	}
	return syntaxTokens;
}
