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
        secondary: '#42cdc1', //secondary
        customGrey: '#2b303a',
        primary: '#9747FF', //primary
        notification: '#64B8FF',
        neutralGrey: '#EDF0F7',
        neutralGreyNight: '#2B303A'

      }
    },
  },
  plugins: [],
};
export default config;
