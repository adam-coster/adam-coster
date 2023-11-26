import { prisma } from '$lib/db.js';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const prerender = false;

export const GET: RequestHandler = async (ctx) => {


    // Get a summary of total and unique visits per route
    const visits = (await prisma.visit.groupBy({
        by: ['route'],
        _count: {
            route: true,
        },
        _sum: {
            views: true,
        },
    })).map(v => ({
        route: v.route,
        total: v._sum.views,
        unique: v._count.route,
    })).sort((a,b)=>b.unique-a.unique);

    return json({visits});
};

export const POST: RequestHandler = async (ctx) => {
    const data = getVisitInfo(await ctx.request.json());
    if (data) {
        await prisma!.visit.upsert({
            where: {
                route_userId: {
                    route: data.path,
                    userId: data.browserId,
                }
            },
            create: {
                route: data.path,
                referrer: data.referrer,
                userId: data.browserId,
            },
            update: {
                views: {
                    increment: 1,
                }
            },
        })
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