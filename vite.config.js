import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       serif: ["DM Serif Display", "serif"],
  //       sans:  ["DM Sans", "sans-serif"],
  //     },
  //     keyframes: {
  //       fadeUp: {
  //         "0%":   { opacity: "0", transform: "translateY(18px)" },
  //         "100%": { opacity: "1", transform: "translateY(0)" },
  //       },
  //       popIn: {
  //         "0%":   { opacity: "0", transform: "scale(0.96) translateY(8px)" },
  //         "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
  //       },
  //     },
  //     animation: {
  //       "fade-up": "fadeUp 0.5s ease both",
  //       "pop-in":  "popIn 0.4s ease both",
  //     },
  //   },
  // },
});
