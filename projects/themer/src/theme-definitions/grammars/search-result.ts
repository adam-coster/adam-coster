export const scopeNames = Object.freeze(['text.searchResult'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {},
	constant: {
		character: {
			escape: {},
		},
		numeric: {
			integer: {},
		},
	},
	entity: {
		other: {
			'attribute-name': {},
			'attribute-value': {},
		},
	},
	invalid: {
		illegal: {},
	},
	keyword: {
		operator: {
			word: {
				search: {},
			},
		},
		other: {},
	},
	meta: {
		header: {
			search: {},
		},
		path: {
			basename: {
				search: {},
			},
			dirname: {
				search: {},
			},
			search: {},
		},
		resultBlock: {
			search: {},
		},
		resultLine: {
			elision: {},
			multiLine: {
				search: {},
			},
			search: {},
			singleLine: {
				search: {},
			},
		},
		resultLinePrefix: {
			contextLinePrefix: {
				search: {},
			},
			lineNumber: {
				search: {},
			},
			matchLinePrefix: {
				search: {},
			},
			search: {},
		},
	},
	punctuation: {
		separator: {},
	},
	string: {
		unquoted: {},
	},
} as const);
