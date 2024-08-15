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
        home_header: "url('/parklandarc/Main_Header.png')",
        banner: "url('/parklandarc/PARC_banner.png')",
      },
      // container: {
      //   screens: {
      //     sm: "600px", // Custom container width for small screens
      //     md: "800px", // Custom container width for medium screens
      //     lg: "1000px", // Custom container width for large screens
      //     xl: "1100px", // Custom container width for extra-large screens
      //     "2xl": "1200px", // Custom container width for 2xl screens
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
