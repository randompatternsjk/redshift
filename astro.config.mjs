import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "static", // Generate static files at build time
  markdown: {
    site: "https://www.theokaylakes.com", // Use your custom domain if it's properly configured
  },
});