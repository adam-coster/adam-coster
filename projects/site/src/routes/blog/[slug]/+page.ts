import { ArticleSearcher } from '$lib/articleSearcher';
import { createArticleMicrodata, type MetadataFull } from '$lib/metadata';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const csr = true;

export const load: PageLoad = async (input) => {
	const { slug } = input.params;
	const articleSearcher = new ArticleSearcher(input.fetch);
	const frontmatter = await articleSearcher.get(slug);
	if (!frontmatter) {
		throw error(404);
	}
	const meta: MetadataFull = {
		title: frontmatter.title,
		description: frontmatter.description || 'An article by Adam Coster',
		canonical: frontmatter.canonical,
		type: 'article',
		microdata: createArticleMicrodata({
			headline: frontmatter.title,
			datePublished: frontmatter.publishedAt,
			dateModified: frontmatter.editedAt,
			images: frontmatter.images,
		}),
	};

	return {
		frontmatter,
		meta,
		slug,
	};
};
