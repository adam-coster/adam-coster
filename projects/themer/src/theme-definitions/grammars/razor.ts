export const scopeNames = Object.freeze(['text.html.cshtml'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	constant: {
		character: {
			escape: {
				razor: {
					tagHelperOptOut: {},
					transition: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				cs: {},
			},
			tag: {
				html: {},
			},
			type: {
				alias: {
					cs: {},
				},
				namespace: {
					cs: {},
				},
			},
			variable: {
				local: {
					cs: {},
				},
				property: {
					cs: {},
				},
			},
		},
	},
	keyword: {
		control: {
			conditional: {
				else: {
					cs: {},
				},
				if: {
					cs: {},
				},
			},
			cshtml: {
				transition: {
					textTag: {
						close: {},
						open: {},
					},
				},
			},
			loop: {
				do: {
					cs: {},
				},
				for: {
					cs: {},
				},
				foreach: {
					cs: {},
				},
				in: {
					cs: {},
				},
				while: {
					cs: {},
				},
			},
			razor: {
				comment: {
					star: {},
				},
				directive: {
					addTagHelper: {},
					attribute: {},
					code: {},
					codeblock: {
						close: {},
						open: {},
					},
					functions: {},
					implements: {},
					inherits: {},
					inject: {},
					layout: {},
					model: {},
					namespace: {},
					page: {},
					removeTagHelper: {},
					section: {},
					tagHelperPrefix: {},
				},
				optionalSemicolon: {},
				singleLineMarkup: {},
			},
			switch: {
				cs: {},
			},
			try: {
				catch: {
					cs: {},
				},
				cs: {},
				finally: {
					cs: {},
				},
			},
		},
		operator: {
			assignment: {
				cs: {},
			},
			logical: {
				cs: {},
			},
			'null-conditional': {
				cs: {},
			},
		},
		other: {
			await: {
				cs: {},
			},
			lock: {
				cs: {},
			},
			static: {
				cs: {},
			},
			using: {
				cs: {},
			},
			var: {
				cs: {},
			},
		},
	},
	meta: {
		comment: {
			razor: {},
		},
		directive: {
			block: {},
		},
		expression: {
			explicit: {
				cshtml: {},
			},
			implicit: {
				cshtml: {},
			},
		},
		statement: {
			catch: {
				razor: {},
			},
			do: {
				razor: {},
			},
			else: {
				razor: {},
			},
			finally: {
				razor: {},
			},
			for: {
				razor: {},
			},
			foreach: {
				razor: {},
			},
			if: {
				razor: {},
			},
			lock: {
				razor: {},
			},
			switch: {
				razor: {},
			},
			try: {
				razor: {},
			},
			using: {
				razor: {},
			},
			while: {
				razor: {},
			},
		},
		structure: {
			razor: {
				codeblock: {},
				csharp: {
					codeblock: {
						switch: {},
					},
				},
				directive: {
					codeblock: {},
					markblock: {},
				},
			},
		},
		tag: {
			structure: {
				$3: {
					void: {
						html: {},
					},
				},
			},
		},
	},
	punctuation: {
		accessor: {
			cs: {},
		},
		curlybrace: {
			close: {
				cs: {},
			},
			open: {
				cs: {},
			},
		},
		definition: {
			tag: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
		},
		parenthesis: {
			close: {
				cs: {},
			},
			open: {
				cs: {},
			},
		},
		squarebracket: {
			close: {
				cs: {},
			},
			open: {
				cs: {},
			},
		},
		terminator: {
			statement: {
				cs: {},
			},
		},
	},
	razor: {
		test: {
			balanced: {
				brackets: {},
				parenthesis: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				cs: {},
			},
		},
	},
	variable: {
		other: {
			object: {
				cs: {},
				property: {
					cs: {},
				},
			},
			razor: {
				directive: {
					sectionName: {},
				},
			},
		},
	},
} as const);
