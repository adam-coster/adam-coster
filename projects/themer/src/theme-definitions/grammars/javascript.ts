export const scopeNames = Object.freeze(['source.js'] as const);
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
			js: {},
		},
	},
	comment: {
		block: {
			documentation: {
				js: {},
			},
			js: {},
			ts: {},
		},
		line: {
			'double-slash': {
				js: {},
			},
			shebang: {
				js: {},
			},
			'triple-slash': {
				directive: {
					js: {},
				},
			},
		},
	},
	constant: {
		character: {
			control: {
				regexp: {},
			},
			entity: {
				js: {},
			},
			escape: {
				backslash: {
					regexp: {},
				},
				js: {},
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
					js: {},
				},
				true: {
					js: {},
				},
			},
			'import-export-all': {
				js: {},
			},
			infinity: {
				js: {},
			},
			nan: {
				js: {},
			},
			null: {
				js: {},
			},
			'symbol-type': {
				jsdoc: {},
			},
			undefined: {
				js: {},
			},
		},
		numeric: {
			binary: {
				js: {},
			},
			decimal: {
				js: {},
			},
			hex: {
				js: {},
			},
			octal: {
				js: {},
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
				js: {},
				'tagged-template': {
					js: {},
				},
			},
			label: {
				js: {},
			},
			tag: {
				directive: {
					js: {},
				},
				inline: {
					jsdoc: {},
				},
				js: {},
				namespace: {
					js: {},
				},
			},
			type: {
				alias: {
					js: {},
				},
				class: {
					js: {},
				},
				enum: {
					js: {},
				},
				instance: {
					jsdoc: {},
				},
				interface: {
					js: {},
				},
				js: {},
				module: {
					js: {},
				},
			},
		},
		other: {
			'attribute-name': {
				directive: {
					js: {},
				},
				js: {},
				namespace: {
					js: {},
				},
			},
			'inherited-class': {
				js: {},
			},
		},
	},
	invalid: {
		illegal: {
			attribute: {
				js: {},
			},
			newline: {
				js: {},
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
				js: {},
			},
			assert: {
				js: {},
			},
			conditional: {
				js: {},
			},
			default: {
				js: {},
			},
			export: {
				js: {},
			},
			flow: {
				js: {},
			},
			from: {
				js: {},
			},
			import: {
				js: {},
			},
			intrinsic: {
				js: {},
			},
			js: {},
			loop: {
				js: {},
			},
			new: {
				js: {},
			},
			require: {
				js: {},
			},
			satisfies: {
				js: {},
			},
			switch: {
				js: {},
			},
			trycatch: {
				js: {},
			},
			type: {
				js: {},
			},
			with: {
				js: {},
			},
		},
		generator: {
			asterisk: {
				js: {},
			},
		},
		operator: {
			arithmetic: {
				js: {},
			},
			assignment: {
				compound: {
					bitwise: {
						js: {},
					},
					js: {},
				},
				js: {},
				jsdoc: {},
			},
			bitwise: {
				js: {},
				shift: {
					js: {},
				},
			},
			comparison: {
				js: {},
			},
			control: {
				jsdoc: {},
			},
			decrement: {
				js: {},
			},
			definiteassignment: {
				js: {},
			},
			expression: {
				delete: {
					js: {},
				},
				extends: {
					js: {},
				},
				import: {
					js: {},
				},
				in: {
					js: {},
				},
				infer: {
					js: {},
				},
				instanceof: {
					js: {},
				},
				is: {
					js: {},
				},
				keyof: {
					js: {},
				},
				of: {
					js: {},
				},
				typeof: {
					js: {},
				},
				void: {
					js: {},
				},
			},
			increment: {
				js: {},
			},
			logical: {
				js: {},
			},
			negation: {
				regexp: {},
			},
			new: {
				js: {},
			},
			optional: {
				js: {},
			},
			or: {
				regexp: {},
			},
			quantifier: {
				regexp: {},
			},
			relational: {
				js: {},
			},
			rest: {
				js: {},
			},
			spread: {
				js: {},
			},
			ternary: {
				js: {},
			},
			type: {
				annotation: {
					js: {},
				},
				asserts: {
					js: {},
				},
				js: {},
				modifier: {
					js: {},
				},
			},
		},
		other: {
			'back-reference': {
				regexp: {},
			},
			debugger: {
				js: {},
			},
			js: {},
		},
	},
	meta: {
		array: {
			literal: {
				js: {},
			},
		},
		'array-binding-pattern-variable': {
			js: {},
		},
		arrow: {
			js: {},
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
			js: {},
		},
		brace: {
			round: {
				js: {},
			},
			square: {
				js: {},
			},
		},
		class: {
			js: {},
		},
		decorator: {
			js: {},
		},
		definition: {
			function: {
				js: {},
			},
			method: {
				js: {},
			},
			property: {
				js: {},
			},
			variable: {
				js: {},
			},
		},
		delimiter: {
			decimal: {
				period: {
					js: {},
				},
			},
		},
		enum: {
			declaration: {
				js: {},
			},
		},
		example: {
			jsdoc: {},
		},
		export: {
			default: {
				js: {},
			},
			js: {},
		},
		field: {
			declaration: {
				js: {},
			},
		},
		function: {
			expression: {
				js: {},
			},
			js: {},
		},
		'function-call': {
			js: {},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		import: {
			js: {},
		},
		'import-equals': {
			external: {
				js: {},
			},
			internal: {
				js: {},
			},
		},
		indexer: {
			declaration: {
				js: {},
			},
			mappedtype: {
				declaration: {
					js: {},
				},
			},
		},
		interface: {
			js: {},
		},
		method: {
			declaration: {
				js: {},
			},
		},
		namespace: {
			declaration: {
				js: {},
			},
		},
		object: {
			member: {
				js: {},
			},
			type: {
				js: {},
			},
		},
		'object-binding-pattern-variable': {
			js: {},
		},
		'object-literal': {
			key: {
				js: {},
			},
		},
		objectliteral: {
			js: {},
		},
		parameter: {
			'object-binding-pattern': {
				js: {},
			},
		},
		parameters: {
			js: {},
		},
		paramter: {
			'array-binding-pattern': {
				js: {},
			},
		},
		return: {
			type: {
				arrow: {
					js: {},
				},
				js: {},
			},
		},
		tag: {
			attributes: {
				js: {},
			},
			js: {},
			'without-attributes': {
				js: {},
			},
		},
		template: {
			expression: {
				js: {},
			},
		},
		type: {
			annotation: {
				js: {},
			},
			declaration: {
				js: {},
			},
			function: {
				js: {},
				return: {
					js: {},
				},
			},
			infer: {
				js: {},
			},
			parameters: {
				js: {},
			},
			paren: {
				cover: {
					js: {},
				},
			},
			tuple: {
				js: {},
			},
		},
		var: {
			expr: {
				js: {},
			},
		},
		'var-single-variable': {
			expr: {
				js: {},
			},
		},
	},
	new: {
		expr: {
			js: {},
		},
	},
	punctuation: {
		accessor: {
			js: {},
			optional: {
				js: {},
			},
		},
		decorator: {
			internaldeclaration: {
				js: {},
			},
			js: {},
		},
		definition: {
			'binding-pattern': {
				array: {
					js: {},
				},
				object: {
					js: {},
				},
			},
			block: {
				js: {},
				tag: {
					jsdoc: {},
				},
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
				js: {},
			},
			entity: {
				js: {},
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
					js: {},
				},
				end: {
					js: {},
				},
			},
			section: {
				'case-statement': {
					js: {},
				},
			},
			string: {
				begin: {
					js: {},
					jsdoc: {},
				},
				end: {
					js: {},
					jsdoc: {},
				},
				template: {
					begin: {
						js: {},
					},
					end: {
						js: {},
					},
				},
			},
			tag: {
				begin: {
					js: {},
				},
				directive: {
					js: {},
				},
				end: {
					js: {},
				},
			},
			'template-expression': {
				begin: {
					js: {},
				},
				end: {
					js: {},
				},
			},
			typeparameters: {
				begin: {
					js: {},
				},
				end: {
					js: {},
				},
			},
		},
		destructuring: {
			js: {},
		},
		section: {
			embedded: {
				begin: {
					js: {},
				},
				end: {
					js: {},
				},
			},
		},
		separator: {
			comma: {
				js: {},
			},
			'key-value': {
				js: {},
			},
			label: {
				js: {},
			},
			namespace: {
				js: {},
			},
			parameter: {
				js: {},
			},
			pipe: {
				jsdoc: {},
			},
		},
		terminator: {
			statement: {
				js: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					js: {},
				},
			},
		},
	},
	source: {
		embedded: {
			js: {},
		},
	},
	storage: {
		modifier: {
			async: {
				js: {},
			},
			js: {},
		},
		type: {
			class: {
				js: {},
				jsdoc: {},
			},
			enum: {
				js: {},
			},
			function: {
				arrow: {
					js: {},
				},
				js: {},
			},
			interface: {
				js: {},
			},
			internaldeclaration: {
				js: {},
			},
			js: {},
			namespace: {
				js: {},
			},
			numeric: {
				bigint: {
					js: {},
				},
			},
			property: {
				js: {},
			},
			type: {
				js: {},
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
				js: {},
			},
			single: {
				js: {},
			},
		},
		regexp: {
			js: {},
		},
		template: {
			js: {},
		},
	},
	support: {
		class: {
			builtin: {
				js: {},
			},
			component: {
				js: {},
			},
			error: {
				js: {},
			},
			js: {},
			promise: {
				js: {},
			},
		},
		constant: {
			js: {},
			json: {
				js: {},
			},
			math: {
				js: {},
			},
			property: {
				math: {
					js: {},
				},
			},
		},
		function: {
			js: {},
			json: {
				js: {},
			},
			math: {
				js: {},
			},
		},
		type: {
			builtin: {
				js: {},
			},
			object: {
				module: {
					js: {},
				},
			},
			primitive: {
				js: {},
			},
		},
		variable: {
			property: {
				importmeta: {
					js: {},
				},
				js: {},
				target: {
					js: {},
				},
			},
		},
	},
	'switch-block': {
		expr: {
			js: {},
		},
	},
	'switch-expression': {
		expr: {
			js: {},
		},
	},
	'switch-statement': {
		expr: {
			js: {},
		},
	},
	variable: {
		language: {
			arguments: {
				js: {},
			},
			super: {
				js: {},
			},
			this: {
				js: {},
			},
		},
		object: {
			property: {
				js: {},
			},
		},
		other: {
			constant: {
				js: {},
				object: {
					js: {},
					property: {
						js: {},
					},
				},
				property: {
					js: {},
				},
			},
			description: {
				jsdoc: {},
			},
			enummember: {
				js: {},
			},
			jsdoc: {},
			link: {
				underline: {
					jsdoc: {},
				},
			},
			object: {
				js: {},
				property: {
					js: {},
				},
			},
			property: {
				js: {},
			},
			readwrite: {
				alias: {
					js: {},
				},
				js: {},
			},
			regexp: {},
		},
		parameter: {
			js: {},
		},
	},
} as const);
