import Color from 'color';
import { AppSelector } from './selectors.app.js';
import { Selector } from './selectors.js';
import { Style } from './styles.js';
import type {
	Palette,
	SettingsJson,
	ThemeJson,
	TokenColorJson,
} from './types.js';

export type ColorName<P extends Palette> = keyof P & string;

export class Theme<P extends Palette> {
	protected _selectors: {
		selector: Selector | null;
		style: Style<ColorName<P>>;
	}[] = [];

	get selectors(): {
		selector: Selector;
		style: Style<ColorName<P>>;
	}[] {
		return this._selectors.filter((s) => s.selector !== null) as any;
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
		style: ColorName<P> | Style<ColorName<P>>,
		...selectors: Iterable<Selector>[]
	): this {
		const colorName: ColorName<P> =
			style instanceof Style ? style.color : style;
		const color = Color(this.palette[colorName]).hexa();
		const dereferencedStyle =
			style instanceof Style ? style.recolor(color) : new Style(color);
		for (const _selectors of selectors) {
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
		}
		return this;
	}

	toJSON(): ThemeJson {
		const selectors = this.selectors;
		return {
			name: this.name,
			semanticHighlighting: true,
			semanticTokenColors: selectors.reduce((json, selector) => {
				if (selector.selector.kind === 'semantic') {
					json[selector.selector.selector] = selector.style.toJSON();
				}
				return json;
			}, {} as { [selector: string]: SettingsJson }),
			colors: selectors.reduce((json, selector) => {
				if (selector.selector.kind === 'app') {
					json[selector.selector.selector] = selector.style.color;
				}
				return json;
			}, {} as { [selector: string]: string }),
			tokenColors: selectors.reduce((json, selector) => {
				if (selector.selector.kind === 'token') {
					json.push({
						name: selector.selector.description,
						scope: selector.selector.selector,
						settings: selector.style.toJSON(),
					});
				}
				return json;
			}, [] as TokenColorJson[]),
		};
	}
}
