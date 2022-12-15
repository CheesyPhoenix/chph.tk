<script>
	import "../app.css";
	import Header from "$lib/Header.svelte";

	export const prerender = true;
</script>

<main class="min-h-screen overflow-auto p-2">
	<Header />
	<slot />
</main>
