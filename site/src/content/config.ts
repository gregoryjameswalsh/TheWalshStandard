
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    heroImage: z.string().optional()
  })
});

export const collections = { blog };
