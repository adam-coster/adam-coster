import vscode from 'vscode';

export class SampleWorkspaceSymbolProvider
	implements vscode.WorkspaceSymbolProvider
{
	provideWorkspaceSymbols(query: string): vscode.SymbolInformation[] {
		// return symbols;
		return (
			[
				['Array', vscode.SymbolKind.Array],
				['Boolean', vscode.SymbolKind.Boolean],
				['Class', vscode.SymbolKind.Class],
				['Constant', vscode.SymbolKind.Constant],
				['Constructor', vscode.SymbolKind.Constructor],
				['Enum', vscode.SymbolKind.Enum],
				['EnumMember', vscode.SymbolKind.EnumMember],
				['Event', vscode.SymbolKind.Event],
				['Field', vscode.SymbolKind.Field],
				['File', vscode.SymbolKind.File],
				['Function', vscode.SymbolKind.Function],
				['Interface', vscode.SymbolKind.Interface],
				['Key', vscode.SymbolKind.Key],
				['Method', vscode.SymbolKind.Method],
				['Module', vscode.SymbolKind.Module],
				['Namespace', vscode.SymbolKind.Namespace],
				['Null', vscode.SymbolKind.Null],
				['Number', vscode.SymbolKind.Number],
				['Object', vscode.SymbolKind.Object],
				['Operator', vscode.SymbolKind.Operator],
				['Package', vscode.SymbolKind.Package],
				['Property', vscode.SymbolKind.Property],
				['String', vscode.SymbolKind.String],
				['Struct', vscode.SymbolKind.Struct],
				['TypeParameter', vscode.SymbolKind.TypeParameter],
				['Variable', vscode.SymbolKind.Variable],
			] as const
		).map(([name, kind]) => {
			return new vscode.SymbolInformation(
				name,
				kind,
				'SymbolKind',
				new vscode.Location(
					vscode.Uri.file('example'),
					new vscode.Position(0, 0),
				),
			);
		});
	}

	protected constructor() {}
	static register() {
		const provider = new SampleWorkspaceSymbolProvider();
		return [vscode.languages.registerWorkspaceSymbolProvider(provider)];
	}
}
