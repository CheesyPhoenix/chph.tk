/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 5s linear infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
