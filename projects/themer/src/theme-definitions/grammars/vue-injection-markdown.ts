export const scopeNames = Object.freeze(['markdown.vue.codeblock'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	fenced_code: {
		block: {
			language: {
				attributes: {
					markdown: {},
				},
				markdown: {},
			},
		},
	},
	markup: {
		fenced_code: {
			block: {
				markdown: {},
			},
		},
	},
	punctuation: {
		definition: {
			markdown: {},
		},
	},
} as const);
