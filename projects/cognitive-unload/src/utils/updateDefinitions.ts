import {
	createTypescriptDefinitions,
	fetchDefinitionsHtml,
	parseDefinitionsHtml,
} from './updateDefinitions.lib.js';
import { findGrammarTokens } from './updateDefinitions.tm.js';

async function main() {
	await createTypescriptDefinitions(
		await parseDefinitionsHtml(await fetchDefinitionsHtml()),
		await findGrammarTokens(),
	);
}

await main();
