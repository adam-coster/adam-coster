export const scopeNames = Object.freeze([
	'markdown.mermaid.codeblock',
	'source.mermaid',
] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {},
	constant: {
		numeric: {
			decimal: {
				mermaid: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				mermaid: {},
			},
			type: {
				class: {
					mermaid: {},
				},
			},
			variable: {
				field: {
					mermaid: {},
				},
				parameter: {
					mermaid: {},
				},
			},
		},
	},
	keyword: {
		control: {
			mermaid: {},
		},
	},
	meta: {
		function: {
			mermaid: {},
		},
	},
	punctuation: {
		definition: {
			typeparameters: {
				begin: {
					mermaid: {},
				},
				end: {
					mermaid: {},
				},
			},
		},
		parenthesis: {
			closed: {
				mermaid: {},
			},
			open: {
				mermaid: {},
			},
		},
	},
	storage: {
		type: {
			mermaid: {},
		},
	},
	string: {},
	variable: {},
} as const);
