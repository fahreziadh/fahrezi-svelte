<script>
	import { fade } from 'svelte/transition';

	const listSoftwareDevTools = [
		{
			name: 'Visual Studio Code',
			description: 'Text Editor',
			link: 'https://code.visualstudio.com/'
		},
		{
			name: 'Git',
			description: 'Version Control System',
			link: 'https://git-scm.com/'
		},
		{
			name: 'GitHub',
			description: 'Version Control System',
			link: 'https://github.com'
		},
		{
			name: 'Github Copilot',
			description: 'AI Pair Programming',
			link: 'https://copilot.github.com/'
		},
		{
			name: 'Android Studio',
			description: 'Android Development',
			link: 'https://developer.android.com/studio'
		},
		{
			name: 'Ubuntu',
			description: 'Operating System',
			link: 'https://ubuntu.com/'
		}
	];

	const listHardwareDevTools = [
		{
			name: 'Lenovo Yoga Slim 7',
			description: 'Laptop',
			link: ''
		},
		{
			name: 'PC Desktop',
			description: 'Ryzen 5 5600, 16GB RAM, RX 6600',
			link: ''
		},
		{
			name: 'Philips 242m8',
			description: 'Monitor 144hz',
			link: ''
		},
		{
			name: 'Razer Viper Mini',
			description: 'Mouse',
			link: ''
		},
		{}
	];
</script>

<div in:fade class="container max-w-[600px]">
	<h1 class="font-medium text-xl mt-10 text-center">
		<span class="underline">Tools</span> yang aku gunakan
	</h1>
	<h1 class="text-center">mulai dari hal development, design, maupun produktivitas</h1>

	<div class="mt-10 mb-5 flex flex-row items-center w-full gap-4">
		<div class="border-b border-dashed grow"></div>
		<h1 class="font-medium bg-secondary px-4 py-1">Software Development</h1>
		<div class="border-b grow border-dashed"></div>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each listSoftwareDevTools as item}
			<a
				href={item.link}
				target="_blank"
				class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
			>
				<p class="font-semibold">{item.name}</p>
				<p class="text-xs">{item.description}</p>
				<svg
					class="absolute top-4 right-4 group-hover:scale-100 scale-0 transition rotate-180 group-hover:rotate-0 duration-300"
					width="18px"
					height="18px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17L17 7M17 7H8M17 7V16"
						stroke="#FFFFFF"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		{/each}
	</div>

	<div class="mt-10 mb-5 flex flex-row items-center w-full gap-4">
		<div class="border-b border-dashed grow"></div>
		<h1 class="font-medium bg-secondary px-4 py-1">Hardware</h1>
		<div class="border-b grow border-dashed"></div>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each listHardwareDevTools as item}
			<a
				href={item.link}
				target="_blank"
				class="relative group border rounded-md p-4 transition-all hover:border-foreground bg-secondary/20 hover:bg-secondary/50"
			>
				<p class="font-semibold">{item.name}</p>
				<p class="text-xs">{item.description}</p>
				<svg
					class="absolute top-4 right-4 group-hover:scale-100 scale-0 transition rotate-180 group-hover:rotate-0 duration-300"
					width="18px"
					height="18px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 17L17 7M17 7H8M17 7V16"
						stroke="#FFFFFF"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		{/each}
	</div>
</div>
