const colors = {
  dark: "#1e272e",
  "bright-sun": {
    50: "#fffdf4",
    100: "#fffbea",
    200: "#fff4ca",
    300: "#ffedaa",
    400: "#ffe06a",
    500: "#ffd32a",
    600: "#e6be26",
    700: "#bf9e20",
    800: "#997f19",
    900: "#7d6715",
  },
  red: "#ff3f34",
  purple: "#575fcf",
  green: "#05c46b",
  blue: "#0fbcf9",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
      borderWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
