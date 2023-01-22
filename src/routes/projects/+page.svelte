<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import Header from "$lib/components/Header.svelte";
	import BetterSchoolLogo from "$lib/img/betterschool-icon-512.png";
	import BetterSchoolSDKLogo from "$lib/img/betterschool-sdk-icon-512.png";
	import VCMLogo from "$lib/img/VCM.png";

	import { fade } from "svelte/transition";
</script>

<svelte:head>
	<title>CheesyPhoenix | Projects</title>
	<meta
		name="description"
		content="Here you can view and read about my various projects"
	/>
</svelte:head>

<Header />

<div out:fade in:fade class="absolute overflow-y-auto overflow-x-hidden w-full">
	<h1 class="mt-2 text-3xl mb-4">Projects:</h1>
	<Project
		name="BetterSchool"
		description="BetterSchool is a better way of viewing your Visma InSchool schedule. Don't waste time logging in to the app every time you just want to check when your next class starts, use BetterSchool instead!"
		img={BetterSchoolLogo}
		link="/projects/BetterSchool"
		delay={0}
	/>
	<Project
		name="VC-Manager - Discord VC automation"
		description="VC-Manager is a simple discord bot that manages your voice channels for you. It makes sure that there is always an availible vc and deletes unused ones, all while maintaining an orderly look."
		img={VCMLogo}
		link="/projects/VCM"
		delay={100}
	/>
	<Project
		name="BetterSchool SDK for Rust"
		description="The official BetterSchool SDK for Rust. It is a fully typed wrapper for interacting with the BetterSchool API in Rust."
		img={BetterSchoolSDKLogo}
		link="/projects/BetterSchool-SDK-rust"
		delay={200}
	/>
</div>
