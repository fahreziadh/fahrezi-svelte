import { Redis } from '@upstash/redis/cloudflare';
import type { LayoutServerLoad } from './$types';
import { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from '$env/static/private';
import { blogs } from './blogs';

export const load = (async () => {
	const redis = new Redis({
		token: UPSTASH_REDIS_REST_TOKEN,
		url: UPSTASH_REDIS_REST_URL
	});

	const slugs = blogs.map((blog) => blog.slug);

	const views = await redis.mget<number[]>(
		slugs.map((slug) => ['pageviews', 'projects', slug].join(':'))
	);

	// join all slug and views

	const slugsAndViews = slugs.map((slug, index) => {
		return {
			slug,
			views: views[index] ?? 0
		};
	});

	return {
		slugsAndViews
	};
}) satisfies LayoutServerLoad;
