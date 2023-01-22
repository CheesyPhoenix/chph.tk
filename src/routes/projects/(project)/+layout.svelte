<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import Header from "$lib/components/Header.svelte";
	import "$lib/prism-one-dark.css";
</script>

<div
	class="absolute min-w-full left-0 top-0 pt-2 overflow-y-auto overflow-x-hidden h-[100vh]"
>
	<div class="pl-2">
		<Header />
	</div>
	<div
		class="prose prose-invert prose-headings:text-slate-300 prose-p:text-slate-400 min-w-full"
		in:fly={{ y: 400 }}
		out:fly={{ y: 400, opacity: 0 }}
	>
		<br />
		<div class="w-[90%] max-w-4xl m-auto">
			<slot />
		</div>

		<br />
		<br />
	</div>
</div>
