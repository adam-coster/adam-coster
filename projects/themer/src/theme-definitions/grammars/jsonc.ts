export const scopeNames = Object.freeze(['source.json.comments'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				json: {
					comments: {},
				},
			},
			json: {
				comments: {},
			},
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
				json: {
					comments: {},
				},
			},
		},
		language: {
			json: {
				comments: {},
			},
		},
		numeric: {
			json: {
				comments: {},
			},
		},
	},
	invalid: {
		illegal: {
			'expected-array-separator': {
				json: {
					comments: {},
				},
			},
			'expected-dictionary-separator': {
				json: {
					comments: {},
				},
			},
			'unrecognized-string-escape': {
				json: {
					comments: {},
				},
			},
		},
	},
	meta: {
		structure: {
			array: {
				json: {
					comments: {},
				},
			},
			dictionary: {
				json: {
					comments: {},
				},
				value: {
					json: {
						comments: {},
					},
				},
			},
		},
	},
	punctuation: {
		definition: {
			array: {
				begin: {
					json: {
						comments: {},
					},
				},
				end: {
					json: {
						comments: {},
					},
				},
			},
			comment: {
				json: {
					comments: {},
				},
			},
			dictionary: {
				begin: {
					json: {
						comments: {},
					},
				},
				end: {
					json: {
						comments: {},
					},
				},
			},
			string: {
				begin: {
					json: {
						comments: {},
					},
				},
				end: {
					json: {
						comments: {},
					},
				},
			},
		},
		separator: {
			array: {
				json: {
					comments: {},
				},
			},
			dictionary: {
				'key-value': {
					json: {
						comments: {},
					},
				},
				pair: {
					json: {
						comments: {},
					},
				},
			},
		},
		support: {
			type: {
				'property-name': {
					begin: {
						json: {
							comments: {},
						},
					},
					end: {
						json: {
							comments: {},
						},
					},
				},
			},
		},
	},
	string: {
		json: {
			comments: {},
		},
		quoted: {
			double: {
				json: {
					comments: {},
				},
			},
		},
	},
	support: {
		type: {
			'property-name': {
				json: {
					comments: {},
				},
			},
		},
	},
} as const);
