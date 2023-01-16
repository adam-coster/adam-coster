export const scopeNames = Object.freeze(['source.cuda-cpp'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			'cuda-cpp': {},
			documentation: {
				'cuda-cpp': {},
			},
		},
		line: {
			banner: {
				'cuda-cpp': {},
			},
			'double-slash': {
				'cuda-cpp': {},
				documentation: {
					'cuda-cpp': {},
				},
			},
		},
	},
	constant: {
		character: {
			escape: {
				'cuda-cpp': {},
				'line-continuation': {
					'cuda-cpp': {},
				},
			},
		},
		language: {
			$0: {
				'cuda-cpp': {},
			},
		},
		numeric: {
			binary: {
				'cuda-cpp': {},
			},
			decimal: {
				'cuda-cpp': {},
				point: {
					'cuda-cpp': {},
				},
			},
			exponent: {
				decimal: {
					'cuda-cpp': {},
				},
				hexadecimal: {
					'cuda-cpp': {},
				},
			},
			hexadecimal: {
				'cuda-cpp': {},
			},
			octal: {
				'cuda-cpp': {},
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
					'cuda-cpp': {},
					initializer: {
						'cuda-cpp': {},
					},
				},
				definition: {
					'cuda-cpp': {},
					special: {
						member: {
							destructor: {
								'cuda-cpp': {},
							},
						},
					},
				},
				destructor: {
					'cuda-cpp': {},
				},
				member: {
					'cuda-cpp': {},
				},
				preprocessor: {
					'cuda-cpp': {},
				},
			},
			label: {
				call: {
					'cuda-cpp': {},
				},
				'cuda-cpp': {},
			},
			namespace: {
				alias: {
					'cuda-cpp': {},
				},
				'cuda-cpp': {},
			},
			operator: {
				'cuda-cpp': {},
				'custom-literal': {
					'cuda-cpp': {},
				},
				type: {
					array: {
						'cuda-cpp': {},
					},
					'cuda-cpp': {},
					pointer: {
						'cuda-cpp': {},
					},
					reference: {
						'cuda-cpp': {},
					},
				},
			},
			other: {
				preprocessor: {
					macro: {
						include: {
							'cuda-cpp': {},
						},
						predefined: {
							$1: {
								'cuda-cpp': {},
							},
							DLLEXPORT: {
								'cuda-cpp': {},
							},
							probably: {
								$0: {
									'cuda-cpp': {},
								},
								$1: {
									'cuda-cpp': {},
								},
							},
						},
					},
				},
			},
			'scope-resolution': {
				'cuda-cpp': {},
				destructor: {
					'cuda-cpp': {},
				},
				function: {
					call: {
						'cuda-cpp': {},
					},
					definition: {
						'cuda-cpp': {},
						'operator-overload': {
							'cuda-cpp': {},
						},
					},
				},
				namespace: {
					alias: {
						'cuda-cpp': {},
					},
					block: {
						'cuda-cpp': {},
					},
					using: {
						'cuda-cpp': {},
					},
				},
				operator: {
					'cuda-cpp': {},
				},
				'operator-overload': {
					'cuda-cpp': {},
				},
				parameter: {
					'cuda-cpp': {},
				},
				template: {
					call: {
						'cuda-cpp': {},
					},
					definition: {
						'cuda-cpp': {},
					},
				},
				type: {
					'cuda-cpp': {},
				},
			},
			tag: {
				'pragma-mark': {
					'cuda-cpp': {},
				},
			},
			type: {
				alias: {
					'cuda-cpp': {},
				},
				class: {
					'cuda-cpp': {},
					parameter: {
						'cuda-cpp': {},
					},
				},
				'cuda-cpp': {},
				destructor: {
					'cuda-cpp': {},
				},
				enum: {
					'cuda-cpp': {},
					parameter: {
						'cuda-cpp': {},
					},
				},
				parameter: {
					'cuda-cpp': {},
				},
				pointer: {
					function: {
						'cuda-cpp': {},
					},
				},
				struct: {
					'cuda-cpp': {},
					parameter: {
						'cuda-cpp': {},
					},
				},
				template: {
					'cuda-cpp': {},
				},
				union: {
					'cuda-cpp': {},
					parameter: {
						'cuda-cpp': {},
					},
				},
			},
		},
		other: {
			attribute: {
				$0: {
					'cuda-cpp': {},
				},
			},
			'attribute-name': {
				pragma: {
					preprocessor: {
						'cuda-cpp': {},
					},
				},
			},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {
					'cuda-cpp': {},
				},
			},
			'delimiter-too-long': {},
			'reference-type': {
				'cuda-cpp': {},
			},
			unexpected: {
				punctuation: {
					definition: {
						comment: {
							end: {
								'cuda-cpp': {},
							},
						},
					},
				},
			},
			'unknown-escape': {
				'cuda-cpp': {},
			},
		},
	},
	keyword: {
		control: {
			$3: {
				'cuda-cpp': {},
			},
			case: {
				'cuda-cpp': {},
			},
			default: {
				'cuda-cpp': {},
			},
			directive: {
				$4: {
					'cuda-cpp': {},
				},
				$5: {
					'cuda-cpp': {},
				},
				conditional: {
					$6: {
						'cuda-cpp': {},
					},
					defined: {
						'cuda-cpp': {},
					},
				},
				define: {
					'cuda-cpp': {},
				},
				diagnostic: {
					$7: {
						'cuda-cpp': {},
					},
				},
				import: {
					'cuda-cpp': {},
				},
				line: {
					'cuda-cpp': {},
				},
				pragma: {
					'cuda-cpp': {},
					'pragma-mark': {
						'cuda-cpp': {},
					},
				},
				undef: {
					'cuda-cpp': {},
				},
			},
			exception: {
				$3: {
					'cuda-cpp': {},
				},
			},
			goto: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
		},
		operator: {
			$0: {
				'cuda-cpp': {},
			},
			$1: {
				'cuda-cpp': {},
			},
			alignas: {
				'cuda-cpp': {},
			},
			alignof: {
				'cuda-cpp': {},
			},
			assignment: {
				compound: {
					bitwise: {
						'cuda-cpp': {},
					},
					'cuda-cpp': {},
				},
				'cuda-cpp': {},
			},
			bitwise: {
				shift: {
					'cuda-cpp': {},
				},
			},
			cast: {
				$3: {
					'cuda-cpp': {},
				},
			},
			comparison: {
				'cuda-cpp': {},
			},
			'cuda-cpp': {},
			decrement: {
				'cuda-cpp': {},
			},
			delete: {
				array: {
					bracket: {
						'cuda-cpp': {},
					},
					'cuda-cpp': {},
				},
				'cuda-cpp': {},
			},
			functionlike: {
				'cuda-cpp': {},
			},
			increment: {
				'cuda-cpp': {},
			},
			logical: {
				'cuda-cpp': {},
			},
			minus: {
				exponent: {
					decimal: {
						'cuda-cpp': {},
					},
					hexadecimal: {
						'cuda-cpp': {},
					},
				},
			},
			new: {
				'cuda-cpp': {},
			},
			noexcept: {
				'cuda-cpp': {},
			},
			plus: {
				exponent: {
					decimal: {
						'cuda-cpp': {},
					},
					hexadecimal: {
						'cuda-cpp': {},
					},
				},
			},
			sizeof: {
				'cuda-cpp': {},
				variadic: {
					'cuda-cpp': {},
				},
			},
			ternary: {
				'cuda-cpp': {},
			},
			typeid: {
				'cuda-cpp': {},
			},
			wordlike: {
				'cuda-cpp': {},
			},
		},
		other: {
			$3: {
				'cuda-cpp': {},
			},
			decltype: {
				'cuda-cpp': {},
			},
			default: {},
			delete: {},
			namespace: {
				alias: {
					'cuda-cpp': {},
				},
				definition: {
					'cuda-cpp': {},
				},
				directive: {
					'cuda-cpp': {},
				},
			},
			operator: {
				overload: {
					'cuda-cpp': {},
				},
			},
			parameter: {
				direction: {
					$0: {
						'cuda-cpp': {},
					},
				},
			},
			static_assert: {
				'cuda-cpp': {},
			},
			typedef: {
				'cuda-cpp': {},
			},
			typename: {
				'cuda-cpp': {},
			},
			unit: {
				binary: {
					'cuda-cpp': {},
				},
				exponent: {
					decimal: {
						'cuda-cpp': {},
					},
					hexadecimal: {
						'cuda-cpp': {},
					},
				},
				hexadecimal: {
					'cuda-cpp': {},
				},
				octal: {
					'cuda-cpp': {},
				},
				suffix: {
					'floating-point': {
						'cuda-cpp': {},
					},
					integer: {
						'cuda-cpp': {},
					},
				},
				'user-defined': {
					'cuda-cpp': {},
				},
			},
			using: {
				directive: {
					'cuda-cpp': {},
				},
			},
		},
	},
	markup: {
		bold: {
			doxygen: {
				'cuda-cpp': {},
			},
		},
		inline: {
			raw: {
				string: {
					'cuda-cpp': {},
				},
			},
		},
		italic: {
			doxygen: {
				'cuda-cpp': {},
			},
		},
	},
	meta: {
		asm: {
			'cuda-cpp': {},
		},
		banner: {
			character: {
				'cuda-cpp': {},
			},
		},
		block: {
			class: {
				'cuda-cpp': {},
			},
			'cuda-cpp': {},
			enum: {
				'cuda-cpp': {},
			},
			extern: {
				'cuda-cpp': {},
			},
			namespace: {
				'cuda-cpp': {},
			},
			struct: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
			union: {
				'cuda-cpp': {},
			},
		},
		body: {
			class: {
				'cuda-cpp': {},
			},
			enum: {
				'cuda-cpp': {},
			},
			extern: {
				'cuda-cpp': {},
			},
			function: {
				definition: {
					'cuda-cpp': {},
					special: {
						member: {
							destructor: {
								'cuda-cpp': {},
							},
						},
						'operator-overload': {
							'cuda-cpp': {},
						},
					},
				},
			},
			namespace: {
				'cuda-cpp': {},
			},
			struct: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
			union: {
				'cuda-cpp': {},
			},
		},
		bracket: {
			square: {
				access: {},
				array: {
					'cuda-cpp': {},
				},
			},
		},
		conditional: {
			case: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
		},
		declaration: {
			namespace: {
				alias: {
					'cuda-cpp': {},
					value: {
						'cuda-cpp': {},
					},
				},
			},
			type: {
				alias: {
					'cuda-cpp': {},
					value: {
						unknown: {
							'cuda-cpp': {},
						},
					},
				},
			},
		},
		encoding: {
			'cuda-cpp': {},
		},
		enum: {
			definition: {
				'cuda-cpp': {},
			},
		},
		function: {
			definition: {
				body: {
					lambda: {
						'cuda-cpp': {},
					},
				},
				'cuda-cpp': {},
				parameters: {
					lambda: {
						'cuda-cpp': {},
					},
				},
				special: {
					member: {
						destructor: {
							'cuda-cpp': {},
						},
					},
					'operator-overload': {
						'cuda-cpp': {},
					},
				},
			},
		},
		head: {
			class: {
				'cuda-cpp': {},
			},
			enum: {
				'cuda-cpp': {},
			},
			extern: {
				'cuda-cpp': {},
			},
			function: {
				definition: {
					'cuda-cpp': {},
					special: {
						member: {
							destructor: {
								'cuda-cpp': {},
							},
						},
						'operator-overload': {
							'cuda-cpp': {},
						},
					},
				},
			},
			namespace: {
				'cuda-cpp': {},
			},
			struct: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
			union: {
				'cuda-cpp': {},
			},
		},
		initialization: {
			'cuda-cpp': {},
		},
		lambda: {
			capture: {
				'cuda-cpp': {},
			},
		},
		parameter: {
			'cuda-cpp': {},
		},
		parens: {
			'cuda-cpp': {},
			preprocessor: {
				conditional: {
					'cuda-cpp': {},
				},
			},
		},
		preprocessor: {
			conditional: {
				'cuda-cpp': {},
			},
			diagnostic: {
				'$reference(directive)': {
					'cuda-cpp': {},
				},
			},
			import: {
				'cuda-cpp': {},
			},
			include: {
				'cuda-cpp': {},
			},
			line: {
				'cuda-cpp': {},
			},
			macro: {
				'cuda-cpp': {},
			},
			pragma: {
				'cuda-cpp': {},
			},
			undef: {
				'cuda-cpp': {},
			},
		},
		qualified_type: {
			'cuda-cpp': {},
		},
		static_assert: {
			message: {
				'cuda-cpp': {},
			},
		},
		string: {
			quoted: {
				double: {
					raw: {
						glsl: {
							'cuda-cpp': {},
						},
						sql: {
							'cuda-cpp': {},
						},
					},
				},
			},
		},
		tail: {
			class: {
				'cuda-cpp': {},
			},
			enum: {
				'cuda-cpp': {},
			},
			extern: {
				'cuda-cpp': {},
			},
			function: {
				definition: {
					'cuda-cpp': {},
					special: {
						member: {
							destructor: {
								'cuda-cpp': {},
							},
						},
						'operator-overload': {
							'cuda-cpp': {},
						},
					},
				},
			},
			namespace: {
				'cuda-cpp': {},
			},
			struct: {
				'cuda-cpp': {},
			},
			switch: {
				'cuda-cpp': {},
			},
			union: {
				'cuda-cpp': {},
			},
		},
		template: {
			call: {
				'cuda-cpp': {},
			},
			definition: {
				'cuda-cpp': {},
			},
		},
		'toc-list': {
			banner: {
				block: {
					'cuda-cpp': {},
				},
				'double-slash': {
					'cuda-cpp': {},
				},
			},
		},
		'using-namespace': {
			'cuda-cpp': {},
		},
	},
	punctuation: {
		accessor: {
			attribute: {
				'cuda-cpp': {},
			},
		},
		definition: {
			begin: {
				bracket: {
					square: {
						array: {
							type: {
								'cuda-cpp': {},
							},
						},
						'cuda-cpp': {},
					},
				},
			},
			capture: {
				begin: {
					lambda: {
						'cuda-cpp': {},
					},
				},
				end: {
					lambda: {
						'cuda-cpp': {},
					},
				},
			},
			comment: {
				begin: {
					'cuda-cpp': {},
					documentation: {
						'cuda-cpp': {},
					},
				},
				'cuda-cpp': {},
				documentation: {
					'cuda-cpp': {},
				},
				end: {
					'cuda-cpp': {},
					documentation: {
						'cuda-cpp': {},
					},
				},
			},
			directive: {
				'cuda-cpp': {},
			},
			end: {
				bracket: {
					square: {
						array: {
							type: {
								'cuda-cpp': {},
							},
						},
						'cuda-cpp': {},
					},
				},
			},
			function: {
				pointer: {
					dereference: {
						'cuda-cpp': {},
					},
				},
				'return-type': {
					'cuda-cpp': {},
				},
			},
			lambda: {
				'return-type': {
					'cuda-cpp': {},
				},
			},
			parameters: {
				begin: {
					lambda: {
						'cuda-cpp': {},
					},
					preprocessor: {
						'cuda-cpp': {},
					},
				},
				end: {
					lambda: {
						'cuda-cpp': {},
					},
					preprocessor: {
						'cuda-cpp': {},
					},
				},
			},
			string: {
				begin: {
					assembly: {
						'cuda-cpp': {},
					},
					'cuda-cpp': {},
				},
				end: {
					assembly: {
						'cuda-cpp': {},
					},
					'cuda-cpp': {},
				},
			},
		},
		section: {
			'angle-brackets': {
				begin: {
					template: {
						call: {
							'cuda-cpp': {},
						},
					},
				},
				end: {
					template: {
						call: {
							'cuda-cpp': {},
						},
						definition: {
							'cuda-cpp': {},
						},
					},
				},
				start: {
					template: {
						definition: {
							'cuda-cpp': {},
						},
					},
				},
			},
			arguments: {
				begin: {
					bracket: {
						curly: {
							initializer: {
								'cuda-cpp': {},
							},
						},
						round: {
							decltype: {
								'cuda-cpp': {},
							},
							function: {
								call: {
									'cuda-cpp': {},
									initializer: {
										'cuda-cpp': {},
									},
								},
								member: {
									'cuda-cpp': {},
								},
							},
							initializer: {
								'cuda-cpp': {},
							},
							operator: {
								alignas: {
									'cuda-cpp': {},
								},
								alignof: {
									'cuda-cpp': {},
								},
								noexcept: {
									'cuda-cpp': {},
								},
								sizeof: {
									'cuda-cpp': {},
									variadic: {
										'cuda-cpp': {},
									},
								},
								typeid: {
									'cuda-cpp': {},
								},
							},
							static_assert: {
								'cuda-cpp': {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							initializer: {
								'cuda-cpp': {},
							},
						},
						round: {
							decltype: {
								'cuda-cpp': {},
							},
							function: {
								call: {
									'cuda-cpp': {},
									initializer: {
										'cuda-cpp': {},
									},
								},
								member: {
									'cuda-cpp': {},
								},
							},
							initializer: {
								'cuda-cpp': {},
							},
							operator: {
								alignas: {
									'cuda-cpp': {},
								},
								alignof: {
									'cuda-cpp': {},
								},
								noexcept: {
									'cuda-cpp': {},
								},
								sizeof: {
									'cuda-cpp': {},
									variadic: {
										'cuda-cpp': {},
									},
								},
								typeid: {
									'cuda-cpp': {},
								},
							},
							static_assert: {
								'cuda-cpp': {},
							},
						},
					},
				},
			},
			attribute: {
				begin: {
					'cuda-cpp': {},
				},
				end: {
					'cuda-cpp': {},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							class: {
								'cuda-cpp': {},
							},
							'cuda-cpp': {},
							enum: {
								'cuda-cpp': {},
							},
							extern: {
								'cuda-cpp': {},
							},
							function: {
								definition: {
									'cuda-cpp': {},
									special: {
										member: {
											destructor: {
												'cuda-cpp': {},
											},
										},
										'operator-overload': {
											'cuda-cpp': {},
										},
									},
								},
							},
							lambda: {
								'cuda-cpp': {},
							},
							namespace: {
								'cuda-cpp': {},
							},
							struct: {
								'cuda-cpp': {},
							},
							switch: {
								'cuda-cpp': {},
							},
							union: {
								'cuda-cpp': {},
							},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							class: {
								'cuda-cpp': {},
							},
							'cuda-cpp': {},
							enum: {
								'cuda-cpp': {},
							},
							extern: {
								'cuda-cpp': {},
							},
							function: {
								definition: {
									'cuda-cpp': {},
									special: {
										member: {
											destructor: {
												'cuda-cpp': {},
											},
										},
										'operator-overload': {
											'cuda-cpp': {},
										},
									},
								},
							},
							lambda: {
								'cuda-cpp': {},
							},
							namespace: {
								'cuda-cpp': {},
							},
							struct: {
								'cuda-cpp': {},
							},
							switch: {
								'cuda-cpp': {},
							},
							union: {
								'cuda-cpp': {},
							},
						},
					},
				},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							'cuda-cpp': {},
							function: {
								pointer: {
									'cuda-cpp': {},
								},
							},
							special: {
								member: {
									destructor: {
										'cuda-cpp': {},
									},
								},
								'operator-overload': {
									'cuda-cpp': {},
								},
							},
						},
					},
				},
				end: {
					bracket: {
						round: {
							'cuda-cpp': {},
							function: {
								pointer: {
									'cuda-cpp': {},
								},
							},
							special: {
								member: {
									destructor: {
										'cuda-cpp': {},
									},
								},
								'operator-overload': {
									'cuda-cpp': {},
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
								'cuda-cpp': {},
								inner: {
									'cuda-cpp': {},
								},
							},
							conditional: {
								switch: {
									'cuda-cpp': {},
								},
							},
							'cuda-cpp': {},
							function: {
								pointer: {
									'cuda-cpp': {},
								},
							},
						},
					},
				},
				control: {
					defined: {
						'cuda-cpp': {},
					},
				},
				end: {
					bracket: {
						round: {
							assembly: {
								'cuda-cpp': {},
								inner: {
									'cuda-cpp': {},
								},
							},
							conditional: {
								switch: {
									'cuda-cpp': {},
								},
							},
							'cuda-cpp': {},
							function: {
								pointer: {
									'cuda-cpp': {},
								},
							},
						},
					},
				},
			},
		},
		separator: {
			attribute: {
				'cuda-cpp': {},
			},
			colon: {
				access: {
					control: {
						'cuda-cpp': {},
					},
				},
				case: {
					'cuda-cpp': {},
					default: {
						'cuda-cpp': {},
					},
				},
				inheritance: {
					'cuda-cpp': {},
				},
				'range-based': {
					'cuda-cpp': {},
				},
				'type-specifier': {
					'cuda-cpp': {},
				},
			},
			constant: {
				numeric: {
					'cuda-cpp': {},
				},
			},
			delimiter: {
				colon: {
					assembly: {
						'cuda-cpp': {},
					},
				},
				comma: {
					'cuda-cpp': {},
					inheritance: {
						'cuda-cpp': {},
					},
					template: {
						argument: {
							'cuda-cpp': {},
						},
					},
				},
			},
			'dot-access': {
				'cuda-cpp': {},
			},
			initializers: {
				'cuda-cpp': {},
			},
			label: {
				'cuda-cpp': {},
			},
			namespace: {
				access: {
					'cuda-cpp': {},
				},
			},
			parameters: {
				'cuda-cpp': {},
			},
			'pointer-access': {
				'cuda-cpp': {},
			},
			'scope-resolution': {
				'cuda-cpp': {},
				destructor: {
					'cuda-cpp': {},
				},
				function: {
					call: {
						'cuda-cpp': {},
					},
					definition: {
						'cuda-cpp': {},
						'operator-overload': {
							'cuda-cpp': {},
						},
					},
				},
				namespace: {
					alias: {
						'cuda-cpp': {},
					},
					block: {
						'cuda-cpp': {},
					},
					using: {
						'cuda-cpp': {},
					},
				},
				operator: {
					'cuda-cpp': {},
				},
				'operator-overload': {
					'cuda-cpp': {},
				},
				parameter: {
					'cuda-cpp': {},
				},
				template: {
					call: {
						'cuda-cpp': {},
					},
					definition: {
						'cuda-cpp': {},
					},
				},
				type: {
					'cuda-cpp': {},
				},
			},
		},
		terminator: {
			statement: {
				'cuda-cpp': {},
			},
		},
		'vararg-ellipses': {
			'cuda-cpp': {},
			template: {
				definition: {
					'cuda-cpp': {},
				},
			},
			variable: {
				parameter: {
					preprocessor: {
						'cuda-cpp': {},
					},
				},
			},
		},
	},
	storage: {
		modifier: {
			$1: {
				'cuda-cpp': {},
			},
			$12: {
				'cuda-cpp': {},
			},
			array: {
				bracket: {
					square: {},
				},
			},
			'cuda-cpp': {},
			inline: {
				'cuda-cpp': {},
			},
			lambda: {
				$0: {
					'cuda-cpp': {},
				},
			},
			pointer: {
				'cuda-cpp': {},
			},
			reference: {
				'cuda-cpp': {},
			},
			specifier: {
				$3: {
					'cuda-cpp': {},
				},
				functional: {
					'post-parameters': {
						$3: {
							'cuda-cpp': {},
						},
					},
					'pre-parameters': {
						$0: {
							'cuda-cpp': {},
						},
					},
				},
				parameter: {
					'cuda-cpp': {},
				},
			},
		},
		type: {
			$0: {
				'cuda-cpp': {},
			},
			$1: {
				'cuda-cpp': {},
			},
			asm: {
				'cuda-cpp': {},
			},
			'built-in': {
				'cuda-cpp': {},
				primitive: {
					'cuda-cpp': {},
				},
			},
			class: {
				declare: {
					'cuda-cpp': {},
				},
				doxygen: {
					'cuda-cpp': {},
				},
				gtkdoc: {
					'cuda-cpp': {},
				},
				parameter: {
					'cuda-cpp': {},
				},
			},
			'cuda-cpp': {},
			decltype: {
				'cuda-cpp': {},
			},
			enum: {
				'cuda-cpp': {},
				declare: {
					'cuda-cpp': {},
				},
				'enum-key': {
					$2: {
						'cuda-cpp': {},
					},
				},
				parameter: {
					'cuda-cpp': {},
				},
			},
			extern: {
				'cuda-cpp': {},
			},
			integral: {
				$14: {
					'cuda-cpp': {},
				},
			},
			modifier: {
				access: {
					$0: {
						'cuda-cpp': {},
					},
					control: {
						$4: {
							'cuda-cpp': {},
						},
					},
				},
				'calling-convention': {
					'cuda-cpp': {},
				},
				final: {
					'cuda-cpp': {},
				},
				virtual: {
					'cuda-cpp': {},
				},
			},
			namespace: {
				alias: {
					'cuda-cpp': {},
				},
				definition: {
					'cuda-cpp': {},
				},
				directive: {
					'cuda-cpp': {},
				},
			},
			primitive: {
				'cuda-cpp': {},
			},
			'return-type': {
				lambda: {
					'cuda-cpp': {},
				},
			},
			struct: {
				declare: {
					'cuda-cpp': {},
				},
				parameter: {
					'cuda-cpp': {},
				},
			},
			template: {
				argument: {
					$0: {
						'cuda-cpp': {},
					},
					$3: {
						'cuda-cpp': {},
					},
				},
				'cuda-cpp': {},
			},
			union: {
				declare: {
					'cuda-cpp': {},
				},
				parameter: {
					'cuda-cpp': {},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				'cuda-cpp': {},
				include: {
					'cuda-cpp': {},
				},
				raw: {
					regex: {
						'cuda-cpp': {},
					},
				},
			},
			other: {
				'lt-gt': {
					include: {
						'cuda-cpp': {},
					},
				},
			},
			single: {
				'cuda-cpp': {},
			},
		},
		unquoted: {
			'cuda-cpp': {},
		},
	},
	support: {
		other: {
			attribute: {
				'cuda-cpp': {},
			},
		},
		type: {
			'built-in': {
				'posix-reserved': {
					'cuda-cpp': {},
					pthread: {
						'cuda-cpp': {},
					},
				},
			},
			'posix-reserved': {
				'cuda-cpp': {},
				pthread: {
					'cuda-cpp': {},
				},
			},
		},
	},
	variable: {
		language: {
			this: {
				'cuda-cpp': {},
			},
		},
		other: {
			asm: {
				label: {
					'cuda-cpp': {},
				},
			},
			definition: {
				pointer: {
					function: {
						'cuda-cpp': {},
					},
				},
			},
			enummember: {
				'cuda-cpp': {},
			},
			macro: {
				argument: {
					'cuda-cpp': {},
				},
			},
			object: {
				access: {
					'cuda-cpp': {},
				},
				declare: {
					'cuda-cpp': {},
				},
				property: {
					'cuda-cpp': {},
				},
			},
			property: {
				'cuda-cpp': {},
			},
		},
		parameter: {
			capture: {
				'cuda-cpp': {},
			},
			'cuda-cpp': {},
			pointer: {
				function: {
					'cuda-cpp': {},
				},
			},
			preprocessor: {
				'cuda-cpp': {},
			},
		},
	},
} as const);
