<script lang="ts">
	import Typewriter from "svelte-typewriter";
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Welcome to CheesyPhoenix.tk. What do you want to do? Browse my projects or view my GitHub page?"
	/>
</svelte:head>

<div class="flex w-screen justify-center absolute left-0 top-8">
	<Typewriter mode={"cascade"}>
		<div class="m-auto mt-10" style="width: 600px;">
			<h1 class="w-max text-4xl mt-40">Welcome to CheesyPhoenix.tk!</h1>

			<p class="w-max text-2xl mt-5">What would you like to do?</p>

			<a
				href="/projects"
				class="w-max text-lg mt-5 block hover:underline underline-offset-2"
				>- Browse projects</a
			>

			<a
				href="https://github.com/CheesyPhoenix"
				class="w-max text-lg mt-5 block hover:underline underline-offset-2"
				>- View GitHub</a
			>
		</div>
	</Typewriter>
</div>
