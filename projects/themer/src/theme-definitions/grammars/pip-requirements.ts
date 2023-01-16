export const scopeNames = Object.freeze(['source.pip-requirements'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {},
		},
	},
	constant: {
		character: {
			escape: {},
		},
		numeric: {},
	},
	entity: {
		name: {
			class: {},
			selector: {},
			tag: {},
		},
		other: {
			'attribute-name': {},
		},
	},
	keyword: {
		operator: {
			comparison: {},
		},
	},
	string: {
		path: {},
		quoted: {
			double: {},
			single: {},
		},
	},
} as const);
