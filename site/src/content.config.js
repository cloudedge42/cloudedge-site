import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  pages: pagesCollection,
  projects: projectsCollection,
};
