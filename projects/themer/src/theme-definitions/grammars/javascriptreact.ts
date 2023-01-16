export const scopeNames = Object.freeze(['source.js.jsx'] as const);
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
			js: {
				jsx: {},
			},
		},
	},
	comment: {
		block: {
			documentation: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
			ts: {},
		},
		line: {
			'double-slash': {
				js: {
					jsx: {},
				},
			},
			shebang: {
				js: {
					jsx: {},
				},
			},
			'triple-slash': {
				directive: {
					js: {
						jsx: {},
					},
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
				js: {
					jsx: {},
				},
			},
			escape: {
				backslash: {
					regexp: {},
				},
				js: {
					jsx: {},
				},
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
					js: {
						jsx: {},
					},
				},
				true: {
					js: {
						jsx: {},
					},
				},
			},
			'import-export-all': {
				js: {
					jsx: {},
				},
			},
			infinity: {
				js: {
					jsx: {},
				},
			},
			nan: {
				js: {
					jsx: {},
				},
			},
			null: {
				js: {
					jsx: {},
				},
			},
			'symbol-type': {
				jsdoc: {},
			},
			undefined: {
				js: {
					jsx: {},
				},
			},
		},
		numeric: {
			binary: {
				js: {
					jsx: {},
				},
			},
			decimal: {
				js: {
					jsx: {},
				},
			},
			hex: {
				js: {
					jsx: {},
				},
			},
			octal: {
				js: {
					jsx: {},
				},
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
				js: {
					jsx: {},
				},
				'tagged-template': {
					js: {
						jsx: {},
					},
				},
			},
			label: {
				js: {
					jsx: {},
				},
			},
			tag: {
				directive: {
					js: {
						jsx: {},
					},
				},
				inline: {
					jsdoc: {},
				},
				js: {
					jsx: {},
				},
				namespace: {
					js: {
						jsx: {},
					},
				},
			},
			type: {
				alias: {
					js: {
						jsx: {},
					},
				},
				class: {
					js: {
						jsx: {},
					},
				},
				enum: {
					js: {
						jsx: {},
					},
				},
				instance: {
					jsdoc: {},
				},
				interface: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
				module: {
					js: {
						jsx: {},
					},
				},
			},
		},
		other: {
			'attribute-name': {
				directive: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
				namespace: {
					js: {
						jsx: {},
					},
				},
			},
			'inherited-class': {
				js: {
					jsx: {},
				},
			},
		},
	},
	invalid: {
		illegal: {
			attribute: {
				js: {
					jsx: {},
				},
			},
			newline: {
				js: {
					jsx: {},
				},
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
				js: {
					jsx: {},
				},
			},
			assert: {
				js: {
					jsx: {},
				},
			},
			conditional: {
				js: {
					jsx: {},
				},
			},
			default: {
				js: {
					jsx: {},
				},
			},
			export: {
				js: {
					jsx: {},
				},
			},
			flow: {
				js: {
					jsx: {},
				},
			},
			from: {
				js: {
					jsx: {},
				},
			},
			import: {
				js: {
					jsx: {},
				},
			},
			intrinsic: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
			loop: {
				js: {
					jsx: {},
				},
			},
			new: {
				js: {
					jsx: {},
				},
			},
			require: {
				js: {
					jsx: {},
				},
			},
			satisfies: {
				js: {
					jsx: {},
				},
			},
			switch: {
				js: {
					jsx: {},
				},
			},
			trycatch: {
				js: {
					jsx: {},
				},
			},
			type: {
				js: {
					jsx: {},
				},
			},
			with: {
				js: {
					jsx: {},
				},
			},
		},
		generator: {
			asterisk: {
				js: {
					jsx: {},
				},
			},
		},
		operator: {
			arithmetic: {
				js: {
					jsx: {},
				},
			},
			assignment: {
				compound: {
					bitwise: {
						js: {
							jsx: {},
						},
					},
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
				jsdoc: {},
			},
			bitwise: {
				js: {
					jsx: {},
				},
				shift: {
					js: {
						jsx: {},
					},
				},
			},
			comparison: {
				js: {
					jsx: {},
				},
			},
			control: {
				jsdoc: {},
			},
			decrement: {
				js: {
					jsx: {},
				},
			},
			definiteassignment: {
				js: {
					jsx: {},
				},
			},
			expression: {
				delete: {
					js: {
						jsx: {},
					},
				},
				extends: {
					js: {
						jsx: {},
					},
				},
				import: {
					js: {
						jsx: {},
					},
				},
				in: {
					js: {
						jsx: {},
					},
				},
				infer: {
					js: {
						jsx: {},
					},
				},
				instanceof: {
					js: {
						jsx: {},
					},
				},
				is: {
					js: {
						jsx: {},
					},
				},
				keyof: {
					js: {
						jsx: {},
					},
				},
				of: {
					js: {
						jsx: {},
					},
				},
				typeof: {
					js: {
						jsx: {},
					},
				},
				void: {
					js: {
						jsx: {},
					},
				},
			},
			increment: {
				js: {
					jsx: {},
				},
			},
			logical: {
				js: {
					jsx: {},
				},
			},
			negation: {
				regexp: {},
			},
			new: {
				js: {
					jsx: {},
				},
			},
			optional: {
				js: {
					jsx: {},
				},
			},
			or: {
				regexp: {},
			},
			quantifier: {
				regexp: {},
			},
			relational: {
				js: {
					jsx: {},
				},
			},
			rest: {
				js: {
					jsx: {},
				},
			},
			spread: {
				js: {
					jsx: {},
				},
			},
			ternary: {
				js: {
					jsx: {},
				},
			},
			type: {
				annotation: {
					js: {
						jsx: {},
					},
				},
				asserts: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
				modifier: {
					js: {
						jsx: {},
					},
				},
			},
		},
		other: {
			'back-reference': {
				regexp: {},
			},
			debugger: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
		},
	},
	meta: {
		array: {
			literal: {
				js: {
					jsx: {},
				},
			},
		},
		'array-binding-pattern-variable': {
			js: {
				jsx: {},
			},
		},
		arrow: {
			js: {
				jsx: {},
			},
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
			js: {
				jsx: {},
			},
		},
		brace: {
			round: {
				js: {
					jsx: {},
				},
			},
			square: {
				js: {
					jsx: {},
				},
			},
		},
		class: {
			js: {
				jsx: {},
			},
		},
		decorator: {
			js: {
				jsx: {},
			},
		},
		definition: {
			function: {
				js: {
					jsx: {},
				},
			},
			method: {
				js: {
					jsx: {},
				},
			},
			property: {
				js: {
					jsx: {},
				},
			},
			variable: {
				js: {
					jsx: {},
				},
			},
		},
		delimiter: {
			decimal: {
				period: {
					js: {
						jsx: {},
					},
				},
			},
		},
		enum: {
			declaration: {
				js: {
					jsx: {},
				},
			},
		},
		example: {
			jsdoc: {},
		},
		export: {
			default: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
		},
		field: {
			declaration: {
				js: {
					jsx: {},
				},
			},
		},
		function: {
			expression: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
		},
		'function-call': {
			js: {
				jsx: {},
			},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		import: {
			js: {
				jsx: {},
			},
		},
		'import-equals': {
			external: {
				js: {
					jsx: {},
				},
			},
			internal: {
				js: {
					jsx: {},
				},
			},
		},
		indexer: {
			declaration: {
				js: {
					jsx: {},
				},
			},
			mappedtype: {
				declaration: {
					js: {
						jsx: {},
					},
				},
			},
		},
		interface: {
			js: {
				jsx: {},
			},
		},
		method: {
			declaration: {
				js: {
					jsx: {},
				},
			},
		},
		namespace: {
			declaration: {
				js: {
					jsx: {},
				},
			},
		},
		object: {
			member: {
				js: {
					jsx: {},
				},
			},
			type: {
				js: {
					jsx: {},
				},
			},
		},
		'object-binding-pattern-variable': {
			js: {
				jsx: {},
			},
		},
		'object-literal': {
			key: {
				js: {
					jsx: {},
				},
			},
		},
		objectliteral: {
			js: {
				jsx: {},
			},
		},
		parameter: {
			'object-binding-pattern': {
				js: {
					jsx: {},
				},
			},
		},
		parameters: {
			js: {
				jsx: {},
			},
		},
		paramter: {
			'array-binding-pattern': {
				js: {
					jsx: {},
				},
			},
		},
		return: {
			type: {
				arrow: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
			},
		},
		tag: {
			attributes: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
			'without-attributes': {
				js: {
					jsx: {},
				},
			},
		},
		template: {
			expression: {
				js: {
					jsx: {},
				},
			},
		},
		type: {
			annotation: {
				js: {
					jsx: {},
				},
			},
			declaration: {
				js: {
					jsx: {},
				},
			},
			function: {
				js: {
					jsx: {},
				},
				return: {
					js: {
						jsx: {},
					},
				},
			},
			infer: {
				js: {
					jsx: {},
				},
			},
			parameters: {
				js: {
					jsx: {},
				},
			},
			paren: {
				cover: {
					js: {
						jsx: {},
					},
				},
			},
			tuple: {
				js: {
					jsx: {},
				},
			},
		},
		var: {
			expr: {
				js: {
					jsx: {},
				},
			},
		},
		'var-single-variable': {
			expr: {
				js: {
					jsx: {},
				},
			},
		},
	},
	new: {
		expr: {
			js: {
				jsx: {},
			},
		},
	},
	punctuation: {
		accessor: {
			js: {
				jsx: {},
			},
			optional: {
				js: {
					jsx: {},
				},
			},
		},
		decorator: {
			internaldeclaration: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
		},
		definition: {
			'binding-pattern': {
				array: {
					js: {
						jsx: {},
					},
				},
				object: {
					js: {
						jsx: {},
					},
				},
			},
			block: {
				js: {
					jsx: {},
				},
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
				js: {
					jsx: {},
				},
			},
			entity: {
				js: {
					jsx: {},
				},
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
					js: {
						jsx: {},
					},
				},
				end: {
					js: {
						jsx: {},
					},
				},
			},
			section: {
				'case-statement': {
					js: {
						jsx: {},
					},
				},
			},
			string: {
				begin: {
					js: {
						jsx: {},
					},
					jsdoc: {},
				},
				end: {
					js: {
						jsx: {},
					},
					jsdoc: {},
				},
				template: {
					begin: {
						js: {
							jsx: {},
						},
					},
					end: {
						js: {
							jsx: {},
						},
					},
				},
			},
			tag: {
				begin: {
					js: {
						jsx: {},
					},
				},
				directive: {
					js: {
						jsx: {},
					},
				},
				end: {
					js: {
						jsx: {},
					},
				},
			},
			'template-expression': {
				begin: {
					js: {
						jsx: {},
					},
				},
				end: {
					js: {
						jsx: {},
					},
				},
			},
			typeparameters: {
				begin: {
					js: {
						jsx: {},
					},
				},
				end: {
					js: {
						jsx: {},
					},
				},
			},
		},
		destructuring: {
			js: {
				jsx: {},
			},
		},
		section: {
			embedded: {
				begin: {
					js: {
						jsx: {},
					},
				},
				end: {
					js: {
						jsx: {},
					},
				},
			},
		},
		separator: {
			comma: {
				js: {
					jsx: {},
				},
			},
			'key-value': {
				js: {
					jsx: {},
				},
			},
			label: {
				js: {
					jsx: {},
				},
			},
			namespace: {
				js: {
					jsx: {},
				},
			},
			parameter: {
				js: {
					jsx: {},
				},
			},
			pipe: {
				jsdoc: {},
			},
		},
		terminator: {
			statement: {
				js: {
					jsx: {},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					js: {
						jsx: {},
					},
				},
			},
		},
	},
	source: {
		embedded: {
			js: {
				jsx: {},
			},
		},
	},
	storage: {
		modifier: {
			async: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
		},
		type: {
			class: {
				js: {
					jsx: {},
				},
				jsdoc: {},
			},
			enum: {
				js: {
					jsx: {},
				},
			},
			function: {
				arrow: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
			},
			interface: {
				js: {
					jsx: {},
				},
			},
			internaldeclaration: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
			namespace: {
				js: {
					jsx: {},
				},
			},
			numeric: {
				bigint: {
					js: {
						jsx: {},
					},
				},
			},
			property: {
				js: {
					jsx: {},
				},
			},
			type: {
				js: {
					jsx: {},
				},
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
				js: {
					jsx: {},
				},
			},
			single: {
				js: {
					jsx: {},
				},
			},
		},
		regexp: {
			js: {
				jsx: {},
			},
		},
		template: {
			js: {
				jsx: {},
			},
		},
	},
	support: {
		class: {
			builtin: {
				js: {
					jsx: {},
				},
			},
			component: {
				js: {
					jsx: {},
				},
			},
			error: {
				js: {
					jsx: {},
				},
			},
			js: {
				jsx: {},
			},
			promise: {
				js: {
					jsx: {},
				},
			},
		},
		constant: {
			js: {
				jsx: {},
			},
			json: {
				js: {
					jsx: {},
				},
			},
			math: {
				js: {
					jsx: {},
				},
			},
			property: {
				math: {
					js: {
						jsx: {},
					},
				},
			},
		},
		function: {
			js: {
				jsx: {},
			},
			json: {
				js: {
					jsx: {},
				},
			},
			math: {
				js: {
					jsx: {},
				},
			},
		},
		type: {
			builtin: {
				js: {
					jsx: {},
				},
			},
			object: {
				module: {
					js: {
						jsx: {},
					},
				},
			},
			primitive: {
				js: {
					jsx: {},
				},
			},
		},
		variable: {
			property: {
				importmeta: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
				target: {
					js: {
						jsx: {},
					},
				},
			},
		},
	},
	'switch-block': {
		expr: {
			js: {
				jsx: {},
			},
		},
	},
	'switch-expression': {
		expr: {
			js: {
				jsx: {},
			},
		},
	},
	'switch-statement': {
		expr: {
			js: {
				jsx: {},
			},
		},
	},
	variable: {
		language: {
			arguments: {
				js: {
					jsx: {},
				},
			},
			super: {
				js: {
					jsx: {},
				},
			},
			this: {
				js: {
					jsx: {},
				},
			},
		},
		object: {
			property: {
				js: {
					jsx: {},
				},
			},
		},
		other: {
			constant: {
				js: {
					jsx: {},
				},
				object: {
					js: {
						jsx: {},
					},
					property: {
						js: {
							jsx: {},
						},
					},
				},
				property: {
					js: {
						jsx: {},
					},
				},
			},
			description: {
				jsdoc: {},
			},
			enummember: {
				js: {
					jsx: {},
				},
			},
			jsdoc: {},
			link: {
				underline: {
					jsdoc: {},
				},
			},
			object: {
				js: {
					jsx: {},
				},
				property: {
					js: {
						jsx: {},
					},
				},
			},
			property: {
				js: {
					jsx: {},
				},
			},
			readwrite: {
				alias: {
					js: {
						jsx: {},
					},
				},
				js: {
					jsx: {},
				},
			},
			regexp: {},
		},
		parameter: {
			js: {
				jsx: {},
			},
		},
	},
} as const);
