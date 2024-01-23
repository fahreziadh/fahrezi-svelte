import { Redis } from '@upstash/redis/cloudflare';
import type { LayoutServerLoad } from './$types';
import { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from '$env/static/private';

export const load = (async (req) => {
	const slug = req.route.id as string;
	const redis = new Redis({
		token: UPSTASH_REDIS_REST_TOKEN,
		url: UPSTASH_REDIS_REST_URL
	});

	const views = (await redis.get<number>(['pageviews', 'projects', slug].join(':'))) ?? 0;

	return {
		views
	};
}) satisfies LayoutServerLoad;
