export const scopeNames = Object.freeze(['source.perl.6'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			perl: {},
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
				perl: {},
			},
		},
		numeric: {
			perl: {},
		},
	},
	entity: {
		name: {
			type: {
				class: {
					perl: {
						'6': {},
					},
				},
			},
		},
	},
	keyword: {
		control: {
			conditional: {
				perl: {},
			},
			'control-handlers': {
				perl: {},
			},
			flowcontrol: {
				perl: {},
			},
			repeat: {
				perl: {},
			},
		},
		operator: {
			perl: {},
		},
		other: {
			include: {
				perl: {},
			},
			pragma: {
				perl: {},
			},
		},
	},
	meta: {
		class: {
			perl: {
				'6': {},
			},
		},
		function: {
			perl: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				perl: {},
			},
			string: {
				begin: {
					perl: {},
				},
				end: {
					perl: {},
				},
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
	storage: {
		modifier: {
			perl: {},
			type: {
				constraints: {
					perl: {},
				},
			},
		},
		type: {
			class: {
				perl: {
					'6': {},
				},
			},
			declare: {
				routine: {
					perl: {},
				},
			},
			variable: {
				perl: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				heredoc: {
					brace: {
						perl: {},
					},
					bracket: {
						perl: {},
					},
					paren: {
						perl: {},
					},
				},
				perl: {},
			},
			single: {
				heredoc: {
					brace: {
						perl: {},
					},
					bracket: {
						perl: {},
					},
					double: {
						perl: {},
					},
					paren: {
						perl: {},
					},
					perl: {},
					single: {
						perl: {},
					},
					slash: {
						perl: {},
					},
				},
				perl: {},
			},
		},
	},
	support: {
		function: {
			perl: {},
		},
		type: {
			perl6: {},
		},
	},
	variable: {
		language: {
			perl: {},
		},
		other: {
			identifier: {
				perl: {
					'6': {},
				},
			},
			perl: {},
		},
	},
} as const);
