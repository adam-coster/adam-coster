export const scopeNames = Object.freeze(['source.swift'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				playground: {
					swift: {},
				},
				swift: {},
			},
			swift: {},
		},
		line: {
			'double-slash': {
				documentation: {
					swift: {},
				},
				swift: {},
			},
			'number-sign': {
				swift: {},
			},
			'triple-slash': {
				documentation: {
					swift: {},
				},
			},
		},
	},
	constant: {
		character: {
			escape: {
				newline: {
					swift: {},
				},
				swift: {},
				unicode: {
					swift: {},
				},
			},
		},
		language: {
			boolean: {
				swift: {},
			},
			nil: {
				swift: {},
			},
		},
		numeric: {
			float: {
				decimal: {
					swift: {},
				},
				hexadecimal: {
					swift: {},
				},
			},
			integer: {
				binary: {
					swift: {},
				},
				decimal: {
					swift: {},
				},
				hexadecimal: {
					swift: {},
				},
				octal: {
					swift: {},
				},
				swift: {},
			},
			swift: {},
		},
		other: {
			swift: {},
		},
	},
	entity: {
		name: {
			function: {
				'compound-name': {
					swift: {},
				},
				operator: {
					swift: {},
				},
				swift: {},
			},
			type: {
				$1: {
					swift: {},
				},
				module: {
					swift: {},
				},
				precedencegroup: {
					swift: {},
				},
				swift: {},
				typealias: {
					swift: {},
				},
			},
		},
		other: {
			'inherited-class': {
				swift: {},
			},
		},
	},
	invalid: {
		illegal: {
			'await-must-precede-throws': {
				swift: {},
			},
			'character-not-allowed-here': {
				swift: {},
			},
			'content-after-opening-delimiter': {
				swift: {},
			},
			'content-before-closing-delimiter': {
				swift: {},
			},
			'distinct-labels-not-allowed': {
				swift: {},
			},
			'dot-not-allowed-here': {
				swift: {},
			},
			'empty-inheritance-clause': {
				swift: {},
			},
			'escape-not-recognized': {},
			'extra-closing-delimiter': {
				swift: {},
			},
			'extra-colon-in-dictionary-type': {
				swift: {},
			},
			'extra-colon-in-parameter-list': {
				swift: {},
			},
			'function-body-not-allowed-in-protocol': {
				swift: {},
			},
			'missing-colon-after-selector-piece': {
				swift: {},
			},
			numeric: {
				float: {
					'invalid-exponent': {
						swift: {},
					},
					'missing-exponent': {
						swift: {},
					},
					'missing-leading-zero': {
						swift: {},
					},
				},
				'leading-underscore': {
					swift: {},
				},
				other: {
					swift: {},
				},
			},
			'rethrows-only-allowed-on-function-declarations': {
				swift: {},
			},
			'returns-not-allowed': {
				swift: {},
			},
			'try-must-precede-await': {
				swift: {},
			},
			'unexpected-end-of-block-comment': {
				swift: {},
			},
		},
	},
	keyword: {
		control: {
			async: {
				swift: {},
			},
			await: {
				swift: {},
			},
			branch: {
				swift: {},
			},
			defer: {
				swift: {},
			},
			exception: {
				swift: {},
			},
			import: {
				swift: {},
			},
			loop: {
				swift: {},
			},
			preprocessor: {
				conditional: {
					swift: {},
				},
				sourcelocation: {
					swift: {},
				},
			},
			transfer: {
				swift: {},
			},
		},
		operator: {
			arithmetic: {
				overflow: {
					swift: {},
				},
				remainder: {
					swift: {},
				},
				swift: {},
				unary: {
					swift: {},
				},
			},
			assignment: {
				compound: {
					swift: {},
				},
				swift: {},
			},
			bitwise: {
				not: {
					swift: {},
				},
				swift: {},
			},
			coalescing: {
				swift: {},
			},
			comparison: {
				swift: {},
			},
			custom: {
				infix: {
					dot: {
						swift: {},
					},
					swift: {},
				},
				postfix: {
					dot: {
						swift: {},
					},
					swift: {},
				},
				prefix: {
					dot: {
						swift: {},
					},
					swift: {},
				},
			},
			function: {
				'variadic-parameter': {
					swift: {},
				},
			},
			'function-result': {
				swift: {},
			},
			'generic-constraint': {
				'conforms-to': {
					swift: {},
				},
				'same-type': {
					swift: {},
				},
			},
			'increment-or-decrement': {
				swift: {},
			},
			logical: {
				not: {
					swift: {},
				},
				swift: {},
			},
			range: {
				swift: {},
			},
			ternary: {
				swift: {},
			},
			type: {
				composition: {
					swift: {},
				},
				existential: {
					swift: {},
				},
				function: {
					swift: {},
				},
				metatype: {
					swift: {},
				},
				opaque: {
					swift: {},
				},
				optional: {
					swift: {},
				},
				swift: {},
			},
			'type-casting': {
				swift: {},
			},
		},
		other: {
			'capture-specifier': {
				swift: {},
			},
			condition: {
				swift: {},
			},
			'declaration-specifier': {
				accessibility: {
					swift: {},
				},
				swift: {},
			},
			'generic-constraint-introducer': {
				swift: {},
			},
			operator: {
				associativity: {
					swift: {},
				},
			},
			platform: {
				all: {
					swift: {},
				},
				os: {
					swift: {},
				},
			},
			swift: {},
		},
	},
	meta: {
		arguments: {
			attribute: {
				swift: {},
			},
		},
		attribute: {
			available: {
				swift: {},
			},
			objc: {
				swift: {},
			},
			swift: {},
		},
		definition: {
			associatedtype: {
				swift: {},
			},
			function: {
				body: {
					swift: {},
				},
				initializer: {
					swift: {},
				},
				swift: {},
			},
			operator: {
				swift: {},
			},
			precedencegroup: {
				swift: {},
			},
			type: {
				$1: {
					swift: {},
				},
				body: {
					swift: {},
				},
				protocol: {
					swift: {},
				},
			},
			typealias: {
				swift: {},
			},
		},
		embedded: {
			line: {
				swift: {},
			},
		},
		'enum-case': {
			'more-cases': {},
		},
		'function-call': {
			swift: {},
		},
		'function-result': {
			swift: {},
		},
		'generic-argument-clause': {
			swift: {},
		},
		'generic-parameter-clause': {
			swift: {},
		},
		'generic-parameter-constraint': {
			swift: {},
		},
		'generic-where-clause': {
			'conformance-requirement': {
				swift: {},
			},
			'same-type-requirement': {
				swift: {},
			},
			swift: {},
		},
		import: {
			swift: {},
		},
		'inheritance-clause': {
			swift: {},
		},
		'inheritance-list': {
			'more-types': {},
		},
		'parameter-clause': {
			swift: {},
		},
		preprocessor: {
			conditional: {
				swift: {},
			},
			sourcelocation: {
				swift: {},
			},
		},
		'subscript-expression': {
			swift: {},
		},
		'type-name': {
			swift: {},
		},
	},
	punctuation: {
		definition: {
			arguments: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			attribute: {
				swift: {},
			},
			comment: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
				swift: {},
			},
			entity: {
				swift: {},
			},
			identifier: {
				swift: {},
			},
			operator: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			parameters: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			precedencegroup: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			preprocessor: {
				swift: {},
			},
			string: {
				begin: {
					raw: {
						swift: {},
					},
					swift: {},
				},
				end: {
					raw: {
						swift: {},
					},
					swift: {},
				},
			},
			type: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
		},
		section: {
			'collection-type': {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			embedded: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			function: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			scope: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			tuple: {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			'tuple-type': {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
		},
		separator: {
			'argument-label': {
				begin: {
					swift: {},
				},
				swift: {},
			},
			'generic-argument-clause': {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			'generic-parameter-clause': {
				begin: {
					swift: {},
				},
				end: {
					swift: {},
				},
			},
			'generic-parameter-constraint': {
				swift: {},
			},
			'generic-parameters': {
				swift: {},
			},
			import: {
				swift: {},
			},
			'inheritance-clause': {
				swift: {},
			},
			'key-value': {
				swift: {},
			},
			parameters: {
				swift: {},
			},
		},
		terminator: {
			statement: {
				swift: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					swift: {},
				},
			},
			trailing: {
				do: {
					swift: {},
				},
				repeat: {
					swift: {},
				},
			},
		},
	},
	source: {
		swift: {},
	},
	storage: {
		modifier: {
			attribute: {
				swift: {},
			},
			swift: {},
		},
		type: {
			$1: {
				swift: {},
			},
			class: {
				swift: {},
			},
			enum: {
				case: {
					swift: {},
				},
			},
			function: {
				operator: {
					swift: {},
				},
				swift: {},
			},
			precedencegroup: {
				swift: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				block: {
					raw: {
						swift: {},
					},
					swift: {},
				},
				'single-line': {
					raw: {
						swift: {},
					},
					swift: {},
				},
			},
		},
	},
	support: {
		class: {
			swift: {},
		},
		constant: {
			never: {
				swift: {},
			},
			platform: {
				architecture: {
					swift: {},
				},
				environment: {
					swift: {},
				},
				os: {
					swift: {},
				},
			},
			swift: {},
		},
		function: {
			'any-method': {
				swift: {},
			},
			'availability-condition': {
				swift: {},
			},
			'dynamic-type': {
				swift: {},
			},
			'key-path': {
				swift: {},
			},
			'object-literal': {
				swift: {},
			},
			'selector-reference': {
				swift: {},
			},
			swift: {},
		},
		type: {
			any: {
				swift: {},
			},
			swift: {},
		},
		variable: {
			'discard-value': {
				swift: {},
			},
			parameter: {
				swift: {},
			},
			swift: {},
		},
	},
	variable: {
		language: {
			associatedtype: {
				swift: {},
			},
			'closure-parameter': {
				swift: {},
			},
			'generic-parameter': {
				swift: {},
			},
			swift: {},
		},
		other: {
			swift: {},
		},
		parameter: {
			function: {
				swift: {},
			},
		},
	},
} as const);
