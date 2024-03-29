/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        192: "48rem",
      },
      colors: {
        crimson: {
          500: "#d42a40",
          700: "#b12029"
        },
      },
    },
  },
  plugins: [],
};
