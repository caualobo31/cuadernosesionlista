import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          900: "#04342C",
          800: "#085041",
          700: "#0F6E56",
          500: "#1D9E75",
          100: "#E1F5EE",
          50: "#F0FAF6",
        },
        crema: {
          bg: "#FCFAF5",
          card: "#FFFFFF",
          warm: "#F5EFE3",
        },
        coral: {
          700: "#993C1D",
          600: "#D85A30",
          300: "#F0997B",
          100: "#FAECE7",
          900: "#4A1B0C",
        },
        ambar: {
          bg: "#FAEEDA",
          600: "#BA7517",
          800: "#854F0B",
        },
        texto: {
          dark: "#2C2A26",
          body: "#444441",
          muted: "#5F5E5A",
          light: "#888780",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
