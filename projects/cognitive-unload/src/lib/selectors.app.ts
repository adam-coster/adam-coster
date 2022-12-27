import {
	appSelectorComponents,
	appSelectorDomainComponents,
	appSelectorDomains,
	appSelectors,
} from './selectors.appDefinitions.js';
import { BaseSelector } from './selectors.base.js';

export type AppSelectorDomain = typeof appSelectorDomains[number];
export type AppSelectorComponent = typeof appSelectorComponents[number];
export type AppSelectorDomainComponents<Domain extends AppSelectorDomain> =
	typeof appSelectorDomainComponents[Domain];

export class AppSelector extends BaseSelector<'app', string> {
	static readonly selectors: ReadonlyArray<AppSelector> = appSelectors.map(
		(s) => new AppSelector(s),
	);

	constructor(selector: string) {
		super('app', selector);
	}

	get domain() {
		const parts = this.selector.split('.');
		return parts.length === 1 ? '' : parts[0];
	}

	get lowerCaseSelector() {
		return this.selector.toLowerCase();
	}

	static filter<Domain extends AppSelectorDomain | undefined>(
		domain?: Domain,
		filters?: (AppSelectorDomainComponent<Domain> | 'not')[],
	): AppSelectorsFilter<Domain> {
		const iterator = function* () {
			selectorLoop: for (const selector of AppSelector.selectors) {
				if (typeof domain === 'string' && selector.domain !== domain) {
					continue;
				}
				let isNot = false;
				for (const filter of filters || []) {
					if (filter === 'not') {
						isNot = true;
						continue;
					}
					let isMatch = selector.lowerCaseSelector.includes(filter);
					isMatch = isNot ? !isMatch : isMatch;
					if (!isMatch) {
						// Every filter must match!
						continue selectorLoop;
					}
					isNot = false;
				}
				yield selector;
			}
		};
		return new Proxy(
			{
				[Symbol.iterator]: iterator,
			},
			{
				get(target, p) {
					if (typeof p === 'symbol') {
						if (p === Symbol.iterator) {
							return target[Symbol.iterator];
						}
						throw new Error(`Symbols not supported.`);
					}
					const possibleFilters =
						typeof domain === 'string'
							? appSelectorDomainComponents[domain]
							: appSelectorComponents;
					// @ts-expect-error
					if (p !== 'not' && !possibleFilters.includes(p as any)) {
						throw new Error(`Invalid filter: ${p}`);
					}
					return AppSelector.filter(domain, [...(filters || []), p as any]);
				},
			},
		) as any;
	}
}

export const filter = AppSelector.filter;

type AppSelectorDomainComponent<Domain extends AppSelectorDomain | undefined> =
	Domain extends AppSelectorComponent
		? AppSelectorDomainComponents<Domain>[number]
		: AppSelectorComponent;

type AppSelectorsFilter<Domain extends AppSelectorDomain | undefined> =
	Iterable<AppSelector> & {
		[Component in
			| AppSelectorDomainComponent<Domain>
			| 'not']: AppSelectorsFilter<Domain>;
	};

/** Alias for `new AppSelector(selector)` */
export function app(selector: string): AppSelector {
	return new AppSelector(selector);
}
