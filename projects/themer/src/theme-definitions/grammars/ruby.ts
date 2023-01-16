export const scopeNames = Object.freeze(['source.ruby'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				ruby: {},
			},
		},
		line: {
			'number-sign': {
				ruby: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				ruby: {},
			},
		},
		language: {
			ruby: {},
		},
		numeric: {
			binary: {
				ruby: {},
			},
			float: {
				ruby: {},
			},
			hex: {
				ruby: {},
			},
			integer: {
				ruby: {},
			},
			octal: {
				ruby: {},
			},
			ruby: {},
		},
		other: {
			'character-class': {
				set: {
					ruby: {},
				},
			},
			symbol: {
				'double-quoted': {
					ruby: {},
				},
				hashkey: {
					parameter: {
						function: {
							ruby: {},
						},
					},
					ruby: {},
				},
				percent: {
					ruby: {},
				},
				ruby: {},
				'single-quoted': {
					ruby: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				ruby: {},
			},
			type: {
				class: {
					ruby: {},
				},
				module: {
					ruby: {},
				},
			},
		},
		other: {
			'inherited-class': {
				module: {
					first: {
						ruby: {},
					},
					second: {
						ruby: {},
					},
					third: {
						ruby: {},
					},
				},
				ruby: {},
			},
		},
	},
	invalid: {
		deprecated: {
			ruby: {},
		},
	},
	keyword: {
		control: {
			class: {
				ruby: {},
			},
			def: {
				ruby: {},
			},
			module: {
				ruby: {},
			},
			'pseudo-method': {
				ruby: {},
			},
			ruby: {},
			'start-block': {
				ruby: {},
			},
		},
		operator: {
			arithmetic: {
				ruby: {},
			},
			assignment: {
				augmented: {
					ruby: {},
				},
				ruby: {},
			},
			comparison: {
				ruby: {},
			},
			logical: {
				ruby: {},
			},
			other: {
				ruby: {},
			},
			quantifier: {
				ruby: {},
			},
		},
		other: {
			'special-method': {
				ruby: {},
			},
		},
	},
	meta: {
		array: {
			string: {
				interpolated: {
					ruby: {},
				},
				ruby: {},
			},
			symbol: {
				interpolated: {
					ruby: {},
				},
				ruby: {},
			},
		},
		class: {
			ruby: {},
		},
		embedded: {
			block: {
				'c++': {},
				c: {},
				css: {},
				html: {},
				js: {
					jquery: {},
				},
				lua: {},
				ruby: {},
				shell: {},
				sql: {},
				xml: {},
			},
			line: {
				ruby: {},
			},
		},
		'environment-variable': {
			ruby: {},
		},
		function: {
			method: {
				'with-arguments': {
					ruby: {},
				},
				'without-arguments': {
					ruby: {},
				},
			},
		},
		group: {
			regexp: {
				ruby: {},
			},
		},
		module: {
			ruby: {},
		},
		require: {
			ruby: {},
		},
		syntax: {
			ruby: {
				'start-block': {},
			},
		},
	},
	punctuation: {
		definition: {
			'character-class': {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
			},
			comment: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
				ruby: {},
			},
			constant: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
				ruby: {},
			},
			group: {
				ruby: {},
			},
			parameters: {
				ruby: {},
			},
			quantifier: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
			},
			string: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
				ruby: {},
			},
			variable: {
				ruby: {},
			},
		},
		section: {
			array: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
			},
			embedded: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
			},
			function: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
				ruby: {},
			},
			scope: {
				begin: {
					ruby: {},
				},
				end: {
					ruby: {},
				},
				ruby: {},
			},
		},
		separator: {
			arguments: {
				ruby: {},
			},
			inheritance: {
				ruby: {},
			},
			'key-value': {},
			method: {
				ruby: {},
			},
			namespace: {
				ruby: {},
			},
			object: {
				ruby: {},
			},
			other: {
				ruby: {},
			},
			statement: {
				ruby: {},
			},
			variable: {
				ruby: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					ruby: {},
				},
			},
		},
	},
	source: {
		ruby: {},
	},
	storage: {
		type: {
			variable: {
				ruby: {},
			},
		},
	},
	string: {
		interpolated: {
			percent: {
				ruby: {},
			},
			ruby: {},
		},
		other: {
			ruby: {},
		},
		quoted: {
			double: {
				ruby: {},
			},
			other: {
				interpolated: {
					ruby: {},
				},
				ruby: {},
			},
			single: {
				ruby: {},
			},
		},
		regexp: {
			classic: {
				ruby: {},
			},
			percent: {
				ruby: {},
			},
		},
		unquoted: {
			heredoc: {
				ruby: {},
			},
			'program-block': {
				ruby: {},
			},
		},
	},
	support: {
		class: {
			ruby: {},
		},
		function: {
			kernel: {
				lambda: {
					ruby: {},
				},
				ruby: {},
			},
		},
	},
	text: {
		html: {
			embedded: {
				ruby: {},
			},
		},
	},
	variable: {
		language: {
			ruby: {},
			self: {
				ruby: {},
			},
		},
		other: {
			block: {
				ruby: {},
			},
			constant: {
				ruby: {},
			},
			object: {
				ruby: {},
			},
			readwrite: {
				class: {
					ruby: {},
				},
				global: {
					'pre-defined': {
						ruby: {},
					},
					ruby: {},
				},
				instance: {
					ruby: {},
				},
			},
		},
		parameter: {
			function: {
				ruby: {},
			},
		},
	},
} as const);
