import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        slite: '#e5e5e5',
        dark: '#050508',
        red: '#b12222',
        halfDark: '#050508dd'
      },
      backgroundImage: {
        'background': "url('/background/bg2.gif')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
export default config
