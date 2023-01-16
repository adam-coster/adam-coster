export const scopeNames = Object.freeze(['text.tex.latex'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			percentage: {
				latex: {},
				tex: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				latex: {},
			},
			latex: {},
		},
		other: {
			reference: {
				citation: {
					latex: {},
				},
				label: {
					latex: {},
				},
			},
		},
	},
	keyword: {
		control: {
			cite: {
				latex: {},
			},
			equation: {
				align: {
					latex: {},
				},
				newline: {
					latex: {},
				},
			},
			include: {
				latex: {},
			},
			label: {
				latex: {},
			},
			layout: {
				latex: {},
			},
			preamble: {
				latex: {},
			},
			ref: {
				latex: {},
			},
			table: {
				cell: {
					latex: {},
				},
				newline: {
					latex: {},
				},
			},
		},
		other: {
			item: {
				latex: {},
			},
		},
	},
	markup: {
		raw: {
			verb: {
				latex: {},
			},
		},
		underline: {
			link: {
				latex: {},
			},
		},
	},
	meta: {
		chord: {
			block: {
				latex: {},
			},
		},
		citation: {
			latex: {},
		},
		'column-specials': {
			latex: {},
		},
		definition: {
			label: {
				latex: {},
			},
		},
		embedded: {
			block: {
				generic: {
					latex: {},
				},
			},
		},
		function: {
			alltt: {
				latex: {},
			},
			'begin-document': {
				latex: {},
			},
			emph: {
				latex: {},
			},
			'end-document': {
				latex: {},
			},
			environment: {
				frame: {
					latex: {},
				},
				general: {
					latex: {},
				},
				latex: {
					mpost: {},
					tikz: {},
				},
				list: {
					latex: {},
				},
				math: {
					latex: {},
				},
				songs: {
					latex: {},
				},
				tabular: {
					latex: {},
				},
			},
			link: {
				url: {
					latex: {},
				},
			},
			section: {
				$3: {
					latex: {},
				},
			},
			textbf: {
				latex: {},
			},
			textit: {
				latex: {},
			},
			texttt: {
				latex: {},
			},
			verb: {
				latex: {},
			},
			verbatim: {
				latex: {},
			},
		},
		include: {
			latex: {},
		},
		math: {
			block: {
				latex: {},
				tex: {},
			},
		},
		parameter: {
			optional: {
				latex: {},
			},
		},
		preamble: {
			latex: {},
		},
		reference: {
			label: {
				latex: {},
			},
		},
		scope: {
			item: {
				latex: {},
			},
		},
		'space-after-command': {
			latex: {},
		},
	},
	punctuation: {
		definition: {
			arguments: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
				optional: {
					begin: {
						latex: {},
					},
					end: {
						latex: {},
					},
				},
			},
			begin: {
				latex: {},
			},
			'column-specials': {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			comment: {
				latex: {},
				tex: {},
			},
			constant: {
				latex: {},
			},
			emph: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			end: {
				latex: {},
			},
			footnote: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			function: {
				latex: {},
			},
			keyword: {
				latex: {},
			},
			marginpar: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			string: {
				begin: {
					latex: {},
					tex: {},
				},
				end: {
					latex: {},
					tex: {},
				},
			},
			textbf: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			textit: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			texttt: {
				begin: {
					latex: {},
				},
				end: {
					latex: {},
				},
			},
			verb: {
				latex: {},
			},
		},
	},
	source: {
		julia: {},
		python: {},
	},
	storage: {
		type: {
			function: {
				latex: {},
			},
		},
	},
	support: {
		class: {
			chord: {
				block: {
					environment: {
						latex: {},
					},
				},
			},
			math: {
				block: {
					environment: {
						latex: {},
					},
					tex: {},
				},
			},
		},
		function: {
			be: {
				latex: {},
			},
			emph: {
				latex: {},
			},
			footnote: {
				latex: {},
			},
			general: {
				latex: {},
			},
			marginpar: {
				latex: {},
			},
			section: {
				latex: {},
			},
			textbf: {
				latex: {},
			},
			textit: {
				latex: {},
			},
			texttt: {
				latex: {},
			},
			url: {
				latex: {},
			},
			verb: {
				latex: {},
			},
		},
	},
	variable: {
		parameter: {
			definition: {
				label: {
					latex: {},
				},
			},
			function: {
				latex: {},
			},
		},
	},
} as const);
