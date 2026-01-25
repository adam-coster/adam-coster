import { error, type HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = () => {
	error(404, 'Page not found!');
};
