export const scopeNames = Object.freeze(['source.perl'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				perl: {},
			},
		},
		line: {
			'number-sign': {
				perl: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				perl: {
					perl: {},
				},
			},
		},
		language: {
			perl: {},
		},
		other: {
			bareword: {
				perl: {},
			},
			'character-class': {
				set: {
					perl: {},
				},
			},
			key: {
				perl: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				format: {
					perl: {},
				},
				perl: {},
			},
			type: {
				class: {
					perl: {},
				},
				instance: {
					pod: {
						perl: {},
					},
				},
			},
		},
	},
	keyword: {
		control: {
			anchor: {
				perl: {},
			},
			perl: {},
			'regexp-option': {
				perl: {},
			},
		},
		operator: {
			comparison: {
				perl: {},
			},
			filetest: {
				perl: {},
			},
			logical: {
				perl: {},
			},
		},
	},
	markup: {
		bold: {
			pod: {
				perl: {},
			},
		},
		italic: {
			pod: {
				perl: {},
			},
		},
		raw: {
			pod: {
				perl: {},
			},
		},
		underline: {
			link: {
				hyperlink: {
					pod: {
						perl: {},
					},
				},
			},
		},
	},
	meta: {
		class: {
			perl: {},
		},
		embedded: {
			block: {
				css: {},
				html: {},
				js: {},
				postscript: {},
				sql: {},
				xml: {},
			},
			pod: {
				perl: {},
			},
		},
		'even-tab': {},
		format: {
			perl: {},
		},
		function: {
			perl: {},
		},
		'leading-tabs': {},
		'odd-tab': {},
	},
	punctuation: {
		definition: {
			'character-class': {
				begin: {
					perl: {},
				},
				end: {
					perl: {},
				},
			},
			comment: {
				perl: {},
			},
			delimiter: {
				begin: {
					perl: {},
				},
				end: {
					perl: {},
				},
			},
			parameters: {
				perl: {},
			},
			string: {
				begin: {
					perl: {},
				},
				end: {
					perl: {},
				},
				perl: {},
			},
			variable: {
				perl: {},
			},
		},
		section: {
			scope: {
				begin: {
					perl: {},
				},
				end: {
					perl: {},
				},
				perl: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					perl: {},
				},
			},
		},
	},
	source: {
		css: {},
		js: {},
		postscript: {},
		sql: {},
	},
	storage: {
		modifier: {
			perl: {},
		},
		type: {
			class: {
				pod: {
					perl: {},
				},
			},
			method: {
				perl: {},
			},
			sub: {
				perl: {},
			},
		},
	},
	string: {
		interpolated: {
			perl: {},
			qx: {
				perl: {},
				'single-quote': {
					perl: {},
				},
			},
			'qx-brace': {
				perl: {},
			},
			'qx-bracket': {
				perl: {},
			},
			'qx-ltgt': {
				perl: {},
			},
			'qx-paren': {
				perl: {},
			},
		},
		quoted: {
			double: {
				perl: {},
			},
			other: {
				q: {
					perl: {},
				},
				'q-brace': {
					perl: {},
				},
				'q-bracket': {
					perl: {},
				},
				'q-ltgt': {
					perl: {},
				},
				'q-paren': {
					perl: {},
				},
				qq: {
					perl: {},
				},
				'qq-brace': {
					perl: {},
				},
				'qq-bracket': {
					perl: {},
				},
				'qq-ltgt': {
					perl: {},
				},
				'qq-paren': {
					perl: {},
				},
			},
			single: {
				perl: {},
			},
		},
		regexp: {
			compile: {
				nested_braces: {
					perl: {},
				},
				nested_brackets: {
					perl: {},
				},
				nested_ltgt: {
					perl: {},
				},
				nested_parens: {
					perl: {},
				},
				perl: {},
				'simple-delimiter': {
					perl: {},
				},
				'single-quote': {
					perl: {},
				},
			},
			find: {
				perl: {},
			},
			'find-m': {
				nested_braces: {
					perl: {},
				},
				nested_brackets: {
					perl: {},
				},
				nested_ltgt: {
					perl: {},
				},
				nested_parens: {
					perl: {},
				},
				perl: {},
				'simple-delimiter': {
					perl: {},
				},
				'single-quote': {
					perl: {},
				},
			},
			format: {
				nested_braces: {
					perl: {},
				},
				nested_brackets: {
					perl: {},
				},
				nested_ltgt: {
					perl: {},
				},
				nested_parens: {
					perl: {},
				},
				simple_delimiter: {
					perl: {},
				},
				single_quote: {
					perl: {},
				},
			},
			nested_braces: {
				perl: {},
			},
			nested_brackets: {
				perl: {},
			},
			nested_ltgt: {
				perl: {},
			},
			nested_parens: {
				perl: {},
			},
			replace: {
				extended: {
					simple_delimiter: {
						perl: {},
					},
				},
				perl: {},
			},
			replaceXXX: {
				format: {
					simple_delimiter: {
						perl: {},
					},
					single_quote: {
						perl: {},
					},
				},
				simple_delimiter: {
					perl: {},
				},
			},
		},
		unquoted: {
			heredoc: {
				interpolated: {
					perl: {},
				},
				raw: {
					perl: {},
				},
			},
			'program-block': {
				perl: {},
			},
		},
	},
	support: {
		function: {
			perl: {},
		},
	},
	text: {
		html: {
			basic: {},
		},
		xml: {},
	},
	variable: {
		other: {
			pod: {
				perl: {},
			},
			predefined: {
				perl: {},
				'program-name': {
					perl: {},
				},
			},
			readwrite: {
				global: {
					perl: {},
					special: {
						perl: {},
					},
				},
				'list-separator': {
					perl: {},
				},
			},
			regexp: {
				'last-paren-match': {
					perl: {},
				},
				match: {
					perl: {},
				},
				'post-match': {
					perl: {},
				},
				'pre-match': {
					perl: {},
				},
			},
			subpattern: {
				perl: {},
			},
		},
		parameter: {
			function: {
				perl: {},
			},
		},
	},
} as const);
