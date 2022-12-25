import {
	createTypescriptDefinitions,
	fetchDefinitionsHtml,
	parseDefinitionsHtml,
} from './updateDefinitions.lib.js';

async function main() {
	await createTypescriptDefinitions(
		await parseDefinitionsHtml(await fetchDefinitionsHtml()),
	);
}

await main();
