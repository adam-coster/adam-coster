module.exports = {
	root: true,
	env: { browser: true, es2020: true, mocha: true, node: true },
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		createDefaultProgram: true,
	},
	plugins: ['@typescript-eslint', 'html', 'prettier'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-misused-new': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		camelcase: 'off',
		'comma-dangle': ['error', 'only-multiline'],
		eqeqeq: 'off',
		'getter-return': 'off',
		'key-spacing': 'off',
		'no-constant-condition': 'off',
		'no-empty': 'off',
		'no-prototype-builtins': 'off',
		'no-redeclare': 'off',
		'no-restricted-imports': ['error', { paths: ['console'] }],
		'no-unused-vars': 'off',
		quotes: 'off',
		'require-await': 'error',
		'space-before-function-paren': 'off',
		'no-control-regex': 'warn',
		'no-misleading-character-class': 'warn',
	},
	overrides: [
		{
			files: ['*.svelte'],
			plugins: ['svelte3', '@typescript-eslint', 'prettier'],
			processor: 'svelte3/svelte3',
		},
		{
			files: ['**/cypress/**/*.js'],
			plugins: ['@typescript-eslint', 'cypress', 'prettier'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:cypress/recommended',
			],
			env: {
				'cypress/globals': true,
			},
		},
		{
			files: ['projects/*/**/*.ts'],
			parserOptions: {
				ecmaVersion: 'latest',
				parser: '@typescript-eslint/parser',
				sourceType: 'module',
				createDefaultProgram: true,
				project: ['./projects/**/tsconfig.json'],
			},
			rules: {
				'@typescript-eslint/no-floating-promises': 'error',
			},
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
};
