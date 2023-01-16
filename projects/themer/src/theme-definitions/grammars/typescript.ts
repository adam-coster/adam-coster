export const scopeNames = Object.freeze(['source.ts'] as const);
export const semanticTokens = Object.freeze([
	'function',
	'function.defaultLibrary',
	'namespace',
	'property',
	'property.readonly',
	'variable',
	'variable.defaultLibrary',
	'variable.readonly',
] as const);
export const tokens = Object.freeze({
	'case-clause': {
		expr: {
			ts: {},
		},
	},
	cast: {
		expr: {
			ts: {},
		},
	},
	comment: {
		block: {
			documentation: {
				ts: {},
			},
			ts: {},
		},
		line: {
			'double-slash': {
				ts: {},
			},
			shebang: {
				ts: {},
			},
			'triple-slash': {
				directive: {
					ts: {},
				},
			},
		},
	},
	constant: {
		character: {
			control: {
				regexp: {},
			},
			escape: {
				backslash: {
					regexp: {},
				},
				ts: {},
			},
			numeric: {
				regexp: {},
			},
		},
		language: {
			'access-type': {
				jsdoc: {},
			},
			boolean: {
				false: {
					ts: {},
				},
				true: {
					ts: {},
				},
			},
			'import-export-all': {
				ts: {},
			},
			infinity: {
				ts: {},
			},
			nan: {
				ts: {},
			},
			null: {
				ts: {},
			},
			'symbol-type': {
				jsdoc: {},
			},
			undefined: {
				ts: {},
			},
		},
		numeric: {
			binary: {
				ts: {},
			},
			decimal: {
				ts: {},
			},
			hex: {
				ts: {},
			},
			octal: {
				ts: {},
			},
		},
		other: {
			'character-class': {
				range: {
					regexp: {},
				},
				regexp: {},
				set: {
					regexp: {},
				},
			},
			description: {
				jsdoc: {},
			},
			email: {
				link: {
					underline: {
						jsdoc: {},
					},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				'tagged-template': {
					ts: {},
				},
				ts: {},
			},
			label: {
				ts: {},
			},
			tag: {
				directive: {
					ts: {},
				},
				inline: {
					jsdoc: {},
				},
			},
			type: {
				alias: {
					ts: {},
				},
				class: {
					ts: {},
				},
				enum: {
					ts: {},
				},
				instance: {
					jsdoc: {},
				},
				interface: {
					ts: {},
				},
				module: {
					ts: {},
				},
				ts: {},
			},
		},
		other: {
			'attribute-name': {
				directive: {
					ts: {},
				},
			},
			'inherited-class': {
				ts: {},
			},
		},
	},
	invalid: {
		illegal: {
			newline: {
				ts: {},
			},
			syntax: {
				jsdoc: {},
			},
		},
	},
	keyword: {
		control: {
			anchor: {
				regexp: {},
			},
			as: {
				ts: {},
			},
			assert: {
				ts: {},
			},
			conditional: {
				ts: {},
			},
			default: {
				ts: {},
			},
			export: {
				ts: {},
			},
			flow: {
				ts: {},
			},
			from: {
				ts: {},
			},
			import: {
				ts: {},
			},
			intrinsic: {
				ts: {},
			},
			loop: {
				ts: {},
			},
			new: {
				ts: {},
			},
			require: {
				ts: {},
			},
			satisfies: {
				ts: {},
			},
			switch: {
				ts: {},
			},
			trycatch: {
				ts: {},
			},
			ts: {},
			type: {
				ts: {},
			},
			with: {
				ts: {},
			},
		},
		generator: {
			asterisk: {
				ts: {},
			},
		},
		operator: {
			arithmetic: {
				ts: {},
			},
			assignment: {
				compound: {
					bitwise: {
						ts: {},
					},
					ts: {},
				},
				jsdoc: {},
				ts: {},
			},
			bitwise: {
				shift: {
					ts: {},
				},
				ts: {},
			},
			comparison: {
				ts: {},
			},
			control: {
				jsdoc: {},
			},
			decrement: {
				ts: {},
			},
			definiteassignment: {
				ts: {},
			},
			expression: {
				delete: {
					ts: {},
				},
				extends: {
					ts: {},
				},
				import: {
					ts: {},
				},
				in: {
					ts: {},
				},
				infer: {
					ts: {},
				},
				instanceof: {
					ts: {},
				},
				is: {
					ts: {},
				},
				keyof: {
					ts: {},
				},
				of: {
					ts: {},
				},
				typeof: {
					ts: {},
				},
				void: {
					ts: {},
				},
			},
			increment: {
				ts: {},
			},
			logical: {
				ts: {},
			},
			negation: {
				regexp: {},
			},
			new: {
				ts: {},
			},
			optional: {
				ts: {},
			},
			or: {
				regexp: {},
			},
			quantifier: {
				regexp: {},
			},
			relational: {
				ts: {},
			},
			rest: {
				ts: {},
			},
			spread: {
				ts: {},
			},
			ternary: {
				ts: {},
			},
			type: {
				annotation: {
					ts: {},
				},
				asserts: {
					ts: {},
				},
				modifier: {
					ts: {},
				},
				ts: {},
			},
		},
		other: {
			'back-reference': {
				regexp: {},
			},
			debugger: {
				ts: {},
			},
			ts: {},
		},
	},
	meta: {
		array: {
			literal: {
				ts: {},
			},
		},
		'array-binding-pattern-variable': {
			ts: {},
		},
		arrow: {
			ts: {},
		},
		assertion: {
			'look-ahead': {
				regexp: {},
			},
			'look-behind': {
				regexp: {},
			},
			'negative-look-ahead': {
				regexp: {},
			},
			'negative-look-behind': {
				regexp: {},
			},
		},
		block: {
			ts: {},
		},
		brace: {
			angle: {
				ts: {},
			},
			round: {
				ts: {},
			},
			square: {
				ts: {},
			},
		},
		class: {
			ts: {},
		},
		decorator: {
			ts: {},
		},
		definition: {
			function: {
				ts: {},
			},
			method: {
				ts: {},
			},
			property: {
				ts: {},
			},
			variable: {
				ts: {},
			},
		},
		delimiter: {
			decimal: {
				period: {
					ts: {},
				},
			},
		},
		enum: {
			declaration: {
				ts: {},
			},
		},
		example: {
			jsdoc: {},
		},
		export: {
			default: {
				ts: {},
			},
			ts: {},
		},
		field: {
			declaration: {
				ts: {},
			},
		},
		function: {
			expression: {
				ts: {},
			},
			ts: {},
		},
		'function-call': {
			ts: {},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		import: {
			ts: {},
		},
		'import-equals': {
			external: {
				ts: {},
			},
			internal: {
				ts: {},
			},
		},
		indexer: {
			declaration: {
				ts: {},
			},
			mappedtype: {
				declaration: {
					ts: {},
				},
			},
		},
		interface: {
			ts: {},
		},
		method: {
			declaration: {
				ts: {},
			},
		},
		namespace: {
			declaration: {
				ts: {},
			},
		},
		object: {
			member: {
				ts: {},
			},
			type: {
				ts: {},
			},
		},
		'object-binding-pattern-variable': {
			ts: {},
		},
		'object-literal': {
			key: {
				ts: {},
			},
		},
		objectliteral: {
			ts: {},
		},
		parameter: {
			'object-binding-pattern': {
				ts: {},
			},
		},
		parameters: {
			ts: {},
		},
		paramter: {
			'array-binding-pattern': {
				ts: {},
			},
		},
		return: {
			type: {
				arrow: {
					ts: {},
				},
				ts: {},
			},
		},
		tag: {
			ts: {},
		},
		template: {
			expression: {
				ts: {},
			},
		},
		type: {
			annotation: {
				ts: {},
			},
			declaration: {
				ts: {},
			},
			function: {
				return: {
					ts: {},
				},
				ts: {},
			},
			infer: {
				ts: {},
			},
			parameters: {
				ts: {},
			},
			paren: {
				cover: {
					ts: {},
				},
			},
			tuple: {
				ts: {},
			},
		},
		var: {
			expr: {
				ts: {},
			},
		},
		'var-single-variable': {
			expr: {
				ts: {},
			},
		},
	},
	new: {
		expr: {
			ts: {},
		},
	},
	punctuation: {
		accessor: {
			optional: {
				ts: {},
			},
			ts: {},
		},
		decorator: {
			internaldeclaration: {
				ts: {},
			},
			ts: {},
		},
		definition: {
			'binding-pattern': {
				array: {
					ts: {},
				},
				object: {
					ts: {},
				},
			},
			block: {
				tag: {
					jsdoc: {},
				},
				ts: {},
			},
			bracket: {
				angle: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
				curly: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
				square: {
					begin: {
						jsdoc: {},
					},
					end: {
						jsdoc: {},
					},
				},
			},
			'character-class': {
				regexp: {},
			},
			comment: {
				ts: {},
			},
			group: {
				assertion: {
					regexp: {},
				},
				'no-capture': {
					regexp: {},
				},
				regexp: {},
			},
			inline: {
				tag: {
					jsdoc: {},
				},
			},
			'optional-value': {
				begin: {
					bracket: {
						square: {
							jsdoc: {},
						},
					},
				},
				end: {
					bracket: {
						square: {
							jsdoc: {},
						},
					},
				},
			},
			parameters: {
				begin: {
					ts: {},
				},
				end: {
					ts: {},
				},
			},
			section: {
				'case-statement': {
					ts: {},
				},
			},
			string: {
				begin: {
					jsdoc: {},
					ts: {},
				},
				end: {
					jsdoc: {},
					ts: {},
				},
				template: {
					begin: {
						js: {},
						ts: {},
					},
					end: {
						js: {},
						ts: {},
					},
				},
			},
			tag: {
				directive: {
					ts: {},
				},
			},
			'template-expression': {
				begin: {
					ts: {},
				},
				end: {
					ts: {},
				},
			},
			typeparameters: {
				begin: {
					ts: {},
				},
				end: {
					ts: {},
				},
			},
		},
		destructuring: {
			ts: {},
		},
		separator: {
			comma: {
				ts: {},
			},
			'key-value': {
				ts: {},
			},
			label: {
				ts: {},
			},
			parameter: {
				ts: {},
			},
			pipe: {
				jsdoc: {},
			},
		},
		terminator: {
			statement: {
				ts: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					ts: {},
				},
			},
		},
	},
	source: {
		embedded: {
			ts: {},
		},
	},
	storage: {
		modifier: {
			async: {
				ts: {},
			},
			ts: {},
		},
		type: {
			class: {
				jsdoc: {},
				ts: {},
			},
			enum: {
				ts: {},
			},
			function: {
				arrow: {
					ts: {},
				},
				ts: {},
			},
			interface: {
				ts: {},
			},
			internaldeclaration: {
				ts: {},
			},
			namespace: {
				ts: {},
			},
			numeric: {
				bigint: {
					ts: {},
				},
			},
			property: {
				ts: {},
			},
			ts: {},
			type: {
				ts: {},
			},
		},
	},
	string: {
		js: {
			taggedTemplate: {
				commentTaggedTemplate: {
					basic: {},
					c: {},
					clojure: {},
					coffee: {},
					cpp: {},
					csharp: {},
					css: {},
					dart: {},
					diff: {},
					dockerfile: {},
					dosbatch: {},
					fsharp: {},
					git_commit: {},
					git_rebase: {},
					glsl: {},
					go: {},
					graphql: {},
					groovy: {},
					ini: {},
					java: {},
					js: {},
					js_regexp: {},
					json: {},
					less: {},
					lua: {},
					makefile: {},
					md: {},
					objc: {},
					perl: {},
					perl6: {},
					php: {},
					powershell: {},
					pug: {},
					python: {},
					r: {},
					regexp_python: {},
					ruby: {},
					rust: {},
					scala: {},
					scss: {},
					shell: {},
					sql: {},
					ts: {},
					tsx: {},
					vs_net: {},
					xml: {},
					xsl: {},
					yaml: {},
				},
			},
		},
		quoted: {
			double: {
				ts: {},
			},
			single: {
				ts: {},
			},
		},
		regexp: {
			ts: {},
		},
		template: {
			ts: {},
		},
	},
	support: {
		class: {
			builtin: {
				ts: {},
			},
			error: {
				ts: {},
			},
			promise: {
				ts: {},
			},
			ts: {},
		},
		constant: {
			json: {
				ts: {},
			},
			math: {
				ts: {},
			},
			property: {
				math: {
					ts: {},
				},
			},
			ts: {},
		},
		function: {
			json: {
				ts: {},
			},
			math: {
				ts: {},
			},
			ts: {},
		},
		type: {
			builtin: {
				ts: {},
			},
			object: {
				module: {
					ts: {},
				},
			},
			primitive: {
				ts: {},
			},
		},
		variable: {
			property: {
				importmeta: {
					ts: {},
				},
				target: {
					ts: {},
				},
				ts: {},
			},
		},
	},
	'switch-block': {
		expr: {
			ts: {},
		},
	},
	'switch-expression': {
		expr: {
			ts: {},
		},
	},
	'switch-statement': {
		expr: {
			ts: {},
		},
	},
	variable: {
		language: {
			arguments: {
				ts: {},
			},
			super: {
				ts: {},
			},
			this: {
				ts: {},
			},
		},
		object: {
			property: {
				ts: {},
			},
		},
		other: {
			constant: {
				object: {
					property: {
						ts: {},
					},
					ts: {},
				},
				property: {
					ts: {},
				},
				ts: {},
			},
			description: {
				jsdoc: {},
			},
			enummember: {
				ts: {},
			},
			jsdoc: {},
			link: {
				underline: {
					jsdoc: {},
				},
			},
			object: {
				property: {
					ts: {},
				},
				ts: {},
			},
			property: {
				ts: {},
			},
			readwrite: {
				alias: {
					ts: {},
				},
				ts: {},
			},
			regexp: {},
		},
		parameter: {
			ts: {},
		},
	},
} as const);
