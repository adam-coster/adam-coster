export const scopeNames = Object.freeze(['source.dockerfile'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				dockerfile: {},
			},
		},
	},
	constant: {
		character: {
			escaped: {
				dockerfile: {},
			},
		},
	},
	keyword: {
		control: {
			dockerfile: {},
		},
		operator: {
			dockerfile: {},
		},
		other: {
			'special-method': {
				dockerfile: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				dockerfile: {},
			},
			string: {
				begin: {
					dockerfile: {},
				},
				end: {
					dockerfile: {},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					dockerfile: {},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				dockerfile: {},
			},
			single: {
				dockerfile: {},
			},
		},
	},
} as const);
