export const scopeNames = Object.freeze(['source.powershell'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			powershell: {},
		},
		documentation: {
			embedded: {
				powershell: {},
			},
		},
		line: {
			powershell: {},
		},
	},
	constant: {
		character: {
			escape: {
				powershell: {},
			},
		},
		language: {
			powershell: {},
		},
		numeric: {
			hex: {
				powershell: {},
			},
			integer: {
				powershell: {},
			},
			octal: {
				powershell: {},
			},
		},
		string: {
			documentation: {
				powershell: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				powershell: {},
			},
		},
	},
	invalid: {
		character: {
			escape: {
				powershell: {},
			},
		},
	},
	keyword: {
		control: {
			powershell: {},
			requires: {
				powershell: {},
			},
			using: {
				powershell: {},
			},
		},
		operator: {
			assignment: {
				powershell: {},
			},
			bitwise: {
				powershell: {},
			},
			comparison: {
				powershell: {},
			},
			documentation: {
				powershell: {},
			},
			logical: {
				powershell: {},
			},
			other: {
				powershell: {},
			},
			range: {
				powershell: {},
			},
			redirection: {
				powershell: {},
			},
			'string-format': {
				powershell: {},
			},
			unary: {
				powershell: {},
			},
		},
		other: {
			array: {
				begin: {
					powershell: {},
				},
			},
			hashtable: {
				begin: {
					powershell: {},
				},
			},
			powershell: {},
			substatement: {
				powershell: {},
			},
		},
	},
	meta: {
		attribute: {
			powershell: {},
		},
		embedded: {
			substatement: {
				powershell: {},
			},
		},
		function: {
			powershell: {},
		},
		group: {
			'array-expression': {
				powershell: {},
			},
			complex: {
				subexpression: {
					powershell: {},
				},
			},
			simple: {
				subexpression: {
					powershell: {},
				},
			},
		},
		hashtable: {
			assignment: {
				powershell: {},
			},
			powershell: {},
		},
		requires: {
			powershell: {},
		},
		scriptblock: {
			powershell: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				block: {
					begin: {
						powershell: {},
					},
					end: {
						powershell: {},
					},
				},
				powershell: {},
			},
			string: {
				begin: {
					powershell: {},
				},
				end: {
					powershell: {},
				},
			},
			subexpression: {
				powershell: {},
			},
			substatement: {
				powershell: {},
			},
			variable: {
				powershell: {},
			},
		},
		section: {
			braces: {
				begin: {
					powershell: {},
				},
				end: {
					powershell: {},
				},
			},
			bracket: {
				begin: {
					powershell: {},
				},
				end: {
					powershell: {},
				},
			},
			embedded: {
				substatement: {
					begin: {
						powershell: {},
					},
					end: {
						powershell: {},
					},
				},
			},
			group: {
				begin: {
					powershell: {},
				},
				end: {
					powershell: {},
				},
			},
		},
		terminator: {
			statement: {
				powershell: {},
			},
		},
	},
	storage: {
		modifier: {
			powershell: {},
			scope: {
				powershell: {},
			},
		},
		type: {
			powershell: {},
		},
	},
	string: {
		quoted: {
			double: {
				heredoc: {
					powershell: {},
				},
				powershell: {},
			},
			single: {
				heredoc: {
					powershell: {},
				},
				powershell: {},
			},
		},
		unquoted: {
			powershell: {},
		},
	},
	support: {
		constant: {
			variable: {
				powershell: {},
			},
		},
		function: {
			attribute: {
				powershell: {},
			},
			powershell: {},
		},
		variable: {
			automatic: {
				powershell: {},
			},
			drive: {
				powershell: {},
			},
		},
	},
	variable: {
		language: {
			powershell: {},
		},
		other: {
			member: {
				powershell: {},
			},
			readwrite: {
				powershell: {},
			},
		},
		parameter: {
			attribute: {
				powershell: {},
			},
			powershell: {},
		},
	},
} as const);
