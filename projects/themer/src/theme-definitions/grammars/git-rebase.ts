export const scopeNames = Object.freeze(['text.git-rebase'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'number-sign': {
				'git-rebase': {},
			},
		},
	},
	constant: {
		sha: {
			'git-rebase': {},
		},
	},
	meta: {
		'commit-command': {
			'git-rebase': {},
		},
		'commit-message': {
			'git-rebase': {},
		},
	},
	punctuation: {
		definition: {
			comment: {
				'git-rebase': {},
			},
		},
	},
	support: {
		function: {
			'git-rebase': {},
		},
	},
} as const);
