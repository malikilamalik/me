<script lang="ts">
	import { Header } from '$lib';
    import * as Card from "$lib/components/ui/card/index.js";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import AspectRatio from "$lib/components/ui/aspect-ratio/aspect-ratio.svelte";
    import { ArrowUpRight } from "@lucide/svelte";
    const items = [
        {
        kind: "Blog",
        date: "66/66/66",
        title: "Fooder",
        desc: "Fooder. JPG",
        href: "MANTAP Fooder",
        image: null
        },
        {
        kind: "Blog",
        date: "66/66/66",
        title: "LOREM IPSUM",
        desc:
            "LOREM IPSUM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3bo3cwUEDKMPS3FZjqKqiKkepvUYmA-oQA&s" // 16:9-ish preview
        },
                        {
        kind: "Blog",
        date: "66/66/66",
        title: "LOREM IPSUM",
        desc:
            "LOREM IPSUM ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3bo3cwUEDKMPS3FZjqKqiKkepvUYmA-oQA&s" // 16:9-ish preview
        },
        {
        kind: "Blog",
        date: "66/66/66",
        title: "Fooder",
        desc: "Fooder. JPGAAAAAAAAABB",
        href: "MANTAP Fooder",
        image: null
        },
                {
        kind: "Blog",
        date: "66/66/66",
        title: "Fooder",
        desc: "Fooder. JPGAAAAAAAAABB",
        href: "MANTAP Fooder",
        image: null
        },
                {
        kind: "Blog",
        date: "66/66/66",
        title: "Fooder",
        desc: "Fooder. JPGAAAAAAAAABB",
        href: "MANTAP Fooder",
        image: null
        },
    ];
</script>
<Header></Header>

<main class="flex flex-col break-normal">
    <section class="flex grow flex-col justify-evenly">
    <div class="basis-1/2">
        <div class="mb-4">
            <div class="prose max-h max-w-none text-justify">
                <p>
                    Salam! My name is Malik Wali. I'm a software engineer from Indonesia, Graduated from Telkom University with experience as a backend developer. Passionate about building scalable systems, I’m currently exploring infrastructure to deepen my understanding of backend architecture and system reliability at scale.
                </p>
                <p>
                    Want to work together?<br>
                    Contact me Through <a class="underline" href="mailto:kerjaanmalik@gmail.com"> Email </a> or Reach me on <a class="underline" href="https://www.linkedin.com/in/malikilamalik/"> LinkedIn </a>
                </p>
            </div>
        </div>
        <div class="flex grow flex-col">
            <h2
                class="text-md font-bold: mb-4 border-b border-solid border-black uppercase"
            >
                Working Experience:
            </h2>
            <ul class="flex grow flex-col justify-between">
                <li class="flex flex-row font-bold: mb-4 pb-4 border-b border-solid border-black">
                    <div class="basis-1/3 text-xs">
                        Backend Developer
                    </div>
                    <div class="basis-1/3">
                        PT. AKO MEDIA ASIA
                    </div>
                    <div>
                        2023 - 2025
                    </div>
                </li>
                <li class="flex flex-row font-bold: mb-4 pb-4 border-b border-solid border-black">
                    <div class="basis-1/3 text-xs">
                        Backend Developer
                    </div>
                    <div class="basis-1/3">
                        Pintar Ventura Group
                    </div>
                    <div>
                        2022 - 2023
                    </div>
                </li>
                <li class="flex flex-row font-bold: mb-4">
                    <div class="basis-1/3 text-xs">
                        Part-Time Backend Developer
                    </div>
                    <div class="basis-1/3">
                        Proclub Studio
                    </div>
                    <div>
                        2021 - 2022
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex grow flex-col border-t-2 border-solid border-black mt-4">
        <!-- Grid wrapper -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6
                    auto-rows-[12rem] mt-4"> <!-- base row height -->
        {#each items as item}
            <Card.Root
            class={`group relative overflow-hidden rounded-none border border-border bg-card transition
                    hover:bg-accent/10 hover:shadow-[0_0_0_1px_var(--border)]
                    ${item.image ? 'row-span-2' : 'row-span-1'} h-full`}
            >
            <a class="absolute inset-0 z-10" href={item.href} aria-label={item.title}></a>

            <!-- Header -->
            <div class="p-4">
                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" class="border-emerald-500/40 text-emerald-400">{item.kind}</Badge>
                <span>•</span><span>{item.date}</span>
                <ArrowUpRight class="ml-auto h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                </div>
            </div>

            {#if item.image}
                <div class="px-4">
                <AspectRatio ratio={16/9} className="mb-3 overflow-hidden rounded-none border">
                    <img src={item.image} alt="" class="h-full w-full object-cover" />
                </AspectRatio>
                </div>
            {/if}

            <div class={`px-4 ${item.image ? "pb-6" : "pb-3"} ${item.image ? "mt-0" : "-mt-2"}`}>
                <Card.Title class={`font-bold tracking-tight ${item.image ? "text-2xl" : "text-xl"}`}>
                {item.title}
                </Card.Title>
                <Card.Description class={`mt-1 text-muted-foreground ${item.image ? "text-sm" : "text-xs"}`}>
                {item.desc}
                </Card.Description>
            </div>
            </Card.Root>
        {/each}
        </div>
    </div>
    </section>
<!-- /#content -->
</main>
<footer>
    <div class="flex border-t-2 border-solid border-black mt-4">
        <div class="basis-2/3 container font-bold">
                <h1 class="border-0">·🌊✮ ⋆ 🦈｡ * ⋆｡·</h1>
        </div>
        <div class="basis-1/3 justify-end text-right"><a class="text-blue-600 hover:underline" href="https://github.com/malikilamalik">GitHub</a> *</div>
    </div>
</footer>