export const scopeNames = Object.freeze(['source.svelte'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			postcss: {},
			svelte: {},
		},
		line: {
			postcss: {},
		},
		tag: {
			postcss: {},
		},
		tags: {
			postcss: {},
		},
	},
	constant: {
		name: {
			attribute: {
				tag: {},
			},
		},
		numeric: {
			css: {
				postcss: {},
			},
			decimal: {
				svelte: {},
			},
		},
		other: {
			color: {
				'rgb-value': {
					css: {
						postcss: {},
					},
				},
			},
		},
	},
	entity: {
		name: {
			function: {},
			tag: {
				css: {
					postcss: {
						symbol: {},
					},
				},
				svelte: {},
			},
			type: {
				svelte: {},
			},
		},
		other: {
			'attribute-name': {
				class: {
					css: {
						postcss: {},
					},
					svelte: {},
				},
				id: {
					css: {
						postcss: {},
					},
				},
				'placeholder-selector': {
					postcss: {},
				},
				'pseudo-class': {
					css: {
						postcss: {},
					},
				},
				svelte: {},
			},
			'attribute-selector': {
				postcss: {},
			},
		},
	},
	invalid: {
		illegal: {
			'characters-not-allowed-here': {
				svelte: {},
			},
		},
	},
	keyword: {
		control: {
			as: {
				svelte: {},
			},
			'at-rule': {
				apply: {
					tailwind: {},
				},
				css: {
					postcss: {},
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
				svelte: {},
			},
			flow: {
				svelte: {},
			},
			svelte: {},
		},
		declaration: {
			class: {
				component: {
					svelte: {},
				},
			},
		},
		operator: {
			assignment: {},
			postcss: {},
		},
		other: {
			animation: {
				svelte: {},
			},
			debugger: {
				svelte: {},
			},
			important: {
				css: {
					postcss: {},
				},
			},
			regex: {
				postcss: {},
			},
			svelte: {},
			unit: {
				css: {
					postcss: {},
				},
			},
		},
	},
	meta: {
		$1: {
			svelte: {},
		},
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
			$1: {
				svelte: {},
			},
		},
		brace: {
			round: {
				svelte: {},
			},
		},
		directive: {
			$1: {
				svelte: {},
			},
		},
		embedded: {
			block: {
				svelte: {},
			},
			expression: {
				svelte: {},
			},
			t: {},
			ts: {},
		},
		lang: {
			$3: {
				svelte: {},
			},
		},
		'property-list': {
			css: {
				postcss: {},
			},
		},
		'property-value': {
			css: {
				postcss: {},
			},
		},
		scope: {
			tag: {
				$2: {
					svelte: {},
				},
			},
		},
		special: {
			$3: {
				svelte: {},
			},
			end: {
				svelte: {},
			},
			start: {
				svelte: {},
			},
		},
		tag: {
			custom: {
				svelte: {},
			},
			end: {
				svelte: {},
			},
			start: {
				svelte: {},
			},
			svelte: {},
			void: {
				svelte: {},
			},
		},
	},
	punctuation: {
		definition: {
			block: {
				begin: {
					svelte: {},
				},
				end: {
					svelte: {},
				},
			},
			comment: {
				svelte: {},
			},
			generic: {
				begin: {},
				end: {},
			},
			keyword: {
				css: {},
				svelte: {},
			},
			string: {
				begin: {
					svelte: {},
				},
				end: {
					svelte: {},
				},
			},
			tag: {
				begin: {
					svelte: {},
				},
				end: {
					svelte: {},
				},
			},
			variable: {
				svelte: {},
			},
		},
		section: {
			embedded: {
				begin: {
					svelte: {},
				},
				end: {
					svelte: {},
				},
			},
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
			interpolation: {
				begin: {},
				end: {},
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
				svelte: {},
			},
			list: {
				comma: {
					css: {},
				},
			},
			svelte: {},
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
	source: {
		ts: {},
	},
	storage: {
		type: {
			class: {
				component: {
					svelte: {},
				},
			},
			svelte: {},
		},
	},
	string: {
		quoted: {
			double: {
				css: {
					postcss: {},
				},
			},
			single: {
				css: {
					postcss: {},
				},
			},
			svelte: {},
		},
		unquoted: {
			svelte: {},
		},
	},
	support: {
		class: {
			component: {
				svelte: {},
			},
		},
		constant: {
			'property-value': {
				css: {
					postcss: {},
				},
			},
		},
		function: {
			config: {
				tailwind: {},
			},
			interpolation: {
				postcss: {},
			},
			name: {
				postcss: {
					library: {},
					'no-completions': {},
				},
			},
			screen: {
				tailwind: {},
			},
			svelte: {},
			theme: {
				tailwind: {},
			},
		},
		type: {
			'property-name': {
				css: {
					postcss: {},
				},
				svelte: {},
			},
		},
	},
	text: {
		svelte: {},
	},
	variable: {
		function: {
			svelte: {},
		},
		language: {
			svelte: {},
		},
		other: {
			constant: {
				svelte: {},
			},
		},
		parameter: {
			layer: {
				tailwind: {},
			},
			postcss: {},
			screen: {
				tailwind: {},
			},
			svelte: {},
			tailwind: {
				tailwind: {},
			},
			variants: {
				tailwind: {},
			},
		},
	},
} as const);
