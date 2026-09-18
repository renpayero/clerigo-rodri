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

/** Lore de la mesa: trasfondos escritos por Renzo (src/content/lore/*.md). El cuerpo es la historia; knows/hooks son notas de mesa. */
const lore = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lore' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    kind: z.string(),
    order: z.number(),
    summary: z.string(),
    docUrl: z.string().url().optional(),
    knows: z.array(z.string()).default([]),
    hooks: z.array(z.string()).default([]),
  }),
});

export const collections = { rules, lore };
