<script>
  import { onMount } from 'svelte';
    let malikilamalik = ["malikilamalik.dev", "m4likilamalik.dev", "mal1kilλmalik_dev","mλlikilam4lik dev"];

    let activeIndex = 0;
    let intervalWord1= 1;
    onMount(() => {
        intervalWord1 = setInterval(() => {
            activeIndex = (activeIndex + 1) % malikilamalik.length;
        }, 1000);
        return () => clearInterval(intervalWord1); // Cleanup on unmount
    });
</script>
<style>
  .toggle {
    display: none;
  }

  .active {
    display: inline-block;
  }
</style>
<header class="grow-0 shrink-0">
    <div class="flex flex-row content-between border-solid border-black pb-2">
        <div class="container font-bold">
            <a href="https://malikilamalik.dev/">
                {#each malikilamalik as word, i}
                    <h1 class="border-0 font-normal toggle {i === activeIndex ? 'active' : ''}">{word}</h1>
                {/each}
            </a>
        </div>
        <div class="justify-end text-right text-green-600 hover:underline">
            <a href="https://www.google.com/search?q=can+i+use+js+in+sveltekit&oq=can+i+use+js+in+svelt&gs_lcrp=EgZjaHJvbWUqCQgCECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIHCAMQIRifBTIHCAQQIRifBTIHCAUQIRifBTIHCAYQIRifBTIHCAcQIRifBTIHCAgQIRifBTIHCAkQIRifBdIBCDU3NTVqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8">Blog</a>
        </div>
    </div>
</header>

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

    </section>
<!-- /#content -->
</main>
<footer>
    <div class="flex flex-row content-between border-t-2 border-solid border-black mt-4">
        <div class="container font-bold">
                <h1 class="border-0">·🌊✮ ⋆ 🦈｡ * ⋆｡·</h1>
        </div>
        <div class="flex flex-col justify-end text-right"></div>
    </div>
</footer>