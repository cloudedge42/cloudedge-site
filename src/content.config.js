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
  // These fields supply the project listing and its matching detail page.
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  pages: pagesCollection,
  projects: projectsCollection,
};
