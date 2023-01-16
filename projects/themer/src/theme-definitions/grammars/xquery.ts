export const scopeNames = Object.freeze(['source.xquery'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			xml: {},
			xquery: {},
		},
		'processing-instruction': {
			xml: {},
		},
	},
	constant: {
		character: {
			entity: {
				xml: {},
			},
			'parameter-entity': {
				xml: {},
			},
		},
		numeric: {
			float: {
				xquery: {},
			},
			integer: {
				decimal: {
					xquery: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				variable: {
					xquery: {},
				},
				xquery: {},
			},
			tag: {
				localname: {
					xml: {},
				},
				namespace: {
					xml: {},
				},
				xml: {},
			},
		},
		other: {
			'attribute-name': {
				localname: {
					xml: {},
				},
				namespace: {
					xml: {},
				},
				xml: {},
			},
		},
	},
	invalid: {
		illegal: {
			'bad-ampersand': {
				xml: {},
			},
			function: {
				cts: {},
				xdmp: {},
			},
		},
	},
	keyword: {
		control: {
			flow: {
				xquery: {},
			},
			import: {
				xquery: {},
			},
		},
		doctype: {
			xml: {},
		},
		entity: {
			xml: {},
		},
		entitytype: {
			xml: {},
		},
		operator: {
			arithmetic: {
				xquery: {},
			},
			assignment: {
				xquery: {},
			},
			logical: {
				xquery: {},
			},
		},
		other: {
			prolog: {
				xquery: {},
			},
			xquery: {},
		},
	},
	meta: {
		'code-block': {
			xquery: {},
		},
		function: {
			xquery: {},
		},
		internalsubset: {
			xml: {},
		},
		scope: {
			'between-tag-pair': {
				xml: {},
			},
		},
		tag: {
			'no-content': {
				xml: {},
			},
			preprocessor: {
				xml: {},
			},
			sgml: {
				doctype: {
					xml: {},
				},
			},
			xml: {},
		},
		variable: {
			xquery: {},
		},
	},
	punctuation: {
		definition: {
			begin: {
				xquery: {},
			},
			comment: {
				xml: {},
				xquery: {},
			},
			constant: {
				xml: {},
			},
			end: {
				xquery: {},
			},
			entity: {
				xml: {},
			},
			parameters: {
				begin: {
					xquery: {},
				},
			},
			'processing-instruction': {
				xml: {},
			},
			string: {
				begin: {
					xml: {},
					xquery: {},
				},
				end: {
					xml: {},
					xquery: {},
				},
			},
			tag: {
				begin: {
					xml: {},
				},
				end: {
					xml: {},
				},
			},
			variable: {
				xquery: {},
			},
		},
		separator: {
			namespace: {
				xml: {},
			},
		},
	},
	storage: {
		type: {
			function: {
				xquery: {},
			},
			variable: {
				xquery: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				xml: {},
				xquery: {},
			},
			single: {
				xml: {},
				xquery: {},
			},
		},
		unquoted: {
			cdata: {
				xml: {},
			},
		},
	},
	support: {
		constant: {
			xquery: {},
		},
		function: {
			builtin: {
				xquery: {},
			},
			cts: {
				xquery: {},
			},
			marklogic: {
				xquery: {},
			},
			xquery: {},
		},
		type: {
			xquery: {},
		},
	},
	variable: {
		documentroot: {
			xml: {},
		},
		entity: {
			xml: {},
		},
		other: {
			xquery: {},
		},
		parameter: {
			xquery: {},
		},
	},
} as const);
