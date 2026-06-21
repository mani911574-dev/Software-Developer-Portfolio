/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#A855F7",
        night: "#000000",
        graphite: "#080808",
        steel: "#A1A1AA",
        silver: "#E5E7EB",
        card: "#0A0A0A",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        silver: "0 18px 48px rgba(168, 85, 247, 0.22)",
        panel: "0 30px 90px rgba(0, 0, 0, 0.42)",
      },
    },
  },
  plugins: [],
};
