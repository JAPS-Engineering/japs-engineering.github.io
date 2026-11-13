/**
 * Artículos del blog (JAPS-276), ya resueltos: autor desde el equipo,
 * industria desde los datos, fecha y tiempo de lectura. Solo en español por
 * ahora; /en no tiene blog hasta que haya artículos traducidos.
 *
 * Los borradores (`draft: true`) aparecen en `pnpm dev` para revisarlos y
 * quedan fuera de `pnpm build`, así que nunca llegan a japs.ing por error.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { content, industriaBySlug } from './content';
import type { Persona } from './nosotros';
import type { Industria } from './industrias';

export const BLOG_PATH = '/blog';

export interface Post {
  slug: string;
  href: string;
  entry: CollectionEntry<'blog'>;
  data: CollectionEntry<'blog'>['data'];
  author: Persona;
  industry?: Industria;
  readingMinutes: number;
}

const WORDS_PER_MINUTE = 200;

export async function getPosts(): Promise<Post[]> {
  const { equipo } = content('es');
  const entries = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries
    .map((entry) => {
      const author = equipo.find((persona) => persona.slug === entry.data.author);
      if (!author) throw new Error(`blog/${entry.id}: el autor «${entry.data.author}» no está en el equipo.`);
      const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
      return {
        slug: entry.id,
        href: `${BLOG_PATH}/${entry.id}/`,
        entry,
        data: entry.data,
        author,
        industry: entry.data.industry ? industriaBySlug('es', entry.data.industry) : undefined,
        readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
      };
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const dateFormat = new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (date: Date) => dateFormat.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
