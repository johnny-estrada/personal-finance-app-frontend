/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',],
  theme: {
    extend: {},
    colors: {
      'beige-500': '#98908B',
      'beige-100': '#F8F4F0',
      'grey-900': '#201F24',
      'grey-500': '#696868',
      'grey-300': '#B3B3B3',
      'grey-100': '#F2F2F2',
      'white': '#FFF',
      'green': '#277C78',
      'yellow': '#F2CDAC',
      'cyan': '#82C9D7',
      'navy': '#626070',
      'red': '#C94736',
      'purple': '#826CB0',
    }
  },
  plugins: [],
}

