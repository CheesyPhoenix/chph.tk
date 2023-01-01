<script lang="ts">
	export let name: string;
	export let description: string;
	export let link: string;
	export let img: string;
	export let delay: number;

	import Typewriter from "svelte-typewriter";
	import { fly } from "svelte/transition";
</script>

<a
	href={link}
	class="flex from-gray-800 to-zinc-800 hover:to-zinc-700 duration-300 transition-all bg-gradient-to-r rounded-2xl w-[90%] max-w-[40rem] p-4 space-x-4 ml-4 mb-4"
	in:fly={{ x: 200, delay }}
>
	<img
		src={img}
		alt={"Image of " + name}
		width="128"
		height="128"
		class="h-[128px] rounded-[1.8rem]"
	/>

	<div class="min-h-[128px]">
		<h1 class="font-bold text-lg">{name}</h1>
		<p class="min-h-[100px] overflow-auto">
			{description}
		</p>
	</div>
</a>
