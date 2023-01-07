// Textmate Grammar Discovery
import { Pathy, pathy } from '@bscotch/pathy';
import os from 'os';
import semver from 'semver';

const home = pathy(os.homedir());
const vscodeInstallRoot =
	os.platform() === 'win32'
		? pathy(process.env.LOCALAPPDATA).join('Programs')
		: pathy(`/usr/share`);

const VSCODE_EXTENSIONS_ROOT = [
	home.join('.vscode', 'extensions'),
	home.join('.vscode-insiders', 'extensions'),
];
const VSCODE_INSTALL_ROOTS = (
	os.platform() === 'win32'
		? ['Microsoft VS Code', 'Microsoft VS Code Insiders']
		: ['code', 'code-insiders']
).map((name) => vscodeInstallRoot.join(name));

interface ExtensionManifest {
	name: string;
	dir: Pathy;
	version: string;
	displayName: string;
	contributes: {
		grammars?: {
			scopeName: string;
			path: string;
			language?: string;
			embededLanguages?: { [scope: string]: string };
			/** List of language scopes this grammar is injected into */
			injectTo?: string[];
		}[];
		languages?: {
			id: string;
			aliases?: string[];
			extensions?: string[];
			configuration?: string;
		}[];
		semanticTokenScopes?: {
			language: string;
			scopes: {
				[scope: string]: string[];
			};
		}[];
	};
}

async function findExtensions() {
	const extensionRoots = VSCODE_INSTALL_ROOTS.map((r) =>
		r.join('resources', 'app', 'extensions'),
	).concat(...VSCODE_EXTENSIONS_ROOT);

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

export type SyntaxSelectors = Map<string, SyntaxSelectors>;
export async function findGrammarTokens(): Promise<SyntaxSelectors> {
	const extensions = await findExtensions();
	const selectors = new Set<string>();
	const selectorsByLanguage: { [scopeName: string]: Set<string> } = {
		'': selectors,
	};
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
