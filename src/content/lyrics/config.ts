// This file defines what every lyric file must include
import { defineCollection, z } from "astro:content";

const lyricsCollection = defineCollection({
  schema: z.object({
    title: z.string(), // Every lyric must have a title
    album: z.string(), // Must say which album it's from
    image: z.string().optional(), // Picture of the album (optional)
    track: z.number(), // Track number on the album
  }),
});

export const collections = {
  lyrics: lyricsCollection, // We're calling our collection "lyrics"
};
