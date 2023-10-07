type TextMateRule = {} & { __tm_rule: never };

export interface VscodeSettings {
	'workbench.colorCustomizations': {
		'[Default Dark Modern]': Record<string, any>;
	};
	'editor.tokenColorCustomizations': {
		'[Default Dark Modern]': {
			textMateRules: TextMateRule[];
		};
	};
	'editor.semanticTokenColorCustomizations': {
		'[Default Dark Modern]': {
			enabled: true;
			rules: Record<string, any>;
		};
	};
}

export interface Theme {
	name: string;
	type: string;
	colors: Record<string, string>;
	tokenColors: TextMateRule[];
}
