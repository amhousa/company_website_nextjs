/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Cyan
        secondary: "#FF00FF", // Magenta
        accent: "#FFFF00", // Yellow
        background: {
          dark: "#121212",
          light: "#1E1E1E",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B0B0B0",
        },
        border: "#333333", // Add this line for border color
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.border", "currentColor"),
      }),
    },
  },
  plugins: [],
}

