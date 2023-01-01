import type { theme as baseTheme } from 'theme.base.js';
import { SyntaxSelector } from './lib/selectors.syntax.js';
import { style } from './lib/styles.js';
import { selectors as tsSelectors } from './lib/syntax/selectors.source.ts.js';

const s = style;

const ts = SyntaxSelector.createFilter(tsSelectors);
export function addSyntaxColors(theme: typeof baseTheme) {
	theme
		.style('comment', ts.comment)
		.style('keyword')
		.style('function', ts.entity.name.function)
		.style('string', ts.string)
		// .style(italic, ts.keyword.control)
		// Import statements
		.style(s('inactiveForeground').italic, ts.keyword.control);
}
