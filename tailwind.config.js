const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "/node_modules/@radix-ui/**/*.{ts,tsx,js",
    "jsx}",
    "./node_modules/@nextui-org/**/*.{js",
    "jsx",
    "ts",
    "tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|badge|card|dropdown|pagination|skeleton|divider|ripple|menu|popover|button|spinner).js"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      'xs': '548px',
      // => @media (min-width: 548px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "custom-white": "#f3f4f6"
      },
      fontFamily: {
        yekan: "yekan",
        shabnam: "shabnam",
      },
      lineHeight: {
        21: "88px"
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        // تعریف کلاس سفارشی برای grid-column
        '13': 'span 13 / span 13',
      },
      boxShadow: {
        teacherCardSHadow: "0px 1.60568px 61.0158px #fffdfd14"
      },
      rotate: {
        215: "215 deg"
      },
      fontSize: {
        27: "1.6875rem",
        33: "33px",
        36: "2.25rem",
      },
      maxHeight: {
        "2/5vh": "40vh"
      },
      spacing: {
        "calc-form": "calc(100vh - 450px)"
      }
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
}