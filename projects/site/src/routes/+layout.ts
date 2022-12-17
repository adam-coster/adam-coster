import type { LayoutLoad } from './$types.js';

export const prerender = true;
export const csr = false;
export const ssr = true;
export const trailingSlash = 'never';

export const load: LayoutLoad<{ key: string }> = (info) => {
	return {
		key: info.url.pathname,
	};
};
