import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');

test('six NFC pages are published and kept out of search indexes', () => {
  assert.deepEqual(readdirSync(new URL('card/', dist)).sort(), ['1', '2', '3', '4', '5', '6']);
  for (let n = 1; n <= 6; n++) {
    assert.match(read(`card/${n}/index.html`), /name="robots" content="noindex, nofollow"/);
  }
  for (const file of readdirSync(dist).filter((name) => /^sitemap.*\.xml$/.test(name))) {
    assert.doesNotMatch(read(file), /https:\/\/japs\.ing\/card\//);
  }
});

test('NFC card 1 points to the exact solutions destination, including without JavaScript', () => {
  const html = read('card/1/index.html');
  assert.match(html, /http-equiv="refresh" content="0;url=https:\/\/japs\.ing\/soluciones\/"/);
  assert.match(html, /href="https:\/\/japs\.ing\/soluciones\/"/);
});

test('NFC card 2 redirects to the Brixor waiting list, including without JavaScript', () => {
  const html = read('card/2/index.html');
  assert.match(html, /http-equiv="refresh" content="0;url=http:\/\/brixor\.cl\/lista-de-espera"/);
  assert.match(html, /href="http:\/\/brixor\.cl\/lista-de-espera"/);
});

test('unassigned NFC cards display their pending status without redirecting', () => {
  for (let n = 3; n <= 6; n++) {
    const html = read(`card/${n}/index.html`);
    assert.match(html, /Por configurar/);
    assert.doesNotMatch(html, /window\.location\.replace|http-equiv="refresh"/);
  }
});

test('Brixor is published across both language catalogs and structured solution data', () => {
  for (const prefix of ['', 'en/']) {
    for (const path of ['index.html', 'links/index.html', `${prefix ? 'solutions' : 'soluciones'}/index.html`]) {
      const html = read(`${prefix}${path}`);
      assert.match(html, /href="https:\/\/brixor\.cl\/"/);
      assert.match(html, /Brixor/);
    }
    const html = read(`${prefix}${prefix ? 'solutions' : 'soluciones'}/index.html`);
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1])['@graph'];
    assert.ok(graph.some((node) => node['@type'] === 'SoftwareApplication' && node.name === 'Brixor' && node.url === 'https://brixor.cl/'));
  }
  assert.match(read('llms.txt'), /Brixor/);
});
