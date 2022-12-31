import type { theme as baseTheme } from 'theme.base.js';
import { SyntaxSelector } from './lib/selectors.syntax.js';
import { selectors as tsSelectors } from './lib/syntax/selectors.source.ts.js';

const ts = SyntaxSelector.createFilter(tsSelectors);
export function addSyntaxColors(theme: typeof baseTheme) {
	theme.style('comment', ts.comment);
}
