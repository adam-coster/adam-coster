export const scopeNames = Object.freeze(['source.asp.vb.net'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			apostrophe: {
				asp: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				apostrophe: {
					asp: {},
				},
			},
		},
		language: {
			asp: {},
		},
		numeric: {
			asp: {},
		},
	},
	entity: {
		name: {
			function: {
				asp: {},
			},
		},
	},
	keyword: {
		control: {
			asp: {},
		},
		operator: {
			asp: {},
			js: {},
		},
	},
	meta: {
		'ending-space': {},
		'even-tab': {
			spaces: {},
			tabs: {},
		},
		function: {
			asp: {},
		},
		'leading-space': {},
		'odd-tab': {
			spaces: {},
			tabs: {},
		},
		'round-brackets': {},
		separator: {
			comma: {
				asp: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				asp: {},
			},
			parameters: {
				asp: {},
			},
			string: {
				begin: {
					asp: {},
				},
				end: {
					asp: {},
				},
			},
			variable: {
				asp: {},
			},
		},
		section: {
			'round-brackets': {
				begin: {
					asp: {},
				},
				end: {
					asp: {},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					asp: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			asp: {},
		},
		type: {
			asp: {},
			function: {
				asp: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				asp: {},
			},
		},
	},
	support: {
		class: {
			asp: {},
			collection: {
				asp: {},
			},
		},
		constant: {
			asp: {},
		},
		function: {
			asp: {},
			event: {
				asp: {},
			},
			vb: {
				asp: {},
			},
		},
		type: {
			vb: {
				asp: {},
			},
		},
	},
	variable: {
		other: {
			asp: {},
			bfeac: {
				asp: {},
			},
			dim: {
				asp: {},
			},
		},
		parameter: {
			function: {
				asp: {},
			},
		},
	},
} as const);
