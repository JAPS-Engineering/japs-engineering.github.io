import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateContactHtml } from './check-contact-build.mjs';

const id = 'f1abbaaf-a42e-4f8b-ab15-ad83f4e25a21';
const legacy = '<form data-contact-form data-endpoint="https://n8n.gestion.japs.ing/webhook/contacto-japs"><input name="consent"><div class="cf-turnstile"></div></form>';
const integrated = `<form data-contact-form data-endpoint="https://n8n.gestion.japs.ing/webhook/contacto-japs-consenty" data-consenty-integration="${id}" data-consenty-tenant="japs" data-consenty-sdk="https://app.consenty.japs.ing/sdk/v1.js"><div data-consenty-container></div></form>`;

test('accepts the complete legacy and Consenty configurations', () => {
  assert.equal(validateContactHtml(legacy), 'legacy');
  assert.equal(validateContactHtml(integrated), 'consenty');
});
test('refuses mixed backend/widget configurations and broken IDs', () => {
  for (const html of [integrated.replace('-consenty"', '"'),
    legacy.replace('contacto-japs"', 'contacto-japs-consenty"'),
    integrated.replace(id, 'invalid'), integrated.replace('data-consenty-container', 'data-other'),
    integrated.replace('data-consenty-tenant="japs"', 'data-consenty-tenant="other"')]) {
    assert.throws(() => validateContactHtml(html));
  }
});
test('requires only Consenty UI and disallows an extra Cloudflare widget', () => {
  assert.throws(() => validateContactHtml(integrated + '<div class="cf-turnstile"></div>'));
  assert.throws(() => validateContactHtml(integrated + '<input name="consent">'));
  assert.throws(() => validateContactHtml(integrated + '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js"></script>'));
});
test('requires a contact form and the known production destinations', () => {
  assert.throws(() => validateContactHtml('<html></html>'));
  assert.throws(() => validateContactHtml(integrated.replace('https://n8n.gestion.japs.ing', 'https://evil.example')));
  assert.throws(() => validateContactHtml(integrated.replace('https://app.consenty.japs.ing/sdk/v1.js', 'https://evil.example/sdk.js')));
});
