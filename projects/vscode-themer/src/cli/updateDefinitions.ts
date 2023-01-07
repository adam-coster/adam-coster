import { createTypescriptDefinitions } from './updateDefinitions.lib.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const args = hideBin(process.argv);

const options = await yargs(args)
	.option('outDir', {
		alias: 'o',
		type: 'string',
		description: 'Output directory for the generated files',
		default: 'src/theme-definitions',
	})
	.parse();

await createTypescriptDefinitions(options.outDir);
