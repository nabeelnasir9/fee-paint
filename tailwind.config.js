/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        // inter: ["Inter", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
