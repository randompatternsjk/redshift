import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel"; // Updated import path

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server", // Ensure server output for SSR
  adapter: vercel({
    mode: "serverless", // Explicitly set to serverless mode
  }),
  markdown: {
    site: "https://www.theokaylakes.com", // Use your custom domain if it's properly configured
  },
});
