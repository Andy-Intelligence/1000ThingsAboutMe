import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{ 
        custom:['Public Sans, sans-serif'],
        custom1:['Public Sans, sans-serif'],
      },

      colors:{
        solarVideoBg:"#0a0e17",
        footerBg:"#e8e7ea",
      }

    },
  },
  plugins: [],
}
export default config
