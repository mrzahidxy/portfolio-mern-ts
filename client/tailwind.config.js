/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
      colors: {
        primary: "#FD3d57",
      },

      dark: {
        primary: "#1E293B",
        secondary: "#4B5563",
      },
    },
  },
  plugins: [],
};
