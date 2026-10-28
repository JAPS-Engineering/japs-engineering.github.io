import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateContactHtml } from './check-contact-build.mjs';

const form = '<form data-contact-form data-endpoint="https://n8n.gestion.japs.ing/webhook/contacto-japs"><input name="consent"><div class="cf-turnstile"></div></form>';

test('accepts the complete contact form', () => {
  assert.doesNotThrow(() => validateContactHtml(form));
});
test('requires the consent checkbox and the Turnstile widget', () => {
  assert.throws(() => validateContactHtml(form.replace('<input name="consent">', '')));
  assert.throws(() => validateContactHtml(form.replace('<div class="cf-turnstile"></div>', '')));
});
test('refuses the retired Consenty endpoint and widget', () => {
  assert.throws(() => validateContactHtml(form.replace('contacto-japs"', 'contacto-japs-consenty"')));
  assert.throws(() => validateContactHtml(form.replace('<form data-contact-form', '<form data-contact-form data-consenty-integration="x"')));
  assert.throws(() => validateContactHtml(form + '<div data-consenty-container></div>'));
});
test('requires a contact form and the known production destination', () => {
  assert.throws(() => validateContactHtml('<html></html>'));
  assert.throws(() => validateContactHtml(form.replace('https://n8n.gestion.japs.ing', 'https://evil.example')));
});
