import { filter } from '@adam-coster/themer';
import type { theme as baseTheme } from 'theme.base.js';

const $ = filter;
const $list = $('list');
const $button = $('button');
const $tab = $('tab');
const $activityBar = $('activityBar');

export function addAppColors(theme: typeof baseTheme) {
	// FOREGROUND (DEFAULT)
	theme
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

		// SYNTAX HIGHLIGHTING

		// TEST (to find elements)
		// .style('test', $.background.inactive)
		// HIGH-CONTRAST (EXCLUDED)
		.exclude($.contrast);
}
