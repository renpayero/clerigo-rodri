import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Reglas curadas del dossier (scripts/import-dossier.ts escribe src/content/rules/*.md). */
const rules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rules' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    order: z.number(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
  }),
});

export const collections = { rules };
