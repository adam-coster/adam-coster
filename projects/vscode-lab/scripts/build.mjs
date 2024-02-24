import esbuild from 'esbuild';

esbuild.build({
	entryPoints: ['./src/extension.ts'],
	bundle: true,
	outdir: './dist/',
	target: 'esnext',
	keepNames: true,
	sourcemap: true,
	platform: 'node',
	nodePaths: ['node_modules'],
	external: ['vscode'],
	loader: {
		'.xml': 'text',
		'.html': 'text',
		'.node': 'file',
	},
	inject: ['./scripts/injection.js'],
	define: {
		'import.meta.url': 'import_meta_url',
		EXTENSION_VERSION: JSON.stringify(
			process.env.npm_package_version || '0.0.0',
		),
		EXTENSION_ENVIRONMENT: JSON.stringify(
			process.env.CI ? 'production' : 'development',
		),
	},
});
