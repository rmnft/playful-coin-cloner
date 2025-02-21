
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#7C3AED",
        background: {
          dark: "#0B1121",
          card: "rgba(13, 17, 28, 0.8)"
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00E5FF, #7C3AED)',
        'gradient-banner': 'linear-gradient(90deg, #2193b0, #6dd5ed)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
