import { defineCollection } from "astro:content";

const lyrics = defineCollection({
  type: "content",
  schema: {
    title: "string",
    album: "string",
    image: "string",
    track: "string",
  },
});

export const collections = {
  lyrics: lyrics,
};
