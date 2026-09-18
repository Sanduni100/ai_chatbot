/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#7A0C2E',
          crimson: '#D6134F',
          rose: '#E8557C',
          pink: '#F5A0BE',
          blush: '#FBD9E6',
          cream: '#FFF6F9',
        },
        ink: {
          900: '#1F0A13',
          700: '#3A1622',
          500: '#6B3648',
        },
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(122, 12, 46, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
