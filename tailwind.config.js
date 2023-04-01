/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(var(--primary-red))",
        primaryGreen: "hsl(var(--primary-green))",
        accentBlue: "hsl(var(--accent-blue))",
        neutralDarkBlue: "hsl(var(--neutral-dark-blue))",
        neutralGrayishBlue: "hsl(var(--neutral-grayish-blue))",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      // backgroundImage: {
      //   'background': "url('/public/images/bg-intro-mobile.png')",
      // }
    },
  },
  plugins: [],
};
