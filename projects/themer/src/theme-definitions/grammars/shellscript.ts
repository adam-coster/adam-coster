export const scopeNames = Object.freeze(['source.shell'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			shell: {},
		},
		line: {
			'double-slash': {
				shell: {},
			},
			'number-sign': {
				shell: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				'ansi-c': {
					shell: {},
				},
				'control-char': {
					shell: {},
				},
				hex: {
					shell: {},
				},
				'line-continuation': {
					shell: {},
				},
				octal: {
					shell: {},
				},
				shell: {},
			},
		},
		language: {
			$0: {
				shell: {},
			},
			$1: {
				shell: {},
			},
		},
		numeric: {
			binary: {
				shell: {},
			},
			decimal: {
				point: {
					shell: {},
				},
				shell: {},
			},
			exponent: {
				decimal: {
					shell: {},
				},
				hexadecimal: {
					shell: {},
				},
			},
			hex: {
				shell: {},
			},
			hexadecimal: {
				shell: {},
			},
			integer: {
				shell: {},
			},
			octal: {
				shell: {},
			},
			other: {
				shell: {},
			},
		},
		other: {
			option: {
				dash: {
					shell: {},
				},
				shell: {},
			},
		},
	},
	entity: {
		name: {
			command: {
				shell: {},
			},
			function: {
				shell: {},
			},
		},
	},
	keyword: {
		control: {
			$0: {
				shell: {},
			},
			shell: {},
		},
		operator: {
			arithmetic: {
				shell: {},
			},
			assignment: {
				compound: {
					shell: {},
				},
				shell: {},
			},
			expansion: {
				shell: {},
			},
			extglob: {
				shell: {},
			},
			glob: {
				shell: {},
			},
			heredoc: {
				shell: {},
			},
			herestring: {
				shell: {},
			},
			logical: {
				regex: {
					shell: {},
				},
				shell: {},
			},
			minus: {
				exponent: {
					decimal: {
						shell: {},
					},
					hexadecimal: {
						shell: {},
					},
				},
			},
			pipe: {
				shell: {},
			},
			plus: {
				exponent: {
					decimal: {
						shell: {},
					},
					hexadecimal: {
						shell: {},
					},
				},
			},
			redirect: {
				shell: {},
			},
			tilde: {
				shell: {},
			},
		},
		other: {
			shell: {},
			unit: {
				binary: {
					shell: {},
				},
				exponent: {
					decimal: {
						shell: {},
					},
					hexadecimal: {
						shell: {},
					},
				},
				hexadecimal: {
					shell: {},
				},
				octal: {
					shell: {},
				},
				suffix: {
					'floating-point': {
						shell: {},
					},
					integer: {
						shell: {},
					},
				},
			},
		},
	},
	meta: {
		argument: {
			shell: {},
		},
		arithmetic: {
			shell: {},
		},
		command: {
			shell: {},
		},
		command_name: {
			shell: {},
		},
		expression: {
			assignment: {
				shell: {},
			},
		},
		function: {
			shell: {},
		},
		herestring: {
			shell: {},
		},
		scope: {
			'case-block': {
				shell: {},
			},
			'case-body': {
				shell: {},
			},
			'case-clause': {
				shell: {},
			},
			'case-clause-body': {
				shell: {},
			},
			'case-pattern': {
				shell: {},
			},
			'for-in-loop': {
				shell: {},
			},
			'for-loop': {
				shell: {},
			},
			group: {
				shell: {},
			},
			'if-block': {
				shell: {},
			},
			'logical-expression': {
				shell: {},
			},
			'select-block': {
				shell: {},
			},
			subshell: {
				shell: {},
			},
			'while-loop': {
				shell: {},
			},
		},
		shebang: {
			shell: {},
		},
		statement: {
			shell: {},
		},
		structure: {
			extglob: {
				shell: {},
			},
		},
	},
	punctuation: {
		definition: {
			arguments: {
				shell: {},
			},
			array: {
				access: {
					shell: {},
				},
			},
			'case-pattern': {
				shell: {},
			},
			comment: {
				begin: {
					shell: {},
				},
				end: {
					shell: {},
				},
				shebang: {
					shell: {},
				},
				shell: {},
			},
			evaluation: {
				arithmetic: {
					begin: {
						shell: {},
					},
					end: {
						shell: {},
					},
				},
				backticks: {
					shell: {},
				},
				parens: {
					begin: {
						shell: {},
					},
					end: {
						shell: {},
					},
				},
			},
			extglob: {
				shell: {},
			},
			function: {
				shell: {},
			},
			group: {
				shell: {},
			},
			'logical-expression': {
				shell: {},
			},
			string: {
				begin: {
					shell: {},
				},
				end: {
					shell: {},
				},
				heredoc: {
					shell: {},
				},
			},
			subshell: {
				shell: {},
			},
			variable: {
				shell: {},
			},
		},
		section: {
			arithmetic: {
				shell: {},
			},
			array: {
				shell: {},
			},
			bracket: {
				curly: {
					variable: {
						begin: {
							shell: {},
						},
						end: {
							shell: {},
						},
					},
				},
			},
		},
		separator: {
			constant: {
				numeric: {
					shell: {},
				},
			},
			'pipe-sign': {
				shell: {},
			},
			statement: {
				and: {
					shell: {},
				},
				background: {
					shell: {},
				},
				or: {
					shell: {},
				},
			},
		},
		terminator: {
			'case-clause': {
				shell: {},
			},
			statement: {
				semicolon: {
					shell: {},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					shell: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			$0: {
				shell: {},
			},
		},
		type: {
			alias: {
				shell: {},
			},
			function: {
				shell: {},
			},
		},
	},
	string: {
		interpolated: {
			backtick: {
				shell: {},
			},
			dollar: {
				shell: {},
			},
			'process-substitution': {
				shell: {},
			},
		},
		other: {
			math: {
				shell: {},
			},
		},
		quoted: {
			double: {
				shell: {},
			},
			heredoc: {
				indent: {
					shell: {},
				},
				'no-indent': {
					shell: {},
				},
			},
			single: {
				dollar: {
					shell: {},
				},
				shell: {},
			},
		},
		unquoted: {
			argument: {
				shell: {},
			},
			heredoc: {
				indent: {
					shell: {},
				},
				'no-indent': {
					shell: {},
				},
			},
			herestring: {
				shell: {},
			},
		},
	},
	support: {
		function: {
			builtin: {
				shell: {},
			},
		},
	},
	variable: {
		language: {
			special: {
				shell: {},
				wildcard: {
					shell: {},
				},
			},
		},
		other: {
			assignment: {
				shell: {},
			},
			loop: {
				shell: {},
			},
			normal: {
				shell: {},
			},
		},
		parameter: {
			positional: {
				all: {
					shell: {},
				},
				shell: {},
			},
		},
	},
} as const);
