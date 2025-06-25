import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel"; // Import Vercel adapter

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server", // Switch to server output for SSR
  adapter: vercel(), // Use Vercel adapter for deployment
  markdown: {
    site: "https://www.theokaylakes.com", // Use your custom domain if it's properly configured
  },
});
