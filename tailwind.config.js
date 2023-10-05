/** @type {import('tailwindcss').Config} */
import { lightColors } from "./colors";
import { fonts } from "./fonts";
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: lightColors.primary,
        secondary: lightColors.secondary,
        accent: lightColors.accent,
      },
      fontFamily: {
        primary: fonts.primary,
        secondary: fonts.secondary,
      },
    },
  },
  plugins: [],
};
