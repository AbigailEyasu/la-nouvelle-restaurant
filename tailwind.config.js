export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF5EF',
        espresso: '#4B2E2E',
        charcoal: '#2D2D2D',
        gold: '#C89F5A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        eth: ['Noto Sans Ethiopic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
