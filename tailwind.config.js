/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff3131",
        secondary: "#808080",
        backgroundLight: "#f8f9fa",
        textDark: "#343a40",
        accent: "#ff6b6b"
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"]
      },
    },
  },
  plugins: [],
};
