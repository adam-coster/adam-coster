import { ArticleSearcher } from '$lib/articleSearcher';
import type { PageLoad } from './$types';

export const load: PageLoad = async (input) => {
	const articleSearcher = new ArticleSearcher(input.fetch);
	const searchResults = await articleSearcher.search(undefined);
	return {
		articleSearcher,
		searchResults,
	};
};
