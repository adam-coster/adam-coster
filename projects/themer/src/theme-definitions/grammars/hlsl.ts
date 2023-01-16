export const scopeNames = Object.freeze(['source.hlsl'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			block: {
				hlsl: {},
			},
			'double-slash': {
				hlsl: {},
			},
		},
	},
	constant: {
		character: {
			escape: {
				hlsl: {},
			},
		},
		language: {
			hlsl: {},
		},
		numeric: {
			decimal: {
				hlsl: {},
			},
			hex: {
				hlsl: {},
			},
		},
	},
	keyword: {
		control: {
			fx: {
				hlsl: {},
			},
			hlsl: {},
		},
		preprocessor: {
			hlsl: {},
		},
		typealias: {
			hlsl: {},
		},
	},
	meta: {
		'object-literal': {
			key: {
				fx: {
					blendstate: {
						hlsl: {},
					},
					depthstencilstate: {
						hlsl: {},
					},
					rasterizerstate: {
						hlsl: {},
					},
					samplerstate: {
						hlsl: {},
					},
				},
			},
		},
	},
	storage: {
		modifier: {
			float: {
				hlsl: {},
			},
			geometryshader: {
				hlsl: {},
			},
			hlsl: {},
			interpolation: {
				hlsl: {},
			},
			postfix: {
				hlsl: {},
			},
		},
		type: {
			basic: {
				hlsl: {},
			},
			fx: {
				technique: {
					hlsl: {},
				},
			},
			structured: {
				hlsl: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				hlsl: {},
			},
		},
	},
	support: {
		constant: {
			'property-value': {
				fx: {
					blend: {
						hlsl: {},
					},
					blendop: {
						hlsl: {},
					},
					comparisonfunc: {
						hlsl: {},
					},
					cullmode: {
						hlsl: {},
					},
					depthwritemask: {
						hlsl: {},
					},
					fillmode: {
						hlsl: {},
					},
					filter: {
						hlsl: {},
					},
					hlsl: {},
					stencilop: {
						hlsl: {},
					},
					textureaddressmode: {
						hlsl: {},
					},
				},
			},
		},
		function: {
			hlsl: {},
		},
		type: {
			fx: {
				hlsl: {},
			},
			object: {
				geometryshader: {
					hlsl: {},
				},
				hlsl: {},
				rasterizerordered: {
					hlsl: {},
				},
				rw: {
					hlsl: {},
				},
			},
			other: {
				hlsl: {},
			},
			sampler: {
				hlsl: {},
				legacy: {
					hlsl: {},
				},
			},
			texture: {
				hlsl: {},
				legacy: {
					hlsl: {},
				},
			},
		},
		variable: {
			semantic: {
				hlsl: {},
				sm4: {
					hlsl: {},
				},
				sm5: {
					hlsl: {},
				},
				sm5_1: {
					hlsl: {},
				},
			},
		},
	},
} as const);
