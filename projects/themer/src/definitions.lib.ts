import { Pathy, pathy } from '@bscotch/pathy';
import fetch from 'node-fetch';
import { Grammar } from './definitions.grammars.js';
import {
	ThemeSelectorDefinitions,
	themeSelectorDefinitionsSchema,
} from './lib/types.js';
import { stringify } from './utils/json.js';
import { toSortedObject } from './utils/sorts.js';

async function fetchDefinitionsHtml(): Promise<string> {
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

async function parseDefinitionsHtml(
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

async function createAppSelectorDefintionsTs(dir: Pathy) {
	const appDefinitions = await parseDefinitionsHtml(
		await fetchDefinitionsHtml(),
	);
	const themeDefinitionsTypescriptPath = dir.join('app.ts');
	// Get the list of all selectors to output as an array of strings.
	const selectors = appDefinitions.map((d) => d.selector);

	// Get the list of all "domain" components of the selectors
	const domains = new Set<string>();
	const domainParts = new Set<string>();
	const components = new Set<string>();
	const domainComponents: { [domain: string]: Set<string> } =
		Object.create(null);
	for (const selector of selectors) {
		const parts = selector.split('.');
		const domain = parts.length === 1 ? '' : parts[0];
		const componentsString = parts.at(-1)!;
		const splitComponents = splitSelectorComponent(componentsString);
		domains.add(domain);
		domainComponents[domain] ||= new Set();
		for (const domainPart of camelCaseToList(domain)) {
			if (domainPart) {
				domainParts.add(domainPart);
			}
		}
		for (const component of splitComponents.components) {
			domainComponents[domain].add(component);
			components.add(component);
		}
	}

	let ts = `export const appSelectorDomains = ${stringify(
		domains,
	)} as const;\n`;
	ts += `export const appSelectors = ${stringify(selectors)} as const;\n`;
	ts += `export const appSelectorDomainParts = ${stringify(
		domainParts,
	)} as const;\n`;
	ts += `export const appSelectorComponents = ${stringify(
		components,
	)} as const;\n`;
	ts += `export const appSelectorComponentsByDomain = ${stringify(
		domainComponents,
	)} as const;\n`;
	await themeDefinitionsTypescriptPath.write(ts);
}

export async function createTypescriptDefinitions(
	outDir: string,
): Promise<void> {
	const dir = pathy(outDir);
	await dir.ensureDirectory();
	if (!process.argv.includes('--skip-app-definitions')) {
		console.log('UPDATING APP DEFINITIONS');
		await createAppSelectorDefintionsTs(dir);
	}
	if (!process.argv.includes('--skip-syntax-definitions')) {
		console.log('UPDATING SYNTAX DEFINITIONS');
		await Grammar.compile(dir.join('grammars'));
	}
}
