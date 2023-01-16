export const scopeNames = Object.freeze([
	'source.cpp',
	'source.cpp.embedded.macro',
] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			cpp: {},
			documentation: {
				cpp: {},
			},
		},
		line: {
			banner: {
				cpp: {},
			},
			'double-slash': {
				cpp: {},
				documentation: {
					cpp: {},
				},
			},
		},
	},
	constant: {
		character: {
			escape: {
				cpp: {},
				'line-continuation': {
					cpp: {},
				},
			},
		},
		language: {
			$0: {
				cpp: {},
			},
		},
		numeric: {
			binary: {
				cpp: {},
			},
			decimal: {
				cpp: {},
				point: {
					cpp: {},
				},
			},
			exponent: {
				decimal: {
					cpp: {},
				},
				hexadecimal: {
					cpp: {},
				},
			},
			hexadecimal: {
				cpp: {},
			},
			octal: {
				cpp: {},
			},
		},
		other: {
			placeholder: {},
		},
	},
	entity: {
		name: {
			function: {
				call: {
					cpp: {},
					initializer: {
						cpp: {},
					},
				},
				definition: {
					cpp: {},
					special: {
						member: {
							destructor: {
								cpp: {},
							},
						},
					},
				},
				destructor: {
					cpp: {},
				},
				member: {
					cpp: {},
				},
				preprocessor: {
					cpp: {},
				},
			},
			label: {
				call: {
					cpp: {},
				},
				cpp: {},
			},
			namespace: {
				alias: {
					cpp: {},
				},
				cpp: {},
			},
			operator: {
				cpp: {},
				'custom-literal': {
					cpp: {},
				},
				type: {
					array: {
						cpp: {},
					},
					cpp: {},
					pointer: {
						cpp: {},
					},
					reference: {
						cpp: {},
					},
				},
			},
			other: {
				preprocessor: {
					macro: {
						include: {
							cpp: {},
						},
						predefined: {
							$1: {
								cpp: {},
							},
							DLLEXPORT: {
								cpp: {},
							},
							probably: {
								$0: {
									cpp: {},
								},
								$1: {
									cpp: {},
								},
							},
						},
					},
				},
			},
			'scope-resolution': {
				cpp: {},
				destructor: {
					cpp: {},
				},
				function: {
					call: {
						cpp: {},
					},
					definition: {
						cpp: {},
						'operator-overload': {
							cpp: {},
						},
					},
				},
				namespace: {
					alias: {
						cpp: {},
					},
					block: {
						cpp: {},
					},
					using: {
						cpp: {},
					},
				},
				operator: {
					cpp: {},
				},
				'operator-overload': {
					cpp: {},
				},
				parameter: {
					cpp: {},
				},
				template: {
					call: {
						cpp: {},
					},
					definition: {
						cpp: {},
					},
				},
				type: {
					cpp: {},
				},
			},
			tag: {
				'pragma-mark': {
					cpp: {},
				},
			},
			type: {
				alias: {
					cpp: {},
				},
				class: {
					cpp: {},
					parameter: {
						cpp: {},
					},
				},
				cpp: {},
				destructor: {
					cpp: {},
				},
				enum: {
					cpp: {},
					parameter: {
						cpp: {},
					},
				},
				parameter: {
					cpp: {},
				},
				pointer: {
					function: {
						cpp: {},
					},
				},
				struct: {
					cpp: {},
					parameter: {
						cpp: {},
					},
				},
				template: {
					cpp: {},
				},
				union: {
					cpp: {},
					parameter: {
						cpp: {},
					},
				},
			},
		},
		other: {
			attribute: {
				$0: {
					cpp: {},
				},
			},
			'attribute-name': {
				pragma: {
					preprocessor: {
						cpp: {},
					},
				},
			},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {
					cpp: {},
				},
			},
			'delimiter-too-long': {},
			'reference-type': {
				cpp: {},
			},
			unexpected: {
				punctuation: {
					definition: {
						comment: {
							end: {
								cpp: {},
							},
						},
					},
				},
			},
			'unknown-escape': {
				cpp: {},
			},
		},
	},
	keyword: {
		control: {
			$3: {
				cpp: {},
			},
			case: {
				cpp: {},
			},
			default: {
				cpp: {},
			},
			directive: {
				$4: {
					cpp: {},
				},
				$5: {
					cpp: {},
				},
				conditional: {
					$6: {
						cpp: {},
					},
					defined: {
						cpp: {},
					},
				},
				define: {
					cpp: {},
				},
				diagnostic: {
					$7: {
						cpp: {},
					},
				},
				import: {
					cpp: {},
				},
				line: {
					cpp: {},
				},
				pragma: {
					cpp: {},
					'pragma-mark': {
						cpp: {},
					},
				},
				undef: {
					cpp: {},
				},
			},
			exception: {
				$3: {
					cpp: {},
				},
			},
			goto: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
		},
		operator: {
			$0: {
				cpp: {},
			},
			alignas: {
				cpp: {},
			},
			alignof: {
				cpp: {},
			},
			arithmetic: {
				cpp: {},
			},
			assignment: {
				compound: {
					bitwise: {
						cpp: {},
					},
					cpp: {},
				},
				cpp: {},
			},
			bitwise: {
				cpp: {},
				shift: {
					cpp: {},
				},
			},
			cast: {
				$3: {
					cpp: {},
				},
			},
			comparison: {
				cpp: {},
			},
			decrement: {
				cpp: {},
			},
			delete: {
				array: {
					bracket: {
						cpp: {},
					},
					cpp: {},
				},
				cpp: {},
			},
			functionlike: {
				cpp: {},
			},
			increment: {
				cpp: {},
			},
			logical: {
				cpp: {},
			},
			minus: {
				exponent: {
					decimal: {
						cpp: {},
					},
					hexadecimal: {
						cpp: {},
					},
				},
			},
			new: {
				cpp: {},
			},
			noexcept: {
				cpp: {},
			},
			plus: {
				exponent: {
					decimal: {
						cpp: {},
					},
					hexadecimal: {
						cpp: {},
					},
				},
			},
			sizeof: {
				cpp: {},
				variadic: {
					cpp: {},
				},
			},
			ternary: {
				cpp: {},
			},
			typeid: {
				cpp: {},
			},
			wordlike: {
				cpp: {},
			},
		},
		other: {
			$3: {
				cpp: {},
			},
			decltype: {
				cpp: {},
			},
			default: {
				destructor: {
					cpp: {},
				},
				function: {
					cpp: {},
				},
			},
			delete: {
				destructor: {
					cpp: {},
				},
				function: {
					cpp: {},
				},
			},
			namespace: {
				alias: {
					cpp: {},
				},
				definition: {
					cpp: {},
				},
				directive: {
					cpp: {},
				},
			},
			operator: {
				overload: {
					cpp: {},
				},
			},
			parameter: {
				direction: {
					$0: {
						cpp: {},
					},
				},
			},
			static_assert: {
				cpp: {},
			},
			typedef: {
				cpp: {},
			},
			typename: {
				cpp: {},
			},
			unit: {
				binary: {
					cpp: {},
				},
				exponent: {
					decimal: {
						cpp: {},
					},
					hexadecimal: {
						cpp: {},
					},
				},
				hexadecimal: {
					cpp: {},
				},
				octal: {
					cpp: {},
				},
				suffix: {
					'floating-point': {
						cpp: {},
					},
					integer: {
						cpp: {},
					},
				},
				'user-defined': {
					cpp: {},
				},
			},
			using: {
				directive: {
					cpp: {},
				},
			},
		},
	},
	markup: {
		bold: {
			doxygen: {
				cpp: {},
			},
		},
		inline: {
			raw: {
				string: {
					cpp: {},
				},
			},
		},
		italic: {
			doxygen: {
				cpp: {},
			},
		},
	},
	meta: {
		asm: {
			cpp: {},
		},
		banner: {
			character: {
				cpp: {},
			},
		},
		block: {
			class: {
				cpp: {},
			},
			cpp: {},
			enum: {
				cpp: {},
			},
			extern: {
				cpp: {},
			},
			namespace: {
				cpp: {},
			},
			struct: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
			union: {
				cpp: {},
			},
		},
		body: {
			class: {
				cpp: {},
			},
			enum: {
				cpp: {},
			},
			extern: {
				cpp: {},
			},
			function: {
				definition: {
					cpp: {},
					special: {
						member: {
							destructor: {
								cpp: {},
							},
						},
						'operator-overload': {
							cpp: {},
						},
					},
				},
			},
			namespace: {
				cpp: {},
			},
			struct: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
			union: {
				cpp: {},
			},
		},
		bracket: {
			square: {
				access: {},
				array: {
					cpp: {},
				},
			},
		},
		conditional: {
			case: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
		},
		declaration: {
			namespace: {
				alias: {
					cpp: {},
					value: {
						cpp: {},
					},
				},
			},
			type: {
				alias: {
					cpp: {},
					value: {
						unknown: {
							cpp: {},
						},
					},
				},
			},
		},
		encoding: {
			cpp: {},
		},
		enum: {
			definition: {
				cpp: {},
			},
		},
		function: {
			definition: {
				body: {
					lambda: {
						cpp: {},
					},
				},
				cpp: {},
				parameters: {
					lambda: {
						cpp: {},
					},
				},
				special: {
					member: {
						destructor: {
							cpp: {},
						},
					},
					'operator-overload': {
						cpp: {},
					},
				},
			},
			preprocessor: {
				parameters: {
					cpp: {},
				},
			},
		},
		head: {
			class: {
				cpp: {},
			},
			enum: {
				cpp: {},
			},
			extern: {
				cpp: {},
			},
			function: {
				definition: {
					cpp: {},
					special: {
						member: {
							destructor: {
								cpp: {},
							},
						},
						'operator-overload': {
							cpp: {},
						},
					},
				},
			},
			namespace: {
				cpp: {},
			},
			struct: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
			union: {
				cpp: {},
			},
		},
		initialization: {
			cpp: {},
		},
		lambda: {
			capture: {
				cpp: {},
			},
		},
		parameter: {
			cpp: {},
		},
		parens: {
			cpp: {},
			preprocessor: {
				conditional: {
					cpp: {},
				},
			},
		},
		preprocessor: {
			conditional: {
				cpp: {},
			},
			diagnostic: {
				'$reference(directive)': {
					cpp: {},
				},
			},
			import: {
				cpp: {},
			},
			include: {
				cpp: {},
			},
			line: {
				cpp: {},
			},
			macro: {
				cpp: {},
			},
			pragma: {
				cpp: {},
			},
			undef: {
				cpp: {},
			},
		},
		qualified_type: {
			cpp: {},
		},
		static_assert: {
			message: {
				cpp: {},
			},
		},
		string: {
			quoted: {
				double: {
					raw: {
						glsl: {
							cpp: {},
						},
						sql: {
							cpp: {},
						},
					},
				},
			},
		},
		tail: {
			class: {
				cpp: {},
			},
			enum: {
				cpp: {},
			},
			extern: {
				cpp: {},
			},
			function: {
				definition: {
					cpp: {},
					special: {
						member: {
							destructor: {
								cpp: {},
							},
						},
						'operator-overload': {
							cpp: {},
						},
					},
				},
			},
			namespace: {
				cpp: {},
			},
			struct: {
				cpp: {},
			},
			switch: {
				cpp: {},
			},
			union: {
				cpp: {},
			},
		},
		template: {
			call: {
				cpp: {},
			},
			definition: {
				cpp: {},
			},
			'explicit-instantiation': {
				cpp: {},
			},
		},
		'toc-list': {
			banner: {
				block: {
					cpp: {},
				},
				'double-slash': {
					cpp: {},
				},
			},
		},
		'using-namespace': {
			cpp: {},
		},
	},
	punctuation: {
		accessor: {
			attribute: {
				cpp: {},
			},
		},
		definition: {
			begin: {
				bracket: {
					square: {
						array: {
							type: {
								cpp: {},
							},
						},
						cpp: {},
					},
				},
			},
			capture: {
				begin: {
					lambda: {
						cpp: {},
					},
				},
				end: {
					lambda: {
						cpp: {},
					},
				},
			},
			comment: {
				begin: {
					cpp: {},
					documentation: {
						cpp: {},
					},
				},
				cpp: {},
				documentation: {
					cpp: {},
				},
				end: {
					cpp: {},
					documentation: {
						cpp: {},
					},
				},
			},
			directive: {
				cpp: {},
			},
			end: {
				bracket: {
					square: {
						array: {
							type: {
								cpp: {},
							},
						},
						cpp: {},
					},
				},
			},
			function: {
				pointer: {
					dereference: {
						cpp: {},
					},
				},
				'return-type': {
					cpp: {},
				},
			},
			lambda: {
				'return-type': {
					cpp: {},
				},
			},
			parameters: {
				begin: {
					lambda: {
						cpp: {},
					},
					preprocessor: {
						cpp: {},
					},
				},
				end: {
					lambda: {
						cpp: {},
					},
					preprocessor: {
						cpp: {},
					},
				},
			},
			string: {
				begin: {
					assembly: {
						cpp: {},
					},
					cpp: {},
				},
				end: {
					assembly: {
						cpp: {},
					},
					cpp: {},
				},
			},
		},
		section: {
			'angle-brackets': {
				begin: {
					template: {
						call: {
							cpp: {},
						},
						definition: {
							cpp: {},
						},
					},
				},
				end: {
					template: {
						call: {
							cpp: {},
						},
						definition: {
							cpp: {},
						},
					},
				},
			},
			arguments: {
				begin: {
					bracket: {
						curly: {
							initializer: {
								cpp: {},
							},
						},
						round: {
							decltype: {
								cpp: {},
							},
							function: {
								call: {
									cpp: {},
									initializer: {
										cpp: {},
									},
								},
								member: {
									cpp: {},
								},
							},
							initializer: {
								cpp: {},
							},
							operator: {
								alignas: {
									cpp: {},
								},
								alignof: {
									cpp: {},
								},
								noexcept: {
									cpp: {},
								},
								sizeof: {
									cpp: {},
									variadic: {
										cpp: {},
									},
								},
								typeid: {
									cpp: {},
								},
							},
							static_assert: {
								cpp: {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							initializer: {
								cpp: {},
							},
						},
						round: {
							decltype: {
								cpp: {},
							},
							function: {
								call: {
									cpp: {},
									initializer: {
										cpp: {},
									},
								},
								member: {
									cpp: {},
								},
							},
							initializer: {
								cpp: {},
							},
							operator: {
								alignas: {
									cpp: {},
								},
								alignof: {
									cpp: {},
								},
								noexcept: {
									cpp: {},
								},
								sizeof: {
									cpp: {},
									variadic: {
										cpp: {},
									},
								},
								typeid: {
									cpp: {},
								},
							},
							static_assert: {
								cpp: {},
							},
						},
					},
				},
			},
			attribute: {
				begin: {
					cpp: {},
				},
				end: {
					cpp: {},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							class: {
								cpp: {},
							},
							cpp: {},
							enum: {
								cpp: {},
							},
							extern: {
								cpp: {},
							},
							function: {
								definition: {
									cpp: {},
									special: {
										member: {
											destructor: {
												cpp: {},
											},
										},
										'operator-overload': {
											cpp: {},
										},
									},
								},
							},
							lambda: {
								cpp: {},
							},
							namespace: {
								cpp: {},
							},
							struct: {
								cpp: {},
							},
							switch: {
								cpp: {},
							},
							union: {
								cpp: {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							class: {
								cpp: {},
							},
							cpp: {},
							enum: {
								cpp: {},
							},
							extern: {
								cpp: {},
							},
							function: {
								definition: {
									cpp: {},
									special: {
										member: {
											destructor: {
												cpp: {},
											},
										},
										'operator-overload': {
											cpp: {},
										},
									},
								},
							},
							lambda: {
								cpp: {},
							},
							namespace: {
								cpp: {},
							},
							struct: {
								cpp: {},
							},
							switch: {
								cpp: {},
							},
							union: {
								cpp: {},
							},
						},
					},
				},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							cpp: {},
							function: {
								pointer: {
									cpp: {},
								},
							},
							special: {
								member: {
									destructor: {
										cpp: {},
									},
								},
								'operator-overload': {
									cpp: {},
								},
							},
						},
					},
				},
				end: {
					bracket: {
						round: {
							cpp: {},
							function: {
								pointer: {
									cpp: {},
								},
							},
							special: {
								member: {
									destructor: {
										cpp: {},
									},
								},
								'operator-overload': {
									cpp: {},
								},
							},
						},
					},
				},
			},
			parens: {
				begin: {
					bracket: {
						round: {
							assembly: {
								cpp: {},
								inner: {
									cpp: {},
								},
							},
							conditional: {
								switch: {
									cpp: {},
								},
							},
							cpp: {},
							function: {
								pointer: {
									cpp: {},
								},
							},
						},
					},
				},
				control: {
					defined: {
						cpp: {},
					},
				},
				end: {
					bracket: {
						round: {
							assembly: {
								cpp: {},
								inner: {
									cpp: {},
								},
							},
							conditional: {
								switch: {
									cpp: {},
								},
							},
							cpp: {},
							function: {
								pointer: {
									cpp: {},
								},
							},
						},
					},
				},
			},
		},
		separator: {
			attribute: {
				cpp: {},
			},
			colon: {
				access: {
					control: {
						cpp: {},
					},
				},
				case: {
					cpp: {},
					default: {
						cpp: {},
					},
				},
				inheritance: {
					cpp: {},
				},
				'range-based': {
					cpp: {},
				},
				'type-specifier': {
					cpp: {},
				},
			},
			constant: {
				numeric: {
					cpp: {},
				},
			},
			delimiter: {
				colon: {
					assembly: {
						cpp: {},
					},
				},
				comma: {
					cpp: {},
					inheritance: {
						cpp: {},
					},
					template: {
						argument: {
							cpp: {},
						},
					},
				},
			},
			'dot-access': {
				cpp: {},
			},
			initializers: {
				cpp: {},
			},
			label: {
				cpp: {},
			},
			namespace: {
				access: {
					cpp: {},
				},
			},
			parameters: {
				cpp: {},
			},
			'pointer-access': {
				cpp: {},
			},
			'scope-resolution': {
				cpp: {},
				destructor: {
					cpp: {},
				},
				function: {
					call: {
						cpp: {},
					},
					definition: {
						cpp: {},
						'operator-overload': {
							cpp: {},
						},
					},
				},
				namespace: {
					alias: {
						cpp: {},
					},
					block: {
						cpp: {},
					},
					using: {
						cpp: {},
					},
				},
				operator: {
					cpp: {},
				},
				'operator-overload': {
					cpp: {},
				},
				parameter: {
					cpp: {},
				},
				template: {
					call: {
						cpp: {},
					},
					definition: {
						cpp: {},
					},
				},
				type: {
					cpp: {},
				},
			},
		},
		terminator: {
			statement: {
				cpp: {},
			},
		},
		'vararg-ellipses': {
			cpp: {},
			template: {
				definition: {
					cpp: {},
				},
			},
			variable: {
				parameter: {
					preprocessor: {
						cpp: {},
					},
				},
			},
		},
	},
	storage: {
		modifier: {
			$1: {
				cpp: {},
			},
			$8: {
				cpp: {},
			},
			array: {
				bracket: {
					square: {},
				},
			},
			cpp: {},
			inline: {
				cpp: {},
			},
			lambda: {
				$0: {
					cpp: {},
				},
			},
			pointer: {
				cpp: {},
			},
			reference: {
				cpp: {},
			},
			specifier: {
				$3: {
					cpp: {},
				},
				extern: {
					cpp: {},
				},
				functional: {
					'post-parameters': {
						$5: {
							cpp: {},
						},
					},
					'pre-parameters': {
						$0: {
							cpp: {},
						},
					},
				},
				parameter: {
					cpp: {},
				},
			},
		},
		type: {
			$0: {
				cpp: {},
			},
			$1: {
				cpp: {},
			},
			asm: {
				cpp: {},
			},
			'built-in': {
				cpp: {},
				primitive: {
					cpp: {},
				},
			},
			class: {
				declare: {
					cpp: {},
				},
				doxygen: {
					cpp: {},
				},
				gtkdoc: {
					cpp: {},
				},
				parameter: {
					cpp: {},
				},
			},
			cpp: {},
			decltype: {
				cpp: {},
			},
			enum: {
				cpp: {},
				declare: {
					cpp: {},
				},
				'enum-key': {
					$2: {
						cpp: {},
					},
				},
				parameter: {
					cpp: {},
				},
			},
			extern: {
				cpp: {},
			},
			integral: {
				$14: {
					cpp: {},
				},
			},
			modifier: {
				access: {
					$0: {
						cpp: {},
					},
					control: {
						$4: {
							cpp: {},
						},
					},
				},
				'calling-convention': {
					cpp: {},
				},
				final: {
					cpp: {},
				},
				virtual: {
					cpp: {},
				},
			},
			namespace: {
				alias: {
					cpp: {},
				},
				definition: {
					cpp: {},
				},
				directive: {
					cpp: {},
				},
			},
			primitive: {
				cpp: {},
			},
			'return-type': {
				lambda: {
					cpp: {},
				},
			},
			struct: {
				declare: {
					cpp: {},
				},
				parameter: {
					cpp: {},
				},
			},
			template: {
				argument: {
					$0: {
						cpp: {},
					},
					$1: {
						cpp: {},
					},
					$11: {
						cpp: {},
					},
					$14: {
						cpp: {},
					},
					$3: {
						cpp: {},
					},
					$6: {
						cpp: {},
					},
				},
				cpp: {},
			},
			union: {
				declare: {
					cpp: {},
				},
				parameter: {
					cpp: {},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				cpp: {},
				include: {
					cpp: {},
				},
				raw: {
					regex: {
						cpp: {},
					},
				},
			},
			other: {
				'lt-gt': {
					include: {
						cpp: {},
					},
				},
			},
			single: {
				cpp: {},
			},
		},
		unquoted: {
			cpp: {},
		},
	},
	support: {
		other: {
			attribute: {
				cpp: {},
			},
		},
		type: {
			'built-in': {
				'posix-reserved': {
					cpp: {},
					pthread: {
						cpp: {},
					},
				},
			},
			'posix-reserved': {
				cpp: {},
				pthread: {
					cpp: {},
				},
			},
		},
	},
	variable: {
		language: {
			this: {
				cpp: {},
			},
		},
		other: {
			asm: {
				label: {
					cpp: {},
				},
			},
			definition: {
				pointer: {
					function: {
						cpp: {},
					},
				},
			},
			enummember: {
				cpp: {},
			},
			macro: {
				argument: {
					cpp: {},
				},
			},
			object: {
				access: {
					cpp: {},
				},
				declare: {
					cpp: {},
				},
				property: {
					cpp: {},
				},
			},
			property: {
				cpp: {},
			},
		},
		parameter: {
			capture: {
				cpp: {},
			},
			cpp: {},
			pointer: {
				function: {
					cpp: {},
				},
			},
			preprocessor: {
				cpp: {},
			},
		},
	},
} as const);
