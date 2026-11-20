import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');

test('the banner page links each half and the middle band to its destination', () => {
  const html = read('pendon/index.html');
  assert.match(html, /class="pendon-top"[^>]*href="\/"|href="\/"[^>]*class="pendon-top"/);
  assert.match(html, /href="https:\/\/studio\.japs\.ing"/);
  assert.match(html, /href="\/contacto"/);
  assert.match(html, /href="https:\/\/wa\.me\/56993183282\?text=Hola%20JAPS%2C%20vi%20su%20pend%C3%B3n/);
});

test('the banner page stays out of search indexes and the sitemap', () => {
  assert.match(read('pendon/index.html'), /name="robots" content="noindex, nofollow"/);
  for (const file of readdirSync(dist).filter((name) => /^sitemap.*\.xml$/.test(name))) {
    assert.doesNotMatch(read(file), /https:\/\/japs\.ing\/pendon/);
  }
});
