export const scopeNames = Object.freeze(['source.objc'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			objc: {},
			preprocessor: {
				'if-branch': {
					objc: {},
				},
			},
		},
		line: {
			banner: {
				objc: {},
			},
			'double-slash': {
				objc: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				'line-continuation': {
					objc: {},
				},
				objc: {},
			},
		},
		language: {
			objc: {},
			predicate: {
				cocoa: {
					objc: {},
				},
			},
		},
		numeric: {
			binary: {
				objc: {},
			},
			decimal: {
				objc: {},
				point: {
					objc: {},
				},
			},
			exponent: {
				decimal: {
					objc: {},
				},
				hexadecimal: {
					objc: {},
				},
			},
			hexadecimal: {
				objc: {},
			},
			octal: {
				objc: {},
			},
			preprocessor: {
				objc: {},
			},
		},
		other: {
			placeholder: {
				objc: {},
			},
			variable: {
				'mac-classic': {
					objc: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				member: {
					objc: {},
				},
				'name-of-parameter': {
					objc: {},
				},
				objc: {},
				preprocessor: {
					'apple-foundation': {
						objc: {},
					},
					objc: {},
				},
			},
			tag: {
				'pragma-mark': {
					objc: {},
				},
			},
			type: {
				objc: {},
			},
		},
		other: {
			'attribute-name': {
				pragma: {
					preprocessor: {
						objc: {},
					},
				},
			},
			'inherited-class': {
				objc: {},
			},
		},
	},
	everything: {
		else: {
			objc: {},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {
					objc: {},
				},
			},
			'macro-name': {
				objc: {},
			},
			placeholder: {
				objc: {},
			},
			'stray-$1': {
				objc: {},
			},
			'unknown-escape': {
				objc: {},
			},
			'unknown-method': {
				objc: {},
			},
		},
	},
	keyword: {
		control: {
			case: {
				objc: {},
			},
			default: {
				objc: {},
			},
			directive: {
				$3: {
					objc: {},
				},
				conditional: {
					objc: {},
				},
				define: {
					objc: {},
				},
				diagnostic: {
					$3: {
						objc: {},
					},
				},
				line: {
					objc: {},
				},
				pragma: {
					objc: {},
					'pragma-mark': {
						objc: {},
					},
				},
				undef: {
					objc: {},
				},
			},
			exception: {
				objc: {},
			},
			import: {
				else: {
					objc: {},
				},
				if: {
					objc: {},
				},
				objc: {},
				pragma: {
					objc: {},
				},
			},
			macro: {
				objc: {},
			},
			objc: {},
			'protocol-specification': {
				objc: {},
			},
			switch: {
				objc: {},
			},
			synchronize: {
				objc: {},
			},
		},
		operator: {
			assignment: {
				compound: {
					bitwise: {
						objc: {},
					},
					objc: {},
				},
				objc: {},
			},
			bitwise: {
				shift: {
					objc: {},
				},
			},
			comparison: {
				objc: {},
				predicate: {
					cocoa: {
						objc: {},
					},
				},
			},
			decrement: {
				objc: {},
			},
			increment: {
				objc: {},
			},
			logical: {
				objc: {},
				predicate: {
					cocoa: {
						objc: {},
					},
				},
			},
			minus: {
				exponent: {
					decimal: {
						objc: {},
					},
					hexadecimal: {
						objc: {},
					},
				},
			},
			objc: {},
			plus: {
				exponent: {
					decimal: {
						objc: {},
					},
					hexadecimal: {
						objc: {},
					},
				},
			},
			sizeof: {
				objc: {},
			},
			ternary: {
				objc: {},
			},
		},
		other: {
			in: {
				objc: {},
			},
			modifier: {
				predicate: {
					cocoa: {
						objc: {},
					},
				},
			},
			objc: {},
			predicate: {
				cocoa: {
					objc: {},
				},
			},
			property: {
				attribute: {
					objc: {},
				},
				directive: {
					objc: {},
				},
				objc: {},
			},
			static_assert: {
				objc: {},
			},
			typedef: {
				objc: {},
			},
			unit: {
				binary: {
					objc: {},
				},
				exponent: {
					decimal: {
						objc: {},
					},
					hexadecimal: {
						objc: {},
					},
				},
				hexadecimal: {
					objc: {},
				},
				octal: {
					objc: {},
				},
				suffix: {
					'floating-point': {
						objc: {},
					},
					integer: {
						objc: {},
					},
				},
			},
		},
	},
	meta: {
		'argument-type': {
			objc: {},
		},
		block: {
			objc: {},
			switch: {
				objc: {},
			},
		},
		body: {
			switch: {
				objc: {},
			},
		},
		bracket: {
			square: {
				access: {
					objc: {},
				},
			},
		},
		bracketed: {
			objc: {},
		},
		conditional: {
			case: {
				objc: {},
			},
			switch: {
				objc: {},
			},
		},
		divider: {
			objc: {},
		},
		function: {
			definition: {
				parameters: {
					objc: {},
				},
			},
			objc: {},
		},
		'function-call': {
			member: {
				objc: {},
			},
			objc: {},
			predicate: {
				objc: {},
			},
		},
		'function-with-body': {
			objc: {},
		},
		head: {
			switch: {
				objc: {},
			},
		},
		'id-with-protocol': {
			objc: {},
		},
		implementation: {
			objc: {},
		},
		'inherited-class': {
			objc: {},
		},
		initialization: {
			objc: {},
		},
		'interface-or-protocol': {
			objc: {},
		},
		parens: {
			block: {
				objc: {},
			},
			objc: {},
		},
		preprocessor: {
			diagnostic: {
				objc: {},
			},
			include: {
				objc: {},
			},
			macro: {
				callable: {
					'apple-foundation': {
						objc: {},
					},
				},
				objc: {},
			},
			objc: {},
			pragma: {
				objc: {},
			},
		},
		property: {
			objc: {},
		},
		'property-with-attributes': {
			objc: {},
		},
		'protocol-list': {
			objc: {},
		},
		'return-type': {
			objc: {},
		},
		section: {
			objc: {},
		},
		selector: {
			objc: {},
		},
		static_assert: {
			message: {
				objc: {},
			},
		},
		tail: {
			switch: {
				objc: {},
			},
		},
		'toc-list': {
			banner: {
				block: {
					objc: {},
				},
				line: {
					objc: {},
				},
			},
			'pragma-mark': {
				objc: {},
			},
		},
	},
	punctuation: {
		definition: {
			begin: {
				bracket: {
					square: {
						objc: {},
					},
				},
			},
			comment: {
				begin: {
					objc: {},
				},
				end: {
					objc: {},
				},
				objc: {},
			},
			directive: {
				objc: {},
			},
			end: {
				bracket: {
					square: {
						objc: {},
					},
				},
			},
			entity: {
				other: {
					'inherited-class': {
						objc: {},
					},
				},
			},
			keyword: {
				objc: {},
			},
			parameters: {
				begin: {
					objc: {},
				},
				end: {
					objc: {},
				},
				objc: {},
			},
			storage: {
				modifier: {
					objc: {},
				},
				type: {
					objc: {},
				},
			},
			string: {
				begin: {
					objc: {},
				},
				end: {
					objc: {},
				},
			},
			type: {
				begin: {
					objc: {},
				},
				end: {
					objc: {},
				},
			},
		},
		'range-based': {
			objc: {},
		},
		section: {
			arguments: {
				begin: {
					bracket: {
						round: {
							function: {
								member: {
									objc: {},
								},
							},
							objc: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							function: {
								member: {
									objc: {},
								},
							},
							objc: {},
						},
					},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							objc: {},
							switch: {
								objc: {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							objc: {},
							switch: {
								objc: {},
							},
						},
					},
				},
			},
			macro: {
				arguments: {
					begin: {
						bracket: {
							round: {
								'apple-foundation': {
									objc: {},
								},
							},
						},
					},
					end: {
						bracket: {
							round: {
								'apple-foundation': {
									objc: {},
								},
							},
						},
					},
				},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							objc: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							objc: {},
						},
					},
				},
			},
			parens: {
				begin: {
					bracket: {
						round: {
							conditional: {
								switch: {
									objc: {},
								},
							},
							initialization: {
								objc: {},
							},
							objc: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							conditional: {
								switch: {
									objc: {},
								},
							},
							initialization: {
								objc: {},
							},
							objc: {},
						},
					},
				},
			},
			scope: {
				begin: {
					objc: {},
				},
				end: {
					objc: {},
				},
			},
		},
		separator: {
			arguments: {
				objc: {},
			},
			case: {
				default: {
					objc: {},
				},
				objc: {},
			},
			constant: {
				numeric: {
					objc: {},
				},
			},
			continuation: {
				objc: {},
			},
			delimiter: {
				objc: {},
			},
			'dot-access': {
				objc: {},
			},
			parameters: {
				objc: {},
			},
			'pointer-access': {
				objc: {},
			},
		},
		terminator: {
			statement: {
				objc: {},
			},
		},
		'vararg-ellipses': {
			objc: {},
		},
		whitespace: {
			comment: {
				leading: {
					objc: {},
				},
			},
			'function-call': {
				leading: {
					objc: {},
				},
			},
			support: {
				function: {
					cocoa: {
						leopard: {
							objc: {},
						},
					},
					leading: {
						cocoa: {
							objc: {},
						},
						objc: {},
					},
				},
			},
		},
	},
	storage: {
		modifier: {
			array: {
				bracket: {
					square: {
						objc: {},
					},
				},
			},
			objc: {},
			protocol: {
				objc: {},
			},
		},
		type: {
			$1: {
				objc: {},
			},
			'built-in': {
				objc: {},
				primitive: {
					objc: {},
				},
			},
			id: {
				objc: {},
			},
			objc: {},
		},
	},
	string: {
		quoted: {
			double: {
				include: {
					objc: {},
				},
				objc: {},
			},
			other: {
				'lt-gt': {
					include: {
						objc: {},
					},
				},
			},
			single: {
				objc: {},
			},
		},
		unquoted: {
			single: {
				objc: {},
			},
		},
	},
	support: {
		class: {
			cocoa: {
				leopard: {
					objc: {},
				},
				objc: {},
			},
			quartz: {
				objc: {},
			},
		},
		constant: {
			cocoa: {
				leopard: {
					objc: {},
				},
				objc: {},
			},
			'mac-classic': {
				objc: {},
			},
			notification: {
				cocoa: {
					leopard: {
						objc: {},
					},
					objc: {},
				},
			},
		},
		function: {
			C99: {
				objc: {},
			},
			'any-method': {
				'name-of-parameter': {
					objc: {},
				},
				objc: {},
			},
			cocoa: {
				leopard: {
					objc: {},
				},
				objc: {},
			},
		},
		other: {
			protocol: {
				objc: {},
			},
		},
		type: {
			cocoa: {
				leopard: {
					objc: {},
				},
				objc: {},
			},
			'mac-classic': {
				objc: {},
			},
			'posix-reserved': {
				objc: {},
			},
			pthread: {
				objc: {},
			},
			quartz: {
				objc: {},
			},
			stdint: {
				objc: {},
			},
			'sys-types': {
				objc: {},
			},
		},
		variable: {
			foundation: {
				objc: {},
			},
		},
	},
	variable: {
		language: {
			objc: {},
		},
		object: {
			objc: {},
		},
		other: {
			member: {
				objc: {},
			},
			objc: {},
			object: {
				access: {
					objc: {},
				},
			},
			readwrite: {
				global: {
					'mac-classic': {
						objc: {},
					},
				},
				static: {
					'mac-classic': {
						objc: {},
					},
				},
			},
			selector: {
				objc: {},
			},
		},
		parameter: {
			function: {
				objc: {},
			},
			preprocessor: {
				objc: {},
			},
			probably: {
				objc: {},
			},
		},
	},
} as const);
