import vscode from 'vscode';
import { info } from './log.mjs';

export class ExtensionWorkspace {
	/**
	 * Only allow a single instance at a time.
	 */
	protected static provider: ExtensionWorkspace;
	protected static ctx: vscode.ExtensionContext;

	static activate(ctx: vscode.ExtensionContext) {
		info('Activating extension...');
		if (this.provider) {
			info('Extension already active!');
			return this.provider;
		}
		this.provider = new ExtensionWorkspace();
		this.ctx = ctx;
		return this.provider;
	}
}
