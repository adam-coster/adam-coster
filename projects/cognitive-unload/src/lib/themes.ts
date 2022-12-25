import { Selector } from './selectors.js';
import { Style } from './styles.js';
import type {
	Palette,
	SettingsJson,
	ThemeJson,
	TokenColorJson,
} from './types.js';
import Color from 'color';

export type ColorName<P extends Palette> = keyof P & string;

export class Theme<P extends Palette> {
	protected selectors: {
		selector: Selector;
		style: Style<ColorName<P>>;
	}[] = [];

	constructor(readonly name: string, readonly palette: P) {}

	/**
	 * Style a group of selectors
	 */
	style(style: ColorName<P> | Style<ColorName<P>>, selectors: Selector[]) {
		const colorName: ColorName<P> =
			style instanceof Style ? style.color : style;
		const color = Color(this.palette[colorName]).hex();
		const dereferencedStyle =
			style instanceof Style ? style.recolor(color) : new Style(color);
		for (const selector of selectors) {
			this.selectors.push({
				selector,
				style: dereferencedStyle,
			});
		}
		return this;
	}

	toJSON(): ThemeJson {
		return {
			name: this.name,
			semanticHighlighting: true,
			semanticTokenColors: this.selectors.reduce((json, selector) => {
				if (selector.selector.kind === 'semantic') {
					json[selector.selector.selector] = selector.style.toJSON();
				}
				return json;
			}, {} as { [selector: string]: SettingsJson }),
			colors: this.selectors.reduce((json, selector) => {
				if (selector.selector.kind === 'app') {
					json[selector.selector.selector] = selector.style.color;
				}
				return json;
			}, {} as { [selector: string]: string }),
			tokenColors: this.selectors.reduce((json, selector) => {
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
