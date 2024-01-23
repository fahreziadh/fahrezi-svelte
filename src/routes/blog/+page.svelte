<script>
	import { fade } from 'svelte/transition';
	import { blogs } from './blogs';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { Eye, Icon } from 'svelte-hero-icons';
	import Img from '$lib/components/custom/img.svelte';

	const views = data.slugsAndViews;
</script>

<div in:fade class="container max-w-[800px] flex flex-col gap-4">
	<h1 class="font-medium text-xl mt-5 mb-5">my blog</h1>

	{#each blogs as blog}
		<a href={`${blog.slug}`} class="hover:opacity-70">
			<div class="flex gap-6">
				{#if blog.thumbnail}
					<img src={blog.thumbnail} alt={blog.title} class="w-12 h-12 rounded-md" />
				{:else}
					<div class="w-16 h-16 rounded-md bg-zinc-100" />
				{/if}
				<div>
					<h1 class="font-medium text-lg">{blog.title}</h1>
					<div class="flex items-center gap-4">
						<h2 class="text-sm opacity-60 flex items-center gap-1">
							{views.find((e) => e.slug === blog.slug)?.views ?? 0} views
						</h2>
						<!-- <h2 class="text-sm opacity-60">{dayjs(blog.createdAt).fromNow(true)}</h2> -->
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
