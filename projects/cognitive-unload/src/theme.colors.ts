import { style } from './lib/styles.js';

const s = style;

export const colors = {
	// SYNTAX HIGHLIGHTING
	comment: '#737373',
	keyword: s('#707070').italic,
	function: '#b1d13b',
	string: s('#a678ce').underline,
	// APP COLORS
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
};
