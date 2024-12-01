/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/dist/assets/banner.jpg')",
        btnBg:"url('/dist/assets/Frame 6.png')" 
      },
    },
  },
  plugins: [daisyui],
}

