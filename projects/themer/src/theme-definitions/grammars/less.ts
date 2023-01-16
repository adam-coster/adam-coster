export const scopeNames = Object.freeze(['source.css.less'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			css: {},
		},
		line: {
			'double-slash': {
				less: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				css: {},
			},
		},
		language: {
			boolean: {
				less: {},
			},
		},
		other: {
			'rgb-value': {
				css: {},
			},
		},
	},
	entity: {
		name: {
			tag: {
				custom: {
					css: {},
				},
			},
		},
		other: {
			'attribute-name': {
				attribute: {
					css: {},
				},
				class: {
					css: {},
					mixin: {
						css: {},
					},
				},
				id: {},
				'parent-selector': {
					css: {},
				},
			},
		},
	},
	keyword: {
		control: {
			'at-rule': {
				fontface: {
					css: {},
				},
				import: {
					less: {},
				},
				media: {
					css: {},
				},
			},
			import: {
				option: {
					less: {},
				},
			},
			logical: {
				operator: {
					less: {},
				},
			},
		},
		operator: {
			less: {},
		},
		other: {
			important: {
				css: {},
			},
		},
	},
	meta: {
		'at-rule': {
			fontface: {
				css: {},
			},
			import: {
				css: {},
			},
			media: {
				css: {},
			},
		},
		'attribute-selector': {
			css: {},
		},
		brace: {
			curly: {
				css: {},
			},
			round: {
				css: {},
			},
			square: {
				less: {},
			},
		},
		'property-list': {
			css: {},
		},
		selector: {
			css: {},
		},
	},
	punctuation: {
		definition: {
			begin: {
				entity: {
					css: {},
				},
			},
			comment: {
				begin: {
					css: {},
				},
				end: {
					css: {},
				},
				less: {},
			},
			end: {
				entity: {
					css: {},
				},
			},
			entity: {
				css: {},
			},
			keyword: {
				css: {},
				less: {},
			},
			string: {
				begin: {
					css: {},
				},
				end: {
					css: {},
				},
			},
			variable: {
				less: {},
			},
		},
		section: {
			function: {
				css: {},
			},
			'property-list': {
				begin: {
					bracket: {
						curly: {
							css: {},
						},
					},
					css: {},
				},
				end: {
					bracket: {
						curly: {
							css: {},
						},
					},
					css: {},
				},
			},
		},
		separator: {
			'key-value': {
				css: {},
			},
			operator: {
				css: {},
			},
		},
		terminator: {
			rule: {
				css: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					less: {},
				},
			},
		},
	},
	string: {
		quoted: {
			double: {
				'attribute-value': {
					css: {},
				},
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
		url: {
			css: {},
		},
	},
	support: {
		constant: {
			'media-type': {
				media: {
					css: {},
				},
			},
			'property-value': {
				'media-property': {
					media: {
						css: {},
					},
				},
			},
		},
		function: {
			'any-method': {
				builtin: {
					less: {},
					url: {
						css: {},
					},
				},
			},
			default: {
				less: {},
			},
			less: {},
			misc: {
				css: {},
			},
			'type-checking': {
				less: {},
			},
			'unit-checking': {
				less: {},
			},
		},
	},
	variable: {
		other: {
			interpolation: {
				less: {},
			},
			less: {},
		},
		parameter: {
			misc: {
				css: {},
			},
		},
	},
} as const);
