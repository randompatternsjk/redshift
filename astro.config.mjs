import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkBreaks from "remark-breaks"; // Import remark-breaks

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: ["remark-breaks"],
  },
});
