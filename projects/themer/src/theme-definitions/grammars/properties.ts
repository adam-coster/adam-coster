export const scopeNames = Object.freeze(['source.ini'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				ini: {},
			},
			semicolon: {
				ini: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				ini: {},
			},
		},
	},
	entity: {
		name: {
			section: {
				'group-title': {
					ini: {},
				},
			},
		},
	},
	keyword: {
		other: {
			definition: {
				ini: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				ini: {},
			},
			entity: {
				ini: {},
			},
			string: {
				begin: {
					ini: {},
				},
				end: {
					ini: {},
				},
			},
		},
		separator: {
			'key-value': {
				ini: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					ini: {},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				ini: {},
			},
			single: {
				ini: {},
			},
		},
	},
} as const);
