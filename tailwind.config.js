let plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#157FB4",
          dark: "#0094A1",
          bridge: "#ff48a469",
        },
        paragrapg: "#0000007d",
        secondary: "#FF48A4",
        otblack: "#b0bec5",
        otwhite: "#fff",
        otred: "#f44336",
        background: "#EBFCFA",
        backgroundSecondary: "#FFF3F9",
        overley: "#2a006d4a",
        backgroundPrimary: "#ebfcfa",
        textDecoder: "#0000007d",

        customPink: {
          50: "#FF48A4",
          100: "#FF48A4",
          200: "#FF48A4",
          300: "#FF48A4",
          400: "#FF48A4",
          500: "#FF48A4",
          600: "#FF48A4",
          700: "#FF48A4",
          800: "#FF48A4",
          900: "#FF48A4",
        },
        customBlack: {
          50: "#000",
          100: "#000",
          200: "#000",
          300: "#000",
          400: "#000",
          500: "#000",
          600: "#000",
          700: "#000",
          800: "#000",
          900: "#000",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("second", "&:nth-child(2)");
      addVariant("third", "&:nth-child(3)");
    }),
  ],
});
