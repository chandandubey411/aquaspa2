/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff9e6",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d4af37", // ⭐ PRIMARY LOGO GOLD
          600: "#c19a2b",
          700: "#a67c00",
          800: "#7c5c00",
          900: "#4a3600",
        },
        spaBlack: {
          900: "#0b0b0b",
          800: "#111111",
          700: "#1a1a1a",
        },
        spaGray: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#cfcfcf",
          400: "#a3a3a3",
          500: "#737373",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 8px 30px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [],
};
