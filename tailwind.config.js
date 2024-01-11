/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'rgba(0, 0, 0, 0.03)',
      'text-primary': '#222',
      'second': '#fff',
      'danger': 'crimson',
      'success': 'teal',

    },
    extend: {},
  },
  plugins: [],
}