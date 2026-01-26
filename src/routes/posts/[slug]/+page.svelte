<script lang="ts">
	import { Head, Header} from '$lib';

	const { data } = $props();
	let {
		Content,
		meta: { date, title, readingTime },
	} = data;
</script>
<Header></Header>
<Head title={`Post | ${title}`} />

<article class="flex flex-grow flex-col">
	<h1 class="mb-5 text-xl font-bold md:text-5xl">{title}</h1>
	<div class="">
		<p>{new Date(date).toDateString()}</p>
		<p class="mb-16">{readingTime.text}</p>
		<div class="all-prose mb-10">
			{#if Content}
				<Content />
			{/if}
		</div>
	</div>
</article>