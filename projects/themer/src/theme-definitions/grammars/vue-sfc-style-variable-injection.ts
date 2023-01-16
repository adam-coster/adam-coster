export const scopeNames = Object.freeze([
	'vue.sfc.style.variable.injection',
] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	entity: {
		name: {
			function: {},
		},
	},
	punctuation: {
		definition: {
			tag: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
		},
	},
	source: {
		ts: {
			embedded: {
				html: {
					vue: {},
				},
			},
		},
	},
	vue: {
		sfc: {
			style: {
				variable: {
					injection: {
						'v-bind': {},
					},
				},
			},
		},
	},
} as const);
