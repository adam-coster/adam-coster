export const scopeNames = Object.freeze(['source.json5'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				json5: {},
			},
			json5: {},
		},
		single: {
			json5: {},
		},
	},
	constant: {
		character: {
			escape: {
				json5: {},
			},
		},
		dec: {
			numeric: {
				json5: {},
			},
		},
		hex: {
			numeric: {
				json5: {},
			},
		},
		language: {
			json5: {},
		},
	},
	invalid: {
		illegal: {
			'expected-array-separator': {
				json5: {},
			},
			'expected-dictionary-separator': {
				json5: {},
			},
			'unrecognized-string-escape': {
				json5: {},
			},
		},
	},
	meta: {
		structure: {
			array: {
				json5: {},
			},
			dictionary: {
				json5: {},
				value: {
					json5: {},
				},
			},
		},
	},
	punctuation: {
		definition: {
			array: {
				begin: {
					json5: {},
				},
				end: {
					json5: {},
				},
			},
			comment: {
				json5: {},
			},
			dictionary: {
				begin: {
					json5: {},
				},
				end: {
					json5: {},
				},
			},
			string: {
				begin: {
					json5: {},
				},
				end: {
					json5: {},
				},
			},
		},
		separator: {
			array: {
				json5: {},
			},
			dictionary: {
				'key-value': {
					json5: {},
				},
				pair: {
					json5: {},
				},
			},
		},
	},
	string: {
		key: {
			json5: {},
		},
		quoted: {
			json5: {},
		},
	},
} as const);
