export const scopeNames = Object.freeze(['source.toml'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				toml: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				toml: {},
			},
		},
		language: {
			boolean: {
				toml: {},
			},
		},
		numeric: {
			bin: {
				toml: {},
			},
			float: {
				toml: {},
			},
			hex: {
				toml: {},
			},
			inf: {
				toml: {},
			},
			integer: {
				toml: {},
			},
			nan: {
				toml: {},
			},
			oct: {
				toml: {},
			},
		},
		other: {
			boolean: {
				toml: {},
			},
			date: {
				toml: {},
			},
			datetime: {
				toml: {},
			},
			'datetime-with-timezone': {
				toml: {},
			},
			time: {
				date: {
					toml: {},
				},
				datetime: {
					local: {
						toml: {},
					},
					offset: {
						toml: {},
					},
				},
				time: {
					toml: {},
				},
			},
		},
	},
	entity: {
		other: {
			'attribute-name': {
				table: {
					array: {
						toml: {},
					},
					toml: {},
				},
			},
		},
	},
	invalid: {
		deprecated: {
			noValueGiven: {
				toml: {},
			},
		},
		illegal: {
			escape: {
				toml: {},
			},
			noKeyDefined: {
				toml: {},
			},
			toml: {},
		},
	},
	keyword: {
		key: {
			toml: {},
		},
	},
	meta: {
		array: {
			table: {
				toml: {},
			},
			toml: {},
		},
		entry: {
			toml: {},
		},
		preprocessor: {
			toml: {},
		},
		table: {
			inline: {
				toml: {},
			},
			toml: {},
		},
		tag: {
			table: {
				array: {
					toml: {},
				},
				toml: {},
			},
		},
	},
	punctuation: {
		definition: {
			array: {
				table: {
					toml: {},
				},
				toml: {},
			},
			comment: {
				toml: {},
			},
			inlinetable: {
				toml: {},
			},
			keyValuePair: {
				toml: {},
			},
			meta: {
				preprocessor: {
					toml: {},
				},
			},
			table: {
				array: {
					toml: {},
				},
				inline: {
					toml: {},
				},
				toml: {},
			},
		},
		eq: {
			toml: {},
		},
		separator: {
			array: {
				toml: {},
			},
			dot: {
				toml: {},
			},
			table: {
				inline: {
					toml: {},
				},
			},
		},
	},
	string: {
		quoted: {
			single: {
				basic: {
					line: {
						toml: {},
					},
				},
				literal: {
					line: {
						toml: {},
					},
				},
			},
			triple: {
				basic: {
					block: {
						toml: {},
					},
				},
				literal: {
					block: {
						toml: {},
					},
				},
			},
		},
	},
	support: {
		type: {
			'property-name': {
				array: {
					toml: {},
				},
				table: {
					toml: {},
				},
				toml: {},
			},
		},
	},
} as const);
