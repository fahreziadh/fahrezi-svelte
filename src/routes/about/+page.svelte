<script>
	import { fade } from 'svelte/transition';

	const socialMediaLinks = [
		{
			name: 'twitter',
			url: 'https://twitter.com/fahreziadhaa',
			image: '../assets/x.png'
		},
		{
			name: 'linkedin',
			url: 'https://linkedin.com/in/fahrezi',
			image: '../assets/linkedin.png'
		},
		{
			name: 'github',
			url: 'https://github.com/fahreziadh',
			image: '../assets/github.png'
		},

		{
			name: 'youtube',
			url: 'https://www.youtube.com/channel/UCOhmLMgnGXcQIzeQihpHiYw',
			image: '../assets/youtube.png'
		}
	];
</script>

<div in:fade class="container max-w-[600px] flex flex-col items-center pt-[40px]">
	<enhanced:img src="$lib/assets/profile.png" class="w-[60px]" alt="logo" />
	<h1 class="font-medium text-lg">Hello, I'm Fahrezi</h1>
	<div class="inline-flex gap-2 mt-2 mb-6">
		{#each socialMediaLinks as link}
			<a
				target="_blank"
				href={link.url}
				class="hover:underline group font-bold text-xs inline-flex gap-1 items-center"
				><img width={12} height={12} src={link.image} class="w-[12px]" alt="logo" />{link.name}
				<svg
					class="group-hover:visible invisible"
					fill="#000000"
					height="8px"
					width="8px"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 330 330"
					xml:space="preserve"
				>
					<path
						id="XMLID_222_"
						d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
               C255,161.018,253.42,157.202,250.606,154.389z"
					/>
				</svg></a
			>
		{/each}
	</div>
	<h2 class="text-center">
		im a frontend dev and devoted husband, passionate about creating captivating web experiences.
		Currently at Nuon, building Ujian.io and share every journey here.
	</h2>

	<div class="mt-10 mb-5 flex flex-row items-center w-full gap-4">
		<div class="border-b border-dashed grow"></div>
		<h1 class="font-medium bg-secondary px-4 py-1">work</h1>
		<div class="border-b grow border-dashed"></div>
	</div>

	<div>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quae voluptates modi dolorum
		unde, facilis placeat accusantium. Voluptatibus, dolor aliquid. Quo maxime illo totam qui
		excepturi enim officiis dolor ducimus!
	</div>

	<div class="mt-10 mb-5 flex flex-row items-center w-full gap-4">
		<div class="border-b border-dashed grow"></div>
		<h1 class="font-medium bg-secondary px-4 py-1">blog</h1>
		<div class="border-b grow border-dashed"></div>
	</div>

	<div>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quae voluptates modi dolorum
		unde, facilis placeat accusantium. Voluptatibus, dolor aliquid. Quo maxime illo totam qui
		excepturi enim officiis dolor ducimus!
	</div>
</div>
