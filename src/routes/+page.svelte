<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Typewriter from "svelte-typewriter";
	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>CheesyPhoenix | Home</title>
	<meta
		name="description"
		content="Welcome to CheesyPhoenix.tk. What do you want to do? Browse my projects or view my GitHub page?"
	/>
</svelte:head>

<Header />

<div class="flex w-screen justify-center absolute left-2 top-40 h-max">
	<Typewriter mode={"cascade"} interval={25}>
		<div class="m-auto mt-10 w-[370px] md:w-[600px] max-w-[90%]">
			<h1 class="w-max text-xl md:text-4xl">
				Welcome to CheesyPhoenix.tk!
			</h1>

			<p class="w-max text-md md:text-2xl mt-5">
				What would you like to do?
			</p>

			<a
				href="/projects"
				class="w-max text-lg mt-5 block hover:underline underline-offset-2"
				title="View projects">- Browse projects</a
			>

			<a
				href="https://github.com/CheesyPhoenix"
				class="w-max text-lg mt-5 block hover:underline underline-offset-2"
				title="View GitHub">- View GitHub</a
			>
		</div>
	</Typewriter>
</div>
