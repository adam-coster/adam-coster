export const scopeNames = Object.freeze(['text.html.markdown'] as const);
export const semanticTokens = Object.freeze(['component'] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			html: {},
			ts: {},
		},
	},
	constant: {
		character: {
			escape: {
				markdown: {},
			},
		},
		numeric: {
			decimal: {
				mermaid: {},
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
			function: {
				mermaid: {},
			},
			section: {
				markdown: {},
			},
			tag: {
				html: {},
			},
			type: {
				class: {
					mermaid: {},
				},
			},
			variable: {
				field: {
					mermaid: {},
				},
				parameter: {
					mermaid: {},
				},
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
	keyword: {
		control: {
			mermaid: {},
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
		inserted: {
			math: {
				display: {
					markdown: {},
				},
				inline: {
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
		math: {
			block: {
				markdown: {},
			},
			inline: {
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
		embedded: {
			block: {
				svelte: {
					script: {},
					style: {},
				},
			},
			math: {
				markdown: {},
			},
		},
		function: {
			mermaid: {},
		},
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
			math: {
				begin: {
					markdown: {},
				},
				display: {
					markdown: {},
				},
				end: {
					markdown: {},
				},
				inline: {
					markdown: {},
				},
			},
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
				template: {
					begin: {
						js: {},
					},
					end: {
						js: {},
					},
				},
			},
			tag: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
			typeparameters: {
				begin: {
					mermaid: {},
				},
				end: {
					mermaid: {},
				},
			},
		},
		parenthesis: {
			closed: {
				mermaid: {},
			},
			open: {
				mermaid: {},
			},
		},
		separator: {
			'key-value': {
				markdown: {},
			},
		},
	},
	storage: {
		type: {
			mermaid: {},
		},
	},
	string: {
		js: {
			taggedTemplate: {
				commentTaggedTemplate: {
					basic: {},
					c: {},
					clojure: {},
					coffee: {},
					cpp: {},
					csharp: {},
					css: {},
					dart: {},
					diff: {},
					dockerfile: {},
					dosbatch: {},
					fsharp: {},
					git_commit: {},
					git_rebase: {},
					glsl: {},
					go: {},
					graphql: {},
					groovy: {},
					ini: {},
					java: {},
					js: {},
					js_regexp: {},
					json: {},
					less: {},
					lua: {},
					makefile: {},
					md: {},
					objc: {},
					perl: {},
					perl6: {},
					php: {},
					powershell: {},
					pug: {},
					python: {},
					r: {},
					regexp_python: {},
					ruby: {},
					rust: {},
					scala: {},
					scss: {},
					shell: {},
					sql: {},
					ts: {},
					tsx: {},
					vs_net: {},
					xml: {},
					xsl: {},
					yaml: {},
				},
			},
		},
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
	variable: {},
} as const);
