/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter font by default
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors: {
        primary: '#3b82f6', // Example primary color
        secondary: '#6b7280', // Example secondary color
      }
    },
  },
  plugins: [],
}
