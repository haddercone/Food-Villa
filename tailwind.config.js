/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "error-page": "url('https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg')",
      },
    },
  },
  plugins: [],
};
