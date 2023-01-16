export const scopeNames = Object.freeze([
	'source.php',
	'text.html.php',
] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			documentation: {
				phpdoc: {
					php: {},
				},
			},
			php: {},
		},
		line: {
			'double-dash': {
				sql: {},
			},
			'double-slash': {
				php: {},
			},
			'number-sign': {
				php: {},
				sql: {},
			},
			shebang: {
				php: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				hex: {
					php: {},
				},
				octal: {
					php: {},
				},
				php: {},
				regex: {
					php: {},
				},
				unicode: {
					php: {},
				},
			},
		},
		enum: {
			php: {},
		},
		language: {
			php: {},
		},
		numeric: {
			binary: {
				php: {},
			},
			decimal: {
				php: {},
			},
			hex: {
				php: {},
			},
			index: {
				php: {},
			},
			octal: {
				php: {},
			},
		},
		other: {
			class: {
				php: {},
			},
			php: {},
		},
	},
	entity: {
		name: {
			function: {
				php: {},
			},
			'goto-label': {
				php: {},
			},
			type: {
				class: {
					php: {},
				},
				enum: {
					php: {},
				},
				interface: {
					php: {},
				},
				namespace: {
					php: {},
				},
				trait: {
					php: {},
				},
			},
			variable: {
				parameter: {
					php: {},
				},
			},
		},
		other: {
			alias: {
				php: {},
			},
			'inherited-class': {
				php: {},
			},
		},
	},
	invalid: {
		illegal: {
			identifier: {
				php: {},
			},
			'missing-asterisk': {
				phpdoc: {
					php: {},
				},
			},
			'return-type': {
				php: {},
			},
			'trailing-whitespace': {
				php: {},
			},
			'wrong-access-type': {
				phpdoc: {
					php: {},
				},
			},
		},
	},
	keyword: {
		control: {
			'${1:/downcase}': {
				php: {},
			},
			exception: {
				catch: {
					php: {},
				},
				php: {},
			},
			goto: {
				php: {},
			},
			import: {
				include: {
					php: {},
				},
			},
			match: {
				php: {},
			},
			switch: {
				php: {},
			},
			'yield-from': {
				php: {},
			},
		},
		definition: {
			arrow: {
				php: {},
			},
		},
		operator: {
			arithmetic: {
				php: {},
			},
			assignment: {
				php: {},
			},
			bitwise: {
				php: {},
			},
			class: {
				php: {},
			},
			comparison: {
				php: {},
			},
			'error-control': {
				php: {},
			},
			heredoc: {
				php: {},
			},
			'increment-decrement': {
				php: {},
			},
			key: {
				php: {},
			},
			logical: {
				php: {},
			},
			nowdoc: {
				php: {},
			},
			'null-coalescing': {
				php: {},
			},
			'nullable-type': {
				php: {},
			},
			regexp: {
				php: {},
			},
			'return-value': {
				php: {},
			},
			spread: {
				php: {},
			},
			string: {
				php: {},
			},
			ternary: {
				php: {},
			},
			type: {
				php: {},
			},
			variadic: {
				php: {},
			},
		},
		other: {
			array: {
				phpdoc: {
					php: {},
				},
			},
			class: {
				php: {},
			},
			clone: {
				php: {},
			},
			function: {
				use: {
					php: {},
				},
			},
			namespace: {
				php: {},
			},
			new: {
				php: {},
			},
			phpdoc: {
				php: {},
			},
			type: {
				never: {
					php: {},
				},
				php: {},
			},
			use: {
				php: {},
			},
			'use-as': {
				php: {},
			},
			'use-insteadof': {
				php: {},
			},
		},
	},
	markup: {
		underline: {
			link: {
				php: {},
			},
		},
	},
	meta: {
		array: {
			empty: {
				php: {},
			},
			php: {},
		},
		attribute: {
			php: {},
		},
		catch: {
			php: {},
		},
		class: {
			php: {},
		},
		embedded: {
			block: {
				php: {},
			},
			css: {},
			html: {},
			js: {},
			json: {},
			line: {
				php: {},
			},
			php: {
				blade: {},
			},
			sql: {},
			xml: {},
		},
		enum: {
			php: {},
		},
		function: {
			closure: {
				php: {},
				use: {
					php: {},
				},
			},
			parameter: {
				default: {
					php: {},
				},
				'no-default': {
					php: {},
				},
				'promoted-property': {
					php: {},
				},
				typehinted: {
					php: {},
				},
				variadic: {
					php: {},
				},
			},
			php: {},
		},
		'function-call': {
			invoke: {
				php: {},
			},
			php: {},
		},
		include: {
			php: {},
		},
		interface: {
			php: {},
		},
		'match-statement': {
			php: {},
		},
		'method-call': {
			php: {},
			static: {
				php: {},
			},
		},
		namespace: {
			php: {},
		},
		'switch-statement': {
			php: {},
		},
		tag: {
			inline: {
				phpdoc: {
					php: {},
				},
			},
		},
		trait: {
			php: {},
		},
		use: {
			php: {},
		},
	},
	punctuation: {
		definition: {
			'arbitrary-repetition': {
				php: {},
			},
			'arbitrary-repitition': {
				php: {},
			},
			arguments: {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			array: {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			arrow: {
				php: {},
			},
			begin: {
				bracket: {
					curly: {
						php: {},
					},
					round: {
						php: {},
					},
				},
			},
			'character-class': {
				php: {},
			},
			class: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			comment: {
				php: {},
				sql: {},
			},
			end: {
				bracket: {
					curly: {
						php: {},
					},
					round: {
						php: {},
					},
				},
			},
			enum: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			interface: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			'match-expression': {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			namespace: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			parameters: {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			section: {
				'match-block': {
					begin: {
						bracket: {
							curly: {
								php: {},
							},
						},
					},
					end: {
						bracket: {
							curly: {
								php: {},
							},
						},
					},
				},
				'switch-block': {
					begin: {
						bracket: {
							curly: {
								php: {},
							},
						},
					},
					end: {
						bracket: {
							curly: {
								php: {},
							},
						},
					},
				},
			},
			'storage-type': {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			string: {
				begin: {
					php: {},
				},
				end: {
					php: {},
				},
				php: {},
			},
			'switch-expression': {
				begin: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						round: {
							php: {},
						},
					},
				},
			},
			trait: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			type: {
				begin: {
					bracket: {
						round: {
							phpdoc: {
								php: {},
							},
						},
					},
				},
				end: {
					bracket: {
						round: {
							phpdoc: {
								php: {},
							},
						},
					},
				},
			},
			use: {
				begin: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
				end: {
					bracket: {
						curly: {
							php: {},
						},
					},
				},
			},
			variable: {
				php: {},
			},
		},
		section: {
			array: {
				begin: {
					php: {},
				},
				end: {
					php: {},
				},
			},
			embedded: {
				begin: {
					php: {},
				},
				end: {
					php: {},
				},
			},
		},
		separator: {
			classes: {
				php: {},
			},
			colon: {
				php: {},
			},
			decimal: {
				period: {
					php: {},
				},
			},
			delimiter: {
				php: {},
			},
			inheritance: {
				php: {},
			},
		},
		terminator: {
			expression: {
				php: {},
			},
			statement: {
				php: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					php: {},
				},
			},
		},
	},
	source: {
		php: {},
	},
	storage: {
		modifier: {
			'${1:/downcase}': {
				php: {},
			},
			extends: {
				php: {},
			},
			implements: {
				php: {},
			},
			php: {},
			reference: {
				php: {},
			},
		},
		type: {
			'${1:/downcase}': {
				php: {},
			},
			class: {
				php: {},
			},
			enum: {
				php: {},
			},
			function: {
				php: {},
			},
			interface: {
				php: {},
			},
			php: {},
			trait: {
				php: {},
			},
		},
	},
	string: {
		interpolated: {
			php: {},
		},
		quoted: {
			double: {
				php: {},
				sql: {
					php: {},
				},
				unclosed: {
					sql: {},
				},
			},
			other: {
				backtick: {
					sql: {},
					unclosed: {
						sql: {},
					},
				},
			},
			single: {
				php: {},
				sql: {
					php: {},
				},
				unclosed: {
					sql: {},
				},
			},
		},
		regexp: {
			'arbitrary-repetition': {
				php: {},
			},
			'arbitrary-repitition': {
				php: {},
			},
			'character-class': {
				php: {},
			},
			'double-quoted': {
				php: {},
			},
			'single-quoted': {
				php: {},
			},
		},
		unquoted: {
			heredoc: {
				php: {},
			},
			index: {
				php: {},
			},
			nowdoc: {
				php: {},
			},
		},
	},
	support: {
		attribute: {
			builtin: {
				php: {},
			},
			php: {},
		},
		class: {
			builtin: {
				php: {},
			},
			exception: {
				php: {},
			},
			php: {},
		},
		constant: {
			core: {
				php: {},
			},
			ext: {
				php: {},
			},
			'parser-token': {
				php: {},
			},
			std: {
				php: {},
			},
		},
		function: {
			alias: {
				php: {},
			},
			apc: {
				php: {},
			},
			array: {
				php: {},
			},
			basic_functions: {
				php: {},
			},
			bcmath: {
				php: {},
			},
			blenc: {
				php: {},
			},
			bz2: {
				php: {},
			},
			calendar: {
				php: {},
			},
			classobj: {
				php: {},
			},
			com: {
				php: {},
			},
			construct: {
				output: {
					php: {},
				},
				php: {},
			},
			ctype: {
				php: {},
			},
			curl: {
				php: {},
			},
			datetime: {
				php: {},
			},
			dba: {
				php: {},
			},
			dbx: {
				php: {},
			},
			dir: {
				php: {},
			},
			eio: {
				php: {},
			},
			enchant: {
				php: {},
			},
			ereg: {
				php: {},
			},
			errorfunc: {
				php: {},
			},
			exec: {
				php: {},
			},
			exif: {
				php: {},
			},
			fann: {
				php: {},
			},
			file: {
				php: {},
			},
			fileinfo: {
				php: {},
			},
			filter: {
				php: {},
			},
			fpm: {
				php: {},
			},
			funchand: {
				php: {},
			},
			gettext: {
				php: {},
			},
			gmp: {
				php: {},
			},
			hash: {
				php: {},
			},
			http: {
				php: {},
			},
			iconv: {
				php: {},
			},
			iisfunc: {
				php: {},
			},
			image: {
				php: {},
			},
			info: {
				php: {},
			},
			interbase: {
				php: {},
			},
			intl: {
				php: {},
			},
			json: {
				php: {},
			},
			ldap: {
				php: {},
			},
			libxml: {
				php: {},
			},
			magic: {
				php: {},
			},
			mail: {
				php: {},
			},
			math: {
				php: {},
			},
			mbstring: {
				php: {},
			},
			mcrypt: {
				php: {},
			},
			memcache: {
				php: {},
			},
			mhash: {
				php: {},
			},
			mongo: {
				php: {},
			},
			mysql: {
				php: {},
			},
			mysqli: {
				php: {},
			},
			'mysqlnd-memcache': {
				php: {},
			},
			'mysqlnd-ms': {
				php: {},
			},
			'mysqlnd-qc': {
				php: {},
			},
			'mysqlnd-uh': {
				php: {},
			},
			network: {
				php: {},
			},
			nsapi: {
				php: {},
			},
			oci8: {
				php: {},
			},
			opcache: {
				php: {},
			},
			openssl: {
				php: {},
			},
			output: {
				php: {},
			},
			password: {
				php: {},
			},
			pcntl: {
				php: {},
			},
			pgsql: {
				php: {},
			},
			php_apache: {
				php: {},
			},
			php_dom: {
				php: {},
			},
			php_ftp: {
				php: {},
			},
			php_imap: {
				php: {},
			},
			php_mssql: {
				php: {},
			},
			php_odbc: {
				php: {},
			},
			php_pcre: {
				php: {},
			},
			php_spl: {
				php: {},
			},
			php_zip: {
				php: {},
			},
			posix: {
				php: {},
			},
			proctitle: {
				php: {},
			},
			pspell: {
				php: {},
			},
			readline: {
				php: {},
			},
			recode: {
				php: {},
			},
			rrd: {
				php: {},
			},
			sem: {
				php: {},
			},
			session: {
				php: {},
			},
			shmop: {
				php: {},
			},
			simplexml: {
				php: {},
			},
			snmp: {
				php: {},
			},
			soap: {
				php: {},
			},
			sockets: {
				php: {},
			},
			sqlite: {
				php: {},
			},
			sqlsrv: {
				php: {},
			},
			stats: {
				php: {},
			},
			streamsfuncs: {
				php: {},
			},
			string: {
				php: {},
			},
			sybase: {
				php: {},
			},
			taint: {
				php: {},
			},
			tidy: {
				php: {},
			},
			tokenizer: {
				php: {},
			},
			trader: {
				php: {},
			},
			uopz: {
				php: {},
			},
			url: {
				php: {},
			},
			var: {
				php: {},
			},
			wddx: {
				php: {},
			},
			xhprof: {
				php: {},
			},
			xml: {
				php: {},
			},
			xmlrpc: {
				php: {},
			},
			xmlwriter: {
				php: {},
			},
			zlib: {
				php: {},
			},
		},
		other: {
			namespace: {
				php: {},
			},
			php: {},
		},
	},
	variable: {
		language: {
			namespace: {
				php: {},
			},
			this: {
				php: {},
			},
		},
		other: {
			class: {
				php: {},
			},
			global: {
				php: {},
				safer: {
					php: {},
				},
			},
			index: {
				php: {},
			},
			php: {},
			property: {
				php: {},
			},
		},
	},
} as const);
