import { pathy } from '@bscotch/pathy';
import {
	ThemeSelectorDefinitions,
	themeSelectorDefinitionsSchema,
} from 'lib/types';
import fetch from 'node-fetch';

export async function fetchDefinitionsHtml(): Promise<string> {
	const themeDefinitionsUrl = `https://code.visualstudio.com/api/references/theme-color`;

	const themeDefinitionsHtmlPath = pathy('tmp/theme-definitions.html');
	const themeDefinitionsHtml = await fetch(themeDefinitionsUrl).then((res) =>
		res.text(),
	);
	await themeDefinitionsHtmlPath.write(themeDefinitionsHtml);
	return themeDefinitionsHtml;
}

/**
 * Selectors are either a string without dots (representing
 * base components) or a <element>.<type> pair, where "type"
 * is something like "activeForeground".
 *
 * This function splits the "type" part of the selector into
 * lower-cased parts.
 */
function splitSelectorType(selector: string) {
	const type = selector.split('.').at(-1)!;
	const components = type.split(/(?=[A-Z])/).map((s) => s.toLowerCase());
	return {
		type,
		components,
		first: components[0],
		last: components.at(-1)!,
	};
}

export async function parseDefinitionsHtml(
	themeDefinitionsHtml: string,
): Promise<ThemeSelectorDefinitions> {
	const themeDefinitionsJsonPath = pathy('tmp/theme-definitions.json', {
		validator: themeSelectorDefinitionsSchema,
	});
	const selectors: Set<string> = new Set();
	const selectorParts: ReturnType<typeof splitSelectorType>[] = [];
	const themeDefinitions = [
		...themeDefinitionsHtml.matchAll(
			/<li><code>(?<selector>[a-zA-Z0-9.-]+)<\/code>:\s*(?<description>.*?)<\/li>/gms,
		),
	]
		.map((d) => {
			if (selectors.has(d.groups!.selector)) {
				return;
			}
			selectors.add(d.groups!.selector);
			return d.groups;
		})
		.filter(Boolean) as { selector: string; description: string }[];

	await themeDefinitionsJsonPath.write(themeDefinitions);
	return themeDefinitions;
}

export async function createTypescriptDefinitions(
	themeDefinitions: ThemeSelectorDefinitions,
): Promise<void> {
	const themeDefinitionsTypescriptPath = pathy(
		'src/lib/themeSelectorDefinitions.ts',
	);

	const themeDefinitionsTypescript = themeDefinitions.map((d) => {
		return `  /**
   * ${d!.description}
   */
  '${d!.selector}': ${JSON.stringify(d)}`;
	});

	await themeDefinitionsTypescriptPath.write(
		`export const appSelectorDefinitions = \n{${themeDefinitionsTypescript.join(
			',\n',
		)}\n};\nexport const appSelectorNames: (keyof typeof appSelectorDefinitions)[] = Object.keys(appSelectorDefinitions) as any;\n`,
	);
}
