// Textmate Grammar Discovery
import { Pathy, pathy } from '@bscotch/pathy';
import { stringify } from './utils/json.js';
import { ExtensionManifest } from './definitions.types.js';
import { findExtensionManifests } from './definitions.path.js';
import { ok } from 'assert';
import plist from 'plist';

export class Grammar {
	static grammars: Grammar[] = [];

	tokens: Set<string> = new Set();
	selectors: SyntaxSelectors = new Map();
	scopeNames: Set<string> = new Set();

	constructor(readonly languageId: string) {}

	get pathFriendlyLanguageId(): string {
		return this.languageId.replace(/[^a-z0-9_-]/gi, '_');
	}

	toJSON() {
		return {
			languageId: this.languageId,
			tokens: this.tokens,
			selectors: this.selectors,
			scopeNames: this.scopeNames,
		};
	}

	protected static ensureGrammar(languageId: string): Grammar {
		let grammar = Grammar.grammars.find((g) => g.languageId === languageId);
		if (!grammar) {
			grammar = new Grammar(languageId);
			Grammar.grammars.push(grammar);
		}
		return grammar;
	}

	static async compile(manifests: ExtensionManifest[]): Promise<Grammar[]> {
		// First pass to identify all languages and
		// their scope names, creating Grammar instances
		// along the way.
		for (const manifest of manifests) {
			for (const grammarConfig of manifest.contributes?.grammars || []) {
				if (!grammarConfig.language) {
					continue;
				}
				const grammar = Grammar.ensureGrammar(grammarConfig.language);
				if (grammarConfig.scopeName) {
					grammar.scopeNames.add(grammarConfig.scopeName);
				}
			}
			for (const semantics of manifest.contributes?.semanticTokenScopes || []) {
				if (semantics.language) {
					Grammar.ensureGrammar(semantics.language);
				}
			}
		}

		// Second pass to identify all selectors
		for (const manifest of manifests) {
			const grammarConfigs = manifest.contributes?.grammars || [];
			for (const grammarConfig of grammarConfigs) {
				// Identify applicable scopes
				const scopeNames: Set<string> = new Set(grammarConfig.injectTo || []);
				if (grammarConfig.scopeName) {
					scopeNames.add(grammarConfig.scopeName);
				}
				const grammars = Grammar.grammars.filter((g) =>
					[...g.scopeNames].some((s) => scopeNames.has(s)),
				);
				const grammarPath = manifest.dir.join(grammarConfig.path);
				if (!(await grammarPath.exists())) {
					console.error(
						"Listed grammar file doesn't exist:",
						grammarPath.absolute,
					);
					continue;
				}
				await Grammar.grammarTokensFromConfig(grammarPath, (token) => {
					for (const grammar of grammars) {
						grammar.tokens.add(token);
					}
				});
			}
		}

		return Grammar.grammars;
	}

	static async grammarTokensFromConfig(
		path: Pathy,
		onFind?: (name: string) => void,
	) {
		let config: unknown;
		if (path.hasExtension('json')) {
			config = await path.read();
		} else {
			// Could be xml or JSON
			const content = await path.read();
			ok(typeof content === 'string', 'Expected string');
			try {
				config = JSON.parse(content);
			} catch {
				config = plist.parse(content);
				await pathy('tmp').join(`${path.name}.json`).write(config);
			}
		}
		const grammarTokens = new Set<string>();
		function recurse(obj: unknown, isRoot = false): void {
			if (Array.isArray(obj)) {
				return obj.forEach((item) => recurse(item));
			}
			if (typeof obj !== 'object' || obj === null) {
				return;
			}
			const keys = Object.keys(obj) as string[];
			for (const key of keys) {
				const value = (obj as any)[key];
				// console.log('Checking key', key, value);
				if (key === 'name' && !isRoot && typeof value === 'string') {
					const tokens = value
						.split(/[, ]/g)
						.map((t) => t.trim())
						.filter((t) => t) as string[];
					for (const token of tokens) {
						onFind?.(token);
						grammarTokens.add(token);
					}
				} else if (key === 'name' && !isRoot) {
					console.error('Unexpected name value', value);
				} else if (typeof value === 'object' && value !== null) {
					recurse(value);
				}
			}
		}
		recurse(config, true);
		return grammarTokens;
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

	return new Map();

	// /** scope:name pairs */
	// await Promise.all(
	// 	extensions.map(async (manifest) => {
	// 		const grammars = (manifest.contributes.grammars || []).filter(
	// 			(g) => g.language,
	// 		);
	// 		const semantics = manifest.contributes.semanticTokenScopes || [];
	// 		for (const grammar of grammars) {
	// 			const grammarPath = manifest.dir.join(grammar.path);
	// 			if (!(await grammarPath.exists())) {
	// 				// console.error("Grammar file doesn't exist:", grammar);
	// 				continue;
	// 			}
	// 			if (!grammar.scopeName) {
	// 				// console.error("Grammar doesn't have a scopeName:", grammar);
	// 				continue;
	// 			}
	// 			selectors.add(grammar.scopeName);

	// 			selectorsByLanguage[grammar.scopeName] ||= new Set();
	// 			await Grammar.grammarTokensFromConfig(grammarPath, (name) => {
	// 				selectors.add(name);
	// 				selectorsByLanguage[grammar.scopeName].add(name);
	// 			});
	// 		}
	// 	}),
	// );
	// const syntaxTokens: SyntaxSelectors = new Map();
	// for (const scope of Object.keys(selectorsByLanguage)) {
	// 	syntaxTokens.set(scope, syntaxTokens.get(scope) ?? new Map());
	// 	for (const name of selectorsByLanguage[scope]) {
	// 		let current = syntaxTokens.get(scope)!;
	// 		for (const part of name.split('.')) {
	// 			current.set(part, current.get(part) ?? new Map());
	// 			current = current.get(part)!;
	// 		}
	// 	}
	// }
	// return syntaxTokens;
}
