import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bengali': ['Kalpurush', 'SolaimanLipi', 'sans-serif'],
        'bengali-display': ['CharuChandan3D', 'BenSen', 'serif'],
      },
      colors: {
        'bangladesh-green': '#006A4E',
        'bangladesh-red': '#DC143C',
      }
    },
  },
  plugins: [],
}

export default config;