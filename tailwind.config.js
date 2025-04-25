/** @type {import('tailwindcss').Config} */
export default {
  // Define content paths for Tailwind to scan
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Enable class-based dark mode
  darkMode: "class",

  // Theme customization
  theme: {
    extend: {
      // Custom font family
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Already set, keeping it as is
        heading: ["Montserrat", "sans-serif"], // For headings
      },

      // Custom colors for light and dark mode
      colors: {
        primary: {
          light: "#3b82f6", // Tailwind blue-500
          dark: "#60a5fa", // Tailwind blue-400
          DEFAULT: "#3b82f6",
        },
        secondary: {
          light: "#8b5cf6", // Tailwind purple-500
          dark: "#a78bfa", // Tailwind purple-400
          DEFAULT: "#8b5cf6",
        },
        background: {
          light: "#f9fafb", // Tailwind gray-50
          dark: "#111827", // Tailwind gray-900
          DEFAULT: "#f9fafb",
        },
        text: {
          light: "#1f2937", // Tailwind gray-800
          dark: "#e5e7eb", // Tailwind gray-200
          DEFAULT: "#1f2937",
        },
      },

      // Custom spacing for consistent padding/margins
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        26: "6.5rem", // 104px
      },

      // Custom font sizes
      fontSize: {
        xxs: "0.65rem", // 10px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
      },

      // Custom breakpoints
      screens: {
        xs: "475px", // Extra small screens
        "3xl": "1600px", // Extra large screens
      },

      // Custom animations (to match index.css)
      animation: {
        blob: "blob 7s infinite",
        marquee: "marquee 20s linear infinite",
        "fade-in": "fade-in 1s ease-in-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "scale-up": "scale-up 0.6s ease-out forwards",
      },

      // Keyframes (already defined in index.css, but referenced here for Tailwind)
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "scale-up": {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },

  // Plugins
  plugins: [
    require("tailwindcss-animate"), // For animation utilities
    require("@tailwindcss/typography"), // For better typography
    // Custom plugin for glassmorphism and glow effects
    function ({ addUtilities }) {
      const newUtilities = {
        // Glassmorphism effect (matching index.css)
        ".glassmorphism": {
          background: "rgba(255, 255, 255, 0.05)",
          "backdrop-filter": "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        // Glow effect on hover (matching index.css)
        ".glow-on-hover": {
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            "box-shadow": "0 0 15px rgba(59, 130, 246, 0.3)", // Tailwind blue-500
          },
        },
      };
      addUtilities(newUtilities, ["dark"]); // Apply utilities in dark mode
    },
  ],
};
