export const scopeNames = Object.freeze(['source.julia'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	bracket: {
		end: {
			julia: {},
		},
	},
	comment: {
		block: {
			'number-sign-equals': {
				julia: {},
			},
		},
		line: {
			'number-sign': {
				julia: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				julia: {},
			},
		},
		global: {
			julia: {},
		},
		language: {
			julia: {},
		},
		numeric: {
			julia: {},
		},
		other: {
			symbol: {
				julia: {},
			},
		},
	},
	embed: {
		R: {
			julia: {},
		},
		cxx: {
			julia: {},
		},
		js: {
			julia: {},
		},
		python: {
			julia: {},
		},
		sql: {
			julia: {},
		},
	},
	entity: {
		name: {
			function: {
				julia: {},
			},
			type: {
				julia: {},
			},
		},
		other: {
			'inherited-class': {
				julia: {},
			},
		},
	},
	keyword: {
		control: {
			as: {
				julia: {},
			},
			end: {
				julia: {},
			},
			export: {
				julia: {},
			},
			import: {
				julia: {},
			},
			julia: {},
			using: {
				julia: {},
			},
		},
		operator: {
			applies: {
				julia: {},
			},
			arithmetic: {
				julia: {},
			},
			arrow: {
				julia: {},
			},
			bitwise: {
				julia: {},
			},
			boolean: {
				julia: {},
			},
			compose: {
				julia: {},
			},
			'conjugate-number': {
				julia: {},
			},
			dots: {
				julia: {},
			},
			interpolation: {
				julia: {},
			},
			isa: {
				julia: {},
			},
			range: {
				julia: {},
			},
			relation: {
				in: {
					julia: {},
				},
				julia: {},
				types: {
					julia: {},
				},
			},
			shift: {
				julia: {},
			},
			ternary: {
				julia: {},
			},
			transpose: {
				julia: {},
			},
			'transposed-func': {
				julia: {},
			},
			'transposed-matrix': {
				julia: {},
			},
			'transposed-parens': {
				julia: {},
			},
			'transposed-variable': {
				julia: {},
			},
			update: {
				julia: {},
			},
		},
		other: {
			julia: {},
			'option-toggle': {
				regexp: {
					julia: {},
				},
			},
		},
		storage: {
			modifier: {
				julia: {},
			},
		},
	},
	meta: {
		array: {
			julia: {},
		},
		bracket: {
			julia: {},
		},
		type: {
			julia: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				begin: {
					julia: {},
				},
				end: {
					julia: {},
				},
				julia: {},
			},
			string: {
				begin: {
					julia: {},
				},
				end: {
					julia: {},
				},
				multiline: {
					begin: {
						julia: {},
					},
					end: {
						julia: {},
					},
				},
				regexp: {
					begin: {
						julia: {},
					},
					end: {
						julia: {},
					},
				},
			},
		},
		separator: {
			inheritance: {
				julia: {},
			},
		},
	},
	string: {
		docstring: {
			julia: {},
		},
		interpolated: {
			backtick: {
				julia: {},
			},
		},
		quoted: {
			double: {
				julia: {},
			},
			other: {
				julia: {},
			},
			single: {
				julia: {},
			},
			triple: {
				double: {
					julia: {},
				},
			},
		},
		regexp: {
			julia: {},
		},
	},
	support: {
		function: {
			julia: {},
			macro: {
				julia: {},
			},
		},
		type: {
			julia: {},
		},
	},
	variable: {
		interpolation: {
			julia: {},
		},
	},
} as const);
