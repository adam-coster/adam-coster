export const scopeNames = Object.freeze(['source.cs'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			cs: {},
			documentation: {
				cs: {},
			},
		},
		line: {
			'double-slash': {
				cs: {},
			},
		},
	},
	constant: {
		character: {
			entity: {
				cs: {},
			},
			escape: {
				cs: {},
			},
		},
		language: {
			boolean: {
				false: {
					cs: {},
				},
				true: {
					cs: {},
				},
			},
			null: {
				cs: {},
			},
		},
		numeric: {
			binary: {
				cs: {},
			},
			decimal: {
				cs: {},
			},
			hex: {
				cs: {},
			},
			other: {
				exponent: {
					cs: {},
				},
				preffix: {
					binary: {
						cs: {},
					},
					hex: {
						cs: {},
					},
				},
				separator: {
					decimals: {
						cs: {},
					},
					thousands: {
						cs: {},
					},
				},
				suffix: {
					cs: {},
				},
			},
		},
	},
	entity: {
		name: {
			function: {
				cs: {},
			},
			label: {
				cs: {},
			},
			tag: {
				cs: {},
				localname: {
					cs: {},
				},
				namespace: {
					cs: {},
				},
			},
			type: {
				alias: {
					cs: {},
				},
				class: {
					cs: {},
				},
				cs: {},
				delegate: {
					cs: {},
				},
				enum: {
					cs: {},
				},
				interface: {
					cs: {},
				},
				namespace: {
					cs: {},
				},
				record: {
					cs: {},
				},
				struct: {
					cs: {},
				},
				'type-parameter': {
					cs: {},
				},
			},
			variable: {
				'enum-member': {
					cs: {},
				},
				event: {
					cs: {},
				},
				field: {
					cs: {},
				},
				local: {
					cs: {},
				},
				parameter: {
					cs: {},
				},
				preprocessor: {
					symbol: {
						cs: {},
					},
				},
				property: {
					cs: {},
				},
				'range-variable': {
					cs: {},
				},
				'tuple-element': {
					cs: {},
				},
			},
		},
		other: {
			'attribute-name': {
				cs: {},
				localname: {
					cs: {},
				},
				namespace: {
					cs: {},
				},
			},
		},
	},
	invalid: {
		illegal: {
			'bad-ampersand': {
				cs: {},
			},
			constant: {
				numeric: {
					cs: {},
				},
			},
			newline: {
				cs: {},
			},
		},
	},
	keyword: {
		control: {
			case: {
				cs: {},
			},
			conditional: {
				else: {
					cs: {},
				},
				if: {
					cs: {},
				},
			},
			default: {
				cs: {},
			},
			flow: {
				break: {
					cs: {},
				},
				continue: {
					cs: {},
				},
				return: {
					cs: {},
				},
				throw: {
					cs: {},
				},
				yield: {
					cs: {},
				},
			},
			goto: {
				cs: {},
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
				when: {
					cs: {},
				},
			},
		},
		operator: {
			arithmetic: {
				cs: {},
			},
			arrow: {
				cs: {},
			},
			assignment: {
				compound: {
					bitwise: {
						cs: {},
					},
					cs: {},
				},
				cs: {},
			},
			bitwise: {
				cs: {},
				shift: {
					cs: {},
				},
			},
			comparison: {
				cs: {},
			},
			conditional: {
				colon: {
					cs: {},
				},
				'question-mark': {
					cs: {},
				},
			},
			decrement: {
				cs: {},
			},
			increment: {
				cs: {},
			},
			logical: {
				cs: {},
			},
			'null-coalescing': {
				cs: {},
			},
			'null-conditional': {
				cs: {},
			},
			relational: {
				cs: {},
			},
		},
		other: {
			add: {
				cs: {},
			},
			alias: {
				cs: {},
			},
			as: {
				cs: {},
			},
			'attribute-specifier': {
				cs: {},
			},
			await: {
				cs: {},
			},
			base: {
				cs: {},
			},
			checked: {
				cs: {},
			},
			class: {
				cs: {},
			},
			default: {
				cs: {},
			},
			delegate: {
				cs: {},
			},
			enum: {
				cs: {},
			},
			event: {
				cs: {},
			},
			explicit: {
				cs: {},
			},
			extern: {
				cs: {},
			},
			get: {
				cs: {},
			},
			implicit: {
				cs: {},
			},
			init: {
				cs: {},
			},
			interface: {
				cs: {},
			},
			is: {
				cs: {},
			},
			lock: {
				cs: {},
			},
			nameof: {
				cs: {},
			},
			namespace: {
				cs: {},
			},
			new: {
				cs: {},
			},
			'operator-decl': {
				cs: {},
			},
			record: {
				cs: {},
			},
			remove: {
				cs: {},
			},
			set: {
				cs: {},
			},
			static: {
				cs: {},
			},
			struct: {
				cs: {},
			},
			this: {
				cs: {},
			},
			typeof: {
				cs: {},
			},
			unchecked: {
				cs: {},
			},
			using: {
				cs: {},
			},
			var: {
				cs: {},
			},
			where: {
				cs: {},
			},
		},
		preprocessor: {
			checksum: {
				cs: {},
			},
			default: {
				cs: {},
			},
			define: {
				cs: {},
			},
			disable: {
				cs: {},
			},
			elif: {
				cs: {},
			},
			else: {
				cs: {},
			},
			endif: {
				cs: {},
			},
			endregion: {
				cs: {},
			},
			error: {
				cs: {},
			},
			hidden: {
				cs: {},
			},
			if: {
				cs: {},
			},
			line: {
				cs: {},
			},
			load: {
				cs: {},
			},
			pragma: {
				cs: {},
			},
			r: {
				cs: {},
			},
			region: {
				cs: {},
			},
			restore: {
				cs: {},
			},
			undef: {
				cs: {},
			},
			warning: {
				cs: {},
			},
		},
		query: {
			ascending: {
				cs: {},
			},
			by: {
				cs: {},
			},
			descending: {
				cs: {},
			},
			equals: {
				cs: {},
			},
			from: {
				cs: {},
			},
			group: {
				cs: {},
			},
			in: {
				cs: {},
			},
			into: {
				cs: {},
			},
			join: {
				cs: {},
			},
			let: {
				cs: {},
			},
			on: {
				cs: {},
			},
			orderby: {
				cs: {},
			},
			select: {
				cs: {},
			},
			where: {
				cs: {},
			},
		},
		type: {
			cs: {},
		},
	},
	meta: {
		interpolation: {
			cs: {},
		},
		preprocessor: {
			cs: {},
		},
		tag: {
			cs: {},
		},
		type: {
			cs: {},
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
			char: {
				begin: {
					cs: {},
				},
				end: {
					cs: {},
				},
			},
			comment: {
				cs: {},
			},
			constant: {
				cs: {},
			},
			interpolation: {
				begin: {
					cs: {},
				},
				end: {
					cs: {},
				},
			},
			string: {
				begin: {
					cs: {},
				},
				end: {
					cs: {},
				},
			},
			tag: {
				cs: {},
			},
			typeparameters: {
				begin: {
					cs: {},
				},
				end: {
					cs: {},
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
		separator: {
			colon: {
				cs: {},
			},
			coloncolon: {
				cs: {},
			},
			comma: {
				cs: {},
			},
			equals: {
				cs: {},
			},
			hash: {
				cs: {},
			},
			'question-mark': {
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
		tilde: {
			cs: {},
		},
		whitespace: {
			comment: {
				leading: {
					cs: {},
				},
			},
		},
	},
	storage: {
		modifier: {
			cs: {},
		},
	},
	string: {
		quoted: {
			double: {
				cs: {},
			},
			single: {
				cs: {},
			},
		},
		unquoted: {
			cdata: {
				cs: {},
			},
			preprocessor: {
				message: {
					cs: {},
				},
			},
		},
	},
	variable: {
		other: {
			alias: {
				cs: {},
			},
			object: {
				cs: {},
				property: {
					cs: {},
				},
			},
			readwrite: {
				cs: {},
			},
		},
	},
} as const);
