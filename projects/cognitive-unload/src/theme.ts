import { filter } from './lib/selectors.app.js';
import { Theme } from './lib/themes.js';

// Filter short-hands
const $ = filter;
const $list = $('list');
const $button = $('button');
const $tab = $('tab');
const $activityBar = $('activityBar');
const $editor = $('editor');

// The theme!
export const theme = new Theme('Cognitive Unload', {
	activeForeground: '#dbdcdd',
	inactiveForeground: '#737373',
	activeBackground: '#1e1e1e',
	inactiveBackground: '#1e1e1e',
	activeBorder: '#707070',
	inactiveBorder: '#3f3f3f',
	activityBarBackground: '#232323',
	sidebarBackground: '#1a1a1a',
	badgeBackground: '#dbdcdddd',
	badgeForeground: '#1e1e1e',
	scrollbarActive: '#8b8b8b44',
	hoverBackground: '#393939',
	minimapBackground: '#9f9e9e44',
	listActiveItemBorder: '#6b6b6b',
	editorLineNumberActiveForeground: '#dc97fe',
	editorActiveLineBackground: '#dc97fe33',
	link: '#61afef',
	shadow: '#000000',
	error: '#ff4662',
	warning: '#ff9f1a',
	test: 'green',
})
	// FOREGROUND (DEFAULT)
	.style('inactiveForeground', $('foreground'))
	.style(
		'activeForeground',
		$.foreground.active,
		$.foreground.hover,
		$.foreground.focus,
	)

	// BACKGROUND (DEFAULT)
	.style('activeBackground', $.background.not.inactive)
	.style('inactiveBackground', $.background.inactive)
	.style('hoverBackground', $.drop.background, $.selection.background)

	// BORDERS (DEFAULT)
	// .style('activeBorder', $.border.active, $.outline.not.inactive)
	// .style('inactiveBorder', $.border, $.border.inactive, $.separator)

	// ACTIVITY BAR
	.style('activityBarBackground', $activityBar.background)
	.style('inactiveForeground', $activityBar.foreground.inactive)
	.style('activityBarBackground', $activityBar.border)
	.style('hoverBackground', $activityBar.background.active)
	.style(
		'activeForeground',
		$activityBar.active.border,
		$activityBar.drop.border,
	)

	// SIDEBARS
	.style('sidebarBackground', $('sideBar.background'))

	// STATUS BAR
	.style('inactiveForeground', $('statusBar.foreground'))

	// MINIMAP
	.style('minimapBackground', $('minimapSlider').background)

	// BADGES (DEFAULT)
	.style('badgeBackground', $.badge)
	.style('badgeForeground', $.badge.foreground)

	// SLIDERS
	.style('inactiveForeground', $.scrollbar.slider)
	.style('scrollbarActive', $.scroll.background)

	// LISTS (e.g. File Explorer)
	.style('hoverBackground', $list.active.background)
	.style('listActiveItemBorder', $('list').active.border)

	// NOTIFICATIONS
	.style('warning', $('notificationToast.border'))
	.style('activeForeground', $('notificationCenterHeader.foreground'))
	.style('listActiveItemBorder', $('notificationCenter.border'))

	// BUTTONS
	.style('hoverBackground', $button.background)
	.style('activeForeground', $button.foreground)
	.style('activeBorder', $button.border)
	.style('inactiveBackground', $button.secondary.background)
	.style('listActiveItemBorder', $button.hover)

	// TOOLBAR
	.style('hoverBackground', $('toolbar.hoverBackground'))

	// TABS
	.style('hoverBackground', $tab.background)
	.style(
		'inactiveForeground',
		$tab.foreground.inactive,
		$tab.foreground.unfocused,
	)
	.style(
		'inactiveBackground',
		$tab.background.unfocused,
		$tab.background.inactive,
	)
	.style('activeForeground', $tab.hover.border)

	// STICKY SCROLL
	.style('hoverBackground', $.editor.sticky.scroll)

	// TEXT (DEFAULT)
	.style('link', $.link.foreground)
	.style('shadow', $.shadow)
	.style('error', $.error.not.background)
	.style('warning', $.warning.not.background)

	// EDITOR
	.style(
		'editorLineNumberActiveForeground',
		$('editorLineNumber.activeForeground'),
	)
	.style('warning', $('editor.findMatchBorder'))
	.style('editorActiveLineBackground', $('editor.lineHighlightBackground'))

	// TEST (to find elements)
	// .style('test', $.background.inactive)
	// HIGH-CONTRAST (EXCLUDED)
	.exclude($.contrast);
