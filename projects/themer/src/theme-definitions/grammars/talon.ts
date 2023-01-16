export const scopeNames = Object.freeze(['source.talon'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				talon: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				python: {},
				talon: {},
			},
			format: {
				placeholder: {
					talon: {},
				},
			},
		},
		numeric: {
			talon: {},
		},
		other: {
			set: {
				regexp: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				talon: {},
			},
			tag: {
				talon: {},
			},
			type: {
				talon: {},
			},
		},
	},
	keyword: {
		control: {
			talon: {},
		},
		operator: {
			quantifier: {
				regexp: {},
			},
			talon: {},
		},
	},
	punctuation: {
		definition: {
			parameters: {
				begin: {
					talon: {},
				},
				end: {
					talon: {},
				},
				key: {
					talon: {},
				},
			},
			string: {
				begin: {
					talon: {},
				},
				end: {
					talon: {},
				},
			},
		},
		separator: {
			talon: {},
		},
	},
	string: {
		interpolated: {
			talon: {},
		},
		quoted: {
			double: {
				talon: {},
			},
		},
		regexp: {
			talon: {},
		},
	},
	support: {
		other: {
			match: {
				any: {
					regexp: {},
				},
				begin: {
					regexp: {},
				},
				end: {
					regexp: {},
				},
			},
		},
	},
	variable: {
		other: {
			talon: {},
		},
		parameter: {
			talon: {},
		},
	},
} as const);
