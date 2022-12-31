import type { FontModifier } from './types.js';

export class Style<Color extends string> {
	constructor(
		readonly color: Color,
		readonly mods: { [mod in FontModifier]?: boolean } = {},
	) {}

	recolor<NewColor extends string>(color: NewColor) {
		return new Style<NewColor>(color, { ...this.mods });
	}

	get underline() {
		return new Style(this.color, { ...this.mods, underline: true });
	}
	get italic() {
		return new Style(this.color, { ...this.mods, italic: true });
	}
	get bold() {
		return new Style(this.color, { ...this.mods, bold: true });
	}

	toString() {
		return this.color;
	}

	toJSON() {
		return {
			foreground: this.color,
			fontStyle: Object.entries(this.mods)
				.filter(([, value]) => value)
				.map(([key]) => key)
				.join(' '),
		};
	}
}

export function style<Color extends string>(color: Color) {
	return new Style<Color>(color);
}
