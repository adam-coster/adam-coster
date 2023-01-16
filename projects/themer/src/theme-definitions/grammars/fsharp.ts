export const scopeNames = Object.freeze(['source.fsharp'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	abstract: {
		definition: {
			fsharp: {},
		},
	},
	binding: {
		fsharp: {},
	},
	cexpr: {
		fsharp: {},
	},
	char: {
		fsharp: {},
	},
	comment: {
		block: {
			fsharp: {},
			markdown: {
				fsharp: {
					end: {},
				},
			},
		},
		line: {
			'double-slash': {
				fsharp: {},
			},
			markdown: {
				fsharp: {},
			},
		},
		literate: {
			command: {
				fsharp: {},
			},
		},
	},
	constant: {
		character: {
			string: {
				escape: {
					fsharp: {},
				},
			},
		},
		language: {
			boolean: {
				fsharp: {},
			},
			unit: {
				fsharp: {},
			},
		},
		numeric: {
			float: {
				fsharp: {},
			},
			integer: {
				nativeint: {
					fsharp: {},
				},
			},
		},
		other: {
			fsharp: {},
		},
	},
	du_declaration: {
		fsharp: {},
	},
	entity: {
		name: {
			section: {
				fsharp: {},
			},
			type: {
				format: {
					specifier: {
						fsharp: {},
					},
				},
				fsharp: {},
				namespace: {
					fsharp: {},
				},
			},
		},
	},
	'fast-capture': {
		comment: {
			line: {
				'double-slash': {
					fsharp: {},
				},
			},
		},
	},
	function: {
		anonymous: {},
	},
	invalid: {
		illegal: {
			character: {
				string: {
					fsharp: {},
				},
			},
		},
	},
	keyword: {
		control: {
			directive: {
				fsharp: {},
			},
		},
		format: {
			specifier: {
				fsharp: {},
			},
		},
		fsharp: {},
		symbol: {
			arrow: {
				fsharp: {},
			},
			fsharp: {},
			new: {},
		},
	},
	namespace: {
		alias: {
			fsharp: {},
		},
		open: {
			fsharp: {},
		},
	},
	punctuation: {
		definition: {
			string: {
				begin: {
					fsharp: {},
				},
				end: {
					fsharp: {},
				},
			},
		},
		separator: {
			'namespace-definition': {
				fsharp: {},
			},
			'namespace-reference': {
				fsharp: {},
			},
			string: {
				'ignore-eol': {
					fsharp: {},
				},
			},
		},
	},
	record: {
		fsharp: {},
	},
	storage: {
		modifier: {
			fsharp: {},
		},
	},
	string: {
		quoted: {
			double: {
				fsharp: {},
			},
			literal: {
				fsharp: {},
			},
			single: {
				fsharp: {},
			},
			triple: {
				fsharp: {},
			},
		},
	},
	support: {
		function: {
			attribute: {
				fsharp: {},
			},
		},
	},
	text: {
		fsharp: {},
	},
	variable: {
		fsharp: {},
		other: {
			binding: {
				fsharp: {},
			},
		},
		parameter: {
			fsharp: {},
		},
	},
} as const);
