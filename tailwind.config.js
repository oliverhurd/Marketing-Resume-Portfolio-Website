
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FAFAFA',
          alt: '#F0F0F0',
          border: '#E5E5E5',
        },
        primary: {
          DEFAULT: '#1A1A1A',
          light: '#737373',
          muted: '#A3A3A3',
        },
        accent: {
          DEFAULT: '#8B4A3A',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
