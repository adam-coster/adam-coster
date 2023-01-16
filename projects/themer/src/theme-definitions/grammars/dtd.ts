export const scopeNames = Object.freeze(['text.xml.dtd'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			dtd: {},
		},
	},
	constant: {
		language: {
			dtd: {},
		},
	},
	entity: {
		name: {
			tag: {
				dtd: {},
			},
		},
	},
	keyword: {
		other: {
			'data-type': {
				dtd: {},
			},
		},
	},
	meta: {
		tag: {
			type: {
				dtd: {},
			},
		},
	},
	punctuation: {
		definition: {
			tag: {
				dtd: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				dtd: {},
			},
		},
	},
	variable: {
		language: {
			dtd: {},
		},
	},
} as const);
