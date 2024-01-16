import { Redis } from '@upstash/redis/cloudflare';
import type { LayoutServerLoad } from './$types';
import { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from '$env/static/private';
import { blogs } from '../blogs';

export const load = (async (req) => {
	const slug = req.route.id;
	const redis = new Redis({
		token: UPSTASH_REDIS_REST_TOKEN,
		url: UPSTASH_REDIS_REST_URL
	});
	const views = (await redis.get<number>(['pageviews', 'projects', slug].join(':'))) ?? 0;
	const title = blogs.find((blog) => blog.slug === slug)?.title ?? 'Blog not found';
	const createdAt = blogs.find((blog) => blog.slug === slug)?.createdAt ?? 'Blog not found';
	return {
		views,
		title,
		createdAt
	};
}) satisfies LayoutServerLoad;
