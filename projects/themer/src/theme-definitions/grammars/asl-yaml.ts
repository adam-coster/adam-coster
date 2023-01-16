export const scopeNames = Object.freeze(['source.asl.yaml'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				yaml: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				'double-quoted': {
					newline: {
						yaml: {},
					},
				},
				'single-quoted': {
					yaml: {},
				},
				yaml: {},
			},
		},
		language: {
			boolean: {
				yaml: {},
			},
			merge: {
				yaml: {},
			},
			null: {
				yaml: {},
			},
			value: {
				yaml: {},
			},
		},
		numeric: {
			float: {
				yaml: {},
			},
			'indentation-indicator': {
				yaml: {},
			},
			integer: {
				yaml: {},
			},
			'yaml-version': {
				yaml: {},
			},
		},
		other: {
			timestamp: {
				yaml: {},
			},
		},
	},
	entity: {
		name: {
			tag: {
				yaml: {},
			},
			type: {
				anchor: {
					yaml: {},
				},
			},
		},
		other: {
			document: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
		},
	},
	invalid: {
		illegal: {
			character: {
				anchor: {
					yaml: {},
				},
			},
			'expected-comment-or-newline': {
				yaml: {},
			},
			'expected-newline': {
				yaml: {},
			},
			'tag-handle': {
				yaml: {},
			},
			unrecognized: {
				yaml: {},
			},
		},
	},
	keyword: {
		control: {
			flow: {
				alias: {
					yaml: {},
				},
				'block-scalar': {
					folded: {
						yaml: {},
					},
					literal: {
						yaml: {},
					},
				},
			},
			property: {
				anchor: {
					yaml: {},
				},
			},
		},
		other: {
			directive: {
				tag: {
					yaml: {},
				},
				yaml: {
					yaml: {},
				},
			},
		},
	},
	meta: {
		'block-mapping': {
			yaml: {},
		},
		directive: {
			yaml: {},
		},
		'flow-mapping': {
			yaml: {},
		},
		'flow-pair': {
			explicit: {
				yaml: {},
			},
			key: {
				yaml: {},
			},
			value: {
				yaml: {},
			},
			yaml: {},
		},
		'flow-sequence': {
			yaml: {},
		},
		property: {
			yaml: {},
		},
	},
	punctuation: {
		definition: {
			alias: {
				yaml: {},
			},
			anchor: {
				yaml: {},
			},
			block: {
				sequence: {
					item: {
						yaml: {},
					},
				},
			},
			comment: {
				yaml: {},
			},
			directive: {
				begin: {
					yaml: {},
				},
			},
			'key-value': {
				begin: {
					yaml: {},
				},
			},
			mapping: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
			sequence: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
			string: {
				begin: {
					yaml: {},
				},
				end: {
					yaml: {},
				},
			},
		},
		separator: {
			'key-value': {
				mapping: {
					yaml: {},
				},
			},
			mapping: {
				yaml: {},
			},
			sequence: {
				yaml: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					yaml: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			'chomping-indicator': {
				yaml: {},
			},
		},
		type: {
			'tag-handle': {
				yaml: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				yaml: {},
			},
			single: {
				yaml: {},
			},
		},
		unquoted: {
			block: {
				yaml: {},
			},
			'directive-name': {
				yaml: {},
			},
			'directive-parameter': {
				yaml: {},
			},
			plain: {
				in: {
					yaml: {},
				},
				out: {
					yaml: {},
				},
			},
		},
	},
	support: {
		other: {
			directive: {
				reserved: {
					yaml: {},
				},
			},
		},
		type: {
			'tag-prefix': {
				yaml: {},
			},
		},
	},
	variable: {
		other: {
			alias: {
				yaml: {},
			},
		},
	},
} as const);
