import { app } from './lib/selectors.js';
import { Theme } from './lib/themes.js';
import { appSelectorNames } from './lib/themeSelectorDefinitions.js';

export const theme = new Theme('Cognitive Unload', {
	background: '#000000',
	foreground: '#ffffff',
	inactiveForeground: 'gray',
});

for (const selectorName of appSelectorNames) {
	const selectorLower = selectorName.toLowerCase();
	if (selectorLower.includes('foreground')) {
		theme.style('foreground', [app(selectorName)]);
	} else if (selectorLower.includes('background')) {
		theme.style('background', [app(selectorName)]);
	} else if (selectorLower.includes('border')) {
		theme.style('foreground', [app(selectorName)]);
	}
}

// Start by setting everything to background and foreground (need a way to override...)
// const foregroundSelectors = appSelectorNames
