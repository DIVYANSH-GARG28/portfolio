import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Bangers", "Impact", "Arial Narrow", "sans-serif"],
        tape: ["'Titan One'", "'Arial Black'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        ink: "#0C0E0F",
        paper: "#FFF8EE",
        cream: "#F2E3D0",
        yellow: {
          DEFAULT: "#FCC230",
          bright: "#FFE23A",
          dark: "#F0AC16",
        },
        tape: "#FFE23A",
        gold: "#FBD900",
        heropage: {
          DEFAULT: "#FBC93E",
          lit: "#FFE071",
          shade: "#F0AC16",
        },
        purple: {
          DEFAULT: "#AD69FF",
          light: "#C596FF",
        },
        blue: {
          DEFAULT: "#4080FB",
          light: "#70A2FC",
        },
        pink: {
          DEFAULT: "#F57EB4",
          star: "#FA5C94",
        },
        green: {
          DEFAULT: "#22AC5F",
          light: "#41D683",
        },
        red: {
          DEFAULT: "#EF4225",
          light: "#F76852",
        },
        border: "#0C0E0F",
      },
      boxShadow: {
        comic: "4px 4px 0 #0C0E0F",
        "comic-md": "6px 6px 0 #0C0E0F",
        "comic-lg": "8px 8px 0 #0C0E0F",
        "comic-xl": "10px 10px 0 #0C0E0F",
        "comic-press": "1px 1px 0 #0C0E0F",
      },
      borderWidth: {
        "3": "3px",
      },
      keyframes: {
        "tape-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "tape-scroll-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "join-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 172, 95, 0.7)" },
          "70%": { boxShadow: "0 0 0 12px rgba(34, 172, 95, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34, 172, 95, 0)" },
        },
      },
      animation: {
        "tape-scroll": "tape-scroll 35s linear infinite",
        "tape-scroll-rev": "tape-scroll-rev 35s linear infinite",
        "join-pulse": "join-pulse 2.5s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
