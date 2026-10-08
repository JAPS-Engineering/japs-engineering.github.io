import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const legacyEndpoint = 'https://n8n.gestion.japs.ing/webhook/contacto-japs';
const consentyEndpoint = legacyEndpoint + '-consenty';

export function validateContactHtml(html) {
  const form = html.match(/<form\b[^>]*\bdata-contact-form\b[^>]*>/)?.[0];
  assert.ok(form, 'Missing contact form');
  const attribute = name => form.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
  const integration = attribute('data-consenty-integration');
  const legacyConsent = /<input\b[^>]*\bname="consent"/.test(html);
  const cloudflareWidget = /<div\b[^>]*\bclass="[^"]*\bcf-turnstile\b/.test(html);
  const cloudflareScript = /<script\b[^>]*\bsrc="https:\/\/challenges\.cloudflare\.com\//.test(html);
  const consentyContainer = /<div\b[^>]*\bdata-consenty-container\b/.test(html);
  if (integration) {
    assert.equal(integration, 'f1abbaaf-a42e-4f8b-ab15-ad83f4e25a21', 'Unknown JAPS integration');
    assert.equal(attribute('data-endpoint'), consentyEndpoint, 'Widget/webhook mismatch');
    assert.equal(attribute('data-consenty-tenant'), 'japs');
    assert.equal(attribute('data-consenty-sdk'), 'https://app.consenty.japs.ing/sdk/v1.js');
    assert.ok(consentyContainer, 'Missing Consenty container');
    assert.ok(!legacyConsent && !cloudflareWidget && !cloudflareScript,
      'Consenty must not render the legacy checkbox or a separate Cloudflare widget');
    return 'consenty';
  }
  assert.equal(attribute('data-endpoint'), legacyEndpoint, 'Legacy form needs its legacy webhook');
  assert.ok(legacyConsent && cloudflareWidget && !consentyContainer, 'Incomplete legacy form');
  return 'legacy';
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const modes = [];
  const pages = ['dist/index.html', 'dist/contacto/index.html', 'dist/en/index.html', 'dist/en/contact/index.html'];
  for (const path of pages) {
    const mode = validateContactHtml(await readFile(path, 'utf8'));
    modes.push(mode);
    console.log(`${path}: ${mode} configuration verified`);
  }
  assert.ok(modes.every((mode) => mode === modes[0]), 'Every page must use the same form in both languages');
  if (modes[0] === 'consenty') {
    const notices = {
      'dist/privacidad/index.html': ['365 días', '12 meses desde', 'turnstile-privacy-policy'],
      'dist/en/privacy/index.html': ['365 days', '12 months from', 'turnstile-privacy-policy'],
    };
    for (const [path, phrases] of Object.entries(notices)) {
      const privacy = await readFile(path, 'utf8');
      for (const phrase of phrases) assert.ok(privacy.includes(phrase), `${path}: missing "${phrase}"`);
    }
  }
}
