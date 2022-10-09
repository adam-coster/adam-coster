/**
 * Processing of posts for various purposes, including:
 *
 * - Creation of metadata file for use in search results
 * - Creation of search index
 * - Creation of RSS feed(s)
 */

import fs from 'fs/promises';
import lunr from 'lunr';
import type { ArticleFrontMatter, ArticleIndexEntry } from './types/Article.js';
import { searchableTextFromMarkdown } from './markdownToSearchable.js';
import { pick, omit } from '@adam-coster/utility';
import path from 'path';
import { writeJson } from './files.js';
import { Feed } from 'feed';
import { markdownToMicrodata } from './markdownToMicrodata.js';

/**
 * For all articles, parse out the metadata to create, write, and return:
 *
 * - An RSS Feed
 * - A sitemap (for reference by a main sitemap)
 * - A JSON file containing the metadata for each article
 * - A Lunr search index for all posts
 */
export async function generateArticleSummaries(options: {
	productionBaseUrl: string;
	staticDir: string;
	feedsDir: string;
	articlesDir: string;
}) {
	await fs.mkdir(options.staticDir, { recursive: true });
	await fs.mkdir(options.feedsDir, { recursive: true });

	const baseArticlesUrl = `${options.productionBaseUrl}/blog`;

	const articlesMetadata: ArticleFrontMatter[] = [];
	const articleSearchDocs: ArticleIndexEntry[] = [];
	const articleTags = new Set<string>();

	const author = {
		name: 'Adam Coster',
		link: options.productionBaseUrl,
	};
	const feed = new Feed({
		title: "Adam Coster's collected writings",
		description: 'Blog posts, articles, and other writings by Adam Coster.',
		id: options.productionBaseUrl,
		language: 'en',
		copyright: `Copyright © ${new Date().getFullYear()} Adam Coster. All rights reserved.`,
		link: options.productionBaseUrl,
		image: `${options.productionBaseUrl}/images/adam-coster-square_160.jpg`,
		favicon: `${options.productionBaseUrl}/icons/favicon.png`,
		generator: 'A CVS receipt printer',
		author,
		feedLinks: {
			json: `${options.productionBaseUrl}/blog.json`,
			atom: `${options.productionBaseUrl}/blog.atom`,
			rss: `${options.productionBaseUrl}/blog.rss`,
		},
	});

	const filenames = (await fs.readdir(options.articlesDir)).filter((fileName) =>
		fileName.endsWith('.md'),
	);

	const waits: Promise<unknown>[] = [];
	for (const filename of filenames) {
		const filePath = path.join(options.articlesDir, filename);
		const loader = fs.readFile(filePath, 'utf8').then(async (content) => {
			const parsed = searchableTextFromMarkdown(content);
			if (!parsed.publishedAt) {
				return;
			}
			if (Array.isArray(parsed.tags)) {
				parsed.tags.forEach((tag) => articleTags.add(tag));
			}
			const url = `${baseArticlesUrl}/${parsed.slug}`;
			const publishedAt = new Date(parsed.publishedAt);
			articlesMetadata.push(omit(parsed, ['body']));
			articleSearchDocs.push(
				pick(parsed, ['body', 'title', 'slug', 'description', 'tags']),
			);
			feed.addItem({
				title: parsed.title,
				id: url,
				link: url,
				description: parsed.description,
				content: parsed.description,
				date: publishedAt,
				image: `${options.productionBaseUrl}/previews/blog/${parsed.slug}/preview.jpg`,
				copyright: `Copyright © ${publishedAt.getFullYear()} Adam Coster. All rights reserved.`,
				author: [author],
				// TODO: Add categories
			});

			// Generate Microdata
			const microdata = await markdownToMicrodata(content);
			const folder = path.join(options.staticDir, 'microdata', 'blog');
			await fs.mkdir(folder, { recursive: true });
			await fs.writeFile(
				path.join(folder, `${parsed.slug}.json`),
				JSON.stringify(microdata, null, '\t'),
			);
		});
		waits.push(loader);
	}
	await Promise.all(waits);

	const searchIndex = lunr(function () {
		this.ref('slug');
		this.field('title', { boost: 5 });
		this.field('description', { boost: 3 });
		this.field('tags', { boost: 2 });
		this.field('body');
		articleSearchDocs.forEach((doc) => this.add(doc));
	});

	await Promise.all([
		writeJson(path.join(options.staticDir, `blog-search.json`), searchIndex, {
			noSpaces: true,
		}),
		writeJson(
			path.join(options.staticDir, `blog-metadata.json`),
			articlesMetadata,
			{ noSpaces: true },
		),
		writeJson(path.join(options.feedsDir, 'tags.json'), [...articleTags]),
		fs.writeFile(path.join(options.feedsDir, 'blog.json'), feed.json1()),
		fs.writeFile(path.join(options.feedsDir, 'blog.atom'), feed.atom1()),
		fs.writeFile(path.join(options.feedsDir, 'blog.rss'), feed.rss2()),
	]);

	return {
		metadata: articlesMetadata,
		search: searchIndex,
		feed,
	};
}
