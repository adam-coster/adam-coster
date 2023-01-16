export const scopeNames = Object.freeze(['text.git-commit'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				'git-commit': {},
			},
		},
	},
	invalid: {
		deprecated: {
			'line-too-long': {
				'git-commit': {},
			},
		},
		illegal: {
			'line-too-long': {
				'git-commit': {},
			},
		},
	},
	keyword: {
		other: {
			$2: {
				'git-commit': {},
			},
		},
	},
	markup: {
		changed: {
			'git-commit': {},
		},
		deleted: {
			'git-commit': {},
		},
		inserted: {
			'git-commit': {},
		},
	},
	meta: {
		embedded: {
			diff: {
				'git-commit': {},
			},
		},
		scope: {
			message: {
				'git-commit': {},
			},
			metadata: {
				'git-commit': {},
			},
			subject: {
				'git-commit': {},
			},
		},
	},
	punctuation: {
		definition: {
			comment: {
				'git-commit': {},
			},
		},
		whitespace: {
			comment: {
				leading: {
					'git-commit': {},
				},
			},
		},
	},
} as const);
