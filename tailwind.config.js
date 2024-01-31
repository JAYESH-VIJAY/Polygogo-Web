/** @type {import('tailwindcss').Config} */

import { lightColors } from './colors.ts'
import { fonts } from './fonts.ts'
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx,.ts}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: lightColors.primary,
        secondary: lightColors.secondary,
        accent: lightColors.accent,
        primaryDark: lightColors.primaryDark,
      },
      fontFamily: {
        primary: fonts.primary,
        secondary: fonts.secondary,
      },
    },
  },
  variants: {
    extend: {
      // Add any additional variants you want to customize
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you want to use
    // For example, '@tailwindcss/forms', '@tailwindcss/typography', etc.
  ],
}
