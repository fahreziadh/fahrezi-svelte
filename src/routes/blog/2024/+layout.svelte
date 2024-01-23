<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import dayjs from 'dayjs';
	import { blogs } from '../blogs';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: if (browser && $page.route) {
		fetch(`/api/incr`, { method: 'POST', body: JSON.stringify({ slug: $page.route.id }) }).then(
			(res) => console.log(res)
		);
	}

	const views = data.views;

	$: slug = $page.route.id;

	let title = 'Blog not found';
	let createdAt = new Date().toISOString();
	let subtitle = '';
	let subtitleLink = '';
	let thumbnail = '';

	$: {
		slug = $page.route.id;
		title = blogs.find((blog) => blog.slug === slug)?.title ?? title;
		createdAt = blogs.find((blog) => blog.slug === slug)?.createdAt ?? createdAt;
		subtitle = blogs.find((blog) => blog.slug === slug)?.subtitle ?? subtitle;
		subtitleLink = blogs.find((blog) => blog.slug === slug)?.subtitleLink ?? subtitleLink;
		thumbnail = blogs.find((blog) => blog.slug === slug)?.thumbnail ?? thumbnail;
	}
</script>

<div in:fade class="container max-w-[800px] py-5">
	<a href="/blog" class=" hover:underline">← Back</a>
	<div class="w-full flex flex-col mt-10 border-b pb-10 border-opacity-50">
		{#if thumbnail}
			<img src={thumbnail} alt={title} class="w-16 h-16 rounded-md" />
		{:else}
			<div class="w-16 h-16 rounded-md bg-gray-200" />
		{/if}
		<h1 class="text-4xl font-bold mt-4">{title}</h1>
		{#if subtitle}<a href={subtitleLink} class="mt-2 hover:text-blue-500">{subtitle}</a>{/if}
		<div class="flex items-center gap-4 mt-4 opacity-60 text-sm">
			<h3>• {dayjs(createdAt).format('DD, MMM YYYY')}</h3>
			<h3>• {views} views</h3>
		</div>
	</div>
	<div
		class=" prose prose-lg w-full text-pretty prose-a:no-underline prose-zinc dark:prose-invert mt-14"
	>
		<slot />
	</div>
</div>
