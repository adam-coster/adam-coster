import { env } from '$env/dynamic/private';
import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schema from './schema.js';

// create the connection
const connection = connect({
	url: env.DATABASE_URL,
	// NOTE: This is a workaround for some Cloudflare jank.
	// See: https://github.com/planetscale/database-js/pull/102#issuecomment-1508219636
	fetch: (url, init) => {
		delete (init as any)['cache']; // Remove cache header
		return fetch(url, init);
	},
});

export const db = drizzle(connection, { schema });
