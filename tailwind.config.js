/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          netflixRed: "0 0 40px rgba(229,9,20,0.4)",
        },
        colors: {
          netflix: {
            red: "#E50914",
            bg: "#000000",
            card: "#181818",
          },
        },
        borderRadius: {
          "2xl": "1rem",
        },
      },
    },
    plugins: [],
  };
  