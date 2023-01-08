import { pathy } from '@bscotch/pathy';
import os from 'os';

export const home = pathy(os.homedir());
export const vscodeInstallRoot =
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

export const extensionRoots = VSCODE_INSTALL_ROOTS.map((r) =>
	r.join('resources', 'app', 'extensions'),
).concat(...VSCODE_EXTENSIONS_ROOT);
