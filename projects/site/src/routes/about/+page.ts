import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/**
 * Redirect to the root
 */
export const load: PageLoad = () => {
	redirect(301, '/');
};
