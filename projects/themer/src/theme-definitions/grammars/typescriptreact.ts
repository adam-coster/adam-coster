export const scopeNames = Object.freeze(['source.tsx'] as const);
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
			tsx: {},
		},
	},
	comment: {
		block: {
			documentation: {
				tsx: {},
			},
			ts: {},
			tsx: {},
		},
		line: {
			'double-slash': {
				tsx: {},
			},
			shebang: {
				tsx: {},
			},
			'triple-slash': {
				directive: {
					tsx: {},
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
				tsx: {},
			},
			escape: {
				backslash: {
					regexp: {},
				},
				tsx: {},
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
					tsx: {},
				},
				true: {
					tsx: {},
				},
			},
			'import-export-all': {
				tsx: {},
			},
			infinity: {
				tsx: {},
			},
			nan: {
				tsx: {},
			},
			null: {
				tsx: {},
			},
			'symbol-type': {
				jsdoc: {},
			},
			undefined: {
				tsx: {},
			},
		},
		numeric: {
			binary: {
				tsx: {},
			},
			decimal: {
				tsx: {},
			},
			hex: {
				tsx: {},
			},
			octal: {
				tsx: {},
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
					tsx: {},
				},
				tsx: {},
			},
			label: {
				tsx: {},
			},
			tag: {
				directive: {
					tsx: {},
				},
				inline: {
					jsdoc: {},
				},
				namespace: {
					tsx: {},
				},
				tsx: {},
			},
			type: {
				alias: {
					tsx: {},
				},
				class: {
					tsx: {},
				},
				enum: {
					tsx: {},
				},
				instance: {
					jsdoc: {},
				},
				interface: {
					tsx: {},
				},
				module: {
					tsx: {},
				},
				tsx: {},
			},
		},
		other: {
			'attribute-name': {
				directive: {
					tsx: {},
				},
				namespace: {
					tsx: {},
				},
				tsx: {},
			},
			'inherited-class': {
				tsx: {},
			},
		},
	},
	invalid: {
		illegal: {
			attribute: {
				tsx: {},
			},
			newline: {
				tsx: {},
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
				tsx: {},
			},
			assert: {
				tsx: {},
			},
			conditional: {
				tsx: {},
			},
			default: {
				tsx: {},
			},
			export: {
				tsx: {},
			},
			flow: {
				tsx: {},
			},
			from: {
				tsx: {},
			},
			import: {
				tsx: {},
			},
			intrinsic: {
				tsx: {},
			},
			loop: {
				tsx: {},
			},
			new: {
				tsx: {},
			},
			require: {
				tsx: {},
			},
			satisfies: {
				tsx: {},
			},
			switch: {
				tsx: {},
			},
			trycatch: {
				tsx: {},
			},
			tsx: {},
			type: {
				tsx: {},
			},
			with: {
				tsx: {},
			},
		},
		generator: {
			asterisk: {
				tsx: {},
			},
		},
		operator: {
			arithmetic: {
				tsx: {},
			},
			assignment: {
				compound: {
					bitwise: {
						tsx: {},
					},
					tsx: {},
				},
				jsdoc: {},
				tsx: {},
			},
			bitwise: {
				shift: {
					tsx: {},
				},
				tsx: {},
			},
			comparison: {
				tsx: {},
			},
			control: {
				jsdoc: {},
			},
			decrement: {
				tsx: {},
			},
			definiteassignment: {
				tsx: {},
			},
			expression: {
				delete: {
					tsx: {},
				},
				extends: {
					tsx: {},
				},
				import: {
					tsx: {},
				},
				in: {
					tsx: {},
				},
				infer: {
					tsx: {},
				},
				instanceof: {
					tsx: {},
				},
				is: {
					tsx: {},
				},
				keyof: {
					tsx: {},
				},
				of: {
					tsx: {},
				},
				typeof: {
					tsx: {},
				},
				void: {
					tsx: {},
				},
			},
			increment: {
				tsx: {},
			},
			logical: {
				tsx: {},
			},
			negation: {
				regexp: {},
			},
			new: {
				tsx: {},
			},
			optional: {
				tsx: {},
			},
			or: {
				regexp: {},
			},
			quantifier: {
				regexp: {},
			},
			relational: {
				tsx: {},
			},
			rest: {
				tsx: {},
			},
			spread: {
				tsx: {},
			},
			ternary: {
				tsx: {},
			},
			type: {
				annotation: {
					tsx: {},
				},
				asserts: {
					tsx: {},
				},
				modifier: {
					tsx: {},
				},
				tsx: {},
			},
		},
		other: {
			'back-reference': {
				regexp: {},
			},
			debugger: {
				tsx: {},
			},
			tsx: {},
		},
	},
	meta: {
		array: {
			literal: {
				tsx: {},
			},
		},
		'array-binding-pattern-variable': {
			tsx: {},
		},
		arrow: {
			tsx: {},
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
			tsx: {},
		},
		brace: {
			round: {
				tsx: {},
			},
			square: {
				tsx: {},
			},
		},
		class: {
			tsx: {},
		},
		decorator: {
			tsx: {},
		},
		definition: {
			function: {
				tsx: {},
			},
			method: {
				tsx: {},
			},
			property: {
				tsx: {},
			},
			variable: {
				tsx: {},
			},
		},
		delimiter: {
			decimal: {
				period: {
					tsx: {},
				},
			},
		},
		enum: {
			declaration: {
				tsx: {},
			},
		},
		example: {
			jsdoc: {},
		},
		export: {
			default: {
				tsx: {},
			},
			tsx: {},
		},
		field: {
			declaration: {
				tsx: {},
			},
		},
		function: {
			expression: {
				tsx: {},
			},
			tsx: {},
		},
		'function-call': {
			tsx: {},
		},
		group: {
			assertion: {
				regexp: {},
			},
			regexp: {},
		},
		import: {
			tsx: {},
		},
		'import-equals': {
			external: {
				tsx: {},
			},
			internal: {
				tsx: {},
			},
		},
		indexer: {
			declaration: {
				tsx: {},
			},
			mappedtype: {
				declaration: {
					tsx: {},
				},
			},
		},
		interface: {
			tsx: {},
		},
		method: {
			declaration: {
				tsx: {},
			},
		},
		namespace: {
			declaration: {
				tsx: {},
			},
		},
		object: {
			member: {
				tsx: {},
			},
			type: {
				tsx: {},
			},
		},
		'object-binding-pattern-variable': {
			tsx: {},
		},
		'object-literal': {
			key: {
				tsx: {},
			},
		},
		objectliteral: {
			tsx: {},
		},
		parameter: {
			'object-binding-pattern': {
				tsx: {},
			},
		},
		parameters: {
			tsx: {},
		},
		paramter: {
			'array-binding-pattern': {
				tsx: {},
			},
		},
		return: {
			type: {
				arrow: {
					tsx: {},
				},
				tsx: {},
			},
		},
		tag: {
			attributes: {
				tsx: {},
			},
			tsx: {},
			'without-attributes': {
				tsx: {},
			},
		},
		template: {
			expression: {
				tsx: {},
			},
		},
		type: {
			annotation: {
				tsx: {},
			},
			declaration: {
				tsx: {},
			},
			function: {
				return: {
					tsx: {},
				},
				tsx: {},
			},
			infer: {
				tsx: {},
			},
			parameters: {
				tsx: {},
			},
			paren: {
				cover: {
					tsx: {},
				},
			},
			tuple: {
				tsx: {},
			},
		},
		var: {
			expr: {
				tsx: {},
			},
		},
		'var-single-variable': {
			expr: {
				tsx: {},
			},
		},
	},
	new: {
		expr: {
			tsx: {},
		},
	},
	punctuation: {
		accessor: {
			optional: {
				tsx: {},
			},
			tsx: {},
		},
		decorator: {
			internaldeclaration: {
				tsx: {},
			},
			tsx: {},
		},
		definition: {
			'binding-pattern': {
				array: {
					tsx: {},
				},
				object: {
					tsx: {},
				},
			},
			block: {
				tag: {
					jsdoc: {},
				},
				tsx: {},
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
				tsx: {},
			},
			entity: {
				tsx: {},
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
					tsx: {},
				},
				end: {
					tsx: {},
				},
			},
			section: {
				'case-statement': {
					tsx: {},
				},
			},
			string: {
				begin: {
					jsdoc: {},
					tsx: {},
				},
				end: {
					jsdoc: {},
					tsx: {},
				},
				template: {
					begin: {
						js: {},
						tsx: {},
					},
					end: {
						js: {},
						tsx: {},
					},
				},
			},
			tag: {
				begin: {
					tsx: {},
				},
				directive: {
					tsx: {},
				},
				end: {
					tsx: {},
				},
			},
			'template-expression': {
				begin: {
					tsx: {},
				},
				end: {
					tsx: {},
				},
			},
			typeparameters: {
				begin: {
					tsx: {},
				},
				end: {
					tsx: {},
				},
			},
		},
		destructuring: {
			tsx: {},
		},
		section: {
			embedded: {
				begin: {
					tsx: {},
				},
				end: {
					tsx: {},
				},
			},
		},
		separator: {
			comma: {
				tsx: {},
			},
			'key-value': {
				tsx: {},
			},
			label: {
				tsx: {},
			},
			namespace: {
				tsx: {},
			},
			parameter: {
				tsx: {},
			},
			pipe: {
				jsdoc: {},
			},
		},
		terminator: {
			statement: {
				tsx: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					tsx: {},
				},
			},
		},
	},
	source: {
		embedded: {
			tsx: {},
		},
	},
	storage: {
		modifier: {
			async: {
				tsx: {},
			},
			tsx: {},
		},
		type: {
			class: {
				jsdoc: {},
				tsx: {},
			},
			enum: {
				tsx: {},
			},
			function: {
				arrow: {
					tsx: {},
				},
				tsx: {},
			},
			interface: {
				tsx: {},
			},
			internaldeclaration: {
				tsx: {},
			},
			namespace: {
				tsx: {},
			},
			numeric: {
				bigint: {
					tsx: {},
				},
			},
			property: {
				tsx: {},
			},
			tsx: {},
			type: {
				tsx: {},
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
				tsx: {},
			},
			single: {
				tsx: {},
			},
		},
		regexp: {
			tsx: {},
		},
		template: {
			tsx: {},
		},
	},
	support: {
		class: {
			builtin: {
				tsx: {},
			},
			component: {
				tsx: {},
			},
			error: {
				tsx: {},
			},
			promise: {
				tsx: {},
			},
			tsx: {},
		},
		constant: {
			json: {
				tsx: {},
			},
			math: {
				tsx: {},
			},
			property: {
				math: {
					tsx: {},
				},
			},
			tsx: {},
		},
		function: {
			json: {
				tsx: {},
			},
			math: {
				tsx: {},
			},
			tsx: {},
		},
		type: {
			builtin: {
				tsx: {},
			},
			object: {
				module: {
					tsx: {},
				},
			},
			primitive: {
				tsx: {},
			},
		},
		variable: {
			property: {
				importmeta: {
					tsx: {},
				},
				target: {
					tsx: {},
				},
				tsx: {},
			},
		},
	},
	'switch-block': {
		expr: {
			tsx: {},
		},
	},
	'switch-expression': {
		expr: {
			tsx: {},
		},
	},
	'switch-statement': {
		expr: {
			tsx: {},
		},
	},
	variable: {
		language: {
			arguments: {
				tsx: {},
			},
			super: {
				tsx: {},
			},
			this: {
				tsx: {},
			},
		},
		object: {
			property: {
				tsx: {},
			},
		},
		other: {
			constant: {
				object: {
					property: {
						tsx: {},
					},
					tsx: {},
				},
				property: {
					tsx: {},
				},
				tsx: {},
			},
			description: {
				jsdoc: {},
			},
			enummember: {
				tsx: {},
			},
			jsdoc: {},
			link: {
				underline: {
					jsdoc: {},
				},
			},
			object: {
				property: {
					tsx: {},
				},
				tsx: {},
			},
			property: {
				tsx: {},
			},
			readwrite: {
				alias: {
					tsx: {},
				},
				tsx: {},
			},
			regexp: {},
		},
		parameter: {
			tsx: {},
		},
	},
} as const);
