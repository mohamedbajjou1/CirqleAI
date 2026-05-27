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
        ink: "#f7f8fb",
        "ink-muted": "#a5adba",
        "carbon": "#050506",
        "carbon-soft": "#0d0e12",
        "line": "rgba(255,255,255,0.12)",
        "aqua": "#7dd3fc",
        "mint": "#34d399",
        "gold": "#f7b955",
        "rose": "#fb7185"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 80px rgba(125, 211, 252, 0.18)",
        "soft-xl": "0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "noise-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
