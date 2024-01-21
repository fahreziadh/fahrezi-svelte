<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import '@fontsource-variable/inter';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>Hello I'm Fahrezi Adha</title>
	<meta
		name="description"
		content="Hello I'm Fahrezi Adha, im a frontend dev and devoted husband, passionate about creating captivating web experiences. Currently at Nuon, building Ujian.io and share every journey here."
	/>
</svelte:head>

<ModeWatcher />
<Navbar />
<div class="min-h-screen">
	<slot/>
</div>
<div class="border-t mt-10 py-10 text-center">
	<p class="text-sm">© 2024 Fahrezi Adha. All rights reserved</p>
</div>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
