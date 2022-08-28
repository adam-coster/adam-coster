import type { LayoutLoad } from './$types';

export const load: LayoutLoad<{ key: string }> = (info) => {
	return {
		key: info.url.pathname,
	};
};
