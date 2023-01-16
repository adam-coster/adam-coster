export const scopeNames = Object.freeze(['source.clojure'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			semicolon: {
				clojure: {},
			},
			shebang: {
				clojure: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				clojure: {},
			},
		},
		keyword: {
			clojure: {},
		},
		language: {
			boolean: {
				clojure: {},
			},
			nil: {
				clojure: {},
			},
		},
		numeric: {
			'arbitrary-radix': {
				clojure: {},
			},
			double: {
				clojure: {},
			},
			hexadecimal: {
				clojure: {},
			},
			long: {
				clojure: {},
			},
			octal: {
				clojure: {},
			},
			ratio: {
				clojure: {},
			},
			symbol: {
				clojure: {},
			},
		},
	},
	entity: {
		global: {
			clojure: {},
		},
		name: {
			function: {
				clojure: {},
			},
		},
	},
	keyword: {
		control: {
			clojure: {},
		},
	},
	meta: {
		definition: {
			global: {
				clojure: {},
			},
		},
		expression: {
			clojure: {},
		},
		map: {
			clojure: {},
		},
		metadata: {
			map: {
				clojure: {},
			},
			simple: {
				clojure: {},
			},
		},
		'quoted-expression': {
			clojure: {},
		},
		set: {
			clojure: {},
		},
		symbol: {
			clojure: {},
			dynamic: {
				clojure: {},
			},
			namespace: {
				clojure: {},
			},
		},
		var: {
			clojure: {},
		},
		vector: {
			clojure: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				clojure: {},
				shebang: {
					clojure: {},
				},
			},
			regexp: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
				},
			},
			string: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
				},
			},
		},
		section: {
			expression: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
					trailing: {
						clojure: {},
					},
				},
			},
			map: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
					trailing: {
						clojure: {},
					},
				},
			},
			metadata: {
				map: {
					begin: {
						clojure: {},
					},
					end: {
						clojure: {},
						trailing: {
							clojure: {},
						},
					},
				},
			},
			set: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
					trailing: {
						clojure: {},
					},
				},
			},
			vector: {
				begin: {
					clojure: {},
				},
				end: {
					clojure: {},
					trailing: {
						clojure: {},
					},
				},
			},
		},
	},
	storage: {
		control: {
			clojure: {},
		},
	},
	string: {
		quoted: {
			double: {
				clojure: {},
			},
		},
		regexp: {
			clojure: {},
		},
	},
} as const);
