export const scopeNames = Object.freeze(['source.r'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				r: {},
			},
			pragma: {
				r: {},
			},
			'pragma-mark': {
				r: {},
			},
			roxygen: {
				r: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				r: {},
			},
		},
		language: {
			r: {},
		},
		numeric: {
			float: {
				decimal: {
					r: {},
				},
				hexadecimal: {
					r: {},
				},
			},
			imaginary: {
				decimal: {
					r: {},
				},
				hexadecimal: {
					r: {},
				},
			},
			integer: {
				decimal: {
					r: {},
				},
				hexadecimal: {
					r: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				r: {},
			},
			pragma: {
				name: {
					r: {},
				},
			},
		},
		namespace: {
			r: {},
		},
	},
	invalid: {
		illegal: {
			variable: {
				other: {
					r: {},
				},
			},
		},
	},
	keyword: {
		control: {
			r: {},
		},
		operator: {
			arithmetic: {
				r: {},
			},
			assignment: {
				r: {},
			},
			comparison: {
				r: {},
			},
			logical: {
				r: {},
			},
			other: {
				r: {},
			},
			pipe: {
				r: {},
			},
		},
		other: {
			r: {},
		},
	},
	meta: {
		function: {
			r: {},
		},
		'function-call': {
			r: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				r: {},
			},
			string: {
				begin: {
					r: {},
				},
				end: {
					r: {},
				},
				raw: {
					begin: {
						r: {},
					},
					end: {
						r: {},
					},
				},
			},
		},
		section: {
			braces: {
				begin: {
					r: {},
				},
				end: {
					r: {},
				},
			},
			brackets: {
				double: {
					begin: {
						r: {},
					},
					end: {
						r: {},
					},
				},
				single: {
					begin: {
						r: {},
					},
					end: {
						r: {},
					},
				},
			},
			parens: {
				begin: {
					r: {},
				},
				end: {
					r: {},
				},
			},
		},
		separator: {
			parameters: {
				r: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					r: {},
				},
			},
		},
	},
	storage: {
		type: {
			r: {},
		},
	},
	string: {
		quoted: {
			double: {
				r: {},
				raw: {
					r: {},
				},
			},
			single: {
				r: {},
				raw: {
					r: {},
				},
			},
		},
	},
	support: {
		constant: {
			misc: {
				r: {},
			},
		},
		function: {
			r: {},
		},
	},
	variable: {
		function: {
			r: {},
		},
		other: {
			r: {},
		},
		parameter: {
			r: {},
		},
	},
} as const);
