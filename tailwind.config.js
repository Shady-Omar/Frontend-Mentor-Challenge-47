/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/main.css",
    "./src/main.js",
  ],
  theme: {
    extend: {},
    colors: {
      Cyan: "hsl(180, 66%, 49%)",
      DarkViolet: "hsl(257, 27%, 26%)",
      Gray: "hsl(0, 0%, 75%)",
      GrayishViolet: "hsl(257, 7%, 63%)",
      VeryDarkBlue: "hsl(255, 11%, 22%)",
      VeryDarkViolet: "hsl(260, 8%, 14%)",
      Red: "hsl(0, 87%, 67%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontWeight: {
      500: "500",
      700: "700"
    },
  },
  plugins: [],
}
