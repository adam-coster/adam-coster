// Textmate Grammar Discovery
import { Pathy } from '@bscotch/pathy';
import { ok } from 'assert';
import plist from 'plist';
import { findExtensionManifests } from './definitions.path.js';
import { NestedScopes } from './definitions.types.js';
import { stringify } from './utils/json.js';

export class Grammar {
	static grammars: Grammar[] = [];

	tokens: Set<string> = new Set();
	semanticTokens: Set<string> = new Set();
	scopeNames: Set<string> = new Set();

	constructor(readonly languageId: string) {}

	get pathFriendlyLanguageId(): string {
		return this.languageId.replace(/[^a-z0-9_-]/gi, '_');
	}

	toTs() {
		const tokens: NestedScopes = [...this.tokens]
			.sort()
			.map((t) => t.split('.'))
			.reduce((acc, scopes) => {
				let scopeHolder = acc;
				for (const scope of scopes) {
					scopeHolder[scope] ||= {};
					scopeHolder = scopeHolder[scope];
				}
				return acc;
			}, {} as NestedScopes);

		return (
			[
				`export const scopeNames = Object.freeze(${stringify([
					...this.scopeNames,
				])} as const);`,
				`export const semanticTokens = Object.freeze(${stringify([
					...this.semanticTokens,
				])} as const);`,
				`export const tokens = Object.freeze(${stringify(tokens)} as const);`,
			].join('\n') + '\n'
		);
	}

	toJSON() {
		return {
			languageId: this.languageId,
			pathFriendlyLanguageId: this.pathFriendlyLanguageId,
			tokens: this.tokens,
			semanticTokens: this.semanticTokens,
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

	static async compile(outDir: Pathy): Promise<Grammar[]> {
		const manifests = await findExtensionManifests();
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
					const grammar = Grammar.ensureGrammar(semantics.language);
					Object.keys(semantics.scopes).forEach((scope) =>
						grammar.semanticTokens.add(scope),
					);
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

		await outDir.ensureDirectory();
		for (const grammar of Grammar.grammars) {
			const path = outDir.join(`${grammar.pathFriendlyLanguageId}.ts`);
			await path.write(grammar.toTs());
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
