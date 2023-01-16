export const scopeNames = Object.freeze(['text.tsv'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		rainbow4: {},
	},
	constant: {
		numeric: {
			rainbow7: {},
		},
	},
	entity: {
		name: {
			function: {
				rainbow3: {},
			},
			type: {
				rainbow8: {},
			},
		},
	},
	invalid: {
		rainbow10: {},
	},
	keyword: {
		rainbow2: {},
	},
	markup: {
		bold: {
			rainbow9: {},
		},
	},
	rainbow1: {},
	rainbowgroup: {},
	string: {
		rainbow5: {},
	},
	variable: {
		parameter: {
			rainbow6: {},
		},
	},
} as const);
