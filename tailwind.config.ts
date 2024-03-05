import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        monoPink: {
          100: "#FFD9E4",
          200: "#FFB3C8",
          300: "#FF6680",
          400: "#B34766"
        }
      },
      fontFamily: {
        cursive: "cursive"
      },
      zIndex: {
        100: '100'
      }
    },
  },
  plugins: [],
}
export default config
