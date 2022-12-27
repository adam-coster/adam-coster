import { AppSelector, filter } from './lib/selectors.app.js';
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
	.style('activeForeground', filter().not.inactive.not.background)
	.style('inactiveForeground', filter().inactive.not.background)
	.style('activeBackground', filter().background.not.inactive)
	.style('inactiveBackground', filter().background.inactive)
	.style('activeBorder', filter().border.not.inactive)
	.style('inactiveBorder', filter().border.inactive)
	.style('shadow', filter().shadow)
	.style('error', filter().error)
	.style('warning', filter().warning);
