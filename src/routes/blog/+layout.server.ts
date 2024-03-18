import type { LayoutServerLoad } from './$types';
import { blogs } from './blogs';

export const load = (async () => {
	const slugs = blogs.map((blog) => blog.slug);
	return {
		slugs
	};
}) satisfies LayoutServerLoad;
