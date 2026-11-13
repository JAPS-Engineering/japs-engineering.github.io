/**
 * Colecciones de contenido. Por ahora solo el blog (JAPS-276): un archivo
 * Markdown por artículo en src/content/blog/. Publicar es agregar un archivo,
 * sin tocar código.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Resumen de una o dos frases: bajada del encabezado, meta description y tarjeta. */
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Slug de una persona del equipo (src/data/nosotros.ts). Enlaza a su perfil. */
    author: z.string(),
    /** Foto de portada, ruta bajo public/. */
    cover: z.string().startsWith('/'),
    coverAlt: z.string(),
    /** Industria del artículo, si tiene una: enlaza a su página. */
    industry: z.enum(['mineria', 'manufactura', 'retail', 'educacion']).optional(),
    tags: z.array(z.string()).default([]),
    /** Los borradores se ven con `pnpm dev` y no salen en el build de producción. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
