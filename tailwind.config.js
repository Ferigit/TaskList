/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          DEFAULT: 'rgb(142,71,224, 1)',
          'dark': 'rgb(96,42,158, 1)',
        },
        'grey': {
          DEFAULT: 'rgb(195,198,202, 1)',
          'dark': 'rgb(96,42,158, 1)',
        },
      }
    },
  },
  plugins: [],
}