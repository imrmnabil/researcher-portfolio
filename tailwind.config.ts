import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': 'rgb(18, 123, 102)',
        'primary-darker1': 'rgb(17, 111, 92)',
        'primary-darker2': 'rgb(15, 99, 82)',
        'primary-darker3': 'rgb(13, 87, 72)',
        'primary-darker4': 'rgb(11, 74, 62)',
        'primary-darker5': 'rgb(9, 62, 51)',
        'primary-brighter1': 'rgb(244, 249, 248)',
        'primary-brighter2': 'rgb(61, 147, 130)',
        'primary-brighter3': 'rgb(220, 236, 233)',
        'secondary': '#212A4D',
      },
    },
  },
  plugins: [],
};
export default config;
