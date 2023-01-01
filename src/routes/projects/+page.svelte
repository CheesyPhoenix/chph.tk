<script lang="ts">
	import Project from "$lib/Project.svelte";
	import BetterSchoolLogo from "$lib/betterschool-icon-512.png";
	import VCMLogo from "$lib/VCM.png";

	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>CheesyPhoenix | Projects</title>
	<meta
		name="description"
		content="Here you can view and read about my various projects"
	/>
</svelte:head>

<div out:fade>
	<h1 class="mt-2 text-3xl mb-4">Projects:</h1>
	<Project
		name="BetterSchool"
		description="BetterSchool is a better way of viewing your Visma InSchool schedule. Don't waste time logging in to the app every time you just want to check when your next class starts, use BetterSchool instead!"
		img={BetterSchoolLogo}
		link="https://betterschool.cheesyphoenix.tk"
		delay={0}
	/>
	<Project
		name="VC-Manager - Discord VC automation"
		description="VC-Manager is a simple discord bot that manages your voice channels for you. It makes sure that there is always an availible vc and deletes unused ones, all while maintaining an orderly look."
		img={VCMLogo}
		link="https://github.com/CheesyPhoenix/VC-Manager"
		delay={100}
	/>
</div>
