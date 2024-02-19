/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react"
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [
		nextui({

			themes: {
				dark: {
					colors: {
						primary: {
							DEFAULT: '#e62020',
							foreground: '#00ff00',
						},
						focus: '#00B8A9',
					},
				},
				light: {
					colors: {
						primary: {
							DEFAULT: '#e62020',
							foreground: '#00ff00',
						},
						focus: '#00B8A9',
					},
				},
			},
		}),
	],
};
