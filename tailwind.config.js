/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rockwell': ['Rockwell', 'serif'],
        'sans': ['Rockwell', 'serif'],
        'serif': ['Rockwell', 'serif'],
        'default': ['Rockwell', 'serif'],
      },
    },
  },
  plugins: [],
} 