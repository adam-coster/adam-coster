import { pathy } from '@bscotch/pathy';
import fetch from 'node-fetch';
import {
	ThemeSelectorDefinitions,
	themeSelectorDefinitionsSchema,
} from '../lib/types.js';
import { toSortedObject } from './sorts.js';

export async function fetchDefinitionsHtml(): Promise<string> {
	const themeDefinitionsUrl = `https://code.visualstudio.com/api/references/theme-color`;

	const themeDefinitionsHtmlPath = pathy('tmp/theme-definitions.html');
	const themeDefinitionsHtml = await fetch(themeDefinitionsUrl).then((res) =>
		res.text(),
	);
	await themeDefinitionsHtmlPath.write(themeDefinitionsHtml);
	return themeDefinitionsHtml;
}

interface SelectorType {
	components: string[];
	first: string;
	last: string;
}

function camelCaseToList(str: string) {
	return str.split(/(?=[A-Z0-9])/).map((s) => s.toLowerCase());
}

/**
 * Selectors are either a string without dots (representing
 * base components) or a <element>.<type> pair, where "type"
 * is something like "activeForeground".
 *
 * This function splits the "type" part of the selector into
 * lower-cased parts.
 */
function splitSelectorComponent(selector: string): SelectorType {
	const components = camelCaseToList(
		selector.replace(/\d+/g, '').split('.').at(-1)!,
	);
	return {
		components,
		first: components[0],
		last: components.at(-1)!,
	};
}

async function summarizeSelectorComponents(types: SelectorType[]) {
	const outPath = pathy('tmp/selector-types.json');
	const components: Set<string> = new Set();
	const componentSiblings: { [component: string]: Set<string> } =
		Object.create(null);
	const componentCounts = toSortedObject(
		types.reduce((acc, curr) => {
			for (const component of curr.components) {
				acc[component] = (acc[component] || 0) + 1;
				componentSiblings[component] =
					componentSiblings[component] || new Set();
				for (const siblingComponent of curr.components) {
					if (component !== siblingComponent) {
						componentSiblings[component].add(siblingComponent);
					}
				}
				components.add(component);
			}
			return acc;
		}, Object.create(null) as { [component: string]: number }),
	);
	// Iterate over the components in order of frequency.
	// For each component, loop through the the types and
	// their components. If the component is found in the type, add
	// that type to a set to be skipped next time. Keep going until
	// all types have been added to the set. The goal is to find
	// the minimum set of type components that are used in the vast
	// majority of types.
	const alreadyFound = new Set<SelectorType>();
	let removed: { [component: string]: number } = {};
	for (const component of Object.keys(componentCounts)) {
		for (const type of types) {
			if (!alreadyFound.has(type) && type.components.includes(component)) {
				alreadyFound.add(type);
				removed[component] = (removed[component] || 0) + 1;
			}
		}
	}
	removed = toSortedObject(removed);
	// Check all components against all other components to identify those
	// that are mutually exclusive. For example, "foreground" and "background".
	// Only look at the most-frequently found components.
	const xor: { [component: string]: string[] } = Object.create(null);
	const MIN_COUNT = 6;
	for (const component of Object.keys(componentCounts)) {
		if (componentCounts[component] < MIN_COUNT) {
			break;
		}
		for (const otherComponent of Object.keys(componentCounts)) {
			if (componentCounts[otherComponent] < MIN_COUNT) {
				break;
			}
			if (
				component !== otherComponent &&
				!componentSiblings[component].has(otherComponent)
			) {
				xor[component] ||= [];
				xor[component].push(otherComponent);
			}
		}
	}

	// For the top 4 most-removing components identify the most common siblings (a.k.a. "modifiers")
	const topRemoved = Object.keys(removed).slice(0, 4);
	const modifierCounts: {
		[component: string]: { [modifier: string]: number };
	} = Object.create(null);
	for (const component of topRemoved) {
		modifierCounts[component] = Object.create(null);
		const siblings = componentSiblings[component];
		for (const type of types) {
			for (const otherComponent of type.components) {
				if (siblings.has(otherComponent)) {
					modifierCounts[component][otherComponent] ||= 0;
					modifierCounts[component][otherComponent]++;
					break;
				}
			}
		}
		modifierCounts[component] = toSortedObject(modifierCounts[component], 5);
	}

	await outPath.write({
		componentCounts,
		removed,
		modifierCounts,
		totalSelectors: types.length,
	});
}

export async function parseDefinitionsHtml(
	themeDefinitionsHtml: string,
): Promise<ThemeSelectorDefinitions> {
	const themeDefinitionsJsonPath = pathy('tmp/theme-definitions.json', {
		validator: themeSelectorDefinitionsSchema,
	});
	const selectors: Set<string> = new Set();
	const selectorTypes: SelectorType[] = [];
	const themeDefinitions = [
		...themeDefinitionsHtml.matchAll(
			/<code>(?<selector>[a-zA-Z0-9.-]+)<\/code>:\s*(?<description>.*?)<\//gms,
		),
	]
		.map((d) => {
			if (selectors.has(d.groups!.selector)) {
				return;
			}
			selectors.add(d.groups!.selector);
			selectorTypes.push(splitSelectorComponent(d.groups!.selector));
			return d.groups;
		})
		.filter(Boolean) as { selector: string; description: string }[];
	await summarizeSelectorComponents(selectorTypes);
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
