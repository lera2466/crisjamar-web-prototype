import { defineCollection, z } from 'astro:content';
// z --> zod schema

const products = defineCollection({
  schema: z.object({
    name: z.string(),
    price: z.number().min(0),
    description: z.string().min(10).max(200),
    img: z.string(),
  }),
});

export const collections = { products };
