// Textmate Grammar Discovery
import { Pathy, pathy } from '@bscotch/pathy';
import os from 'os';

const home = pathy(os.homedir());
const vscodeInstallRoot =
	os.platform() === 'win32'
		? pathy(process.env.APPDATA).join('Local', 'Programs')
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
	contributes?: {
		grammars?: { language: string; scopeName: string; path: string }[];
	};
}

async function findExtensions() {
	const extensionRoots = VSCODE_INSTALL_ROOTS.map((r) =>
		r.join('resources', 'app', 'extensions'),
	).concat(...VSCODE_EXTENSIONS_ROOT);
	const grammarFiles: Pathy<ExtensionManifest>[] = [];
	await Promise.all(
		extensionRoots.map(async (root) => {
			if (!(await root.exists())) {
				return;
			}
			await root.listChildrenRecursively({
				maxDepth: 2,
				async filter(p) {
					return (
						((await p.isFile()) && p.basename === 'package.json') || undefined
					);
				},
				onInclude(path) {
					grammarFiles.push(path as Pathy<any>);
				},
			});
		}),
	);
	return grammarFiles;
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
	await Promise.all(
		extensions.map(async (ext) => {
			const manifest = await ext.read();
			for (const grammar of manifest.contributes?.grammars ?? []) {
				const grammarPath = ext.up().join(grammar.path);
				if (!(await grammarPath.exists())) {
					console.error("Grammar file doesn't exist:", grammar);
					continue;
				}
				if (!grammar.scopeName) {
					console.error("Grammar doesn't have a scopeName:", grammar);
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
