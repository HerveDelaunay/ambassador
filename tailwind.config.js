/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
      fontFamily: {
        museo: ["museo", "sans-serif"],
      },
      colors: {
        "secondary-100": "#1296F4",
      },
      backgroundImage: {
        home: "url('../public/assets/images/bg-home.webp')",
        vision: "url('../public/assets/images/vision.jpg')",
      },
      maxWidth: {
        desktop: "1112px",
      },
      screens: {
        tablet: { raw: "(min-width: 720px)" },
        desktop: { raw: "(min-width: 960px)" },
        "2xl": { raw: "(min-width: 1536px)" },
      },
    },
    fontSize: {
      xl: [
        "1.563rem",
        {
          lineHeight: "32px",
          letterSpacing: "0.01em",
        },
      ],
      foot: "0.875rem",
      "2xl": "1.563rem",
      "3xl": "2rem",
      "4xl": "2.441rem",
      "5xl": [
        "5.063rem",
        {
          lineHeight: "88px",
          letterSpacing: "0.01em",
        },
      ],
      lg: [
        "1.25rem",
        {
          lineHeight: "24px",
          letterSpacing: "0.01em",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "20px",
          letterSpacing: "0.01em",
        },
      ],
      small: [
        "0.75rem",
        {
          lineHeight: "20px",
          letterSpacing: "0.2rem",
        },
      ],
    },
  },
  plugins: [],
};
