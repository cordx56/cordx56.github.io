/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        192: "48rem",
      },
    },
  },
  plugins: require("my-tailwindcss-theme"),
};
