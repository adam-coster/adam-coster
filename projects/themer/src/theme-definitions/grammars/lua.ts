export const scopeNames = Object.freeze(['source.lua'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			lua: {},
		},
		line: {
			'double-dash': {
				doc: {
					lua: {},
				},
				lua: {},
			},
			shebang: {
				lua: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				byte: {
					lua: {},
				},
				lua: {},
				unicode: {
					lua: {},
				},
			},
		},
		language: {
			lua: {},
		},
		numeric: {
			float: {
				hexadecimal: {
					lua: {},
				},
				lua: {},
			},
			integer: {
				hexadecimal: {
					lua: {},
				},
				lua: {},
			},
		},
	},
	entity: {
		name: {
			class: {
				lua: {},
			},
			function: {
				lua: {},
			},
			tag: {
				lua: {},
			},
			variable: {
				lua: {},
			},
		},
		other: {
			attribute: {
				lua: {},
			},
		},
	},
	invalid: {
		illegal: {
			character: {
				escape: {
					lua: {},
				},
			},
		},
	},
	keyword: {
		control: {
			goto: {
				lua: {},
			},
			lua: {},
		},
		local: {
			lua: {},
		},
		operator: {
			lua: {},
			unit: {},
		},
		other: {
			unit: {},
		},
	},
	meta: {
		function: {
			lua: {},
		},
		parameter: {
			lua: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				begin: {
					lua: {},
				},
				end: {
					lua: {},
				},
				lua: {},
			},
			parameters: {
				begin: {
					lua: {},
				},
				finish: {
					lua: {},
				},
			},
			string: {
				begin: {
					lua: {},
				},
				end: {
					lua: {},
				},
			},
		},
		section: {
			embedded: {
				begin: {
					lua: {},
				},
				end: {
					lua: {},
				},
			},
		},
		separator: {
			arguments: {
				lua: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					lua: {},
				},
				trailing: {
					lua: {},
				},
			},
		},
	},
	storage: {
		type: {
			annotation: {
				lua: {},
			},
			generic: {
				lua: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				lua: {},
			},
			other: {
				multiline: {
					lua: {},
				},
			},
			single: {
				lua: {},
			},
		},
		tag: {
			lua: {},
		},
	},
	support: {
		class: {
			lua: {},
		},
		function: {
			'any-method': {
				lua: {},
			},
			library: {
				lua: {},
			},
			lua: {},
		},
		type: {
			lua: {},
		},
	},
	variable: {
		language: {
			self: {
				lua: {},
			},
		},
		lua: {},
		other: {
			lua: {},
		},
		parameter: {
			function: {
				lua: {},
			},
		},
	},
} as const);
