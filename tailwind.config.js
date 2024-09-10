/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "rgb(244 244 245)",
        "text-secondary": "rgb(212 212 216)",
        "text-tertiary": "rgb(161 161 170)",
        "text-quaternary": "rgb(113 113 122)",
        "border-light": "hsla(0, 0%, 100%, .1)",
        "border-medium": "hsla(0, 0%, 100%, .15)",
        "border-heavy": "hsla(0, 0%, 100%, .2)",
        "border-xheavy": "hsla(0, 0%, 100%, .25)",
        "main-surface-primary": "rgb(39 39 42)",
        "main-surface-secondary": "rgb(63 63 70)",
        "main-surface-tertiary": "rgb(82 82 91)",
        "sidebar-surface-primary": "rgb(24 24 27)",
        "sidebar-surface-secondary": "rgb(39 39 42)",
        "sidebar-surface-tertiary": "rgb(63 63 70)",
        "link": "#7ab7ff",
        "link-hover": "#5e83b3"
      }
    },




  },
  plugins: [],
}

