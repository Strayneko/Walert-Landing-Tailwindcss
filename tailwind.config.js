/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        secondary: "#2563eb",
        muted: "#EDF3FA"
      }
    }
  },
  plugins: []
};
