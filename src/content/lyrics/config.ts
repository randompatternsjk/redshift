// This file defines what every lyric file must include
import { defineCollection } from "astro:content";

const lyricsCollection = defineCollection({
  schema: {
    title: { type: "string", required: true }, // Every lyric must have a title
    album: { type: "string", required: true }, // Must say which album it's from
    image: { type: "string", required: false }, // Picture of the album (optional)
    track: { type: "number", required: true }, // Track number on the album
  },
});

export const collections = {
  lyrics: lyricsCollection, // We're calling our collection "lyrics"
};
