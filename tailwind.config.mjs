
/** @type {import('tailwindcss').Config} */
import animation from '@juan_morales/tailwind-animated-plugin'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animation],
}
