export const scopeNames = Object.freeze(['source.shaderlab'] as const);
export const semanticTokens = Object.freeze([] as const);
export const tokens = Object.freeze({
	comment: {
		line: {
			'double-slash': {
				shaderlab: {},
			},
		},
	},
	constant: {
		numeric: {
			shaderlab: {},
		},
	},
	keyword: {
		other: {},
	},
	meta: {
		attribute: {
			shaderlab: {},
		},
		cgblock: {},
		hlslblock: {},
	},
	storage: {
		type: {
			basic: {
				shaderlab: {},
			},
			structure: {
				shaderlab: {},
			},
		},
	},
	string: {
		quoted: {
			double: {
				shaderlab: {},
			},
		},
	},
	support: {
		class: {
			structures: {
				shaderlab: {},
			},
			surface: {
				shaderlab: {},
			},
		},
		constant: {
			'property-value': {
				bindchannels: {
					shaderlab: {},
				},
				blendfactors: {
					shaderlab: {},
				},
				blendoperations: {
					shaderlab: {},
				},
				comparisonfunction: {
					shaderlab: {},
				},
				fog: {
					shaderlab: {},
				},
				shaderlab: {},
				stenciloperation: {
					shaderlab: {},
				},
				texturecombiners: {
					shaderlab: {},
				},
			},
		},
		type: {
			attributename: {
				shaderlab: {},
			},
			basic: {
				shaderlab: {},
			},
			propertyname: {
				shaderlab: {},
			},
		},
		variable: {
			camera: {
				shaderlab: {},
			},
			declaration: {
				shaderlab: {},
			},
			fog: {
				shaderlab: {},
			},
			lighting: {
				shaderlab: {},
			},
			preprocessor: {
				platformdifference: {
					shaderlab: {},
				},
				targetmodel: {
					shaderlab: {},
				},
				targetplatform: {
					shaderlab: {},
				},
				texture2D: {
					shaderlab: {},
				},
				unityversion: {
					shaderlab: {},
				},
			},
			reference: {
				shaderlab: {},
			},
			time: {
				shaderlab: {},
			},
			transformations: {
				shaderlab: {},
			},
			various: {
				shaderlab: {},
			},
		},
	},
} as const);
