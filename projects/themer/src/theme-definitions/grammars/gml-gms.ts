export const scopeNames = Object.freeze(['source.gml-gms'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				gml: {},
			},
			gml: {},
		},
		line: {
			'double-slash': {
				gml: {},
			},
		},
	},
	constant: {
		language: {
			gml: {},
		},
		numeric: {
			gml: {},
			hex: {
				gml: {},
			},
			real: {
				gml: {},
			},
		},
	},
	keyword: {
		control: {
			gml: {},
		},
		operator: {
			character: {
				gml: {},
			},
			word: {
				gml: {},
			},
		},
		other: {
			gml: {},
		},
	},
	source: {
		'gml-extra': {
			gml: {},
		},
		'gml-thirdparty': {
			gml: {},
		},
		lua: {
			gml: {},
		},
	},
	storage: {
		type: {
			gml: {},
		},
	},
	string: {
		quoted: {
			double: {
				gml: {},
			},
			single: {
				gml: {},
			},
		},
	},
	support: {
		function: {
			gml: {},
		},
		variable: {
			global: {
				gml: {},
			},
			local: {
				gml: {},
			},
		},
	},
	varable: {
		language: {
			gml: {},
		},
	},
	variable: {
		other: {
			gml: {},
			less: {
				gml: {},
			},
		},
		parameter: {
			gml: {},
		},
	},
} as const);
