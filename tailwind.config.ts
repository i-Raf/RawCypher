import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#202124"
      },
      textColor: {
        primary: "#E8EAED",
        secondary: "#8DC1C6"
      },
      screens: {
        "3xl": " 2000px"
      } 
    },
  },
  plugins: [],
};
export default config;
