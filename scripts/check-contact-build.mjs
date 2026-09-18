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
  for (const path of ['dist/index.html', 'dist/contacto/index.html']) {
    const mode = validateContactHtml(await readFile(path, 'utf8'));
    modes.push(mode);
    console.log(`${path}: ${mode} configuration verified`);
  }
  assert.equal(modes[0], modes[1], 'Home and contact page must use the same form');
  if (modes[0] === 'consenty') {
    const privacy = await readFile('dist/privacidad/index.html', 'utf8');
    assert.ok(privacy.includes('365 días'), 'Missing contact evidence retention notice');
    assert.ok(privacy.includes('12 meses desde'), 'Missing inquiry retention notice');
    assert.ok(privacy.includes('turnstile-privacy-policy'), 'Missing Turnstile privacy link');
  }
}
