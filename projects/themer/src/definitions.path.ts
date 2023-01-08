import { pathy } from '@bscotch/pathy';
import os from 'os';
import { ExtensionManifest } from './definitions.types.js';
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

const extensionRoots = VSCODE_INSTALL_ROOTS.map((r) =>
	r.join('resources', 'app', 'extensions'),
).concat(...VSCODE_EXTENSIONS_ROOT);

export async function findExtensionManifests(): Promise<ExtensionManifest[]> {
	/** May have multiple installs in different locations, so when duplicate names found only keep the one with the highest version. */
	const extensions: Map<string, ExtensionManifest> = new Map();
	await Promise.all(
		extensionRoots.map(async (root) => {
			if (!(await root.exists())) {
				return;
			}
			console.log('Checking for extensions in:', root.absolute);
			await root.listChildrenRecursively({
				maxDepth: 1,
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
