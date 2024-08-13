import type { Config } from 'tailwindcss'
import colors from './src/css/colors.ts'

/** @type {import('tailwindcss').Config} */
const config: Config = {
 content: [
  "index.html",
  "./src/**/*.{html,js,ts,tsx,jsx,css,mdx}",
  './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  './stories/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 mode: 'jit',
 important: true,
 theme: {
  extend: {
   fontFamily: {
    pretendard: ["Pretendard"],
   },
   spacing: {
    '0.5': '0.125rem'
   },
   borderRadius: {
    4: '0.25rem',
   }
  },
  colors,
 },
 plugins: [],
} satisfies Config;

export default config