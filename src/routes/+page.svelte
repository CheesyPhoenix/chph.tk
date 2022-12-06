<script lang="ts">
	import Typewriter from "svelte-typewriter";
</script>

<svelte:head>
	<title>CheesyPhoenix | Home</title>
	<meta
		name="description"
		content="Welcome to CheesyPhoenix.tk. What do you want to do? Browse my projects or view my GitHub page?"
	/>
</svelte:head>

<!-- SEO -->
<h1 class="w-max text-2xl lg:text-4xl hidden">Welcome to CheesyPhoenix.tk!</h1>

<div
	class="block lg:flex w-max lg:w-screen justify-center absolute left-2 lg:left-0 top-40 h-max"
>
	<Typewriter mode={"cascade"}>
		<div class="m-auto mt-10 w-[370px] lg:w-[600px]">
			<h1 class="w-max text-2xl lg:text-4xl">
				Welcome to CheesyPhoenix.tk!
			</h1>

			<p class="w-max text-lg lg:text-2xl mt-5">
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
