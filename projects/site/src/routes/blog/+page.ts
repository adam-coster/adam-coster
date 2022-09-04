import { ArticleSearcher } from '$lib/articleSearcher';
import type { PageLoad } from './$types';
import { prerendering } from '$app/environment';

export const load: PageLoad = async (input) => {
	const articleSearcher = new ArticleSearcher(input.fetch);
	const searchTerm = prerendering
		? undefined
		: input.url.searchParams.get('search');
	const searchResults = await articleSearcher.search(searchTerm);
	return {
		articleSearcher,
		searchResults,
	};
};
