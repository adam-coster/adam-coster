import { filter } from '@adam-coster/themer';
import type { theme as baseTheme } from 'theme.base.js';

const $ = filter;
const $list = $('list');
const $button = $('button');
const $tab = $('tab');
const $activityBar = $('activityBar');
const $statusBar = $('statusBar');
const $statusBarItem = $('statusBarItem');
const $gitDecoration = $('gitDecoration');

export function addAppColors(theme: typeof baseTheme) {
	// FOREGROUND (DEFAULT)
	theme

		// TEXT (DEFAULT)
		.style('link', $.link.foreground)
		.style('shadow', $.shadow)
		.style('error', $.error.not.background)
		.style('warning', $.warning.not.background)
		.style('foregroundSubtle', $('foreground'))
		.style(
			'foreground',
			$.foreground.active,
			$.foreground.hover,
			$.foreground.focus,
		)
		.style('background', $.background)
		.style('backgroundBump', $.border)
		.style('backgroundBump', $.outline)

		// LIST
		.style('errorSubtle', $list.error.foreground)
		.style('warningSubtle', $list.warning)
		.style('backgroundBump', $list.active.selection.background)
		.style('foregroundSubtle', $list.outline)
		.style('foregroundSubtle', $list.hover.foreground)
		.style('backgroundBump', $list.hover.background)

		// MINIMAP
		.style('highlightSubtle', $('minimapSlider').background)

		// BADGES (DEFAULT)
		.style('foregroundSubtle', $.badge)
		.style('background', $.badge.foreground)

		// SLIDERS
		.style('highlightSubtle', $.scrollbar.slider)
		.style('highlightSubtle', $.scroll.background)

		// NOTIFICATIONS
		.style('warning', $('notificationToast.border'))
		.style('foreground', $('notificationCenterHeader.foreground'))
		.style('foreground', $('notificationCenter.border'))

		// BUTTONS
		.style('foregroundSubtle', $button.background)
		.style('background', $button.foreground)
		.style('foregroundSubtle', $button.border)
		.style('background', $button.secondary.background)
		.style('foregroundSubtle', $button.hover)

		// TABS
		.style('backgroundSpotlit', $tab.background)
		.style(
			'foregroundSubtle',
			$tab.foreground.inactive,
			$tab.foreground.unfocused,
		)
		.style('background', $tab.background.unfocused, $tab.background.inactive)
		.style('foreground', $tab.hover.border)

		// STATUS BAR
		.style('foregroundSubtle', $statusBar.foreground)
		.style('backgroundGlowup', $statusBarItem.hover.background)
		.style('foreground', $statusBarItem.prominent.foreground)
		.style('error', $statusBarItem.error.foreground)
		.style('warning', $statusBarItem.warning.foreground)
		.style('foreground', $statusBarItem.hover.foreground)

		// STICKY SCROLL
		.style('backgroundSpotlit', $.editor.sticky.scroll)

		// ACTIVITY BAR
		.style('foreground', $activityBar.foreground)
		.style('foregroundSubtle', $activityBar.foreground.inactive)
		.style('background', $activityBar.background)
		.style('backgroundGlowup', $activityBar.background.active)
		.style('foreground', $activityBar.active.border)

		// Git
		.style('foregroundBump', $gitDecoration.modified.foreground)

		// TEST (to find elements)
		// .style('test', $.background.inactive)
		// HIGH-CONTRAST (EXCLUDED)
		.exclude($.contrast);
}
