import { defineCollection } from "astro:content";

const lyricsCollection = defineCollection({
  type: "content", // Use "content" for markdown-based collections
  schema: undefined, // Optionally define a schema for validation
});

export const collections = {
  lyrics: lyricsCollection,
};
