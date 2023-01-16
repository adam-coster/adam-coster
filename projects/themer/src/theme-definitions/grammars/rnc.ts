export const scopeNames = Object.freeze(['source.rnc'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		hash: {
			rnc: {},
		},
	},
	constant: {
		character: {
			escape: {
				rnc: {},
			},
		},
	},
	entity: {
		other: {
			attribute: {
				rnc: {},
			},
			element: {
				rnc: {},
			},
			grammar_production: {
				rnc: {},
			},
		},
	},
	keyword: {
		other: {
			attribute: {
				rnc: {},
			},
			element: {
				rnc: {},
			},
			grammar: {
				rnc: {},
			},
			start: {
				rnc: {},
			},
		},
	},
	meta: {
		declaration: {
			attribute: {
				rnc: {},
			},
			element: {
				rnc: {},
			},
		},
		grammar_production: {
			rnc: {},
		},
	},
	storage: {
		type: {
			rnc: {},
		},
	},
	string: {
		quoted: {
			double: {
				rnc: {},
			},
			single: {
				rnc: {},
			},
		},
	},
} as const);
