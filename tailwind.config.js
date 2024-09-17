/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        teal: {
          light: "#64ffda",
          DEFAULT: "#14b8a6",
          dark: "#0f766e",
        },
        turquoise: {
          light: "#a0f0ed",
          DEFAULT: "#00d4d8",
          dark: "#008b94",
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};


