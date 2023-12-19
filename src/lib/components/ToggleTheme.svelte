<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
</script>

<button on:click={toggleMode} class="py-2 px-2 rounded-md hover:bg-foreground/5 transition-colors">
	{#if $mode === 'light'}
		<img src="/assets/sun.png" width="14" height="14" alt="sun" />
	{:else}
		<img src="/assets/moon.png" width="14" height="14" alt="moon" />
	{/if}

	<span class="sr-only">Toggle theme</span>
</button>
