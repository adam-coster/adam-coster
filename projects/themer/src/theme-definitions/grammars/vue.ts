export const scopeNames = Object.freeze(['source.vue'] as const);
export const semanticTokens = Object.freeze(['component'] as const);
export const tokens = Object.freeze({
	entity: {
		name: {
			function: {},
			tag: {
				$1: {
					html: {
						vue: {},
					},
				},
				$2: {
					html: {
						vue: {},
					},
				},
				$3: {
					html: {
						vue: {},
					},
				},
			},
		},
		other: {
			'attribute-name': {
				class: {
					css: {},
				},
				html: {
					vue: {},
				},
			},
		},
	},
	expression: {
		embedded: {
			vue: {},
		},
	},
	keyword: {
		control: {
			'at-rule': {
				apply: {
					tailwind: {},
				},
				layer: {
					tailwind: {},
				},
				responsive: {
					tailwind: {},
				},
				screen: {
					tailwind: {},
				},
				tailwind: {
					tailwind: {},
				},
				variants: {
					tailwind: {},
				},
			},
			conditional: {
				vue: {},
			},
			loop: {
				vue: {},
			},
		},
		operator: {
			assignment: {
				ts: {},
			},
		},
		other: {
			important: {
				css: {},
			},
		},
	},
	meta: {
		'at-rule': {
			apply: {
				tailwind: {},
			},
			layer: {
				body: {
					tailwind: {},
				},
			},
			responsive: {
				body: {
					tailwind: {},
				},
			},
			screen: {
				body: {
					tailwind: {},
				},
			},
			tailwind: {
				css: {},
			},
			variants: {
				body: {
					tailwind: {},
				},
			},
		},
		attribute: {
			directive: {
				control: {
					vue: {},
				},
				vue: {},
			},
			generic: {
				vue: {},
			},
			style: {
				vue: {},
			},
		},
		'property-name': {
			css: {},
		},
		'tag-stuff': {},
		'template-tag': {
			end: {},
			start: {},
		},
		type: {
			parameters: {
				vue: {},
			},
		},
	},
	punctuation: {
		'attribute-shorthand': {
			bind: {
				html: {
					vue: {},
				},
			},
			event: {
				html: {
					vue: {},
				},
			},
			slot: {
				html: {
					vue: {},
				},
			},
		},
		definition: {
			interpolation: {
				begin: {
					html: {
						vue: {},
					},
				},
				end: {
					html: {
						vue: {},
					},
				},
			},
			keyword: {
				css: {},
			},
			string: {
				begin: {
					html: {
						vue: {},
					},
				},
				end: {
					html: {
						vue: {},
					},
				},
			},
			tag: {
				begin: {
					html: {
						vue: {},
					},
				},
				end: {
					html: {
						vue: {},
					},
				},
			},
		},
		section: {
			function: {
				begin: {
					bracket: {
						round: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							css: {},
						},
					},
				},
			},
			layer: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			responsive: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			screen: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
			variants: {
				begin: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							tailwind: {},
						},
					},
				},
			},
		},
		separator: {
			'key-value': {
				css: {},
				html: {
					vue: {},
				},
			},
			list: {
				comma: {
					css: {},
				},
			},
		},
		terminator: {
			apply: {
				tailwind: {},
			},
			rule: {
				css: {},
			},
			tailwind: {
				tailwind: {},
			},
		},
	},
	'self-closing-tag': {},
	source: {
		css: {
			embedded: {
				html: {
					vue: {},
				},
			},
			less: {},
			scss: {},
		},
		graphql: {},
		js: {
			jsx: {},
		},
		json: {
			comments: {},
		},
		json5: {},
		postcss: {},
		sass: {},
		stylus: {},
		toml: {},
		ts: {
			embedded: {
				html: {
					vue: {},
				},
			},
		},
		tsx: {},
		yaml: {},
	},
	storage: {
		modifier: {
			ts: {},
		},
	},
	support: {
		function: {
			config: {
				tailwind: {},
			},
			screen: {
				tailwind: {},
			},
			theme: {
				tailwind: {},
			},
		},
	},
	text: {
		html: {
			derivative: {},
			markdown: {},
		},
		pug: {},
	},
	variable: {
		css: {},
		parameter: {
			layer: {
				tailwind: {},
			},
			screen: {
				tailwind: {},
			},
			tailwind: {
				tailwind: {},
			},
			variants: {
				tailwind: {},
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
