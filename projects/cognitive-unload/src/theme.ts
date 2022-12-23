import { app } from './lib/selectors.js';
import { Theme } from './lib/themes.js';

export const theme = new Theme('Cognitive Unload', {
	background: '#000000',
	text: '#ffffff',
});

theme
	.style('background', [
		app('editor.background'),
		app('activityBarBadge.background'),
	])
	.style('text', [app('editor.foreground'), app('sideBarTitle.foreground')]);
