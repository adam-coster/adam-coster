import { ArticleSearcher } from '$lib/articleSearcher';
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = false;

/**
 * Match Wordpress URLs from the old blog, re-routing to any
 * posts that were migrated.
 *
 * Early exit if this doesn't look like a legacy URL
 * (Exiting without returning a value should allow the
 * router to keep looking for other matches.)
 */

export const load: PageLoad = async (input) => {
	const articleSearcher = new ArticleSearcher(input.fetch);
	const { legacySlug, year, month, day } = input.params;
	const isLegacyUrl =
		/^\d{4}$/.test(year) &&
		/^\d{2}$/.test(month) &&
		/^\d{2}$/.test(day) &&
		legacySlug;
	if (!isLegacyUrl) {
		return;
	}

	const matchingArticle = await articleSearcher.find(
		(a) => a.legacySlug === legacySlug,
	);
	if (!matchingArticle) {
		throw error(404);
	} else {
		throw redirect(301, matchingArticle.url);
	}
};
