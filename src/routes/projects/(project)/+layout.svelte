<script>
	import { fade, fly } from "svelte/transition";
</script>

<div
	class="prose prose-invert prose-headings:text-slate-300 prose-p:text-slate-400 absolute min-w-full"
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
