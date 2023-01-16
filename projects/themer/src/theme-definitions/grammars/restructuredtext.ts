export const scopeNames = Object.freeze(['source.rst'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {},
	},
	constant: {
		character: {
			escape: {},
		},
		numeric: {},
	},
	entity: {
		name: {
			tag: {
				anchor: {},
			},
		},
	},
	keyword: {
		control: {
			py: {},
			table: {},
		},
	},
	markup: {
		bold: {},
		heading: {},
		italic: {},
		underline: {
			link: {},
		},
	},
	string: {
		interpolated: {},
	},
	variable: {
		parameter: {
			codeblock: {
				cmake: {},
				console: {},
				cpp: {},
				dts: {},
				js: {},
				kconfig: {},
				py: {},
				ruby: {},
				yaml: {},
			},
			html: {},
		},
	},
} as const);
