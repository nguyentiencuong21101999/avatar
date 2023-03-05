/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%": { color: "#F8CD0A" },
          "50%": { color: "red" },
          "100%": { color: "#F8CD0A" },
        },
      },
    },
  },
  plugins: [],
};
