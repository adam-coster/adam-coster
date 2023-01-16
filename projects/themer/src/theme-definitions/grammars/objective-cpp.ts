export const scopeNames = Object.freeze(['source.objcpp'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			objcpp: {},
			preprocessor: {
				'if-branch': {
					objcpp: {},
				},
			},
		},
		line: {
			banner: {
				objcpp: {},
			},
			'double-slash': {
				objcpp: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				'line-continuation': {
					objcpp: {},
				},
				objcpp: {},
			},
		},
		language: {
			objcpp: {},
			predicate: {
				cocoa: {
					objcpp: {},
				},
			},
		},
		numeric: {
			binary: {
				objcpp: {},
			},
			decimal: {
				objcpp: {},
				point: {
					objcpp: {},
				},
			},
			exponent: {
				decimal: {
					objcpp: {},
				},
				hexadecimal: {
					objcpp: {},
				},
			},
			hexadecimal: {
				objcpp: {},
			},
			octal: {
				objcpp: {},
			},
			preprocessor: {
				objcpp: {},
			},
		},
		other: {
			objcpp: {},
			placeholder: {
				objcpp: {},
			},
			variable: {
				'mac-classic': {
					objcpp: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				call: {
					objcpp: {},
				},
				destructor: {
					objcpp: {},
				},
				member: {
					objcpp: {},
				},
				'name-of-parameter': {
					objcpp: {},
				},
				objcpp: {},
				preprocessor: {
					'apple-foundation': {
						objcpp: {},
					},
					objcpp: {},
				},
			},
			namespace: {
				objcpp: {},
				'scope-resolution': {
					objcpp: {},
				},
			},
			operator: {
				overloadee: {
					objcpp: {},
				},
			},
			tag: {
				'pragma-mark': {
					objcpp: {},
				},
			},
			type: {
				inherited: {
					objcpp: {},
				},
				objcpp: {},
				template: {
					objcpp: {},
				},
			},
		},
		other: {
			'attribute-name': {
				pragma: {
					preprocessor: {
						objcpp: {},
					},
				},
			},
			'inherited-class': {
				objcpp: {},
			},
		},
		scope: {
			name: {
				objcpp: {},
			},
			objcpp: {},
		},
	},
	everything: {
		else: {
			objcpp: {},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {
					objcpp: {},
				},
			},
			'delimiter-too-long': {
				objcpp: {},
			},
			'macro-name': {
				objcpp: {},
			},
			placeholder: {
				objcpp: {},
			},
			'stray-$1': {
				objcpp: {},
			},
			'unknown-escape': {
				objcpp: {},
			},
			'unknown-method': {
				objcpp: {},
			},
			'you-forgot-semicolon': {
				objcpp: {},
			},
		},
	},
	keyword: {
		control: {
			$1: {
				objcpp: {},
			},
			case: {
				objcpp: {},
			},
			default: {
				objcpp: {},
			},
			directive: {
				$3: {
					objcpp: {},
				},
				conditional: {
					objcpp: {},
				},
				define: {
					objcpp: {},
				},
				diagnostic: {
					$3: {
						objcpp: {},
					},
				},
				line: {
					objcpp: {},
				},
				pragma: {
					objcpp: {},
					'pragma-mark': {
						objcpp: {},
					},
				},
				undef: {
					objcpp: {},
				},
			},
			exception: {
				$1: {
					objcpp: {},
				},
				objcpp: {},
			},
			import: {
				else: {
					objcpp: {},
				},
				if: {
					objcpp: {},
				},
				objcpp: {},
				pragma: {
					objcpp: {},
				},
			},
			macro: {
				objcpp: {},
			},
			namespace: {
				$2: {
					objcpp: {},
				},
			},
			objcpp: {},
			'protocol-specification': {
				objcpp: {},
			},
			switch: {
				objcpp: {},
			},
			synchronize: {
				objcpp: {},
			},
		},
		operator: {
			$1: {
				objcpp: {},
			},
			assignment: {
				compound: {
					bitwise: {
						objcpp: {},
					},
					objcpp: {},
				},
				objcpp: {},
			},
			bitwise: {
				shift: {
					objcpp: {},
				},
			},
			cast: {
				$1: {
					objcpp: {},
				},
				objcpp: {},
			},
			comparison: {
				objcpp: {},
				predicate: {
					cocoa: {
						objcpp: {},
					},
				},
			},
			decrement: {
				objcpp: {},
			},
			ellipsis: {
				template: {
					definition: {
						objcpp: {},
					},
				},
			},
			increment: {
				objcpp: {},
			},
			logical: {
				objcpp: {},
				predicate: {
					cocoa: {
						objcpp: {},
					},
				},
			},
			memory: {
				delete: {
					array: {
						bracket: {
							objcpp: {},
						},
						objcpp: {},
					},
					objcpp: {},
				},
				new: {
					objcpp: {},
				},
				objcpp: {},
			},
			minus: {
				exponent: {
					decimal: {
						objcpp: {},
					},
					hexadecimal: {
						objcpp: {},
					},
				},
			},
			objcpp: {},
			plus: {
				exponent: {
					decimal: {
						objcpp: {},
					},
					hexadecimal: {
						objcpp: {},
					},
				},
			},
			sizeof: {
				objcpp: {},
			},
			ternary: {
				objcpp: {},
			},
		},
		other: {
			$1: {
				objcpp: {},
			},
			in: {
				objcpp: {},
			},
			modifier: {
				predicate: {
					cocoa: {
						objcpp: {},
					},
				},
			},
			namespace: {
				definition: {
					objcpp: {},
				},
				directive: {
					objcpp: {},
				},
			},
			objcpp: {},
			operator: {
				overload: {
					objcpp: {},
				},
			},
			predicate: {
				cocoa: {
					objcpp: {},
				},
			},
			property: {
				attribute: {
					objcpp: {},
				},
				directive: {
					objcpp: {},
				},
				objcpp: {},
			},
			static_assert: {
				objcpp: {},
			},
			typedef: {
				objcpp: {},
			},
			unit: {
				binary: {
					objcpp: {},
				},
				exponent: {
					decimal: {
						objcpp: {},
					},
					hexadecimal: {
						objcpp: {},
					},
				},
				hexadecimal: {
					objcpp: {},
				},
				octal: {
					objcpp: {},
				},
				suffix: {
					'floating-point': {
						objcpp: {},
					},
					integer: {
						objcpp: {},
					},
				},
				'user-defined': {
					objcpp: {},
				},
			},
			using: {
				directive: {
					objcpp: {},
				},
			},
		},
	},
	meta: {
		'angle-brackets': {
			objcpp: {},
		},
		'argument-type': {
			objcpp: {},
		},
		block: {
			objcpp: {},
			parens: {
				objcpp: {},
			},
			switch: {
				objcpp: {},
			},
		},
		body: {
			switch: {
				objcpp: {},
			},
		},
		bracket: {
			square: {
				access: {
					objcpp: {},
				},
			},
		},
		bracketed: {
			objcpp: {},
		},
		'class-struct-block': {
			objcpp: {},
		},
		conditional: {
			case: {
				objcpp: {},
			},
			switch: {
				objcpp: {},
			},
		},
		divider: {
			objcpp: {},
		},
		encoding: {
			objcpp: {},
		},
		'extern-block': {
			objcpp: {},
		},
		function: {
			definition: {
				objcpp: {},
				parameters: {
					objcpp: {},
					'operator-overload': {
						objcpp: {},
					},
				},
			},
			destructor: {
				objcpp: {},
				prototype: {
					objcpp: {},
				},
			},
			objcpp: {},
		},
		'function-call': {
			member: {
				objcpp: {},
			},
			objcpp: {},
			predicate: {
				objcpp: {},
			},
		},
		'function-with-body': {
			objcpp: {},
		},
		head: {
			switch: {
				objcpp: {},
			},
		},
		'id-with-protocol': {
			objcpp: {},
		},
		implementation: {
			objcpp: {},
		},
		'inherited-class': {
			objcpp: {},
		},
		initialization: {
			objcpp: {},
		},
		'interface-or-protocol': {
			objcpp: {},
		},
		'namespace-block': {
			objcpp: {},
		},
		parens: {
			block: {
				objcpp: {},
			},
			objcpp: {},
		},
		preprocessor: {
			diagnostic: {
				objcpp: {},
			},
			include: {
				objcpp: {},
			},
			macro: {
				callable: {
					'apple-foundation': {
						objcpp: {},
					},
				},
				objcpp: {},
			},
			objcpp: {},
			pragma: {
				objcpp: {},
			},
		},
		property: {
			objcpp: {},
		},
		'property-with-attributes': {
			objcpp: {},
		},
		'protocol-list': {
			objcpp: {},
		},
		'return-type': {
			objcpp: {},
		},
		'scope-resolution': {
			objcpp: {},
		},
		section: {
			objcpp: {},
		},
		selector: {
			objcpp: {},
		},
		static_assert: {
			message: {
				objcpp: {},
			},
		},
		tail: {
			switch: {
				objcpp: {},
			},
		},
		template: {
			'angle-brackets': {
				end: {
					objcpp: {},
				},
				start: {
					objcpp: {},
				},
			},
			call: {
				objcpp: {},
			},
			definition: {
				objcpp: {},
			},
			operator: {
				comma: {
					objcpp: {},
				},
				ellipsis: {
					objcpp: {},
				},
			},
		},
		'toc-list': {
			banner: {
				block: {
					objcpp: {},
				},
				line: {
					objcpp: {},
				},
			},
			'pragma-mark': {
				objcpp: {},
			},
		},
		'using-namespace-declaration': {
			objcpp: {},
		},
	},
	punctuation: {
		definition: {
			begin: {
				bracket: {
					square: {
						objcpp: {},
					},
				},
			},
			comment: {
				begin: {
					objcpp: {},
				},
				end: {
					objcpp: {},
				},
				objcpp: {},
			},
			directive: {
				objcpp: {},
			},
			end: {
				bracket: {
					square: {
						objcpp: {},
					},
				},
			},
			entity: {
				other: {
					'inherited-class': {
						objcpp: {},
					},
				},
			},
			'initializer-list': {
				parameters: {
					objcpp: {},
				},
			},
			keyword: {
				objcpp: {},
			},
			parameters: {
				begin: {
					destructor: {
						objcpp: {},
					},
					objcpp: {},
				},
				end: {
					destructor: {
						objcpp: {},
					},
					objcpp: {},
				},
				objcpp: {},
			},
			scope: {
				objcpp: {},
			},
			storage: {
				modifier: {
					objcpp: {},
				},
				type: {
					objcpp: {},
				},
			},
			string: {
				begin: {
					objcpp: {},
				},
				end: {
					objcpp: {},
				},
			},
			type: {
				begin: {
					objcpp: {},
				},
				end: {
					objcpp: {},
				},
			},
		},
		'range-based': {
			objcpp: {},
		},
		section: {
			'angle-brackets': {
				end: {
					template: {
						definition: {
							objcpp: {},
						},
					},
				},
				start: {
					template: {
						definition: {
							objcpp: {},
						},
					},
				},
			},
			arguments: {
				begin: {
					bracket: {
						round: {
							function: {
								member: {
									objcpp: {},
								},
							},
							objcpp: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							function: {
								member: {
									objcpp: {},
								},
							},
							objcpp: {},
						},
					},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							objcpp: {},
							switch: {
								objcpp: {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							objcpp: {},
							switch: {
								objcpp: {},
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
									objcpp: {},
								},
							},
						},
					},
					end: {
						bracket: {
							round: {
								'apple-foundation': {
									objcpp: {},
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
							objcpp: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							objcpp: {},
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
									objcpp: {},
								},
							},
							initialization: {
								objcpp: {},
							},
							objcpp: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							conditional: {
								switch: {
									objcpp: {},
								},
							},
							initialization: {
								objcpp: {},
							},
							objcpp: {},
						},
					},
				},
			},
			'parens-c\b': {
				objcpp: {},
			},
			scope: {
				begin: {
					objcpp: {},
				},
				end: {
					objcpp: {},
				},
			},
		},
		separator: {
			arguments: {
				objcpp: {},
			},
			case: {
				default: {
					objcpp: {},
				},
				objcpp: {},
			},
			comma: {
				template: {
					argument: {
						objcpp: {},
					},
				},
			},
			constant: {
				numeric: {
					objcpp: {},
				},
			},
			continuation: {
				objcpp: {},
			},
			delimiter: {
				objcpp: {},
			},
			'dot-access': {
				objcpp: {},
			},
			namespace: {
				access: {
					objcpp: {},
				},
			},
			parameters: {
				objcpp: {},
			},
			'pointer-access': {
				objcpp: {},
			},
		},
		terminator: {
			statement: {
				objcpp: {},
			},
		},
		'vararg-ellipses': {
			objcpp: {},
		},
		whitespace: {
			comment: {
				leading: {
					objcpp: {},
				},
			},
			'function-call': {
				leading: {
					objcpp: {},
				},
			},
			support: {
				function: {
					cocoa: {
						leopard: {
							objcpp: {},
						},
					},
					leading: {
						cocoa: {
							objcpp: {},
						},
						objcpp: {},
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
						objcpp: {},
					},
				},
			},
			objcpp: {},
			protocol: {
				objcpp: {},
			},
			specificer: {
				functional: {
					'pre-parameters': {
						$1: {
							objcpp: {},
						},
					},
				},
			},
			specifier: {
				$1: {
					objcpp: {},
				},
				functional: {
					'post-parameters': {
						$1: {
							objcpp: {},
						},
					},
				},
			},
		},
		type: {
			$1: {
				objcpp: {},
			},
			'built-in': {
				objcpp: {},
				primitive: {
					objcpp: {},
				},
			},
			class: {
				objcpp: {},
			},
			id: {
				objcpp: {},
			},
			modifier: {
				access: {
					control: {
						$1: {
							objcpp: {},
						},
					},
					objcpp: {},
				},
			},
			namespace: {
				definition: {
					objcpp: {},
				},
				directive: {
					objcpp: {},
				},
				objcpp: {},
			},
			objcpp: {},
			primitive: {
				objcpp: {},
			},
			struct: {
				objcpp: {},
			},
			template: {
				argument: {
					$1: {
						objcpp: {},
					},
					$2: {
						objcpp: {},
					},
				},
				objcpp: {},
			},
			'user-defined': {
				objcpp: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				include: {
					objcpp: {},
				},
				objcpp: {},
				raw: {
					objcpp: {},
				},
			},
			other: {
				'lt-gt': {
					include: {
						objcpp: {},
					},
				},
			},
			single: {
				objcpp: {},
			},
		},
		unquoted: {
			single: {
				objcpp: {},
			},
		},
	},
	support: {
		class: {
			cocoa: {
				leopard: {
					objcpp: {},
				},
				objcpp: {},
			},
			quartz: {
				objcpp: {},
			},
		},
		constant: {
			cocoa: {
				leopard: {
					objcpp: {},
				},
				objcpp: {},
			},
			'mac-classic': {
				objcpp: {},
			},
			notification: {
				cocoa: {
					leopard: {
						objcpp: {},
					},
					objcpp: {},
				},
			},
		},
		function: {
			C99: {
				objcpp: {},
			},
			'any-method': {
				'name-of-parameter': {
					objcpp: {},
				},
				objcpp: {},
			},
			cocoa: {
				leopard: {
					objcpp: {},
				},
				objcpp: {},
			},
		},
		other: {
			protocol: {
				objcpp: {},
			},
		},
		type: {
			cocoa: {
				leopard: {
					objcpp: {},
				},
				objcpp: {},
			},
			'mac-classic': {
				objcpp: {},
			},
			'posix-reserved': {
				objcpp: {},
			},
			pthread: {
				objcpp: {},
			},
			quartz: {
				objcpp: {},
			},
			stdint: {
				objcpp: {},
			},
			'sys-types': {
				objcpp: {},
			},
		},
		variable: {
			foundation: {
				objcpp: {},
			},
		},
	},
	template: {
		definition: {
			objcpp: {},
		},
	},
	variable: {
		language: {
			objcpp: {},
			this: {
				objcpp: {},
			},
		},
		object: {
			objcpp: {},
		},
		other: {
			macro: {
				argument: {
					objcpp: {},
				},
			},
			member: {
				objcpp: {},
			},
			objcpp: {},
			object: {
				access: {
					objcpp: {},
				},
				objcpp: {},
			},
			readwrite: {
				global: {
					'mac-classic': {
						objcpp: {},
					},
				},
				member: {
					objcpp: {},
				},
				static: {
					'mac-classic': {
						objcpp: {},
					},
				},
			},
			selector: {
				objcpp: {},
			},
		},
		parameter: {
			function: {
				objcpp: {},
			},
			preprocessor: {
				objcpp: {},
			},
			probably: {
				defaulted: {
					objcpp: {},
				},
				objcpp: {},
			},
		},
	},
} as const);
