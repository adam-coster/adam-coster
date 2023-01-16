export const scopeNames = Object.freeze(['source.coffee'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			coffee: {},
		},
		line: {
			'number-sign': {
				coffee: {},
			},
		},
	},
	constant: {
		character: {
			'character-class': {
				regexp: {},
			},
			control: {
				regexp: {},
			},
			escape: {
				backslash: {
					coffee: {},
					regexp: {},
				},
			},
			numeric: {
				regexp: {},
			},
		},
		language: {
			boolean: {
				false: {
					coffee: {},
				},
				true: {
					coffee: {},
				},
			},
			coffee: {},
			null: {
				coffee: {},
			},
		},
		numeric: {
			binary: {
				coffee: {},
			},
			decimal: {
				coffee: {},
			},
			hex: {
				coffee: {},
			},
			octal: {
				coffee: {},
			},
		},
		other: {
			'character-class': {
				range: {
					regexp: {},
				},
				set: {
					regexp: {},
				},
			},
			object: {
				coffee: {},
				property: {
					coffee: {},
				},
			},
			property: {
				coffee: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				coffee: {},
			},
			tag: {
				coffee: {},
			},
			type: {
				class: {
					coffee: {},
				},
				instance: {
					coffee: {},
				},
				object: {
					coffee: {},
				},
			},
		},
		other: {
			'attribute-name': {
				coffee: {},
			},
			'inherited-class': {
				coffee: {},
			},
		},
	},
	invalid: {
		illegal: {
			identifier: {
				coffee: {},
			},
		},
	},
	keyword: {
		control: {
			anchor: {
				regexp: {},
			},
			coffee: {},
			inheritance: {
				coffee: {},
			},
		},
		operator: {
			$1: {
				coffee: {},
			},
			assignment: {
				coffee: {},
				compound: {
					bitwise: {
						coffee: {},
					},
					coffee: {},
				},
			},
			bitwise: {
				coffee: {},
				shift: {
					coffee: {},
				},
			},
			coffee: {},
			comparison: {
				coffee: {},
			},
			decrement: {
				coffee: {},
			},
			existential: {
				coffee: {},
			},
			increment: {
				coffee: {},
			},
			logical: {
				coffee: {},
			},
			negation: {
				regexp: {},
			},
			new: {
				coffee: {},
			},
			or: {
				regexp: {},
			},
			prototype: {
				coffee: {},
			},
			quantifier: {
				regexp: {},
			},
			slice: {
				exclusive: {
					coffee: {},
				},
				inclusive: {
					coffee: {},
				},
			},
			splat: {
				coffee: {},
			},
		},
		other: {
			'back-reference': {
				regexp: {},
			},
			coffee: {},
		},
		reserved: {
			coffee: {},
		},
	},
	meta: {
		arguments: {
			coffee: {},
		},
		assertion: {
			'look-ahead': {
				regexp: {},
			},
			'negative-look-ahead': {
				regexp: {},
			},
		},
		brace: {
			curly: {
				coffee: {},
			},
			round: {
				coffee: {},
			},
		},
		class: {
			coffee: {},
			instance: {},
		},
		function: {
			coffee: {},
			inline: {
				coffee: {},
			},
		},
		'function-call': {
			coffee: {},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		'method-call': {
			coffee: {},
		},
		parameters: {
			coffee: {},
		},
		tag: {
			coffee: {},
		},
		variable: {
			assignment: {
				destructured: {
					array: {
						coffee: {},
					},
					object: {
						coffee: {},
					},
				},
			},
		},
	},
	punctuation: {
		definition: {
			arguments: {
				begin: {
					bracket: {
						round: {
							coffee: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							coffee: {},
						},
					},
				},
			},
			array: {
				begin: {
					bracket: {
						square: {
							coffee: {},
						},
					},
				},
				end: {
					bracket: {
						square: {
							coffee: {},
						},
					},
				},
			},
			'character-class': {
				regexp: {},
			},
			comment: {
				coffee: {},
			},
			destructuring: {
				begin: {
					bracket: {
						curly: {
							coffee: {},
						},
						square: {
							coffee: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							coffee: {},
						},
						square: {
							coffee: {},
						},
					},
				},
			},
			escape: {
				backslash: {
					coffee: {},
				},
			},
			group: {
				regexp: {},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							coffee: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							coffee: {},
						},
					},
				},
			},
			string: {
				begin: {
					coffee: {},
				},
				end: {
					coffee: {},
				},
			},
			tag: {
				coffee: {},
			},
		},
		section: {
			embedded: {
				coffee: {},
			},
		},
		separator: {
			decimal: {
				period: {
					coffee: {},
				},
			},
			delimiter: {
				coffee: {},
			},
			method: {
				period: {
					coffee: {},
				},
			},
			property: {
				period: {
					coffee: {},
				},
			},
		},
		terminator: {
			statement: {
				coffee: {},
			},
		},
	},
	source: {
		coffee: {
			embedded: {
				source: {},
			},
		},
		js: {
			embedded: {
				coffee: {},
			},
		},
	},
	storage: {
		type: {
			annotation: {
				coffee: {},
			},
			class: {
				coffee: {},
			},
			function: {
				coffee: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				coffee: {},
				heredoc: {
					coffee: {},
				},
			},
			script: {
				coffee: {},
			},
			single: {
				coffee: {},
				heredoc: {
					coffee: {},
				},
			},
		},
		regexp: {
			coffee: {},
			multiline: {
				coffee: {},
			},
		},
	},
	support: {
		class: {
			coffee: {},
		},
		function: {
			coffee: {},
			console: {
				coffee: {},
			},
			dom: {
				coffee: {},
			},
			'event-handler': {
				coffee: {},
			},
			method: {
				array: {
					coffee: {},
				},
			},
			static: {
				array: {
					coffee: {},
				},
				math: {
					coffee: {},
				},
				number: {
					coffee: {},
				},
				object: {
					coffee: {},
				},
			},
		},
		variable: {
			coffee: {},
		},
	},
	variable: {
		assignment: {
			coffee: {},
		},
		language: {
			$1: {
				coffee: {},
			},
			coffee: {},
		},
		other: {
			object: {
				coffee: {},
				property: {
					coffee: {},
				},
			},
			property: {
				coffee: {},
			},
			readwrite: {
				instance: {
					coffee: {},
				},
			},
		},
		parameter: {
			function: {
				coffee: {},
				readwrite: {
					instance: {
						coffee: {},
					},
				},
			},
		},
	},
} as const);
