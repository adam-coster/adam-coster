export const scopeNames = Object.freeze(['source.go'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			go: {},
		},
		line: {
			'double-slash': {
				go: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				go: {},
			},
		},
		language: {
			go: {},
		},
		numeric: {
			binary: {
				go: {},
			},
			decimal: {
				go: {},
				point: {
					go: {},
				},
			},
			exponent: {
				decimal: {
					go: {},
				},
				hexadecimal: {
					go: {},
				},
			},
			hexadecimal: {
				go: {},
			},
			octal: {
				go: {},
			},
		},
		other: {
			placeholder: {
				go: {},
			},
			rune: {
				go: {},
			},
		},
	},
	entity: {
		alias: {
			import: {
				go: {},
			},
		},
		name: {
			function: {
				go: {},
			},
			import: {
				go: {},
			},
			package: {
				go: {},
			},
			type: {
				go: {},
			},
		},
	},
	invalid: {
		illegal: {
			constant: {
				numeric: {
					go: {},
				},
			},
			identifier: {
				go: {},
			},
			numeric: {
				go: {},
			},
			'receive-channel': {
				go: {},
			},
			'send-channel': {
				go: {},
			},
			slice: {
				go: {},
			},
			'unknown-escape': {
				go: {},
			},
			'unknown-rune': {
				go: {},
			},
		},
	},
	keyword: {
		channel: {
			go: {},
		},
		const: {
			go: {},
		},
		control: {
			go: {},
		},
		function: {
			go: {},
		},
		import: {
			go: {},
		},
		interface: {
			go: {},
		},
		map: {
			go: {},
		},
		operator: {
			address: {
				go: {},
			},
			arithmetic: {
				bitwise: {
					go: {},
				},
				go: {},
			},
			assignment: {
				go: {},
			},
			channel: {
				go: {},
			},
			comparison: {
				go: {},
			},
			decrement: {
				go: {},
			},
			ellipsis: {
				go: {},
			},
			increment: {
				go: {},
			},
			logical: {
				go: {},
			},
			minus: {
				exponent: {
					decimal: {
						go: {},
					},
					hexadecimal: {
						go: {},
					},
				},
			},
			plus: {
				exponent: {
					decimal: {
						go: {},
					},
					hexadecimal: {
						go: {},
					},
				},
			},
		},
		other: {
			unit: {
				binary: {
					go: {},
				},
				exponent: {
					decimal: {
						go: {},
					},
					hexadecimal: {
						go: {},
					},
				},
				hexadecimal: {
					go: {},
				},
				imaginary: {
					go: {},
				},
				octal: {
					go: {},
				},
			},
		},
		package: {
			go: {},
		},
		struct: {
			go: {},
		},
		type: {
			go: {},
		},
		var: {
			go: {},
		},
	},
	punctuation: {
		definition: {
			begin: {
				bracket: {
					curly: {
						go: {},
					},
					round: {
						go: {},
					},
				},
			},
			bracket: {
				square: {
					go: {},
				},
			},
			comment: {
				go: {},
			},
			end: {
				bracket: {
					curly: {
						go: {},
					},
					round: {
						go: {},
					},
				},
			},
			imports: {
				begin: {
					bracket: {
						round: {
							go: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							go: {},
						},
					},
				},
			},
			string: {
				begin: {
					go: {},
				},
				end: {
					go: {},
				},
			},
			variables: {
				begin: {
					bracket: {
						round: {
							go: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							go: {},
						},
					},
				},
			},
		},
		other: {
			colon: {
				go: {},
			},
			comma: {
				go: {},
			},
			period: {
				go: {},
			},
		},
		separator: {
			constant: {
				numeric: {
					go: {},
				},
			},
		},
		terminator: {
			go: {},
		},
	},
	storage: {
		type: {
			boolean: {
				go: {},
			},
			byte: {
				go: {},
			},
			error: {
				go: {},
			},
			numeric: {
				go: {},
			},
			rune: {
				go: {},
			},
			string: {
				go: {},
			},
			uintptr: {
				go: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				go: {},
			},
			raw: {
				go: {},
			},
			rune: {
				go: {},
			},
		},
	},
	support: {
		function: {
			builtin: {
				go: {},
			},
			go: {},
		},
	},
	variable: {
		other: {
			assignment: {
				go: {},
			},
			declaration: {
				go: {},
			},
		},
	},
} as const);
