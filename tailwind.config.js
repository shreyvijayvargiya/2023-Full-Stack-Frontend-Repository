const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
		"./Admin/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blackBg: "rgb(2, 2, 2)",
			grayBlack: "rgb(20, 20, 20)",
			black: "rgb(0, 0, 0)",
			blackShade: "#0b0b0b",
			transparent: colors.transparent,
			whiteText: "rgb(230, 230, 230)",
			yellow: colors.yellow,
			red: colors.red,
			green: colors.green,
			white: colors.white,
			pink: colors.pink,
			blue: colors.blue,
			indigo: colors.indigo,
			orange: colors.orange,
			gray: colors.gray,
		},
		screens: {
			xsm: "200px",
			// => @media (min-width:  280px) { ... }

			xxs: "320px",
			// => @media (min-width: 320px) { ... }

			xs: { max: "575px" },
			// => @media (min-width: 420px) { ... }

			sm: { min: "576px", max: "897px" },
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			xxl: "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		minWidth: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			full: "100%",
		},
	},
	variants: {
		extend: {
			colors: {
				zinc: colors.gray,
				slate: colors.slate,
			},
		},
	},
	plugins: [],
};
