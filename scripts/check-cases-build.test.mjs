import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const read = (path) => readFileSync(resolve(dist, path), 'utf8');
const cards = (html) => [...html.matchAll(/<article\b(?=[^>]*\bdata-case-id="([^"]+)")[^>]*>([\s\S]*?)<\/article>/g)]
  .map(([markup, id, body]) => ({ id, markup, body }));
const media = (card) => ({
  image: card.body.match(/class="ind-case__photo"[^>]*background-image:url\(([^)]+)\)/)?.[1],
  logo: card.body.match(/<img\b[^>]*class="ind-case__logo"[^>]*src="([^"]+)"/)?.[1],
});
const expectedIds = ['barron-vieyra', 'axam', 'dinv-uc', 'ciuc'];
const expectedMedia = {
  'barron-vieyra': { image: '/hero/bv.jpg', logo: '/logo/partners/BV.avif' },
  axam: { image: '/hero/bg3.jpg', logo: '/logo/partners/axam.png' },
  'dinv-uc': { image: '/hero/uc.jpg', logo: '/logo/partners/universidad-catolica.png' },
  ciuc: { image: '/hero/ciuc2.jpg', logo: '/logo/partners/ciuc.svg' },
};

for (const [lang, prefix, casesPath, industryPath, detailPath] of [
  ['es', '', 'casos-de-exito/index.html', 'industrias/index.html', 'industrias/educacion/index.html'],
  ['en', 'en/', 'en/case-studies/index.html', 'en/industries/index.html', 'en/industries/education/index.html'],
]) {
  test(`${lang}: full cases publish shared photos and client logos with stable anchors`, () => {
    const fullCards = cards(read(casesPath));
    assert.deepEqual(fullCards.map((card) => card.id), expectedIds);
    for (const card of fullCards) {
      assert.match(card.markup, new RegExp(`\\bid="${card.id}"`));
      const { image, logo } = media(card);
      assert.deepEqual({ image, logo }, expectedMedia[card.id], `wrong client media for ${card.id}`);
      assert.ok(image && logo, `missing media for ${card.id}`);
      assert.ok(existsSync(resolve(dist, image.slice(1))), `missing photo ${image}`);
      assert.ok(existsSync(resolve(dist, logo.slice(1))), `missing logo ${logo}`);
    }
    const body = fullCards[0].body;
    assert.ok(body.includes(lang === 'es' ? 'stock de materia prima' : 'raw-material stock'), 'full narrative was replaced by a summary');
    assert.ok(body.includes(lang === 'es' ? 'más de 29 años' : 'over 29 years'), 'case footnote was dropped');
    assert.doesNotMatch(read(casesPath), /CynthIA|Don Maxi|PERIRED/i);
  });

  test(`${lang}: education uses UC first and shares its case media and destination`, () => {
    const featured = cards(read(detailPath));
    assert.deepEqual(featured.map((card) => card.id), ['dinv-uc', 'ciuc']);
    const full = cards(read(casesPath));
    const route = lang === 'es' ? '/casos-de-exito' : '/en/case-studies';
    for (const card of featured) {
      assert.deepEqual(media(card), media(full.find((item) => item.id === card.id)));
      assert.match(card.body, new RegExp(`href="${route}/?#${card.id}"`));
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
    assert.ok(teaser.includes('/logo/partners/universidad-catolica.png'));
    assert.doesNotMatch(teaser, /CIUC|ciuc\.svg/);
    const html = read(casesPath);
    const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .map(([, json]) => JSON.parse(json));
    const nodes = scripts.flatMap((data) => data['@graph'] ?? [data]);
    const works = nodes.filter((node) => node['@type'] === 'CreativeWork');
    assert.equal(works.length, 4);
    for (const card of cards(html)) {
      const work = works.find((node) => node['@id']?.endsWith(`#${card.id}`));
      assert.ok(work, `missing schema anchor for ${card.id}`);
      assert.ok(work.image?.endsWith(media(card).image), `schema photo disagrees for ${card.id}`);
    }
  });
}
