export const scopeNames = Object.freeze(['text.pug'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	args: {
		mixin: {
			pug: {},
		},
	},
	attribute_value: {},
	attribute_value2: {},
	comment: {
		unbuffered: {
			block: {
				pug: {},
			},
		},
	},
	constant: {
		character: {
			entity: {
				html: {
					text: {
						pug: {},
					},
				},
			},
			quoted: {
				pug: {},
			},
		},
		language: {
			name: {
				coffeescript: {
					filter: {
						pug: {},
					},
				},
				generic: {
					filter: {
						pug: {},
					},
				},
				js: {
					filter: {
						pug: {},
					},
				},
				less: {
					filter: {
						pug: {},
					},
				},
				sass: {
					filter: {
						pug: {},
					},
				},
				scss: {
					filter: {
						pug: {},
					},
				},
				stylus: {
					filter: {
						pug: {},
					},
				},
			},
		},
		name: {
			attribute: {
				tag: {
					pug: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				pug: {},
			},
			tag: {
				pug: {},
			},
		},
		other: {
			'attribute-name': {
				class: {
					pug: {},
				},
				id: {
					pug: {},
				},
				tag: {
					pug: {},
				},
			},
		},
	},
	html: {},
	inline: {
		pug: {},
	},
	invalid: {
		illegal: {
			comment: {
				comment: {
					block: {
						pug: {},
					},
				},
			},
			empty: {
				generic: {
					filter: {
						pug: {},
					},
				},
			},
			end: {
				tag: {
					pug: {},
				},
			},
			html_entity: {
				text: {
					pug: {},
				},
			},
			name: {
				generic: {
					filter: {
						pug: {},
					},
				},
				tag: {
					pug: {},
				},
			},
			tag: {
				pug: {},
			},
		},
	},
	js: {
		embedded: {
			control: {
				flow: {
					pug: {},
				},
			},
		},
		when: {
			control: {
				flow: {
					pug: {},
				},
			},
		},
	},
	meta: {
		control: {
			flow: {
				pug: {
					each: {},
				},
			},
		},
		'first-class': {
			pug: {},
		},
		tag: {
			other: {},
			sgml: {
				doctype: {
					html: {},
				},
			},
		},
	},
	name: {
		generic: {
			filter: {
				pug: {},
			},
		},
	},
	punctuation: {
		definition: {
			parameters: {
				begin: {
					js: {},
				},
			},
		},
	},
	source: {
		coffeescript: {
			filter: {
				pug: {},
			},
		},
		css: {
			scss: {
				filter: {
					pug: {},
				},
			},
		},
		js: {
			filter: {
				pug: {},
			},
		},
		less: {
			filter: {
				pug: {},
			},
		},
		sass: {
			filter: {
				pug: {},
			},
		},
	},
	storage: {
		type: {
			function: {
				pug: {
					'dot-block-dot': {},
				},
			},
			import: {
				include: {
					pug: {},
				},
			},
			keyword: {
				pug: {},
			},
		},
	},
	string: {
		comment: {
			buffered: {
				block: {
					pug: {},
				},
			},
		},
		interpolated: {
			pug: {},
		},
		quoted: {
			pug: {},
		},
	},
	tag: {
		case: {
			control: {
				flow: {
					pug: {},
				},
			},
		},
		inline: {
			pug: {},
		},
	},
	text: {
		block: {
			pipe: {
				pug: {},
			},
			pug: {},
		},
	},
	variable: {
		control: {
			import: {
				include: {
					pug: {},
				},
			},
		},
		other: {
			pug: {
				'each-var': {},
			},
		},
		parameter: {
			function: {
				js: {},
			},
			javascript: {
				embedded: {
					pug: {},
				},
			},
		},
	},
} as const);
