<script>
	import "../app.css";
	import Header from "$lib/Header.svelte";
</script>

<main
	class="min-h-screen overflow-y-auto overflow-x-hidden h-[100vh] p-2 relative scrollbar"
>
	<Header />
	<slot />
</main>
