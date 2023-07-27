/** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/img/team.png')",
          'footer-texture': "url('/img/whychoose1.png')",
        }
      },
    },
    plugins: [],
  }