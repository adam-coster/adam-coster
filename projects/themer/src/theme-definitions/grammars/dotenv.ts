export const scopeNames = Object.freeze(['source.env'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				env: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				env: {},
			},
		},
		language: {
			env: {},
		},
		numeric: {
			env: {},
		},
	},
	keyword: {
		operator: {
			assignment: {
				env: {},
			},
		},
		other: {
			env: {},
			template: {
				begin: {
					env: {},
				},
				end: {
					env: {},
				},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				env: {},
			},
			string: {
				begin: {
					env: {},
				},
				end: {},
			},
			variable: {
				env: {},
			},
		},
	},
	string: {
		interpolated: {
			env: {},
		},
		quoted: {
			double: {
				env: {},
			},
			single: {
				env: {},
			},
		},
	},
	variable: {
		other: {
			env: {},
		},
	},
} as const);
