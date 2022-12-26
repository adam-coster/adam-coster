import {
	AppSelectorComponent,
	AppSelectorDomain,
	AppSelectorDomainComponents,
} from './selectors.appDefinitions.js';
import { BaseSelector } from './selectors.base.js';
// import { appSelectorNames } from './themeSelectorDefinitions.js';

/** Alias for `new AppSelector(selector)` */
export function app(selector: string): AppSelector {
	return new AppSelector(selector);
}

/**
 * Fluent API for selecting a subset
 * of app selectors.
 */
export class AppSelectors {}

export class AppSelector extends BaseSelector<'app', string> {
	static readonly selectors: ReadonlyArray<AppSelector> = [];
	//  appSelectorNames.map(
	// 	(name) => new AppSelector(name),
	// );

	static readonly groups = Object.freeze({
		activeForeground: AppSelector.selectors.filter(
			(s) => s.isActive && s.isForeground,
		),
		inactiveForeground: AppSelector.selectors.filter(
			(s) => s.isInactive && s.isForeground,
		),
		activeBackground: AppSelector.selectors.filter(
			(s) => s.isActive && s.isBackground,
		),
		inactiveBackground: AppSelector.selectors.filter(
			(s) => s.isInactive && s.isBackground,
		),
		activeBorder: AppSelector.selectors.filter((s) => s.isActive && s.isBorder),
		inactiveBorder: AppSelector.selectors.filter(
			(s) => s.isInactive && s.isBorder,
		),
		shadow: AppSelector.selectors.filter((s) => s.isShadow),
		errorForeground: AppSelector.selectors.filter(
			(s) => s.isError && s.isForeground,
		),
		errorBackground: AppSelector.selectors.filter(
			(s) => s.isError && s.isBackground,
		),
		warningForeground: AppSelector.selectors.filter(
			(s) => s.isWarning && s.isForeground,
		),
		warningBackground: AppSelector.selectors.filter(
			(s) => s.isWarning && s.isBackground,
		),
	});

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

	get isBorder() {
		return this.lowerCaseSelector.includes('border');
	}

	get isBackground() {
		return this.lowerCaseSelector.includes('background');
	}

	get isForeground() {
		return !this.isBackground;
	}

	get isInactive() {
		return this.lowerCaseSelector.match(/inactive|disabled/);
	}

	get isActive() {
		return !this.isInactive;
	}

	get isShadow() {
		return this.lowerCaseSelector.includes('shadow');
	}

	get isError() {
		return this.lowerCaseSelector.includes('error');
	}

	get isWarning() {
		return this.lowerCaseSelector.includes('warning');
	}
}

class Filter<Domain extends AppSelectorDomain | undefined> {
	readonly selectors = AppSelector.selectors;
	constructor(readonly domain: Domain) {
		if (typeof domain === 'string') {
			this.selectors = this.selectors.filter((s) => s.domain === domain);
		}
	}
}

type AppSelectorDomainComponent<Domain extends AppSelectorDomain | undefined> =
	Domain extends AppSelectorComponent
		? AppSelectorDomainComponents<Domain>[number]
		: AppSelectorComponent;

type AppSelectorsFilter<Domain extends AppSelectorDomain | undefined> =
	Array<AppSelector> & {
		[Component in
			| AppSelectorDomainComponent<Domain>
			| 'not']: AppSelectorsFilter<Domain>;
	};

function filter<Domain extends AppSelectorDomain | undefined>(
	domain?: Domain,
): AppSelectorsFilter<Domain> {
	const selectors =
		typeof domain === 'string'
			? AppSelector.selectors.filter((s) => s.domain === domain)
			: AppSelector.selectors;
	// Return a proxy that will convert `.[component]` to filter operations
	return new Proxy(selectors, {
		get(target, p, receiver) {
			// TODO: CONTINUE HERE
		},
	}) as any;
}
