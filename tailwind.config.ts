import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Romantic color palette
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e9',
          300: '#f5ebdc',
          400: '#efe0cc',
          500: '#e8d4ba',
        },
        rose: {
          50: '#fff5f7',
          100: '#ffe4e9',
          200: '#ffc9d4',
          300: '#ffa8ba',
          400: '#ff8da5',
          500: '#ff7091',
        },
      },
      fontFamily: {
        // Add handwritten and elegant fonts
        handwritten: ['Caveat', 'cursive'],
        elegant: ['Playfair Display', 'serif'],
        modern: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/paper-texture.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
