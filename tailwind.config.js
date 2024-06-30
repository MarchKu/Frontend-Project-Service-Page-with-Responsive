/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color_primary: "#1374F6",
        color_secondary: "#FDD76E",
        color_third: "#00B894",
        color_background: "#f4f7fc",
        font_color1: "#0B0757",
        font_color2: "#8480AE",
        font_color3: "#0B0757",
        hover_primary: "#2563eb",
        hover_secondary: "#facc15",
        hover_third: "#059669",
      },
      fontSize: {
        font_heading: "3rem",
        font_header: "2rem",
        font_info: "1.25rem",
        font_button: "1.5rem",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
