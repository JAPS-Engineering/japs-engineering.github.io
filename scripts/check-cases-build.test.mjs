import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = (path) => readFileSync(resolve(dist, path), 'utf8');
const cards = (html) => [...html.matchAll(/<article\b(?=[^>]*\bdata-case-id="([^"]+)")[^>]*>([\s\S]*?)<\/article>/g)]
  .map(([markup, id, body]) => ({ id, markup, body }));
/** Industry highlight cards (CaseCard) paint the photo as a background. */
const featuredMedia = (card) => ({
  image: card.body.match(/class="ind-case__photo"[^>]*background-image:url\(([^)]+)\)/)?.[1],
  logo: card.body.match(/<img\b[^>]*class="ind-case__logo"[^>]*src="([^"]+)"/)?.[1],
});
/** Listing chapters (CaseChapter) use real <img> elements. */
const chapterMedia = (card) => ({
  image: card.body.match(/<img\b[^>]*class="case-ch__img"[^>]*src="([^"]+)"/)?.[1],
  logo: card.body.match(/<img\b[^>]*class="case-ch__logo"[^>]*src="([^"]+)"/)?.[1],
});
const jsonLd = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .map(([, json]) => JSON.parse(json))
  .flatMap((data) => data['@graph'] ?? [data]);
const expectedIds = ['dinv-uc', 'ciuc', 'barron-vieyra', 'axam'];
const expectedMedia = {
  'barron-vieyra': { image: '/hero/bv.jpg', logo: '/logo/partners/BV.avif' },
  axam: { image: '/hero/axam.jpg', logo: '/logo/partners/axam.png' },
  'dinv-uc': { image: '/hero/uc.jpg', logo: '/logo/partners/universidad-catolica.png' },
  ciuc: { image: '/hero/ciuc2.jpg', logo: '/logo/partners/ciuc.svg' },
};

for (const [lang, prefix, route, industryPath, detailPath] of [
  ['es', '', '/casos-de-exito', 'industrias/index.html', 'industrias/educacion/index.html'],
  ['en', 'en/', '/en/case-studies', 'en/industries/index.html', 'en/industries/education/index.html'],
]) {
  const casesPath = `${route.slice(1)}/index.html`;
  const casePage = (id) => `${route.slice(1)}/${id}/index.html`;

  test(`${lang}: listing chapters publish shared photos and client logos with stable anchors`, () => {
    const html = read(casesPath);
    const chapters = cards(html);
    assert.deepEqual(chapters.map((card) => card.id), expectedIds);
    for (const card of chapters) {
      assert.match(card.markup, new RegExp(`\\bid="${card.id}"`));
      const { image, logo } = chapterMedia(card);
      assert.deepEqual({ image, logo }, expectedMedia[card.id], `wrong client media for ${card.id}`);
      assert.ok(existsSync(resolve(dist, image.slice(1))), `missing photo ${image}`);
      assert.ok(existsSync(resolve(dist, logo.slice(1))), `missing logo ${logo}`);
      assert.match(card.body, new RegExp(`href="${route}/${card.id}/?"`), `chapter ${card.id} does not link to its page`);
      assert.match(html, new RegExp(`class="case-index"[\\s\\S]*?href="#${card.id}"`), `hero index misses ${card.id}`);
    }
    assert.doesNotMatch(html, /CynthIA|Don Maxi|PERIRED/i);
  });

  test(`${lang}: every case has its own detail page, linked to the other three`, () => {
    for (const id of expectedIds) {
      const html = read(casePage(id));
      const others = expectedIds.filter((other) => other !== id);
      assert.match(html, /<h1 class="case-hero__title"[^>]*>[^<]+<\/h1>/, `${id}: missing title`);
      assert.ok(html.includes(`src="${expectedMedia[id].image}"`), `${id}: hero photo differs from the listing`);
      for (const other of others) assert.match(html, new RegExp(`href="${route}/${other}/?"`), `${id}: no link to ${other}`);
      const alt = lang === 'es' ? `/en/case-studies/${id}` : `/casos-de-exito/${id}`;
      assert.match(html, new RegExp(`hreflang="[^"]+" href="[^"]*${alt}/?"`), `${id}: missing hreflang alternate`);
      const work = jsonLd(html).find((node) => node['@type'] === 'CreativeWork');
      assert.ok(work?.url?.replace(/\/$/, '').endsWith(`${route}/${id}`), `${id}: schema url`);
    }
    const bv = read(casePage('barron-vieyra'));
    assert.ok(bv.includes(lang === 'es' ? 'stock de materia prima' : 'raw-material stock'), 'full narrative was replaced by a summary');
    assert.ok(bv.includes(lang === 'es' ? 'años como especialista' : 'years as a nonwoven'), 'client figures were dropped');
  });

  test(`${lang}: education uses UC first and shares its case media and destination`, () => {
    const featured = cards(read(detailPath));
    assert.deepEqual(featured.map((card) => card.id), ['dinv-uc', 'ciuc']);
    for (const card of featured) {
      assert.deepEqual(featuredMedia(card), expectedMedia[card.id]);
      assert.match(card.body, new RegExp(`href="${route}/${card.id}/?"`));
    }
    const index = read(industryPath);
    const panel = index.slice(index.indexOf('id="ind-educacion"'));
    assert.ok(panel.indexOf('Universidad Católica:') >= 0);
    assert.ok(panel.indexOf('Universidad Católica:') < panel.indexOf('CIUC:'), 'industry teaser order disagrees with its detail page');
  });

  test(`${lang}: home highlights UC and structured case data includes matching photos`, () => {
    const home = read(`${prefix}index.html`);
    const start = home.indexOf('id="casos"');
    const teaser = home.slice(start, home.indexOf('</section>', start));
    assert.ok(teaser.includes('Universidad Católica'));
    assert.ok(teaser.includes(expectedMedia['dinv-uc'].image));
    assert.match(teaser, new RegExp(`href="${route}/dinv-uc/?"`));
    assert.doesNotMatch(teaser, /CIUC|ciuc2\.jpg/);
    const html = read(casesPath);
    const works = jsonLd(html).filter((node) => node['@type'] === 'CreativeWork');
    assert.equal(works.length, 4);
    for (const card of cards(html)) {
      const work = works.find((node) => node.url?.replace(/\/$/, '').endsWith(`${route}/${card.id}`));
      assert.ok(work, `missing schema node for ${card.id}`);
      assert.ok(work.image?.endsWith(chapterMedia(card).image), `schema photo disagrees for ${card.id}`);
    }
  });
}
