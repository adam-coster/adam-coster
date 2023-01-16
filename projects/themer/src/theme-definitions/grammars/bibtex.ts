export const scopeNames = Object.freeze(['text.bibtex'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			bibtex: {},
		},
		line: {
			'at-sign': {
				bibtex: {},
			},
		},
	},
	constant: {
		numeric: {
			bibtex: {},
		},
	},
	entity: {
		name: {
			type: {
				'entry-key': {
					bibtex: {},
				},
			},
		},
	},
	invalid: {
		illegal: {
			'at-sign': {
				bibtex: {},
			},
		},
	},
	keyword: {
		operator: {
			bibtex: {},
		},
		other: {
			'entry-type': {
				bibtex: {},
			},
			'string-constant': {
				bibtex: {},
			},
		},
	},
	meta: {
		entry: {
			braces: {
				bibtex: {},
			},
			parenthesis: {
				bibtex: {},
			},
		},
		'key-assignment': {
			bibtex: {},
		},
		'string-constant': {
			braces: {
				bibtex: {},
			},
			parenthesis: {
				bibtex: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				bibtex: {},
			},
			group: {
				begin: {
					bibtex: {},
				},
				end: {
					bibtex: {},
				},
			},
			keyword: {
				bibtex: {},
			},
			string: {
				begin: {
					bibtex: {},
				},
				end: {
					bibtex: {},
				},
			},
		},
		section: {
			entry: {
				begin: {
					bibtex: {},
				},
				end: {
					bibtex: {},
				},
			},
			'string-constant': {
				begin: {
					bibtex: {},
				},
				end: {
					bibtex: {},
				},
			},
		},
		separator: {
			'key-value': {
				bibtex: {},
			},
		},
	},
	support: {
		function: {
			key: {
				bibtex: {},
			},
		},
		variable: {
			bibtex: {},
		},
	},
	variable: {
		other: {
			bibtex: {},
		},
	},
} as const);
