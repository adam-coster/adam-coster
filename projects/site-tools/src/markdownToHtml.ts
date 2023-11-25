import grayMatter from 'gray-matter';
import type { Element } from 'hast';
import hljsBash from 'highlight.js/lib/languages/bash';
import hljsJs from 'highlight.js/lib/languages/javascript';
import hljsJson from 'highlight.js/lib/languages/json';
import hlsjsPython from 'highlight.js/lib/languages/python';
import hlsjsR from 'highlight.js/lib/languages/r';
import hljsShell from 'highlight.js/lib/languages/shell';
import hljsTs from 'highlight.js/lib/languages/typescript';
import hlsjsXml from 'highlight.js/lib/languages/xml';
import hljsYaml from 'highlight.js/lib/languages/yaml';

import { parse as parseHtml } from 'node-html-parser';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * SVG for a "link" icon, for revealing
 * when users hover over anchored headings.
 */
const anchorImage: Element = {
	type: 'element',
	tagName: 'svg',
	properties: {
		viewBox: '0 0 16 16',
		version: '1.1',
		width: '16',
		height: '16',
		ariaHidden: 'true',
	},
	children: [
		{
			type: 'element',
			tagName: 'path',
			properties: {
				fillRule: 'evenodd',
				d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z',
			},
			children: [],
		},
	],
};

const markdownNormalizer = unified();
markdownNormalizer.use(remarkParse);
markdownNormalizer.use(remarkGfm);
markdownNormalizer.use(remarkRehype, { allowDangerousHtml: true });
markdownNormalizer.use(rehypeHighlight, {
	languages: {
		bash: hljsBash,
		html: hlsjsXml,
		js: hljsJs,
		json: hljsJson,
		python: hlsjsPython,
		r: hlsjsR,
		ts: hljsTs,
		xml: hlsjsXml,
		yaml: hljsYaml,
		shell: hljsShell,
	},
	aliases: {
		python: ['py'],
		r: ['rlang'],
		js: ['javascript'],
		ts: ['typescript'],
		yaml: ['yml'],
		json: ['json5', 'jsonc'],
		bash: ['sh'],
		shell: ['console', 'terminal'],
	},
});
markdownNormalizer.use(rehypeSlug);
markdownNormalizer.use(rehypeAccessibleEmojis);
markdownNormalizer.use(rehypeAutolinkHeadings, {
	content: anchorImage,
});
markdownNormalizer.use(rehypeStringify, { allowDangerousHtml: true });

export async function markdownToHtml(markdown: string) {
	const html = String(await markdownNormalizer.process(markdown));
	// Fix the stuff inside of code blocks to not have Svelte special characters
	const root = parseHtml(html);
	root.querySelectorAll('code,pre').forEach((code) => {
		code.innerHTML = code.innerHTML
			.replace(/\{/g, '&lbrace;')
			.replace(/\}/g, '&rbrace;')
			.replace(/\$/g, '&dollar;');
	});
	return root.toString();
}

type PreprocessFunctionOutput = Promise<{
	code: string;
	dependencies?: string[];
}>;

interface PreprocessorBaseArgs {
	content: string;
	filename: string;
}

interface PreprocessorExtendedArgs extends PreprocessorBaseArgs {
	markup: string;
	attributes: Record<string, string>;
}

interface Preprocessor {
	markup?: (input: PreprocessorBaseArgs) => PreprocessFunctionOutput;
	script?: (input: PreprocessorExtendedArgs) => PreprocessFunctionOutput;
	style?: (input: PreprocessorExtendedArgs) => PreprocessFunctionOutput;
}

export const markdownToSvelte: Preprocessor =
	// Markdown processing
	{
		async markup(file) {
			let code = file.content;
			if (file.filename.endsWith('.md')) {
				const { content } = grayMatter(code);
				code = await markdownToHtml(content);
			}
			return {
				code,
			};
		},
	};
