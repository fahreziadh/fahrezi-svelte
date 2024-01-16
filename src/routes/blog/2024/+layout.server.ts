import { Redis } from '@upstash/redis';
import type { LayoutServerLoad } from './$types';
import { blogs } from '../blogs';

export const load = (async (req) => {
	const slug = req.route.id;
	const redis = Redis.fromEnv();
	const views = (await redis.get<number>(['pageviews', 'projects', slug].join(':'))) ?? 0;
    console.log(slug);
    const title = blogs.find((blog) => blog.slug === slug)?.title ?? 'Blog not found';
    const createdAt = blogs.find((blog) => blog.slug === slug)?.createdAt ?? 'Blog not found';
	return {
		views,
        title,
        createdAt
	};
}) satisfies LayoutServerLoad;
