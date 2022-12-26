import { AppSelector } from './lib/selectors.app.js';
import { Theme } from './lib/themes.js';

export const theme = new Theme('Cognitive Unload', {
	activeForeground: '#dbdcdd',
	inactiveForeground: '#a9a9a9',
	activeBackground: '#1e1e1e',
	inactiveBackground: '#1e1e1e',
	activeBorder: '#353535',
	inactiveBorder: '#1e1e1e',
	shadow: '#000000',
	error: '#ff4662',
	warning: '#ff9f1a',
});

theme
	.style('activeForeground', AppSelector.groups.activeForeground)
	.style('inactiveForeground', AppSelector.groups.inactiveForeground)
	.style('activeBackground', AppSelector.groups.activeBackground)
	.style('inactiveBackground', AppSelector.groups.inactiveBackground)
	.style('activeBorder', AppSelector.groups.activeBorder)
	.style('inactiveBorder', AppSelector.groups.inactiveBackground)
	.style('shadow', AppSelector.groups.shadow)
	.style('error', AppSelector.groups.errorForeground)
	.style('warning', AppSelector.groups.warningForeground);
