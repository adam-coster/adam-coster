import {
	filter,
	style,
	syntax,
	SyntaxSelector,
	underline,
} from '@adam-coster/themer';
import { tokens as tsSelectors } from '@adam-coster/themer/grammars/typescript';
import type { theme as baseTheme } from 'theme.base.js';

const ts = SyntaxSelector.createFilter(tsSelectors);
const $ = filter;
const $regexp = ts.string.regexp;
const s = style;

const c = {
	currentLine: s('#effe97'),
} as const;

export function addSyntaxColors(theme: typeof baseTheme) {
	theme

		// Comments
		.style('#737373', ts.comment)

		// Cognitively redundant due to context
		.style(s('#707070').i, ts.entity.name.function, ts.keyword)
		.style('#5d6189', ts.punctuation.separator)
		.style('inactiveForeground', ts.punctuation.terminator)

		// Things that do stuff
		.style('#80e397', ts.entity.name.function)
		.style('#93cdbf', ts.keyword.operator)

		// STRINGS
		.style(s('#89a0b8').u, ts.string.quoted)
		.style('#bc8dc6', syntax('constant.character.escape').not($regexp))
		.style(
			'#5d6189',
			ts.punctuation.definition.string,
			syntax('punctuation.support.type.property-name'),
		)

		// REGEX
		.style(
			s('#c57a8c').underline,
			$regexp,
			ts.punctuation.definition.string.within($regexp),
		)
		.style(
			underline,
			ts.variable.within($regexp),
			ts.constant.within($regexp),
			ts.keyword.operator.within($regexp),
			ts.constant.other.within($regexp),
			ts.constant.character.within($regexp),
		)
		.style(
			s('inactiveForeground').underline,
			ts.punctuation.definition.group,
			ts.keyword.control.within($regexp),
		)

		// Literals/Variables/Types
		.style('#a28cc5', ts.meta.type, ts.support.type)
		.style('#66adc1', ts.variable, ts.meta['object-literal'].key)

		// Control flow
		.style(
			s('#b89656').italic,
			ts.keyword.control.flow,
			ts.keyword.control.export,
		)

		// Default for control keywords
		// (like import, export, as, await, etc)
		.style(s('inactiveForeground').italic, ts.keyword.control, ts.storage)

		// EDITOR
		.style(c.currentLine, $('editorLineNumber.activeForeground'))
		.style('warning', $('editor.findMatchBorder'))
		.style(c.currentLine.alpha(0.2), $('editor.lineHighlightBorder'));
}
