/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  purge: [],
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}