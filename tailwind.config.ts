import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ojuju: ["var(--font-ojuju)", "system-ui, sans-serif"],
      roobert: ["var(--font-roobert)", "system-ui, sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        masala: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#444444",
          "900": "#3d3d3d",
          "950": "#262626",
        },
        "paris-daisy": {
          "50": "#fefee8",
          "100": "#fdfec3",
          "200": "#fefc8a",
          "300": "#fef568",
          "400": "#fbe414",
          "500": "#ebca07",
          "600": "#cb9e03",
          "700": "#a27106",
          "800": "#86590d",
          "900": "#714812",
          "950": "#422606",
        },
      },
      spacing: {
        5.5: "22px",
        22: "88px",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "1200px",
          margin: "0 auto",
        },
      })
    },
  ],
} satisfies Config
