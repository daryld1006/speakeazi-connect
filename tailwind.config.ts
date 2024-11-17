import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F97316", // Coral orange from logo
          light: "#FFF8E7", // Light cream
          dark: "#C65A10", // Darker orange
        },
        secondary: {
          DEFAULT: "#6E59A5", // Playful purple
          light: "#E5DEFF", // Soft purple
          dark: "#4A3B7A", // Dark purple
        },
        accent: {
          DEFAULT: "#FEC6A1", // Soft orange
          light: "#FDE1D3", // Soft peach
          dark: "#FDA172", // Darker peach
        },
        cream: "#FFF5E1", // Background cream color
      },
      borderRadius: {
        'bubble': '30px',
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "bounce-slight": "bounce-slight 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;