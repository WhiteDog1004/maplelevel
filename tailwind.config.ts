const config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			pretendard: ["var(--font-pretendard)"],
		},
	},
	plugins: [],
	darkMode: "class",
};

export default config;
