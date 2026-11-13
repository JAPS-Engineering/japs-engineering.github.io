/** /blog/rss.xml — feed RSS 2.0 del blog, escrito a mano para no sumar una
 *  dependencia por veinte líneas de XML. Solo artículos publicados, y solo
 *  existe cuando hay alguno (igual que /blog). */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getPosts } from '../../data/blog';
import { organizacion } from '../../data/organizacion';
import { abs } from '../../lib/schema';

const xml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const published = async () => (await getPosts()).filter((post) => !post.data.draft);

export const getStaticPaths: GetStaticPaths = async () =>
  (await published()).length > 0 ? [{ params: { feed: 'rss' } }] : [];

export const GET: APIRoute = async () => {
  const posts = await published();
  const items = posts
    .map(
      (post) => `    <item>
      <title>${xml(post.data.title)}</title>
      <link>${abs(post.href)}</link>
      <guid isPermaLink="true">${abs(post.href)}</guid>
      <description>${xml(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <author>${xml(`${post.author.email ?? organizacion.email} (${post.author.name})`)}</author>
    </item>`,
    )
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de ${xml(organizacion.name)}</title>
    <link>${abs('/blog/')}</link>
    <atom:link href="${abs('/blog/rss.xml')}" rel="self" type="application/rss+xml" />
    <description>Tecnología aplicada a los negocios: software a medida, integraciones e IA.</description>
    <language>es-CL</language>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
