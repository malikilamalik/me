// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ["'Departure Mono'", 'sans-serif']
			}
		}
	},
	plugins: []
};