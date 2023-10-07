// Patch the them with the `.vscode/settings` values

import { promises as fs } from 'fs';
import JSON5 from 'json5';

/** @type {import('./patch-theme.types.js').VscodeSettings} */
const settings = JSON5.parse(
	await fs.readFile('.vscode/settings.json', 'utf8'),
);

/** @type {import('./patch-theme.types.js').Theme} */
const baseTheme = JSON5.parse(
	await fs.readFile('base-color-theme.json', 'utf8'),
);

const theme = {
	...baseTheme,
};

// Patch the theme with the `.vscode/settings` values
theme.colors = {
	...theme.colors,
	...settings['workbench.colorCustomizations']['[Default Dark Modern]'],
};
theme.tokenColors = [
	...theme.tokenColors,
	...settings['editor.tokenColorCustomizations']['[Default Dark Modern]']
		.textMateRules,
];

await fs.writeFile(
	'themes/cognitive-unload-color-theme.json',
	JSON.stringify(theme, null, 2),
	'utf8',
);
