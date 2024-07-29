/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1a202c",
          text: "#ffffff",
        },
        light: {
          background: "#ffffff",
          gray: "#e5e7eb",
          text: "#000000",
        },
      },
    },
  },
  plugins: [],
};
