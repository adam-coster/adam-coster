import vscode from 'vscode';

export class SymbolKindIconProvider implements vscode.WorkspaceSymbolProvider {
	provideWorkspaceSymbols(): vscode.SymbolInformation[] {
		return (
			[
				['Symbol Icon: Array', vscode.SymbolKind.Array],
				['Symbol Icon: Boolean', vscode.SymbolKind.Boolean],
				['Symbol Icon: Class', vscode.SymbolKind.Class],
				['Symbol Icon: Constant', vscode.SymbolKind.Constant],
				['Symbol Icon: Constructor', vscode.SymbolKind.Constructor],
				['Symbol Icon: Enum', vscode.SymbolKind.Enum],
				['Symbol Icon: EnumMember', vscode.SymbolKind.EnumMember],
				['Symbol Icon: Event', vscode.SymbolKind.Event],
				['Symbol Icon: Field', vscode.SymbolKind.Field],
				['Symbol Icon: File', vscode.SymbolKind.File],
				['Symbol Icon: Function', vscode.SymbolKind.Function],
				['Symbol Icon: Interface', vscode.SymbolKind.Interface],
				['Symbol Icon: Key', vscode.SymbolKind.Key],
				['Symbol Icon: Method', vscode.SymbolKind.Method],
				['Symbol Icon: Module', vscode.SymbolKind.Module],
				['Symbol Icon: Namespace', vscode.SymbolKind.Namespace],
				['Symbol Icon: Null', vscode.SymbolKind.Null],
				['Symbol Icon: Number', vscode.SymbolKind.Number],
				['Symbol Icon: Object', vscode.SymbolKind.Object],
				['Symbol Icon: Operator', vscode.SymbolKind.Operator],
				['Symbol Icon: Package', vscode.SymbolKind.Package],
				['Symbol Icon: Property', vscode.SymbolKind.Property],
				['Symbol Icon: String', vscode.SymbolKind.String],
				['Symbol Icon: Struct', vscode.SymbolKind.Struct],
				['Symbol Icon: TypeParameter', vscode.SymbolKind.TypeParameter],
				['Symbol Icon: Variable', vscode.SymbolKind.Variable],
			] as const
		).map(([name, kind]) => {
			return new vscode.SymbolInformation(
				name,
				kind,
				'SymbolKind',
				new vscode.Location(
					// Just a fake filepath, since there's no reason
					// to actually *pick* these symbols from the search.
					vscode.Uri.file('example'),
					new vscode.Position(0, 0),
				),
			);
		});
	}

	protected constructor() {}
	static register() {
		return vscode.languages.registerWorkspaceSymbolProvider(
			new SymbolKindIconProvider(),
		);
	}
}
