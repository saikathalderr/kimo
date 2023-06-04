/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#008080',
        dark: '#001A1A',
        light: '#E6F2F2',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
