export const scopeNames = Object.freeze(['source.asl'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				json: {},
			},
			json: {},
		},
		line: {
			'double-slash': {
				js: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				json: {},
			},
		},
		language: {
			json: {},
		},
		numeric: {
			json: {},
		},
	},
	invalid: {
		illegal: {
			'expected-array-separator': {
				json: {},
			},
			'expected-dictionary-separator': {
				json: {},
			},
			'unrecognized-string-escape': {
				json: {},
			},
		},
	},
	meta: {
		structure: {
			array: {
				json: {},
			},
			dictionary: {
				json: {},
				value: {
					json: {},
				},
			},
		},
	},
	punctuation: {
		definition: {
			array: {
				begin: {
					json: {},
				},
				end: {
					json: {},
				},
			},
			comment: {
				json: {},
			},
			dictionary: {
				begin: {
					json: {},
				},
				end: {
					json: {},
				},
			},
			string: {
				begin: {
					json: {},
				},
				end: {
					json: {},
				},
			},
		},
		separator: {
			array: {
				json: {},
			},
			dictionary: {
				'key-value': {
					json: {},
				},
				pair: {
					json: {},
				},
			},
		},
		support: {
			type: {
				'property-name': {
					begin: {
						json: {},
					},
					end: {
						json: {},
					},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				json: {},
			},
		},
	},
	support: {
		type: {
			'property-name': {
				json: {},
			},
		},
	},
} as const);
