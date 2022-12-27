import { filter } from './lib/selectors.app.js';
import { Theme } from './lib/themes.js';

export const theme = new Theme('Cognitive Unload', {
	activeForeground: '#dbdcdd',
	inactiveForeground: '#737373',
	activeBackground: '#1e1e1e',
	inactiveBackground: '#1e1e1e',
	activeBorder: '#707070',
	inactiveBorder: '#313131',
	badgeBackground: '#dbdcdd',
	badgeForeground: '#1e1e1e',
	link: '#61afef',
	shadow: '#000000',
	error: '#ff4662',
	warning: '#ff9f1a',
});

const $ = filter;

theme
	// FOREGROUND (DEFAULT)
	.style('activeForeground', $.not.inactive.not.background)
	.style('inactiveForeground', $.inactive.not.background)
	// BACKGROUND (DEFAULT)
	.style('activeBackground', $.background.not.inactive)
	.style('inactiveBackground', $.background.inactive)
	// BORDERS (DEFAULT)
	.style('activeBorder', $.border.active, $.outline.not.inactive)
	.style('inactiveBorder', $.border, $.border.inactive)
	// BADGES (DEFAULT)
	.style('badgeBackground', $.badge)
	.style('badgeForeground', $.badge.foreground)
	// SLIDERS
	.style('inactiveForeground', $.scrollbar.slider)
	.style(
		'activeForeground',
		$.scrollbar.slider.active,
		$.scrollbar.slider.hover,
	)
	// TEXT (DEFAULT)
	.style('link', $('textLink').foreground)
	.style('shadow', $.shadow)
	.style('error', $.error.not.background)
	.style('warning', $.warning.not.background)
	// HIGH-CONTRAST (EXCLUDED)
	.exclude($.contrast);
