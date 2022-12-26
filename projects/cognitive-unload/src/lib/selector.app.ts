import { BaseSelector } from './selectors.base.js';
import { appSelectorNames } from './themeSelectorDefinitions.js';

/** Alias for `new AppSelector(selector)` */
export function app(selector: string): AppSelector {
	return new AppSelector(selector);
}

export class AppSelector extends BaseSelector<'app', string> {
	static readonly selectors: ReadonlyArray<AppSelector> = appSelectorNames.map(
		(name) => new AppSelector(name),
	);

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
	});

	constructor(selector: string) {
		super('app', selector);
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
}
