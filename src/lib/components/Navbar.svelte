<script>
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'work', href: '/work' },
		{ name: 'blog', href: '/blog' },
		{ name: 'tools', href: '/tools' }
	];
</script>

<div class="flex flex-row items-center justify-center gap-6 h-[60px]">
	{#each links as link}
		<a
			href={link.href}
			class={cn('hover:underline', link.href === $page.url.pathname ? 'opacity-100' : 'opacity-60')}
			>{link.name}</a
		>
	{/each}
</div>
