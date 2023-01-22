<script lang="ts">
	import { fade } from "svelte/transition";
	import logo from "$lib/img/logo.svg";
</script>

<header out:fade={{ duration: 0 }} class="absolute top-2 left-2">
	<a href="/" class="inline underline-offset-2"
		><img
			src={logo}
			alt="Logo"
			class="inline w-10 hover:animate-spin-slow"
		/></a
	>

	<p class="inline">|</p>
	<a href="/projects" class="inline hover:underline underline-offset-2">
		Projects</a
	>

	<p class="inline">|</p>
	<a
		href="https://github.com/CheesyPhoenix"
		class="inline hover:underline underline-offset-2"
	>
		Github</a
	>
</header>
<br />
<br />
