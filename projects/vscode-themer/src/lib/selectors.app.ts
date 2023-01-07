import { assert } from '@bscotch/utility';
import {
	appSelectorComponents,
	appSelectorDomainParts,
	appSelectorDomains,
	appSelectors,
} from './selectors.appDefinitions.js';
import { BaseSelector } from './selectors.base.js';
import type {
	AppSelectorDomain,
	AppSelectorFilter,
	AppSelectorName,
} from './selectors.types.js';

export type AppSelectorsFilterHelper = typeof AppSelector.filter &
	FilteredAppSelectors<undefined>;
type FilteredAppSelectors<Domain extends AppSelectorDomain | undefined> =
	Iterable<AppSelector> & {
		[Component in AppSelectorFilter<Domain>]: FilteredAppSelectors<Domain>;
	};

export class AppSelector<Selector extends string = string> extends BaseSelector<
	'app',
	Selector
> {
	static readonly domains = new Set(appSelectorDomains);
	static readonly components = new Set(appSelectorComponents);
	static readonly subdomains = new Set(appSelectorDomainParts);
	static readonly selectorNames = new Set(appSelectors);

	static readonly selectors: ReadonlyArray<AppSelector> = appSelectors.map(
		(s) => new AppSelector(s),
	);

	constructor(selector: Selector) {
		super('app', selector);
	}

	get domain(): AppSelectorDomain {
		const parts = this.selector.split('.');
		return parts.length === 1 ? '' : (parts[0] as AppSelectorDomain);
	}

	get lowerCaseSelector() {
		return this.selector.toLowerCase();
	}

	static filter<Selector extends AppSelectorName>(
		selector: Selector,
	): [AppSelector<Selector>];
	static filter<Domain extends AppSelectorDomain | undefined>(
		domain?: Domain,
		filters?: AppSelectorFilter<Domain>[],
	): FilteredAppSelectors<Domain>;
	static filter<Domain extends AppSelectorDomain | undefined>(
		domainOrSelectorName?: Domain | AppSelectorName,
		filters?: AppSelectorFilter<Domain>[],
	): FilteredAppSelectors<Domain> | [AppSelector] {
		if (typeof domainOrSelectorName === 'string') {
			assert(
				AppSelector.domains.has(domainOrSelectorName as any) ||
					AppSelector.selectorNames.has(domainOrSelectorName as any),
				`Invalid domain/selectorName: ${domainOrSelectorName}`,
			);
			if (AppSelector.selectorNames.has(domainOrSelectorName as any)) {
				// Find and return the existing selector
				// instance to allow for strict equality
				// checks downstream
				const selector = AppSelector.selectors.find(
					(s) => s.selector === domainOrSelectorName,
				);
				assert(selector, `Could not find selector: ${domainOrSelectorName}`);
				return [selector];
			}
		}
		// If we made it here then we aren't directly
		// grabbing a selector
		const domain = domainOrSelectorName as AppSelectorDomain | undefined;
		const iterator = function* () {
			let matchCount = 0;
			selectorLoop: for (const selector of AppSelector.selectors) {
				if (typeof domain === 'string' && selector.domain !== domain) {
					continue;
				}
				let invert = false;
				for (const filter of filters || []) {
					if (filter === 'not') {
						invert = true;
						continue;
					}
					let isMatch = selector.lowerCaseSelector.includes(
						filter.toLowerCase(),
					);
					isMatch = invert ? !isMatch : isMatch;
					if (!isMatch) {
						// Every filter must match!
						continue selectorLoop;
					}
					invert = false;
					matchCount++;
				}
				yield selector;
			}
			assert(
				matchCount > 0,
				`No selectors matched the filters ${(filters || []).join('.')}`,
			);
		};
		return new Proxy(
			{
				[Symbol.iterator]: iterator,
			},
			{
				get(target, p) {
					assert(
						typeof p === 'string' || p === Symbol.iterator,
						`Can only access string properties or Symbol.iterator`,
					);
					if (p === Symbol.iterator) {
						return target[Symbol.iterator];
					}
					assert(
						p === 'not' ||
							AppSelector.components.has(p as any) ||
							AppSelector.domains.has(p as any) ||
							AppSelector.subdomains.has(p as any),
						`Unknown filter: ${p as string}`,
					);
					return AppSelector.filter(domain, [...(filters || []), p as any]);
				},
			},
		) as any;
	}
}

const domainless = AppSelector.filter();
export const filter: AppSelectorsFilterHelper = new Proxy(
	(...args: any[]) => AppSelector.filter(...args),
	{
		get(_target, p: unknown) {
			// @ts-expect-error
			return domainless[p];
		},
	},
) as AppSelectorsFilterHelper;

/** Alias for `new AppSelector(selector)` */
export function app(selector: string): AppSelector {
	return new AppSelector(selector);
}
