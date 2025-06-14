import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './client/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'neutral-dark': '#1f2937',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
}

export default config 