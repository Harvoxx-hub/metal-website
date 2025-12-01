/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color
        primary: {
          DEFAULT: "#D9197B",
          light: "#E6399B",
          dark: "#B0156B",
        },
        // Metallic colors (kept for compatibility)
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFC107",
          dark: "#F4C430",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          light: "#E8E8E8",
          dark: "#B0B0B0",
        },
        bronze: {
          DEFAULT: "#CD7F32",
          light: "#D4A574",
          dark: "#A0522D",
        },
        // Dark theme colors
        dark: {
          DEFAULT: "#290F0F",
          secondary: "#3A1F1F",
          tertiary: "#4A2F2F",
          card: "#5A3F3F",
          border: "#6A4F4F",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #D9197B 0%, #E6399B 100%)",
        "metallic-gradient": "linear-gradient(135deg, #D9197B 0%, #E6399B 50%, #C0C0C0 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #F4C430 100%)",
        "silver-gradient": "linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)",
        "dark-gradient": "linear-gradient(180deg, #290F0F 0%, #3A1F1F 100%)",
      },
      boxShadow: {
        "primary-glow": "0 0 20px rgba(217, 25, 123, 0.4)",
        "metallic-glow": "0 0 20px rgba(217, 25, 123, 0.3)",
        "silver-glow": "0 0 20px rgba(192, 192, 192, 0.3)",
        "gold-glow": "0 0 30px rgba(255, 215, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
