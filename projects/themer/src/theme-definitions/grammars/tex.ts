export const scopeNames = Object.freeze(['text.tex'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			percentage: {
				directive: {
					tex: {},
				},
				tex: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				tex: {},
			},
			math: {
				tex: {},
			},
		},
		numeric: {
			category: {
				tex: {},
			},
			math: {
				tex: {},
			},
		},
		other: {
			general: {
				math: {
					tex: {},
				},
			},
			math: {
				tex: {},
			},
		},
	},
	keyword: {
		control: {
			catcode: {
				tex: {},
			},
			newline: {
				tex: {},
			},
			tex: {},
		},
	},
	meta: {
		catcode: {
			tex: {},
		},
		embedded: {
			line: {
				r: {},
			},
		},
		group: {
			braces: {
				tex: {},
			},
		},
		math: {
			block: {
				tex: {},
			},
		},
		text: {
			normal: {
				tex: {},
			},
		},
	},
	punctuation: {
		definition: {
			arguments: {
				begin: {
					tex: {},
				},
				end: {
					tex: {},
				},
			},
			brackets: {
				tex: {},
			},
			comment: {
				tex: {},
			},
			constant: {
				math: {
					tex: {},
				},
			},
			function: {
				math: {
					tex: {},
				},
				tex: {},
			},
			keyword: {
				tex: {},
			},
			string: {
				begin: {
					tex: {},
				},
				end: {
					tex: {},
				},
			},
		},
		group: {
			begin: {
				tex: {},
			},
			end: {
				tex: {},
			},
		},
		math: {
			begin: {
				bracket: {
					curly: {
						tex: {},
					},
					round: {
						tex: {},
					},
				},
			},
			bracket: {
				pair: {
					big: {
						tex: {},
					},
					tex: {},
				},
			},
			end: {
				bracket: {
					curly: {
						tex: {},
					},
					round: {
						tex: {},
					},
				},
			},
			operator: {
				tex: {},
			},
		},
		section: {
			embedded: {
				begin: {
					math: {
						tex: {},
					},
				},
				end: {
					math: {
						tex: {},
					},
				},
			},
		},
		separator: {
			'key-value': {
				tex: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					tex: {},
				},
			},
		},
	},
	source: {
		r: {},
	},
	support: {
		class: {
			math: {
				block: {
					tex: {},
				},
			},
		},
		function: {
			general: {
				tex: {},
			},
			sexpr: {
				math: {
					tex: {},
				},
			},
		},
	},
} as const);
