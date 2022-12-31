import { assert } from '@bscotch/utility';
import { BaseSelector, kind } from './selectors.base.js';
import { SyntaxSelectors } from './selectors.types.js';

export type SyntaxSelectorFilterInput =
	| SyntaxSelector
	| SyntaxSelectorsFilter<any>
	| string;

export class SyntaxSelector<
	Selector extends string[] = string[],
> extends BaseSelector<'syntax', Selector> {
	constructor(selector: Selector) {
		super('syntax', selector);
	}

	and(other: SyntaxSelector) {
		return new SyntaxSelector([...this.selector, ...other.selector]);
	}

	not(other: SyntaxSelector) {
		assert(
			other.selector.length === 1,
			'not() only works with singleton selectors',
		);
		return new SyntaxSelector(
			this.selector.map((s) => `${s}-${other.selector[0]}`),
		);
	}

	within(other: SyntaxSelector) {
		assert(
			other.selector.length === 1,
			'within() only works with singleton selectors',
		);
		return new SyntaxSelector(
			this.selector.map((s) => `${other.selector[0]} ${s}`),
		);
	}

	toJSON() {
		return this.selector;
	}

	static createFilter<T extends SyntaxSelectors>(
		subselectors: T,
		selector: SyntaxSelector = new SyntaxSelector([]),
	): SyntaxSelectorsFilter<T> {
		return new Proxy(selector, {
			get(target, prop) {
				if (prop === 'toJSON') {
					return () => selector.selector;
				}
				if (prop === kind) {
					return 'syntaxSelectorsFilter';
				}
				if (prop === 'within') {
					return (other: SyntaxSelectorFilterInput) => {
						const otherSelector =
							other instanceof SyntaxSelector
								? other
								: new SyntaxSelector([other.toString()]);
						return selector.within(otherSelector);
					};
				}
				if (prop === 'and') {
					return (other: SyntaxSelectorFilterInput) => {
						const otherSelector =
							other instanceof SyntaxSelector
								? other
								: new SyntaxSelector([other.toString()]);
						return selector.and(otherSelector);
					};
				}
				if (prop === 'not') {
					return (other: SyntaxSelectorFilterInput) => {
						const otherSelector =
							other instanceof SyntaxSelector
								? other
								: new SyntaxSelector([other.toString()]);
						return selector.not(otherSelector);
					};
				}
				if (typeof prop === 'string' && Object.hasOwn(subselectors, prop)) {
					assert(
						selector.selector.length < 2,
						'Can only add subselectors to a singleton selector',
					);
					const newSelector = selector.selector[0]
						? `${selector.selector[0]}.${prop}`
						: prop;
					return SyntaxSelector.createFilter(
						subselectors[prop],
						new SyntaxSelector([newSelector]),
					);
				}
				return Reflect.get(target, prop);
			},
		}) as any;
	}
}

export type SyntaxSelectorsFilter<T> = {
	readonly [K in keyof T]: SyntaxSelectorsFilter<T[K]>;
} & {
	[kind]: 'syntaxSelectorsFilter';
	within<U>(other: SyntaxSelectorsFilter<U>): SyntaxSelector;
	and<U>(other: SyntaxSelectorsFilter<U>): SyntaxSelector;
	not<U>(other: SyntaxSelectorsFilter<U>): SyntaxSelector;
	toJSON(): string[];
};
