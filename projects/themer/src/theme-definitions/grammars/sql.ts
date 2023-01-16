export const scopeNames = Object.freeze(['source.sql'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			c: {},
		},
		line: {
			'double-dash': {
				sql: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				slash: {
					sql: {},
				},
				sql: {},
			},
		},
		numeric: {
			sql: {},
		},
		other: {
			'database-name': {
				sql: {},
			},
			'table-name': {
				sql: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				sql: {},
			},
		},
	},
	keyword: {
		operator: {
			comparison: {
				sql: {},
			},
			concatenator: {
				sql: {},
			},
			math: {
				sql: {},
			},
			star: {
				sql: {},
			},
		},
		other: {
			DDL: {
				create: {
					II: {
						sql: {},
					},
				},
			},
			DML: {
				II: {
					sql: {},
				},
				sql: {},
			},
			LUW: {
				sql: {},
			},
			alias: {
				sql: {},
			},
			authorization: {
				sql: {},
			},
			cascade: {
				sql: {},
			},
			create: {
				sql: {},
			},
			'data-integrity': {
				sql: {},
			},
			'object-comments': {
				sql: {},
			},
			order: {
				sql: {},
			},
			sql: {},
			table: {
				sql: {},
			},
		},
	},
	meta: {
		alter: {
			sql: {},
		},
		block: {
			sql: {},
		},
		create: {
			sql: {},
		},
		drop: {
			sql: {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				sql: {},
			},
			string: {
				begin: {
					sql: {},
				},
				end: {
					sql: {},
				},
			},
		},
		section: {
			scope: {
				begin: {
					sql: {},
				},
				end: {
					sql: {},
				},
			},
		},
		whitespace: {
			comment: {
				leading: {
					sql: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			sql: {},
		},
		type: {
			sql: {},
		},
	},
	string: {
		interpolated: {
			sql: {},
		},
		other: {
			quoted: {
				brackets: {
					sql: {},
				},
			},
		},
		quoted: {
			double: {
				sql: {},
			},
			other: {
				backtick: {
					sql: {},
				},
			},
			single: {
				sql: {},
			},
		},
		regexp: {
			modr: {
				sql: {},
			},
			sql: {},
		},
	},
	support: {
		function: {
			aggregate: {
				sql: {},
			},
			analytic: {
				sql: {},
			},
			bitmanipulation: {
				sql: {},
			},
			collation: {
				sql: {},
			},
			conversion: {
				sql: {},
			},
			cryptographic: {
				sql: {},
			},
			cursor: {
				sql: {},
			},
			datatype: {
				sql: {},
			},
			datetime: {
				sql: {},
			},
			expression: {
				sql: {},
			},
			globalvar: {
				sql: {},
			},
			json: {
				sql: {},
			},
			logical: {
				sql: {},
			},
			mathematical: {
				sql: {},
			},
			metadata: {
				sql: {},
			},
			ranking: {
				sql: {},
			},
			rowset: {
				sql: {},
			},
			security: {
				sql: {},
			},
			string: {
				sql: {},
			},
			system: {
				sql: {},
			},
			textimage: {
				sql: {},
			},
		},
	},
	text: {
		bracketed: {},
		variable: {},
	},
} as const);
