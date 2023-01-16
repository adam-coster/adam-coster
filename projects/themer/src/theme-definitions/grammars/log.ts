export const scopeNames = Object.freeze(['text.log'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {},
	constant: {
		language: {},
	},
	emphasis: {},
	log: {
		constant: {},
		date: {},
		debug: {},
		error: {},
		exception: {},
		exceptiontype: {},
		info: {},
		string: {},
		verbose: {},
		warning: {},
	},
	markup: {
		changed: {},
		deleted: {},
		inserted: {},
	},
	string: {
		key: {},
		regexp: {},
	},
	strong: {},
} as const);
