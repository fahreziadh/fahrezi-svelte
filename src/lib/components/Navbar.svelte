<script>
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'blog', href: '/blog' },
		{ name: 'tools', href: '/tools' },
	];
</script>

<div class="flex flex-row items-center container max-w-[800px] gap-6 h-[60px]">
	{#each links as link}
		<a
			href={link.href}
			class={cn('hover:underline', link.href === $page.url.pathname ? 'opacity-100' : 'opacity-60')}
			>{link.name}</a
		>
	{/each}
	<ToggleTheme />
</div>
