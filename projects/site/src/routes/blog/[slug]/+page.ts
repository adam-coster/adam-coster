import { ArticleSearcher } from '$lib/articleSearcher';
import { createArticleMicrodata, type MetadataFull } from '$lib/metadata';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const csr = true;

export const load: PageLoad = async (input) => {
	const { slug } = input.params;
	const articleSearcher = new ArticleSearcher(input.fetch);

	const [frontmatter, microdata] = await Promise.all([
		articleSearcher.get(slug),
		input
			.fetch(`/microdata/blog/${slug}.json`)
			.then((result) =>
				result.status === 200 ? (result.json() as Promise<any[]>) : [],
			),
	]);
	if (!frontmatter) {
		throw error(404);
	}
	const meta: MetadataFull = {
		title: frontmatter.title,
		description: frontmatter.description || 'An article by Adam Coster',
		canonical: frontmatter.canonical,
		type: 'article',
		microdata: [
			createArticleMicrodata({
				headline: frontmatter.title,
				datePublished: frontmatter.publishedAt,
				dateModified: frontmatter.editedAt,
				images: frontmatter.images,
			}),
			...microdata,
		],
	};

	return {
		frontmatter,
		meta,
		slug,
	};
};
