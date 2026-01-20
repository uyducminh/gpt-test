/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e9edff",
          200: "#cfd8ff",
          300: "#aab7ff",
          400: "#7e8bff",
          500: "#5b60ff",
          600: "#4339f2",
          700: "#3730c5",
          800: "#2e2a9a",
          900: "#262476"
        }
      }
    }
  },
  plugins: []
};
