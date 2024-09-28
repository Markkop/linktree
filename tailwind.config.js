/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        animation: {
          transitionAnimation:
            "transitionAnimation 1s ease-out 0.3s 1 forwards",
        },
        keyframes: {
          transitionAnimation: {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
      },
    },
    plugins: [],
  },
};
