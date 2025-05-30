module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#DBF5FF",
        dark: "#DBF5FF",
        test: "#ff0000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
      boxShadow: {
        moonsilver: `
          0 2px 75px -50px rgb(255, 255, 255, .5),
          -4px 0px 70px 2px rgba(0, 208, 255, 0.5),
          0px 2px 6px -5px rgb(0, 238, 255)
        `,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Add the Typography plugin here
  ],
};
