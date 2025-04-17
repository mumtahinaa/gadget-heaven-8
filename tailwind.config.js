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
        // banner: "url('/assets/banner.jpg')",
        banner: "url('/src/assets/banner.jpg')",
        btnBg:"url('/src/assets/Frame 6.png')" 
      },
    },
  },
  plugins: [daisyui],
}

