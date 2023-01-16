export const scopeNames = Object.freeze(['source.rust'] as const);
export const semanticTokens = Object.freeze([
	'*.mutable',
	'attribute',
	'boolean',
	'builtinType',
	'constParameter',
	'enum',
	'formatSpecifier',
	'function',
	'interface',
	'keyword',
	'keyword.controlFlow',
	'lifetime',
	'macroBang',
	'method',
	'struct',
	'typeAlias',
	'union',
	'variable',
	'variable.constant',
] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				rust: {},
			},
			rust: {},
		},
		line: {
			documentation: {
				rust: {},
			},
			'double-slash': {
				rust: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				backslash: {
					rust: {},
				},
				bit: {
					rust: {},
				},
				rust: {},
				unicode: {
					punctuation: {
						rust: {},
					},
					rust: {},
				},
			},
		},
		language: {
			bool: {
				rust: {},
			},
		},
		numeric: {
			bin: {
				rust: {},
			},
			decimal: {
				exponent: {
					mantissa: {
						rust: {},
					},
				},
				rust: {},
			},
			hex: {
				rust: {},
			},
			oct: {
				rust: {},
			},
		},
		other: {
			caps: {
				rust: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				macro: {
					rules: {
						rust: {},
					},
					rust: {},
				},
				rust: {},
			},
			module: {
				rust: {},
			},
			namespace: {
				rust: {},
			},
			type: {
				declaration: {
					rust: {},
				},
				enum: {
					rust: {},
				},
				lifetime: {
					rust: {},
				},
				macro: {
					rust: {},
				},
				metavariable: {
					rust: {},
				},
				numeric: {
					rust: {},
				},
				option: {
					rust: {},
				},
				primitive: {
					rust: {},
				},
				result: {
					rust: {},
				},
				rust: {},
				struct: {
					rust: {},
				},
				trait: {
					rust: {},
				},
			},
		},
	},
	keyword: {
		control: {
			rust: {},
		},
		declaration: {
			enum: {
				rust: {},
			},
			struct: {
				rust: {},
			},
			trait: {
				rust: {},
			},
			type: {
				rust: {},
			},
		},
		operator: {
			access: {
				dot: {
					rust: {},
				},
			},
			arrow: {
				fat: {
					rust: {},
				},
				skinny: {
					rust: {},
				},
			},
			assignment: {
				equal: {
					rust: {},
				},
				rust: {},
			},
			attribute: {
				inner: {
					rust: {},
				},
			},
			borrow: {
				and: {
					rust: {},
				},
				rust: {},
			},
			comparison: {
				rust: {},
			},
			dereference: {
				rust: {},
			},
			exponent: {
				rust: {},
				sign: {
					rust: {},
				},
			},
			'key-value': {
				rust: {},
			},
			logical: {
				rust: {},
			},
			macro: {
				dollar: {
					rust: {},
				},
			},
			math: {
				rust: {},
			},
			namespace: {
				rust: {},
			},
			question: {
				rust: {},
			},
			range: {
				rust: {},
			},
			subpattern: {
				rust: {},
			},
		},
		other: {
			crate: {
				rust: {},
			},
			fn: {
				rust: {},
			},
			rust: {},
		},
	},
	meta: {
		attribute: {
			rust: {},
		},
		function: {
			call: {
				rust: {},
			},
			definition: {
				rust: {},
			},
		},
		import: {
			rust: {},
		},
		interpolation: {
			rust: {},
		},
		macro: {
			metavariable: {
				rust: {},
				type: {
					rust: {},
				},
			},
			rules: {
				rust: {},
			},
			rust: {},
		},
		use: {
			rust: {},
		},
	},
	punctuation: {
		brackets: {
			angle: {
				rust: {},
			},
			attribute: {
				rust: {},
			},
			curly: {
				rust: {},
			},
			round: {
				rust: {},
			},
			square: {
				rust: {},
			},
		},
		comma: {
			rust: {},
		},
		definition: {
			attribute: {
				rust: {},
			},
			char: {
				rust: {},
			},
			interpolation: {
				rust: {},
			},
			lifetime: {
				rust: {},
			},
			string: {
				raw: {
					rust: {},
				},
				rust: {},
			},
		},
		semi: {
			rust: {},
		},
		separator: {
			dot: {
				decimal: {
					rust: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			mut: {
				rust: {},
			},
			rust: {},
		},
		type: {
			rust: {},
		},
	},
	string: {
		quoted: {
			byte: {
				raw: {
					rust: {},
				},
			},
			double: {
				rust: {},
			},
			single: {
				char: {
					rust: {},
				},
			},
		},
	},
	variable: {
		language: {
			self: {
				rust: {},
			},
			super: {
				rust: {},
			},
		},
		other: {
			metavariable: {
				name: {
					rust: {},
				},
				specifier: {
					rust: {},
				},
			},
			rust: {},
		},
	},
} as const);
