import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({}),
	],

	extensions: [".svelte", ".svx"],

	kit: {
		adapter: adapter({ out: "dist" }),
	},
};

export default config;
