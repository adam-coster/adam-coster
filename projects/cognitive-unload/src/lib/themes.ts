import Color from 'color';
import { AppSelector } from './selectors.app.js';
import { kind } from './selectors.base.js';
import { Selector } from './selectors.js';
import { SyntaxSelector, SyntaxSelectorsFilter } from './selectors.syntax.js';
import { SyntaxSelectors } from './selectors.types.js';
import { Style } from './styles.js';
import type { Palette, ThemeJson, TokenColorJson } from './types.js';

export type ColorName<P extends Palette> = (keyof P & string) | undefined;

export type StyleColor<P extends Palette> =
	| undefined
	| ColorName<P>
	| Style<ColorName<P>>;

export class Theme<P extends Palette> {
	protected _selectors: {
		selector: Selector | SyntaxSelectorsFilter<any> | null;
		style: Style<ColorName<P>>;
	}[] = [];

	get selectors(): {
		selector: Selector;
		style: Style<ColorName<P>>;
	}[] {
		return this._selectors
			.filter((s) => s.selector !== null)
			.map((s) => {
				const { selector, style } = s;
				return {
					style,
					selector:
						selector![kind] === 'syntaxSelectorsFilter'
							? // @ts-expect-error
							  new SyntaxSelector(selector!.toJSON())
							: s.selector,
				};
			}) as any;
	}

	/**
	 * To allow easy overriding of app
	 * selectors that are used multiple times.
	 */
	protected appSelectorIndexes: { [selector: string]: number } = {};

	constructor(readonly name: string, readonly palette: P) {}

	/**
	 * Completely remove selectors from the theme.
	 * Useful for e.g. high-contrast colors for
	 * non-high-contrast themes.
	 */
	exclude(...selectors: Iterable<Selector>[]): this {
		for (const _selectors of selectors) {
			for (const selector of _selectors) {
				if (selector instanceof AppSelector) {
					const idx = this.appSelectorIndexes[selector.selector];
					if (idx !== undefined) {
						this._selectors[idx].selector = null;
					}
				}
			}
		}
		return this;
	}

	/**
	 * Style a group of selectors
	 */
	style(
		style: StyleColor<P>,
		...selectors: Array<Iterable<AppSelector> | AppSelector>
	): this;
	style<T extends SyntaxSelectors>(
		style: StyleColor<P>,
		...selectors: Array<SyntaxSelector | SyntaxSelectorsFilter<T>>
	): this;
	style(
		style: StyleColor<P>,
		...selectors: Array<
			| Iterable<AppSelector | SyntaxSelector>
			| AppSelector
			| SyntaxSelector
			| SyntaxSelectorsFilter<any>
		>
	): this {
		const colorName: ColorName<P> | null =
			style instanceof Style ? style.color : style;
		const colorDef =
			typeof colorName === 'string' ? this.palette[colorName] : undefined;
		const color =
			typeof colorName === 'string'
				? Color(this.palette[colorName].toString()).hexa()
				: undefined;
		const dereferencedStyle = new Style(
			color,
			style instanceof Style
				? style.mods
				: colorDef instanceof Style
				? colorDef.mods
				: undefined,
		);
		style instanceof Style ? style.recolor(color) : new Style(color);
		const _selectors = selectors
			.map((s) => (Symbol.iterator in s ? [...s] : s))
			.flat();

		for (const selector of _selectors) {
			// Override if already exists
			if (selector instanceof AppSelector) {
				const idx = this.appSelectorIndexes[selector.selector];
				if (idx !== undefined) {
					this._selectors[idx] = {
						selector,
						style: dereferencedStyle,
					};
					continue;
				} else {
					this.appSelectorIndexes[selector.selector] = this._selectors.length;
				}
			}
			this._selectors.push({
				selector,
				style: dereferencedStyle,
			});
		}

		return this;
	}

	toJSON(): ThemeJson {
		const selectors = this.selectors;
		return {
			name: this.name,
			semanticHighlighting: true,
			// semanticTokenColors: selectors.reduce((json, selector) => {
			// 	if (selector.selector[kind] === 'semantic') {
			// 		json[selector.selector.selector] = selector.style.toJSON();
			// 	}
			// 	return json;
			// }, {} as { [selector: string]: SettingsJson }),
			colors: selectors.reduce((json, selector) => {
				if (selector.selector[kind] === 'app') {
					json[selector.selector.selector] = selector.style.color || undefined;
				}
				return json;
			}, {} as { [selector: string]: string | undefined }),
			tokenColors: selectors.reduce((json, selector) => {
				if (selector.selector[kind] === 'syntax') {
					json.push({
						scope: selector.selector.selector,
						settings: selector.style.toJSON(),
					});
				}
				return json;
			}, [] as TokenColorJson[]),
		};
	}
}
