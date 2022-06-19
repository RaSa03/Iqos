/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "font-jost": ["Jost", "cursive"],
      },
      backgroundColor: {
        "iqos-teal": "#1CCCB9",
        "iqos-grey": "#F5F5F5",
      },
      boxShadow: {
        "card-shadow": "4px 4px 10px 0px rgba(0,0,0,0.25)",
        "drop-shadow": "0px 4px 4px 0px rgba(0,0,0, 0.4)",
        "hover-drop": "0px 8px 14px 0px rgba(0,0,0, 0.3)",
      },
      width: {},
    },
  },
  plugins: [],
};
