<script>
	import "../app.css";
	import Header from "$lib/Header.svelte";
</script>

<main
	class=" to-slate-900 from-zinc-900 bg-gradient-to-b min-h-screen text-slate-400 p-2"
>
	<Header />
	<slot />
</main>
