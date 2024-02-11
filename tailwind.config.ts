import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#ff884c',
        secondary: '#4A4A4A',
        tertiary: '#828282',
        quaternary: '#BDBDBD',
        quinary: '#E0E0E0',
        senary: '#F2F2F2',
        septenary: '#F9F9F9',
        error: '#cc1b1b',
      },
      height: {
        '130': '34rem',
        '140': '40rem',
      },
      backgroundColor: {
        primary: '#FFAD84',
        secondary: '#D9EDBF',
        tertiary: '#ecf7fcff',
        quaternary: '#100404',
        quinary: '#b09393ff',
        senary: '#F2F2F2',
        septenary: '#FFEED9',
        'septenary-opacity': '#ffeed9ae',

        'tertiary-opacity': '#ecf7fca4',
      },
      colors: {
        primary: '#FFAD84',
        secondary: '#D9EDBF',
      },
    },
  },
  plugins: [],
};
export default config;
