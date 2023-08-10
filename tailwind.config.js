/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.jsx',
    './src/*.{html,jsx}',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        '1': "url('./src/assets/1.webp')",
        '2': "url('./src/assets/2.webp')",
        '3': "url('./src/assets/3.webp')",
        '4': "url('./src/assets/4.webp')",
        '5': "url('./src/assets/5.webp')",
        '6': "url('./src/assets/6.webp')",
        '7': "url('./src/assets/7.webp')"
      }
    },
  },
  plugins: [],
}

