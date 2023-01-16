export const scopeNames = Object.freeze(['source.css'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			css: {},
		},
	},
	constant: {
		character: {
			escape: {
				codepoint: {
					css: {},
				},
				css: {},
				newline: {
					css: {},
				},
			},
		},
		numeric: {
			css: {},
			other: {
				density: {
					css: {},
				},
			},
		},
		other: {
			color: {
				'rgb-value': {
					hex: {
						css: {},
					},
				},
			},
			'unicode-range': {
				css: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				'namespace-prefix': {
					css: {},
				},
			},
			tag: {
				css: {},
				custom: {
					css: {},
				},
				wildcard: {
					css: {},
				},
			},
		},
		other: {
			'attribute-name': {
				class: {
					css: {},
				},
				css: {},
				id: {
					css: {},
				},
				'pseudo-class': {
					css: {},
				},
				'pseudo-element': {
					css: {},
				},
			},
			'keyframe-offset': {
				css: {},
				percentage: {
					css: {},
				},
			},
			'namespace-prefix': {
				css: {},
			},
		},
	},
	invalid: {
		deprecated: {
			color: {
				system: {
					css: {},
				},
			},
			combinator: {
				css: {},
			},
			constant: {
				media: {
					css: {},
				},
			},
			function: {
				css: {},
			},
			gradient: {
				function: {
					css: {},
				},
			},
		},
		illegal: {
			'bad-identifier': {
				css: {},
			},
			colon: {
				css: {},
			},
			comma: {
				css: {},
			},
			'leading-whitespace': {
				charset: {
					css: {},
				},
			},
			'no-whitespace': {
				charset: {
					css: {},
				},
			},
			'not-double-quoted': {
				charset: {
					css: {},
				},
			},
			'not-lowercase': {
				charset: {
					css: {},
				},
			},
			unclosed: {
				string: {
					css: {},
				},
			},
			'unclosed-string': {
				charset: {
					css: {},
				},
			},
			'unexpected-characters': {
				charset: {
					css: {},
				},
			},
			whitespace: {
				charset: {
					css: {},
				},
			},
		},
	},
	keyword: {
		control: {
			'at-rule': {
				'${3:/downcase}': {
					css: {},
				},
				apply: {
					tailwind: {},
				},
				charset: {
					css: {},
				},
				'counter-style': {
					css: {},
				},
				css: {},
				document: {
					css: {},
				},
				'font-face': {
					css: {},
				},
				'font-feature-values': {
					css: {},
				},
				import: {
					css: {},
				},
				keyframes: {
					css: {},
				},
				layer: {
					tailwind: {},
				},
				media: {
					css: {},
				},
				namespace: {
					css: {},
				},
				page: {
					css: {},
				},
				responsive: {
					tailwind: {},
				},
				screen: {
					tailwind: {},
				},
				supports: {
					css: {},
				},
				tailwind: {
					tailwind: {},
				},
				variants: {
					tailwind: {},
				},
				viewport: {
					css: {},
				},
			},
		},
		operator: {
			arithmetic: {
				css: {},
			},
			combinator: {
				css: {},
			},
			comparison: {
				css: {},
			},
			gradient: {
				css: {},
			},
			logical: {
				$1: {
					media: {
						css: {},
					},
				},
				and: {
					media: {
						css: {},
					},
				},
				feature: {
					$1: {
						css: {},
					},
				},
			},
			pattern: {
				css: {},
			},
			shape: {
				css: {},
			},
		},
		other: {
			important: {
				css: {},
			},
			unit: {
				'${2:/downcase}': {
					css: {},
				},
				percentage: {
					css: {},
				},
			},
		},
	},
	meta: {
		'at-rule': {
			'${3:/downcase}': {
				css: {},
			},
			apply: {
				tailwind: {},
			},
			body: {
				css: {},
			},
			charset: {
				css: {},
			},
			'counter-style': {
				body: {
					css: {},
				},
				header: {
					css: {},
				},
			},
			document: {
				body: {
					css: {},
				},
				header: {
					css: {},
				},
			},
			'font-face': {
				css: {},
			},
			'font-features': {
				css: {},
			},
			header: {
				css: {},
			},
			import: {
				css: {},
			},
			keyframes: {
				body: {
					css: {},
				},
				header: {
					css: {},
				},
			},
			layer: {
				body: {
					tailwind: {},
				},
			},
			media: {
				body: {
					css: {},
				},
				header: {
					css: {},
				},
			},
			namespace: {
				css: {},
			},
			page: {
				css: {},
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
			supports: {
				body: {
					css: {},
				},
				header: {
					css: {},
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
			viewport: {
				css: {},
			},
		},
		'attribute-selector': {
			css: {},
		},
		'feature-query': {
			css: {},
		},
		function: {
			calc: {
				css: {},
			},
			color: {
				css: {},
			},
			'document-rule': {
				css: {},
			},
			gradient: {
				css: {},
				invalid: {
					deprecated: {
						gradient: {
							css: {},
						},
					},
				},
			},
			misc: {
				css: {},
			},
			shape: {
				css: {},
			},
			'timing-function': {
				css: {},
			},
			url: {
				css: {},
			},
			variable: {
				css: {},
			},
		},
		'property-list': {
			css: {},
			'font-feature': {
				css: {},
			},
		},
		'property-name': {
			css: {},
		},
		ratio: {
			css: {},
		},
		selector: {
			css: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				begin: {
					css: {},
				},
				end: {
					css: {},
				},
			},
			condition: {
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
			constant: {
				css: {},
			},
			entity: {
				begin: {
					bracket: {
						square: {
							css: {},
						},
					},
				},
				css: {},
				end: {
					bracket: {
						square: {
							css: {},
						},
					},
				},
			},
			keyword: {
				css: {},
			},
			parameters: {
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
			string: {
				begin: {
					css: {},
				},
				end: {
					css: {},
				},
			},
		},
		section: {
			begin: {
				bracket: {
					curly: {
						css: {},
					},
				},
			},
			document: {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
			},
			end: {
				bracket: {
					curly: {
						css: {},
					},
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
			keyframes: {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
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
			media: {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
			},
			'property-list': {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							css: {},
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
			supports: {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							css: {},
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
			css: {},
			dash: {
				'unicode-range': {
					css: {},
				},
			},
			'key-value': {
				css: {},
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
	storage: {
		modifier: {
			'ignore-case': {
				css: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				css: {},
			},
			single: {
				css: {},
			},
		},
		unquoted: {
			'attribute-value': {
				css: {},
			},
		},
	},
	support: {
		constant: {
			color: {
				current: {
					css: {},
				},
				'w3c-extended-color-name': {
					css: {},
				},
				'w3c-standard-color-name': {
					css: {},
				},
			},
			'font-name': {
				css: {},
			},
			'language-range': {
				css: {},
			},
			media: {
				css: {},
			},
			parity: {
				css: {},
			},
			'property-value': {
				css: {},
				'list-style-type': {
					css: {},
				},
			},
			'step-direction': {
				css: {},
			},
			'text-direction': {
				css: {},
			},
			vendored: {
				'property-value': {
					css: {},
				},
			},
		},
		function: {
			calc: {
				css: {},
			},
			config: {
				tailwind: {},
			},
			'document-rule': {
				css: {},
			},
			gradient: {
				css: {},
			},
			misc: {
				css: {},
			},
			screen: {
				tailwind: {},
			},
			shape: {
				css: {},
			},
			theme: {
				tailwind: {},
			},
			'timing-function': {
				css: {},
			},
			transform: {
				css: {},
			},
			url: {
				css: {},
			},
		},
		type: {
			'property-name': {
				css: {},
				media: {
					css: {},
				},
			},
			vendored: {
				'property-name': {
					css: {},
					media: {
						css: {},
					},
				},
			},
		},
	},
	variable: {
		argument: {
			css: {},
		},
		css: {},
		'font-feature': {
			css: {},
		},
		parameter: {
			'document-rule': {
				css: {},
			},
			'keyframe-list': {
				css: {},
			},
			layer: {
				tailwind: {},
			},
			misc: {
				css: {},
			},
			screen: {
				tailwind: {},
			},
			'style-name': {
				css: {},
			},
			tailwind: {
				tailwind: {},
			},
			url: {
				css: {},
			},
			variants: {
				tailwind: {},
			},
		},
	},
} as const);
