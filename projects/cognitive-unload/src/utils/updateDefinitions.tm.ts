// Textmate Grammar Discovery
import { Pathy, pathy } from '@bscotch/pathy';
import os from 'os';

const home = pathy(os.homedir());
const appData = pathy(process.env.APPDATA);

const VSCODE_EXTENSIONS_ROOT = [
	home.join('.vscode', 'extensions'),
	home.join('.vscode-insiders', 'extensions'),
];
const VSCODE_INSTALL_ROOTS = [
	appData.join('Local', 'Programs', 'Microsoft VS Code'),
	appData.join('Local', 'Programs', 'Microsoft VS Code Insiders'),
];

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

export function findGrammarNames(fileContent: unknown, names: Set<string>) {
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
						names.add(token);
					}
				}
			} else if (typeof value === 'object' && value !== null) {
				recurse(value);
			}
		}
	}
	recurse(fileContent, true);
	return names;
}

export type ParsedTokens = { [key: string]: ParsedTokens };
export async function findGrammarTokens(): Promise<ParsedTokens> {
	const extensions = await findExtensions();
	const names = new Set<string>();
	await Promise.all(
		extensions.map(async (ext) => {
			const manifest = await ext.read();
			for (const grammar of manifest.contributes?.grammars ?? []) {
				const grammarPath = ext.up().join(grammar.path);
				if (!(await grammarPath.exists())) {
					console.log("Grammar file doesn't exist:", grammar);
					continue;
				}
				names.add(grammar.scopeName);
				const grammarContent = await grammarPath.read();
				findGrammarNames(grammarContent, names);
			}
		}),
	);
	const nameChains: ParsedTokens = {};
	for (const name of names) {
		let current = nameChains;
		for (const part of name.split('.')) {
			current[part] ||= {};
			current = current[part];
		}
	}
	return nameChains;
}
