/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: {
          dark: '#1a1f36',
          blue: '#2d3a8c',
        },
        gray: {
          body: '#4a5568',
          light: '#8892a4',
          divider: '#e5e7eb',
          footer: '#f9fafb',
          badge: '#f3f4f6',
        }
      }
    },
  },
  plugins: [],
}
