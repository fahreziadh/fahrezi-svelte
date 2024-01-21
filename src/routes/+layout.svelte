<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import '@fontsource-variable/inter';
	import { ModeWatcher } from 'mode-watcher';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	titleTemplate="%s | Fahrezi Adha"
	title="Hello, im Fahrezi"
	description="im a frontend dev and devoted husband, passionate about creating captivating web experiences. Currently at Nuon, building evaly.io and share every journey here."
	openGraph={{
		url: 'https://www.fahreziadha.com',
		title: 'Open Graph Title',
		description: 'Open Graph Description',
		images: [
			{
				url: 'https://fahreziadha.com/evaly.io.webp',
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			},
		],
		siteName: 'Hello, im Fahrezi',
	}}
	twitter={{
		handle: '@fahreziadhaa',
		site: 'https://www.fahreziadha.com',
		cardType: 'summary_large_image',
		title: 'Hello, im Fahrezi',
		description: 'Founder of @evalyio',
		image: 'https://fahreziadha.com/evaly.io.webp',
		imageAlt: 'Twitter image alt'
	}}
/>

<ModeWatcher />
<Navbar />
<div class="min-h-screen">
	<slot />
</div>
<div class="border-t mt-10 py-10 text-center">
	<p class="text-sm">© 2024 Fahrezi Adha. All rights reserved</p>
</div>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
