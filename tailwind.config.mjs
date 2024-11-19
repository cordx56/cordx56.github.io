/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        192: "48rem",
      },
      colors: {
        crimson: {
          500: "#d42a40",
          700: "#b12029",
        },
      },
    },
  },
  plugins: [],
};
