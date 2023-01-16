export const scopeNames = Object.freeze(['text.html.markdown.math'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			math: {
				tex: {},
			},
		},
	},
	constant: {
		character: {
			math: {
				tex: {},
			},
		},
		numeric: {
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
		},
	},
	entity: {
		name: {
			function: {
				math: {
					tex: {},
				},
			},
		},
	},
	line: {
		separator: {
			math: {
				tex: {},
			},
		},
	},
	meta: {
		function: {
			math: {
				tex: {},
			},
		},
	},
	punctuation: {
		definition: {
			arguments: {
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
			comment: {
				math: {
					tex: {},
				},
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
			},
		},
		line: {
			separator: {
				math: {
					tex: {},
				},
			},
		},
		math: {
			begin: {
				bracket: {
					curly: {},
					round: {},
				},
			},
			end: {
				bracket: {
					curly: {},
					round: {},
				},
			},
			operator: {
				latex: {},
			},
		},
	},
	storage: {
		type: {
			function: {
				math: {
					tex: {},
				},
			},
		},
	},
} as const);
