import { AppSelector } from './lib/selector.app.js';
import { Theme } from './lib/themes.js';

export const theme = new Theme('Cognitive Unload', {
	activeForeground: '#dbdcdd',
	inactiveForeground: '#d3d3d4',
	activeBackground: '#36393f',
	inactiveBackground: '#2f3136',
	activeBorder: '#d3d3d4',
	inactiveBorder: '#202225',
});

theme
	.style('activeForeground', AppSelector.groups.activeForeground)
	.style('inactiveForeground', AppSelector.groups.inactiveForeground)
	.style('activeBackground', AppSelector.groups.activeBackground)
	.style('inactiveBackground', AppSelector.groups.inactiveBackground)
	.style('activeBorder', AppSelector.groups.activeBorder)
	.style('inactiveBorder', AppSelector.groups.inactiveBackground);
