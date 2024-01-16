<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import dayjs from 'dayjs';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: if (browser && $page.route) {
		fetch(`/api/incr`, { method: 'POST', body: JSON.stringify({ slug: $page.route.id }) }).then(
			(res) => console.log(res)
		);
	}

	const views = data.views;
	const title = data.title;
	const createdAt = data.createdAt;
</script>

<div in:fade class="container max-w-[800px] mt-10">
	<div class="w-full flex flex-col items-center justify-center py-10">
		<a href="/blog" class=" hover:underline mb-4">← Back</a>
		<h1 class="text-4xl font-bold text-center">{title}</h1>
		<div class="flex items-center gap-4 mt-4 opacity-60 font-medium">
			<h3 >• {dayjs(createdAt).format('DD, MMM YYYY')}</h3>
			<h3 >• {views} views</h3>
		</div>
	</div>
	<div class=" prose prose-lg w-full text-pretty prose-a:no-underline prose-zinc dark:prose-invert">
		<slot />
	</div>
</div>
