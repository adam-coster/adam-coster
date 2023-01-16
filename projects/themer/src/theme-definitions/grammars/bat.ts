export const scopeNames = Object.freeze(['source.batchfile'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			colon: {
				batchfile: {},
			},
			rem: {
				batchfile: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				batchfile: {},
			},
		},
		language: {
			batchfile: {},
		},
		numeric: {
			batchfile: {},
		},
	},
	invalid: {
		illegal: {
			newline: {
				batchfile: {},
			},
			'unexpected-character': {
				batchfile: {},
			},
		},
	},
	keyword: {
		command: {
			batchfile: {},
			rem: {
				batchfile: {},
			},
		},
		control: {
			conditional: {
				batchfile: {},
			},
			repeat: {
				batchfile: {},
				do: {
					batchfile: {},
				},
				in: {
					batchfile: {},
				},
			},
			statement: {
				batchfile: {},
			},
		},
		operator: {
			arithmetic: {
				batchfile: {},
			},
			assignment: {
				augmented: {
					batchfile: {},
				},
				batchfile: {},
			},
			at: {
				batchfile: {},
			},
			comparison: {
				batchfile: {},
			},
			conditional: {
				batchfile: {},
			},
			logical: {
				batchfile: {},
			},
			pipe: {
				batchfile: {},
			},
			redirection: {
				batchfile: {},
			},
		},
		other: {
			'special-method': {
				batchfile: {},
			},
		},
	},
	meta: {
		block: {
			repeat: {
				batchfile: {},
			},
		},
		expression: {
			set: {
				batchfile: {},
			},
		},
		group: {
			batchfile: {},
		},
		prompt: {
			set: {
				batchfile: {},
			},
		},
		variable: {
			substitution: {
				batchfile: {},
			},
			substring: {
				batchfile: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				batchfile: {},
			},
			string: {
				begin: {
					batchfile: {},
				},
				end: {
					batchfile: {},
				},
			},
			variable: {
				batchfile: {},
				begin: {
					batchfile: {},
				},
				end: {
					batchfile: {},
				},
			},
		},
		section: {
			group: {
				begin: {
					batchfile: {},
				},
				end: {
					batchfile: {},
				},
			},
		},
		separator: {
			batchfile: {},
		},
	},
	string: {
		quoted: {
			double: {
				batchfile: {},
			},
		},
		unquoted: {
			batchfile: {},
		},
	},
	variable: {
		other: {
			readwrite: {
				batchfile: {},
			},
		},
		parameter: {
			batchfile: {},
			repeat: {
				batchfile: {},
			},
		},
	},
} as const);
