module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      animation: {
        "blur-fade-up": "blurFadeUp 1s ease-out",
      },
      keyframes: {
        blurFadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      colors: {
        light: "#DBF5FF",
        dark: "#002336",
        moonsilver: "#5AFFF8",
        test: "#ff0000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        lyrics: ["Garamond", "serif"],
      },
      boxShadow: {
        moonglow: `
          0 2px 75px -50px rgb(255, 255, 255, .3),
          -4px 0px 70px 2px rgba(0, 208, 255, 0.3),
          0px 2px 6px -5px rgb(0, 238, 255)
        `,
      },
      btn: {
        sans: ["Inter", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Add the Typography plugin here
  ],
};
