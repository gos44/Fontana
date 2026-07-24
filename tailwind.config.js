/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,ts,js}"],
  theme: {
    extend: {
      colors: {
        rosa: {
          DEFAULT: "#FF5D8F",
          light: "#FF85AA",
          dark: "#E4457A",
        },
        turquesa: {
          DEFAULT: "#00C2CB",
          claro: "#7FE0D4",
          dark: "#009AA3",
        },
        coral: {
          DEFAULT: "#FF9A76",
          dark: "#F27A52",
        },
        crema: "#FFFBF8",
      },
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(0,0,0,0.12)",
        card: "0 4px 20px -4px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 40px -12px rgba(255,93,143,0.35)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.10)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #FF5D8F 0%, #FF9A76 100%)",
        "gradient-cool": "linear-gradient(135deg, #00C2CB 0%, #7FE0D4 100%)",
        "gradient-hero": "linear-gradient(160deg, #FFF5F8 0%, #F0FDFC 55%, #FFF7F2 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%", transform: "rotate(0deg) scale(1)" },
          "33%": { borderRadius: "60% 40% 30% 70% / 55% 65% 35% 45%", transform: "rotate(6deg) scale(1.03)" },
          "66%": { borderRadius: "35% 65% 55% 45% / 40% 50% 50% 60%", transform: "rotate(-4deg) scale(0.98)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blob: "blob 9s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
