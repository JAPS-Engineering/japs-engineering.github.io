import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const endpoint = 'https://n8n.gestion.japs.ing/webhook/contacto-japs';

export function validateContactHtml(html) {
  const form = html.match(/<form\b[^>]*\bdata-contact-form\b[^>]*>/)?.[0];
  assert.ok(form, 'Missing contact form');
  const attribute = name => form.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
  assert.equal(attribute('data-endpoint'), endpoint, 'Contact form must post to its webhook');
  assert.ok(/<input\b[^>]*\bname="consent"/.test(html), 'Missing consent checkbox');
  assert.ok(/<div\b[^>]*\bclass="[^"]*\bcf-turnstile\b/.test(html), 'Missing Turnstile widget');
  assert.ok(!/consenty/i.test(form) && !/\bdata-consenty-container\b/.test(html),
    'The Consenty integration was removed; the form must not render it');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const pages = ['dist/index.html', 'dist/contacto/index.html', 'dist/en/index.html', 'dist/en/contact/index.html'];
  for (const path of pages) {
    validateContactHtml(await readFile(path, 'utf8'));
    console.log(`${path}: contact form verified`);
  }
}
