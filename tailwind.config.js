/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // @media (min-width: 375px) smallest screen, tablet size 834px, web screen 1920px
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'default': '15px',
      'lg': '.5rem',
      'full': '9999px',
    },
  },
  plugins: [],
}

