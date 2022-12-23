export type FontModifier = 'underline' | 'bold' | 'italic';
export type ColorString = `#${string}`;
export interface SettingsJson {
	foreground?: string;
	/** Space-separate list of modifiers */
	fontStyle?: string;
}
export interface TokenColorJson {
	name?: string;
	scope: string | string[];
	settings: SettingsJson;
}
export interface ThemeJson {
	name: string;
	semanticHighlighting?: boolean;
	semanticTokenColors?: { [selector: string]: SettingsJson };
	colors: { [selector: string]: string };
	tokenColors: TokenColorJson[];
}

export type Palette = { [name: string]: ColorString };
