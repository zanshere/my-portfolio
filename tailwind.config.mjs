import { defineConfig } from "tailwindcss"

export default defineConfig({
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate", "tailwind")],
})
