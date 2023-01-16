export const scopeNames = Object.freeze(['source.makefile'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				makefile: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				continuation: {
					makefile: {},
				},
			},
		},
		other: {
			placeholder: {
				makefile: {},
			},
		},
	},
	entity: {
		name: {
			function: {
				target: {
					makefile: {},
				},
			},
		},
	},
	keyword: {
		control: {
			$1: {
				makefile: {},
			},
			define: {
				makefile: {},
			},
			else: {
				makefile: {},
			},
			include: {
				makefile: {},
			},
			override: {
				makefile: {},
			},
			vpath: {
				makefile: {},
			},
		},
	},
	meta: {
		scope: {
			condition: {
				makefile: {},
			},
			conditional: {
				makefile: {},
			},
			'function-call': {
				makefile: {},
			},
			prerequisites: {
				makefile: {},
			},
			recipe: {
				makefile: {},
			},
			target: {
				makefile: {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				makefile: {},
			},
			variable: {
				makefile: {},
			},
		},
		separator: {
			delimeter: {
				comma: {
					makefile: {},
				},
			},
			'key-value': {
				makefile: {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					makefile: {},
				},
			},
		},
	},
	string: {
		interpolated: {
			makefile: {},
		},
	},
	support: {
		function: {
			$1: {
				makefile: {},
			},
			target: {
				$1: {
					makefile: {},
				},
			},
		},
	},
	variable: {
		language: {
			makefile: {},
		},
		other: {
			makefile: {},
		},
	},
} as const);
