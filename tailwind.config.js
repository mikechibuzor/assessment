module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0F4A7B",
        "secondary-orange": "#EA5566",
      },
      fontFamily: {
        gilroy: ["gilroy", "sans-serif"],
      },
      height: {
        height10: "10vh",
        height15: "15vh",
        height20: "20vh",
        height30: "30vh",
        height40: "40vh",
        height50: "50vh",
        height55: "55vh",
        height60: "60vh",
        height70: "70vh",
        height80: "80vh",
        height90: "90vh",
        height100: "100vh",
      },
      screens: {
        "custom-breakpoint": "1440px",
        "custom-breakpoint1": "1600px",
        "custom-breakpoint2": "1680px",
        "custom-breakpoint3": "1900px",
      },
    },
  },
  plugins: [],
};
