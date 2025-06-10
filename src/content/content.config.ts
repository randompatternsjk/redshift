import { defineCollection, z } from "astro:content";

const lyrics = defineCollection({
  type: "content", // This tells Astro it's a content collection
  schema: z.object({
    title: z.string(), // Title of the song
    album: z.string(), // Album name
    image: z.string().optional(), // Optional image URL
    track: z.coerce.number(), // Track number (can be a string or number)
  }),
});

export const collections = { lyrics };
