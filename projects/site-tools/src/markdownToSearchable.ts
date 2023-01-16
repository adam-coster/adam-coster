/**
 * @file I'm using lunr.js to create a search index for posts.
 *
 * Lunr already takes care of stemming and skipping stop words,
 * so I need to take care of anything else that would make searchability
 * a problem prior to handing the text off to Lunr for indexing.
 */

import grayMatter from 'gray-matter';
import removeMarkdown from 'remove-markdown';
import type { ArticleFrontMatter } from './types/Article.js';

const singlelineCommentPattern = /(?<!["'])(\/\/|#)(?<comment>.*)/;
const multilineCommentPattern = /(?<!["'])\/\*(?<comment>.*?)\*\//;

export function searchableTextFromMarkdown(
	rawMarkdown: string,
): ArticleFrontMatter & { body: string } {
	const { data, content } = grayMatter(rawMarkdown) as {
		data: unknown;
		content: string;
	};
	const frontMatter = data as ArticleFrontMatter;

	// Clean up the text to make it more searchable
	let normalizedBody = content;
	// remove code blocks, except for *comments*
	const codeBlocks = normalizedBody.match(/```[^`]*?\n```/g);
	for (const codeBlock of codeBlocks || []) {
		/**
		 * Collect found comments to re-insert later
		 */
		const comments: string[] = [];
		const multilineComments = codeBlock.match(
			new RegExp(multilineCommentPattern, 'g'),
		);
		for (const comment of multilineComments || []) {
			const commentMatch = comment.match(multilineCommentPattern)!;
			comments.push(commentMatch.groups!.comment);
			normalizedBody = normalizedBody.replace(comment, '');
		}

		// Find single-line comments to re-insert later
		const singlelineComments = codeBlock.match(
			new RegExp(singlelineCommentPattern, 'g'),
		);
		for (const comment of singlelineComments || []) {
			const commentMatch = comment.match(singlelineCommentPattern)!;
			comments.push(commentMatch.groups!.comment);
			normalizedBody = normalizedBody.replace(comment, '');
		}

		normalizedBody = normalizedBody.replace(codeBlock, comments.join('\n'));
	}

	normalizedBody = removeMarkdown(content);

	return {
		...frontMatter,
		body: normalizedBody,
	};
}
