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
        "light-grey": "#FCFCFC",
      },
      boxShadow: {
        "card-shadow": "4px 4px 10px 0px rgba(0,0,0,0.25)",
        "drop-shadow": "0px 2px 5px 0px rgba(0,0,0, 0.4)",
        "hover-drop": "0px 4px 20px 0px rgba(0,0,40, 0.3)",
      },
      screens: {
        bigforProductPForm: { min: "1635px" },
        notebook: { max: "1279px" },
        tablet: { max: "767px" },
        phone: { max: "449px" },
        minphone: { max: "375px" },
        lgdisplay: { max: "1023px" },
        mobilemin: { min: "450px" },
      },
    },
  },
  plugins: [],
};
