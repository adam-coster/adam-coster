import { app } from './lib/selectors.js';
import { Theme } from './lib/themes.js';
import { appSelectorNames } from './lib/themeSelectorDefinitions.js';

export const theme = new Theme('Cognitive Unload', {
	background: '#000000',
	foreground: '#ffffff',
	inactiveForeground: 'gray',
});

theme
	.style('background', [
		app('editor.background'),
		app('activityBarBadge.background'),
	])
	.style('foreground', [
		app('editor.foreground'),
		app('sideBarTitle.foreground'),
	]);

// Start by setting everything to background and foreground (need a way to override...)
// const foregroundSelectors = appSelectorNames
