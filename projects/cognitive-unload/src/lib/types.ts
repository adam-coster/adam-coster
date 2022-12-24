import { z } from 'zod';

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

export type ThemeSelectorDefinition = z.infer<
	typeof themeSelectorDefinitionSchema
>;
export type ThemeSelectorDefinitions = z.infer<
	typeof themeSelectorDefinitionsSchema
>;
export const themeSelectorDefinitionSchema = z.object({
	selector: z.string(),
	description: z.string(),
});
export const themeSelectorDefinitionsSchema = z.array(
	themeSelectorDefinitionSchema,
);
