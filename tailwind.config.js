/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        // Theme-aware tokens: the values live in src/index.css and change with
        // data-theme. "white" is the main text color, so it turns dark in light mode.
        white: "rgb(var(--fg) / <alpha-value>)",
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        shade: "rgb(var(--shade) / <alpha-value>)",
        slate: {
          300: "rgb(var(--text-1) / <alpha-value>)",
          400: "rgb(var(--text-2) / <alpha-value>)",
        },
        // Fixed dark, used for text on the pastel gradient in both themes
        ink: {
          950: "#05060a",
        },
        // Main accent: electric mint (deep teal in light mode)
        primary: {
          50: "#ecfffa",
          100: "rgb(var(--primary-100) / <alpha-value>)",
          200: "rgb(var(--primary-200) / <alpha-value>)",
          300: "rgb(var(--primary-300) / <alpha-value>)",
          400: "#3ce8c8",
          500: "#16cfaf",
          600: "#0aa78e",
          700: "#0c8573",
          800: "#0f695d",
          900: "#11564d",
          950: "#03332e",
        },
        // Secondary accent: soft iris
        iris: {
          300: "rgb(var(--iris-300) / <alpha-value>)",
          400: "#a894ff",
          500: "#8b72ff",
          600: "#6f52f5",
        },
        // Highlight: rose
        flare: {
          300: "#ffb3cf",
          400: "#ff85af",
          500: "#ff5c93",
          600: "#e93d79",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        holo: "holoShift 8s ease-in-out infinite alternate",
        drift: "drift 26s ease-in-out infinite alternate",
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        holoShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "100%": { transform: "translate3d(6vw, 5vh, 0) scale(1.15)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
