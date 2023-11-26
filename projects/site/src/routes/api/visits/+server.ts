
import { db } from '$lib/db.js';
import * as schema from '$lib/schema.js';
import { json } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (ctx) => {
    const visits = await db.select({
        route: schema.visit.route,
        unique: sql<number>`count(distinct ${schema.visit.userId})`,
        total: sql<number>`sum(${schema.visit.views})`,
    }).from(schema.visit).groupBy(schema.visit.route).orderBy(sql`count(*) desc`).execute();

    return json({
        visits: visits.map(visit => ({
            route: visit.route,
            unique: +visit.unique,
            total: +visit.total
        
    }))});
};

export const POST: RequestHandler = async (ctx) => {

    const data = getVisitInfo(await ctx.request.json());
    if (data) {

        const res = await db.insert(schema.visit).values({
            route: data.path,
            referrer: data.referrer,
            userId: data.browserId,
        }).onDuplicateKeyUpdate({
            set: {
                views: sql`${schema.visit.views} + 1`,
            }
        });
    }
    return new Response(null, { status: 204 });
}

function getVisitInfo(body: any): undefined | {path: string, referrer?: string, browserId: string} {
    if ('path' in body && typeof body.path === 'string' && body.path[0] === '/' && 'browserId' in body && typeof body.browserId === 'string' && body.browserId.length === 6) {
        return {
            path: body.path,
            referrer: typeof body.referrer === 'string' ? body.referrer : undefined,
            browserId: body.browserId
        }
    };
    return;
}