import type {
	appSelectorComponents,
	appSelectorComponentsByDomain,
	appSelectorDomainParts,
	appSelectorDomains,
	appSelectors,
} from './selectors.appDefinitions.js';

export type AppSelectorDomain = (typeof appSelectorDomains)[number];
export type AppSelectorName = (typeof appSelectors)[number];
export type AppSelectorComponent = (typeof appSelectorComponents)[number];
export type AppSelectorComponentsByDomain<Domain extends AppSelectorDomain> =
	(typeof appSelectorComponentsByDomain)[Domain];
export type AppSelectorDomainPart = (typeof appSelectorDomainParts)[number];

export type AppSelectorFilter<Domain extends AppSelectorDomain | undefined> =
	Domain extends AppSelectorComponent
		? AppSelectorComponentsByDomain<Domain>[number] | 'not'
		: AppSelectorComponent | AppSelectorDomainPart | 'not';

export type SyntaxSelectors = {
	readonly [subselector: string]: SyntaxSelectors;
};
