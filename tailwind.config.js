/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        surface: "#0A0F12",
        calipso: {
          50: '#E0FAFC',
          100: '#B3F2F6',
          200: '#80E9F0',
          300: '#00E0E8',
          400: '#00D1D8',
          500: '#00BFCB',
          600: '#0099A2',
          700: '#00737A',
          800: '#004C51',
          900: '#002629',
        },
        calipsoGlow: "rgba(0,191,203,0.25)",
        panel: "#0A0F12"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(0, 191, 203, 0.45)"
      }
    }
  },
  plugins: []
};
