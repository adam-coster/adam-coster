export const scopeNames = Object.freeze(['text.html.handlebars'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			handlebars: {},
			html: {},
			js: {},
		},
		line: {
			'double-slash': {
				js: {},
			},
		},
	},
	constant: {
		character: {
			entity: {
				html: {},
			},
			escape: {
				js: {},
			},
		},
		other: {
			'inline-data': {
				html: {},
			},
		},
	},
	entity: {
		name: {
			tag: {
				block: {
					any: {
						html: {},
					},
				},
				doctype: {
					html: {},
				},
				html: {},
				inline: {
					any: {
						html: {},
					},
				},
				other: {
					html: {},
				},
				script: {
					html: {},
				},
				structure: {
					any: {
						html: {},
					},
				},
				style: {
					html: {},
				},
				tokenised: {
					html: {},
				},
				xml: {
					html: {},
				},
			},
		},
		other: {
			'attribute-name': {
				generic: {
					html: {},
				},
				handlebars: {},
				html: {},
				id: {
					html: {},
				},
			},
			'attribute-value': {
				handlebars: {},
			},
		},
	},
	invalid: {
		illegal: {
			'bad-ampersand': {
				html: {},
			},
			'bad-angle-bracket': {
				html: {},
			},
			'bad-comments-or-CDATA': {
				html: {},
			},
			incomplete: {
				html: {},
			},
		},
	},
	keyword: {
		annotation: {
			handlebars: {},
		},
		control: {},
	},
	markup: {
		raw: {
			yaml: {
				'front-matter': {},
			},
		},
	},
	meta: {
		'attribute-with-value': {
			id: {
				html: {},
			},
		},
		function: {
			block: {
				end: {
					handlebars: {},
				},
				start: {
					handlebars: {},
				},
			},
			inline: {
				else: {
					handlebars: {},
				},
				other: {
					handlebars: {},
				},
			},
		},
		preprocessor: {
			handlebars: {},
		},
		scope: {
			'between-tag-pair': {
				html: {},
			},
		},
		tag: {
			any: {
				html: {},
			},
			block: {
				any: {
					html: {},
				},
			},
			inline: {
				any: {
					html: {},
				},
			},
			other: {
				html: {},
			},
			preprocessor: {
				xml: {
					html: {},
				},
			},
			sgml: {
				doctype: {
					html: {},
				},
				html: {},
			},
			structure: {
				any: {
					html: {},
				},
			},
			tokenised: {
				html: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				html: {},
				js: {},
			},
			entity: {
				html: {},
			},
			string: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
			tag: {
				html: {},
			},
		},
		separator: {
			'key-value': {
				html: {},
			},
		},
	},
	source: {
		css: {
			embedded: {
				html: {},
			},
		},
		handlebars: {
			embedded: {
				html: {},
			},
		},
		js: {
			embedded: {
				html: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				doctype: {
					'identifiers-and-DTDs': {
						html: {},
					},
				},
				handlebars: {},
				html: {},
			},
			single: {
				handlebars: {},
			},
		},
	},
	support: {
		class: {
			handlebars: {},
		},
		constant: {
			handlebars: {},
		},
		function: {
			handlebars: {},
		},
	},
	variable: {
		parameter: {
			handlebars: {},
		},
	},
} as const);
