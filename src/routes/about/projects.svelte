<script>
    const projects = [
        {
            image: '/evaly.io.webp',
            name: 'Evaly',
        },
        {
            image: '/bikinsoal.com.webp',
            name: 'Bikinsoal',
        },
        {
            image:'/gallerysasi.com.webp',
            name: 'Gallery Sasi',
        }
    ]
</script>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each projects as project}
        <div>
            <div class="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <img src={project.image} alt={project.name} class="aspect-[10/6]"/>
            </div>
            <div class="font-medium px-2 py-1 w-full">{project.name}</div>
        </div>
    {/each}
</div>