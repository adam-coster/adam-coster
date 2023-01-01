import type { FontModifier } from './types.js';

export class Style<Color extends string | undefined> {
	constructor(
		readonly color: Color,
		readonly mods: { [mod in FontModifier]?: boolean } = {},
	) {}

	recolor<NewColor extends string | undefined>(color: NewColor) {
		return new Style<NewColor>(color, { ...this.mods });
	}

	get underline() {
		return new Style(this.color, { ...this.mods, underline: true });
	}
	/** @alias Style.underline */
	get u() {
		return this.underline;
	}
	get italic() {
		return new Style(this.color, { ...this.mods, italic: true });
	}
	/** @alias Style.italic */
	get i() {
		return this.italic;
	}
	get bold() {
		return new Style(this.color, { ...this.mods, bold: true });
	}
	/** @alias Style.bold */
	get b() {
		return this.bold;
	}

	toString() {
		return this.color || undefined;
	}

	toJSON() {
		return {
			foreground: this.color || undefined,
			fontStyle: Object.entries(this.mods)
				.filter(([, value]) => value)
				.map(([key]) => key)
				.join(' '),
		};
	}
}

export function style<Color extends string | undefined>(
	color?: Color,
): Style<Color> {
	return new Style(color) as Style<Color>;
}

export const none = new Style(undefined);
export const underline = none.underline;
export const italic = none.italic;
export const bold = none.bold;
