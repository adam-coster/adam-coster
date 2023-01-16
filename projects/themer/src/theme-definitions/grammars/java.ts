export const scopeNames = Object.freeze(['source.java'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			empty: {
				java: {},
			},
			java: {},
			javadoc: {
				java: {},
			},
		},
		line: {
			'double-slash': {
				java: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				java: {},
			},
		},
		language: {
			java: {},
		},
		numeric: {
			binary: {
				java: {},
			},
			decimal: {
				java: {},
			},
			hex: {
				java: {},
			},
			octal: {
				java: {},
			},
		},
		other: {
			enum: {
				java: {},
			},
			key: {
				java: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				java: {},
			},
			type: {
				class: {
					java: {},
				},
				enum: {
					java: {},
				},
				module: {
					java: {},
				},
				record: {
					java: {},
				},
			},
		},
		other: {
			'inherited-class': {
				java: {},
			},
		},
	},
	invalid: {
		deprecated: {
			package_name_not_lowercase: {
				java: {},
			},
		},
		illegal: {
			character_not_allowed_here: {
				java: {},
			},
			identifier: {
				java: {},
			},
		},
	},
	keyword: {
		control: {
			assert: {
				java: {},
			},
			catch: {
				java: {},
			},
			finally: {
				java: {},
			},
			java: {},
			new: {
				java: {},
			},
			ternary: {
				java: {},
			},
			throw: {
				java: {},
			},
			try: {
				java: {},
			},
		},
		module: {
			java: {},
		},
		operator: {
			arithmetic: {
				java: {},
			},
			assert: {
				'expression-separator': {
					java: {},
				},
			},
			assignment: {
				arithmetic: {
					java: {},
				},
				bitwise: {
					java: {},
				},
				java: {},
			},
			bitwise: {
				java: {},
			},
			comparison: {
				java: {},
			},
			'increment-decrement': {
				java: {},
			},
			instanceof: {
				java: {},
			},
			logical: {
				java: {},
			},
		},
		other: {
			documentation: {
				javadoc: {
					java: {},
				},
			},
			import: {
				java: {},
			},
			package: {
				java: {},
			},
		},
		reserved: {
			java: {},
		},
	},
	meta: {
		'array-initializer': {
			java: {},
		},
		catch: {
			java: {},
		},
		class: {
			identifier: {
				java: {},
			},
			java: {},
		},
		declaration: {
			annotation: {
				java: {},
			},
			assertion: {
				java: {},
			},
		},
		definition: {
			class: {
				implemented: {
					interfaces: {
						java: {},
					},
				},
				inherited: {
					classes: {
						java: {},
					},
				},
				permits: {
					classes: {
						java: {},
					},
				},
			},
			variable: {
				java: {},
				local: {
					java: {},
				},
			},
		},
		enum: {
			java: {},
		},
		finally: {
			java: {},
		},
		'function-call': {
			java: {},
		},
		import: {
			java: {},
		},
		'inner-class': {
			java: {},
		},
		method: {
			identifier: {
				java: {},
			},
			java: {},
			'return-type': {
				java: {},
			},
		},
		'method-call': {
			java: {},
		},
		module: {
			java: {},
		},
		package: {
			java: {},
		},
		record: {
			body: {
				java: {},
			},
			identifier: {
				java: {},
			},
			java: {},
		},
		throwables: {
			java: {},
		},
		try: {
			java: {},
			resources: {
				java: {},
			},
		},
	},
	punctuation: {
		bracket: {
			angle: {
				java: {},
			},
			curly: {
				java: {},
			},
			round: {
				java: {},
			},
			square: {
				java: {},
			},
		},
		catch: {
			separator: {
				java: {},
			},
		},
		definition: {
			annotation: {
				java: {},
			},
			'annotation-arguments': {
				begin: {
					bracket: {
						round: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							java: {},
						},
					},
				},
			},
			comment: {
				java: {},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							java: {},
						},
					},
				},
				varargs: {
					java: {},
				},
			},
			string: {
				begin: {
					java: {},
				},
				end: {
					java: {},
				},
			},
		},
		section: {
			'array-initializer': {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			block: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			catch: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			class: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			enum: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			finally: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			'inner-class': {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			method: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			module: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
			},
			try: {
				begin: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							java: {},
						},
					},
				},
				resources: {
					begin: {
						bracket: {
							round: {
								java: {},
							},
						},
					},
					end: {
						bracket: {
							round: {
								java: {},
							},
						},
					},
				},
			},
		},
		separator: {
			delimiter: {
				java: {},
			},
			java: {},
			period: {
				java: {},
			},
			types: {
				java: {},
			},
		},
		terminator: {
			java: {},
		},
		whitespace: {
			comment: {
				leading: {
					java: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			$1: {
				java: {},
			},
			extends: {
				java: {},
			},
			implements: {
				java: {},
			},
			java: {},
			permits: {
				java: {},
			},
		},
		type: {
			annotation: {
				java: {},
			},
			function: {
				arrow: {
					java: {},
				},
			},
			generic: {
				java: {},
				wildcard: {
					java: {},
				},
			},
			java: {},
			local: {
				java: {},
			},
			object: {
				array: {
					java: {},
				},
			},
			primitive: {
				array: {
					java: {},
				},
				java: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				java: {},
			},
			single: {
				java: {},
			},
		},
	},
	variable: {
		language: {
			java: {},
			this: {
				java: {},
			},
			wildcard: {
				java: {},
			},
		},
		other: {
			definition: {
				java: {},
			},
			object: {
				java: {},
				property: {
					java: {},
				},
			},
		},
		parameter: {
			java: {},
		},
	},
} as const);
