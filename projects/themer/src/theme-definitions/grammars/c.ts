export const scopeNames = Object.freeze(['source.c'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			banner: {
				c: {},
			},
			c: {},
			documentation: {
				c: {},
			},
		},
		line: {
			banner: {
				c: {},
			},
			'double-slash': {
				c: {},
				documentation: {
					c: {},
				},
			},
		},
	},
	constant: {
		character: {
			escape: {
				c: {},
				'line-continuation': {
					c: {},
				},
			},
		},
		language: {
			c: {},
		},
		numeric: {
			binary: {
				c: {},
			},
			decimal: {
				c: {},
				point: {
					c: {},
				},
			},
			exponent: {
				decimal: {
					c: {},
				},
				hexadecimal: {
					c: {},
				},
			},
			hexadecimal: {
				c: {},
			},
			octal: {
				c: {},
			},
			preprocessor: {
				c: {},
			},
		},
		other: {
			placeholder: {
				c: {},
			},
			variable: {
				'mac-classic': {
					c: {},
				},
			},
		},
	},
	ellipses: {
		c: {},
	},
	entity: {
		name: {
			function: {
				c: {},
				member: {
					c: {},
				},
				preprocessor: {
					c: {},
				},
			},
			other: {
				preprocessor: {
					macro: {
						predefined: {
							$1: {
								c: {},
							},
							probably: {
								$1: {
									c: {},
								},
							},
						},
					},
				},
			},
			tag: {
				'pragma-mark': {
					c: {},
				},
			},
		},
		other: {
			'attribute-name': {
				pragma: {
					preprocessor: {
						c: {},
					},
				},
			},
		},
	},
	everything: {
		else: {
			c: {},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {},
			},
			'macro-name': {
				c: {},
			},
			placeholder: {
				c: {},
			},
			'stray-$1': {
				c: {},
			},
			'unknown-escape': {
				c: {},
			},
		},
	},
	keyword: {
		control: {
			c: {},
			case: {
				c: {},
			},
			default: {
				c: {},
			},
			directive: {
				$3: {
					c: {},
				},
				conditional: {
					c: {},
				},
				define: {
					c: {},
				},
				diagnostic: {
					$3: {
						c: {},
					},
				},
				line: {
					c: {},
				},
				pragma: {
					c: {},
					'pragma-mark': {
						c: {},
					},
				},
				undef: {
					c: {},
				},
			},
			switch: {
				c: {},
			},
		},
		operator: {
			assignment: {
				c: {},
				compound: {
					bitwise: {
						c: {},
					},
					c: {},
				},
			},
			bitwise: {
				shift: {
					c: {},
				},
			},
			c: {},
			comparison: {
				c: {},
			},
			decrement: {
				c: {},
			},
			increment: {
				c: {},
			},
			logical: {
				c: {},
			},
			minus: {
				exponent: {
					decimal: {
						c: {},
					},
					hexadecimal: {
						c: {},
					},
				},
			},
			plus: {
				exponent: {
					decimal: {
						c: {},
					},
					hexadecimal: {
						c: {},
					},
				},
			},
			sizeof: {
				c: {},
			},
			ternary: {
				c: {},
			},
		},
		other: {
			parameter: {
				direction: {
					$0: {
						c: {},
					},
				},
			},
			static_assert: {
				c: {},
			},
			typedef: {
				c: {},
			},
			unit: {
				binary: {
					c: {},
				},
				exponent: {
					decimal: {
						c: {},
					},
					hexadecimal: {
						c: {},
					},
				},
				hexadecimal: {
					c: {},
				},
				octal: {
					c: {},
				},
				suffix: {
					'floating-point': {
						c: {},
					},
					integer: {
						c: {},
					},
				},
			},
		},
	},
	markup: {
		bold: {
			doxygen: {
				c: {},
			},
		},
		inline: {
			raw: {
				string: {
					c: {},
				},
			},
		},
		italic: {
			doxygen: {
				c: {},
			},
		},
	},
	meta: {
		asm: {
			c: {},
		},
		block: {
			c: {},
			switch: {
				c: {},
			},
		},
		body: {
			switch: {
				c: {},
			},
		},
		bracket: {
			square: {
				access: {
					c: {},
				},
			},
		},
		conditional: {
			case: {
				c: {},
			},
			switch: {
				c: {},
			},
		},
		encoding: {
			c: {},
		},
		function: {
			c: {},
			definition: {
				parameters: {
					c: {},
				},
			},
		},
		'function-call': {
			c: {},
			member: {
				c: {},
			},
		},
		head: {
			switch: {
				c: {},
			},
		},
		initialization: {
			c: {},
		},
		parens: {
			block: {
				c: {},
			},
			c: {},
		},
		preprocessor: {
			c: {},
			diagnostic: {
				c: {},
			},
			include: {
				c: {},
			},
			macro: {
				c: {},
			},
			pragma: {
				c: {},
			},
		},
		section: {
			c: {},
		},
		static_assert: {
			message: {
				c: {},
			},
		},
		tail: {
			switch: {
				c: {},
			},
		},
		'toc-list': {
			banner: {
				block: {
					c: {},
				},
				line: {
					c: {},
				},
			},
		},
	},
	punctuation: {
		definition: {
			begin: {
				bracket: {
					square: {
						c: {},
					},
				},
			},
			comment: {
				begin: {
					c: {},
					documentation: {
						c: {},
					},
				},
				c: {},
				documentation: {
					c: {},
				},
				end: {
					c: {},
					documentation: {
						c: {},
					},
				},
			},
			directive: {
				c: {},
			},
			end: {
				bracket: {
					square: {
						c: {},
					},
				},
			},
			parameters: {
				begin: {
					c: {},
				},
				end: {
					c: {},
				},
			},
			string: {
				begin: {
					assembly: {
						c: {},
					},
					c: {},
				},
				end: {
					assembly: {
						c: {},
					},
					c: {},
				},
			},
		},
		'range-based': {
			c: {},
		},
		section: {
			arguments: {
				begin: {
					bracket: {
						round: {
							c: {},
							function: {
								member: {
									c: {},
								},
							},
							static_assert: {
								c: {},
							},
						},
					},
				},
				end: {
					bracket: {
						round: {
							c: {},
							function: {
								member: {
									c: {},
								},
							},
							static_assert: {
								c: {},
							},
						},
					},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							c: {},
							switch: {
								c: {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							c: {},
							switch: {
								c: {},
							},
						},
					},
				},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							c: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							c: {},
						},
					},
				},
			},
			parens: {
				begin: {
					bracket: {
						round: {
							assembly: {
								c: {},
								inner: {
									c: {},
								},
							},
							c: {},
							conditional: {
								switch: {
									c: {},
								},
							},
							initialization: {
								c: {},
							},
						},
					},
				},
				end: {
					bracket: {
						round: {
							assembly: {
								c: {},
								inner: {
									c: {},
								},
							},
							c: {},
							conditional: {
								switch: {
									c: {},
								},
							},
							initialization: {
								c: {},
							},
						},
					},
				},
			},
		},
		separator: {
			colon: {
				case: {
					c: {},
					default: {
						c: {},
					},
				},
			},
			constant: {
				numeric: {},
			},
			delimiter: {
				c: {},
				colon: {
					assembly: {
						c: {},
					},
				},
				comma: {
					c: {},
				},
			},
			'dot-access': {
				c: {},
			},
			parameters: {
				c: {},
			},
			'pointer-access': {
				c: {},
			},
		},
		terminator: {
			statement: {
				c: {},
			},
		},
		'vararg-ellipses': {
			c: {},
			variable: {
				parameter: {
					preprocessor: {
						c: {},
					},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					c: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			array: {
				bracket: {
					square: {
						c: {},
					},
				},
			},
			c: {},
		},
		type: {
			$1: {
				c: {},
			},
			asm: {
				c: {},
			},
			'built-in': {
				c: {},
				primitive: {
					c: {},
				},
			},
			class: {
				doxygen: {
					c: {},
				},
				gtkdoc: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				c: {},
				include: {
					c: {},
				},
			},
			other: {
				'lt-gt': {
					include: {
						c: {},
					},
				},
			},
			single: {
				c: {},
			},
		},
		unquoted: {
			single: {
				c: {},
			},
		},
	},
	support: {
		constant: {
			'mac-classic': {
				c: {},
			},
		},
		type: {
			'mac-classic': {
				c: {},
			},
			'posix-reserved': {
				c: {},
			},
			pthread: {
				c: {},
			},
			stdint: {
				c: {},
			},
			'sys-types': {
				c: {},
			},
		},
	},
	variable: {
		object: {
			c: {},
		},
		other: {
			asm: {
				label: {
					c: {},
				},
			},
			c: {},
			member: {
				c: {},
			},
			object: {
				access: {
					c: {},
				},
			},
			readwrite: {
				global: {
					'mac-classic': {
						c: {},
					},
				},
				static: {
					'mac-classic': {
						c: {},
					},
				},
			},
		},
		parameter: {
			c: {},
			preprocessor: {
				c: {},
			},
			probably: {
				c: {},
			},
		},
	},
} as const);
