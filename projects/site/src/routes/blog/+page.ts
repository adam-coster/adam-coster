import { prerendering } from '$app/environment';
import { ArticleSearcher } from '$lib/articleSearcher';
import type { PageLoad } from './$types';

export const csr = true;

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
