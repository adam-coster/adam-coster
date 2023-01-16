export const scopeNames = Object.freeze(['source.groovy'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			empty: {
				groovy: {},
			},
			groovy: {},
		},
		line: {
			'double-slash': {
				groovy: {},
			},
			hashbang: {
				groovy: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				groovy: {},
			},
		},
		enum: {
			name: {
				groovy: {},
			},
		},
		language: {
			groovy: {},
		},
		numeric: {
			groovy: {},
		},
		other: {
			groovy: {},
			key: {
				groovy: {},
			},
		},
		variable: {
			groovy: {},
		},
	},
	entity: {
		name: {
			function: {
				java: {},
			},
			type: {
				class: {
					groovy: {},
				},
			},
		},
		other: {
			'inherited-class': {
				groovy: {},
			},
		},
	},
	invalid: {
		illegal: {
			character_not_allowed_here: {
				groovy: {},
			},
		},
	},
	keyword: {
		control: {
			assert: {
				groovy: {},
			},
			exception: {
				groovy: {},
			},
			groovy: {},
			new: {
				groovy: {},
			},
		},
		operator: {
			arithmetic: {
				groovy: {},
			},
			arrow: {
				groovy: {},
			},
			as: {
				groovy: {},
			},
			assert: {
				'expression-seperator': {
					groovy: {},
				},
			},
			assignment: {
				groovy: {},
			},
			comparison: {
				groovy: {},
			},
			dereference: {
				groovy: {},
			},
			elvis: {
				groovy: {},
			},
			find: {
				groovy: {},
			},
			groovy: {},
			in: {
				groovy: {},
			},
			'increment-decrement': {
				groovy: {},
			},
			instanceof: {
				groovy: {},
			},
			leftshift: {
				groovy: {},
			},
			logical: {
				groovy: {},
			},
			match: {
				groovy: {},
			},
			navigation: {
				groovy: {},
			},
			range: {
				groovy: {},
			},
			'safe-navigation': {
				groovy: {},
			},
			spreadmap: {
				groovy: {},
			},
			ternary: {
				'expression-seperator': {
					groovy: {},
				},
				groovy: {},
			},
		},
		other: {
			dereference: {
				groovy: {},
			},
			import: {
				groovy: {},
				static: {
					groovy: {},
				},
			},
			package: {
				groovy: {},
			},
			throws: {
				groovy: {},
			},
		},
	},
	meta: {
		case: {
			groovy: {},
		},
		class: {
			body: {
				groovy: {},
			},
			identifier: {
				groovy: {},
			},
		},
		closure: {
			parameter: {
				groovy: {},
			},
			parameters: {
				groovy: {},
			},
		},
		declaration: {
			annotation: {
				groovy: {},
			},
			assertion: {
				groovy: {},
			},
		},
		definition: {
			class: {
				groovy: {},
				implemented: {
					interfaces: {
						groovy: {},
					},
				},
				inherited: {
					classes: {
						groovy: {},
					},
				},
			},
			method: {
				groovy: {},
				signature: {
					java: {},
				},
			},
			variable: {
				groovy: {},
				name: {
					groovy: {},
				},
			},
		},
		enum: {
			value: {
				groovy: {},
			},
		},
		evaluation: {
			ternary: {
				groovy: {},
			},
		},
		import: {
			groovy: {},
		},
		'inner-class': {
			groovy: {},
		},
		method: {
			body: {
				java: {},
			},
			groovy: {},
			'paramerised-type': {
				groovy: {},
			},
			parameter: {
				groovy: {},
			},
			parameters: {
				groovy: {},
			},
			'return-type': {
				java: {},
			},
		},
		'method-call': {
			groovy: {},
		},
		package: {
			groovy: {},
		},
		parameter: {
			default: {
				groovy: {},
			},
		},
		structure: {
			groovy: {},
		},
		throwables: {
			groovy: {},
		},
	},
	punctuation: {
		definition: {
			'annotation-arguments': {
				begin: {
					groovy: {},
				},
				end: {
					groovy: {},
				},
			},
			'case-terminator': {
				groovy: {},
			},
			comment: {
				groovy: {},
			},
			'method-parameters': {
				begin: {
					groovy: {},
				},
				end: {
					groovy: {},
				},
			},
			separator: {
				groovy: {},
			},
			seperator: {
				groovy: {},
				'key-value': {
					groovy: {},
				},
				parameter: {
					groovy: {},
				},
			},
			string: {
				begin: {
					groovy: {},
				},
				end: {
					groovy: {},
				},
				regexp: {
					begin: {
						groovy: {},
					},
					end: {
						groovy: {},
					},
				},
			},
			structure: {
				begin: {
					groovy: {},
				},
				end: {
					groovy: {},
				},
			},
		},
		section: {
			class: {
				end: {
					groovy: {},
				},
			},
			embedded: {
				groovy: {},
			},
			scope: {
				groovy: {},
			},
		},
		separator: {
			groovy: {},
		},
		terminator: {
			groovy: {},
		},
	},
	source: {
		groovy: {
			embedded: {
				source: {},
			},
		},
	},
	storage: {
		modifier: {
			'access-control': {
				groovy: {},
			},
			extends: {
				groovy: {},
			},
			final: {
				groovy: {},
			},
			groovy: {},
			implements: {
				groovy: {},
			},
			import: {
				groovy: {},
			},
			other: {
				groovy: {},
			},
			package: {
				groovy: {},
			},
			static: {
				groovy: {},
			},
		},
		type: {
			annotation: {
				groovy: {},
			},
			def: {
				groovy: {},
			},
			generic: {
				groovy: {},
			},
			groovy: {},
			object: {
				array: {
					groovy: {},
				},
			},
			parameters: {
				groovy: {},
			},
			primitive: {
				array: {
					groovy: {},
				},
				groovy: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				groovy: {},
				multiline: {
					groovy: {},
				},
			},
			single: {
				groovy: {},
				multiline: {
					groovy: {},
				},
			},
		},
		regexp: {
			compiled: {
				groovy: {},
			},
			groovy: {},
		},
	},
	support: {
		function: {
			print: {
				groovy: {},
			},
			testing: {
				groovy: {},
			},
		},
	},
	variable: {
		language: {
			groovy: {},
		},
		other: {
			interpolated: {
				groovy: {},
			},
		},
		parameter: {
			method: {
				groovy: {},
			},
		},
	},
} as const);
