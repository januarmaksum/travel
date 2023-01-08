/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./src/**/*.{html,js}"],
=======
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
>>>>>>> b7956cf (setup first page)
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#d42029',
          dark: '#be1d25'
        }
      }
    },
  },
  plugins: [],
}
