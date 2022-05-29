import { unified } from 'unified';
import { parse as parseHtml } from 'node-html-parser';
// @ts-expect-error
import hljsJson from 'highlight.js/lib/languages/json';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import grayMatter from 'gray-matter';
import type { Element as HastElement } from 'hast';

/**
 * SVG for a "link" icon, for revealing
 * when users hover over anchored headings.
 */
const anchorImage: HastElement = {
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

const markdownNormalizer = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeHighlight, { languages: { json5: hljsJson } })
  .use(rehypeSlug)
  .use(rehypeAccessibleEmojis)
  .use(rehypeAutolinkHeadings, {
    content: anchorImage,
  })
  .use(rehypeStringify, { allowDangerousHtml: true });

async function markdownToHtml(markdown: string) {
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
