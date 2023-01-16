export const scopeNames = Object.freeze(['source.diff'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				diff: {},
			},
		},
	},
	markup: {
		changed: {
			diff: {},
		},
		deleted: {
			diff: {},
		},
		inserted: {
			diff: {},
		},
	},
	meta: {
		diff: {
			header: {
				command: {},
				'from-file': {},
				git: {},
				'to-file': {},
			},
			index: {
				git: {},
			},
			'only-in': {},
			range: {
				context: {},
				normal: {},
				unified: {},
			},
		},
		separator: {
			diff: {},
		},
		'toc-list': {
			'file-name': {
				diff: {},
			},
			'line-number': {
				diff: {},
			},
		},
	},
	punctuation: {
		definition: {
			changed: {
				diff: {},
			},
			comment: {
				diff: {},
			},
			deleted: {
				diff: {},
			},
			'from-file': {
				diff: {},
			},
			inserted: {
				diff: {},
			},
			range: {
				diff: {},
			},
			separator: {
				diff: {},
			},
			'to-file': {
				diff: {},
			},
		},
		separator: {
			'key-value': {
				diff: {},
			},
		},
	},
} as const);
