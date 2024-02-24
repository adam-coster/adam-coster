import { fileURLToPath } from 'node:url';
import vscode from 'vscode';

type TreeItem = vscode.TreeItem;
type TreeEmittable = TreeItem | undefined | null | void;

export class SampleDropTarget extends vscode.TreeItem {
	constructor() {
		super('Drop Target');
	}
}

export class SampleTreeProvider
	implements
		vscode.TreeDataProvider<TreeItem>,
		vscode.TreeDragAndDropController<TreeItem>
{
	view!: vscode.TreeView<TreeItem>;
	get treeMimeType() {
		return `application/vnd.code.tree.${SampleTreeProvider.viewId}`;
	}
	readonly dragMimeTypes = [this.treeMimeType];
	readonly dropMimeTypes = [this.treeMimeType, 'text/plain', 'text/uri-list'];

	private _onDidChangeTreeData: vscode.EventEmitter<TreeEmittable> =
		new vscode.EventEmitter<TreeEmittable>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	private _onDidCollapseElement: vscode.EventEmitter<TreeEmittable> =
		new vscode.EventEmitter<TreeEmittable>();
	readonly onDidCollapseElement = this._onDidCollapseElement.event;

	getTreeItem(element: TreeItem): TreeItem {
		return element;
	}
	getChildren(element?: TreeItem): TreeItem[] {
		if (!element) {
			return [new SampleDropTarget()];
		}
		return [];
	}
	getParent?(element: TreeItem): TreeItem | undefined {
		return undefined;
	}
	resolveTreeItem?(item: TreeItem): TreeItem {
		return item;
	}

	handleDrag(
		source: readonly TreeItem[],
		dataTransfer: vscode.DataTransfer,
	): void | Thenable<void> {
		const item = new vscode.DataTransferItem(source);
		dataTransfer.set(this.treeMimeType, item);
	}

	handleDrop(
		target: TreeItem,
		dataTransfer: vscode.DataTransfer,
	): void | Thenable<void> {
		const external: vscode.Uri[] | undefined = dataTransfer
			.get('text/uri-list')
			?.value?.split(/\r?\n/g)
			.map((uri: string) => vscode.Uri.file(fileURLToPath(uri)));
		external?.forEach((uri) => {
			vscode.window.showInformationMessage(
				`Dropped text/uri-list: ${uri.toString()}`,
			);
		});

		const plainText = dataTransfer.get('text/plain')?.value;
		if (plainText) {
			vscode.window.showInformationMessage(`Dropped text/plain: ${plainText}`);
		}
	}

	static viewId = 'adam-coster-lab.tree';
	static register() {
		const provider = new SampleTreeProvider();
		provider.view = vscode.window.createTreeView(SampleTreeProvider.viewId, {
			treeDataProvider: provider,
			canSelectMany: true,
			dragAndDropController: provider,
		});
		const subscriptions = [provider.view];
		return subscriptions;
	}
}
