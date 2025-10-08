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
            <a href="/">
                {#each malikilamalik as word, i}
                    <h1 class="border-0 font-normal toggle {i === activeIndex ? 'active' : ''}">{word}</h1>
                {/each}
            </a>
        </div>
        <div class="justify-end text-right text-blue-600 hover:underline">
            <a href="/posts">Blog</a>
        </div>
    </div>
</header>