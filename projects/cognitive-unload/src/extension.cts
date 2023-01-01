import assert from 'assert';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		'cognitive-unload.createNestedFile',
		async (workspacePath: string, selectedFiles: vscode.Uri[]) => {
			// TODO: Figure out what info I have available
			// Need to get the currently selected file
			assert.ok(
				selectedFiles.length === 1,
				'Exactly one file must be selected to create a nested file',
			);
			const selectedFile = selectedFiles[0].fsPath;
			const { base, ext } = selectedFile.match(/^(?<base>.*)(?<ext>\.[^.]+)$/)
				?.groups as { base: string; ext: string };
			const nestedFile = `${base}.nested${ext}`;
			await vscode.workspace.fs.writeFile(
				vscode.Uri.file(nestedFile),
				Uint8Array.from([]),
			);
			await vscode.commands.executeCommand(
				'vscode.open',
				vscode.Uri.file(nestedFile),
			);
		},
	);

	context.subscriptions.push(disposable);
}
