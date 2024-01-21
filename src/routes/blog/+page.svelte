<script>
	import { fade } from 'svelte/transition';
	import { blogs } from './blogs';
	import dayjs from 'dayjs';
</script>

<div in:fade class="container max-w-[800px] flex flex-col gap-4">
	<h1 class="font-medium text-xl mt-5 mb-5">
        my blog
    </h1>
	
	{#each blogs as blog}
		<a href={`${blog.slug}`} class="hover:opacity-70">
			<h1 class="font-medium text-lg">{blog.title}</h1>
			<h2 class="text-sm opacity-60">{dayjs(blog.createdAt).format('DD, MMM YYYY')}</h2>
		</a>
	{/each}
</div>
