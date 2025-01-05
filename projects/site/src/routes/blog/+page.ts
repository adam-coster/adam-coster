import { ArticleSearcher } from '$lib/articleSearcher';
import type { PageLoad } from './$types';

export const csr = true;

export const load: PageLoad = async (input) => {
	const articleSearcher = new ArticleSearcher(input.fetch);
	const allArticles = await articleSearcher.search(null);
	await articleSearcher.search('');
	return {
		articleSearcher,
		allArticles,
	};
};
