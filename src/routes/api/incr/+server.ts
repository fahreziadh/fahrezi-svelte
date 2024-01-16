import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';
import type { RequestHandler } from '../$types';

import { Redis } from '@upstash/redis';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const redis = new Redis({
		token: UPSTASH_REDIS_REST_TOKEN,
		url: UPSTASH_REDIS_REST_URL
	});
	const body = await request.json();
	const slug = body.slug as string | undefined;
	if (!slug) {
		return new Response('Slug not found', { status: 400 });
	}

	const ip = request.headers.get('x-forwarded-for') || getClientAddress();
	const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
	const hash = Array.from(new Uint8Array(buf))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');

	const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
		nx: true,
		ex: 24 * 60 * 60
	});
	if (!isNew) {
		return new Response(null, { status: 202 });
	}

	await redis.incr(['pageviews', 'projects', slug].join(':'));

	return new Response(null, { status: 202 });
};
