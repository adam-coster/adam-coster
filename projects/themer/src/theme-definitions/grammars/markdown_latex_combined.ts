export const scopeNames = Object.freeze([
	'text.tex.markdown_latex_combined',
] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			html: {},
		},
	},
	constant: {
		character: {
			escape: {
				markdown: {},
			},
		},
		other: {
			reference: {
				link: {
					markdown: {},
				},
			},
		},
	},
	entity: {
		name: {
			section: {
				markdown: {},
			},
			tag: {
				html: {},
			},
		},
	},
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
	heading: {
		'1': {
			markdown: {},
		},
		'2': {
			markdown: {},
		},
		'3': {
			markdown: {},
		},
		'4': {
			markdown: {},
		},
		'5': {
			markdown: {},
		},
		'6': {
			markdown: {},
		},
	},
	markup: {
		bold: {
			markdown: {},
		},
		fenced_code: {
			block: {
				markdown: {},
			},
		},
		heading: {
			markdown: {},
			setext: {
				'1': {
					markdown: {},
				},
				'2': {
					markdown: {},
				},
			},
		},
		inline: {
			raw: {
				string: {
					markdown: {},
				},
			},
		},
		italic: {
			markdown: {},
		},
		list: {
			numbered: {
				markdown: {},
			},
			unnumbered: {
				markdown: {},
			},
		},
		quote: {
			markdown: {},
		},
		raw: {
			block: {
				markdown: {},
			},
		},
		strikethrough: {
			markdown: {},
		},
		underline: {
			link: {
				image: {
					markdown: {},
				},
				markdown: {},
			},
		},
	},
	meta: {
		image: {
			inline: {
				markdown: {},
			},
			reference: {
				markdown: {},
			},
		},
		link: {
			email: {
				'lt-gt': {
					markdown: {},
				},
			},
			inet: {
				markdown: {},
			},
			inline: {
				markdown: {},
			},
			reference: {
				def: {
					markdown: {},
				},
				literal: {
					markdown: {},
				},
				markdown: {},
			},
		},
		other: {
			'valid-ampersand': {
				markdown: {},
			},
			'valid-bracket': {
				markdown: {},
			},
		},
		paragraph: {
			markdown: {},
		},
		separator: {
			markdown: {},
		},
		tag: {
			structure: {
				$4: {
					end: {
						html: {},
					},
				},
			},
		},
	},
	punctuation: {
		definition: {
			bold: {
				markdown: {},
			},
			comment: {
				html: {},
			},
			constant: {
				begin: {
					markdown: {},
				},
				end: {
					markdown: {},
				},
				markdown: {},
			},
			heading: {
				markdown: {},
			},
			italic: {
				markdown: {},
			},
			link: {
				description: {
					begin: {
						markdown: {},
					},
					end: {
						markdown: {},
					},
				},
				markdown: {},
				title: {
					begin: {
						markdown: {},
					},
					end: {
						markdown: {},
					},
				},
			},
			list: {
				begin: {
					markdown: {},
				},
			},
			markdown: {},
			metadata: {
				markdown: {},
			},
			quote: {
				begin: {
					markdown: {},
				},
			},
			raw: {
				markdown: {},
			},
			strikethrough: {
				markdown: {},
			},
			string: {
				begin: {
					markdown: {},
				},
				end: {
					markdown: {},
				},
				markdown: {},
			},
			tag: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
		},
		separator: {
			'key-value': {
				markdown: {},
			},
		},
	},
	string: {
		other: {
			link: {
				description: {
					markdown: {},
					title: {
						markdown: {},
					},
				},
				title: {
					markdown: {},
				},
			},
		},
	},
} as const);
