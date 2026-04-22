import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        palace: {
          bg: '#f7f1e7',
          card: '#fffdf8',
          ink: '#2f241d',
          muted: '#6d635c',
          line: '#eadfce',
          main: '#7f2225'
        }
      }
    }
  },
  plugins: []
};

export default config;
