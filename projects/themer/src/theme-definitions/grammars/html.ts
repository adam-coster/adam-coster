export const scopeNames = Object.freeze(['text.html.derivative'] as const);
export const semanticTokens = Object.freeze(['component'] as const);
export const tokens = Object.freeze({
	comment: {
		block: {
			ts: {},
		},
	},
	entity: {
		name: {
			tag: {
				html: {},
			},
		},
	},
	invalid: {
		illegal: {
			'bad-angle-bracket': {
				html: {},
			},
		},
	},
	meta: {
		tag: {
			other: {
				unrecognized: {
					html: {
						derivative: {},
					},
				},
			},
		},
	},
	punctuation: {
		definition: {
			string: {
				template: {
					begin: {
						js: {},
					},
					end: {
						js: {},
					},
				},
			},
			tag: {
				begin: {
					html: {},
				},
				end: {
					html: {},
				},
			},
		},
	},
	string: {
		js: {
			taggedTemplate: {
				commentTaggedTemplate: {
					basic: {},
					c: {},
					clojure: {},
					coffee: {},
					cpp: {},
					csharp: {},
					css: {},
					dart: {},
					diff: {},
					dockerfile: {},
					dosbatch: {},
					fsharp: {},
					git_commit: {},
					git_rebase: {},
					glsl: {},
					go: {},
					graphql: {},
					groovy: {},
					ini: {},
					java: {},
					js: {},
					js_regexp: {},
					json: {},
					less: {},
					lua: {},
					makefile: {},
					md: {},
					objc: {},
					perl: {},
					perl6: {},
					php: {},
					powershell: {},
					pug: {},
					python: {},
					r: {},
					regexp_python: {},
					ruby: {},
					rust: {},
					scala: {},
					scss: {},
					shell: {},
					sql: {},
					ts: {},
					tsx: {},
					vs_net: {},
					xml: {},
					xsl: {},
					yaml: {},
				},
			},
		},
	},
} as const);
