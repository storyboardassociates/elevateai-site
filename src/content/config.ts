import { defineCollection, z } from "astro:content";

const microlessons = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string()
  }),
});

const quotes = defineCollection({
  schema: z.object({
    text: z.string()
  }),
});

const toolbox = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string()
  }),
});

export const collections = {
  microlessons,
  quotes,
  toolbox
};
