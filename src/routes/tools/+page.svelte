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
		{
			name: 'Logitech C920',
			description: 'Webcam',
			link: ''
		}
	];

	const listTechStack = [
		{
			name: 'React.js',
			description: 'For building user interfaces',
			link: 'https://react.dev'
		},
		{
			name: 'Next.js',
			description: 'For building websites',
			link: 'https://nextjs.org'
		},
		{
			name: 'Svelte Kit',
			description: 'For building websites',
			link: 'https://kit.svelte.dev'
		},
		{
			name: 'Cloudflare Pages',
			description: 'For hosting websites',
			link: 'https://pages.cloudflare.com'
		},
		{
			name: 'Cloudflare Workers',
			description: 'Serverless / Edge Functions'
		},
		{
			name: 'Upstash Redis',
			description: 'Serverless Redis',
			link: 'https://upstash.com'
		},
		{
			name: 'PlanetScale MySQL',
			description: 'Serverless MySQL',
			link: 'https://planetscale.com'
		},
		{
			name: 'Tailwind CSS',
			description: 'For styling websites',
			link: 'https://tailwindcss.com'
		},
		{
			name: 'Posthog',
			description: 'For analytics',
			link: 'https://posthog.com'
		},
		{
			name: 'LiveKit',
			description: 'For video conferencing',
			link: 'https://livekit.io'
		},
		{
			name: 'Partykit',
			description: 'Websocket library',
			link: 'https://partykit.io'
		},
		{
			name: 'Github',
			description: 'For hosting code',
			link: 'https://github.com'
		}
	];
</script>

<div in:fade class="container max-w-[800px]">
	<h1 class="font-medium text-xl mt-5">
		<span class="underline">tools & stack</span> that I use
	</h1>
	<h1>starting from development, design, to productivity</h1>
	<div class="mt-10 mb-5 flex flex-row items-center w-full gap-4">
		<div class="border-b border-dashed w-[20px]"></div>
		<h1 class="font-medium bg-secondary px-2 py-1 text-sm">Tech Stack</h1>
		<div class="border-b grow border-dashed"></div>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each listTechStack as item}
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
		<div class="border-b border-dashed w-[20px]"></div>
		<h1 class="font-medium bg-secondary px-2 py-1 text-sm">Software Development</h1>
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
		<div class="border-b border-dashed w-[20px] text-sm"></div>
		<h1 class="font-medium bg-secondary px-2 py-1">Hardware</h1>
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
