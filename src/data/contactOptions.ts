/**
 * Opciones de motivo e industria del formulario de contacto: <select> en la
 * home, tiles y pills con ícono en /contacto.
 *
 * `value` es lo que viaja al webhook y lo que espeja el objeto
 * contact-request de Twenty: queda fijo en español aunque la página esté en
 * inglés. Sólo `label` se traduce.
 */
import type { Lang } from '../i18n/routes';

export interface ContactOption {
  value: string;
  label: Record<Lang, string>;
  /** Material Symbols glyph del tile o pill en /contacto. */
  icon: string;
  /** Tono `.ind-tone--*` de la industria (sections.css). */
  tone?: 'yellow' | 'orange' | 'purple' | 'blue' | 'green';
}

export const industryOptions: ContactOption[] = [
  { value: 'Minería', label: { es: 'Minería', en: 'Mining' }, icon: 'landslide', tone: 'yellow' },
  { value: 'Manufactura', label: { es: 'Manufactura', en: 'Manufacturing' }, icon: 'precision_manufacturing', tone: 'blue' },
  { value: 'Retail y comercio', label: { es: 'Retail y comercio', en: 'Retail and commerce' }, icon: 'storefront', tone: 'orange' },
  { value: 'Educación', label: { es: 'Centros educativos', en: 'Educational institutions' }, icon: 'school', tone: 'purple' },
  { value: 'Otra', label: { es: 'Otra', en: 'Other' }, icon: 'more_horiz' },
];

export const contactReasonOptions: ContactOption[] = [
  {
    value: 'Consultoría de transformación digital',
    label: { es: 'Consultoría de transformación digital', en: 'Digital transformation consulting' },
    icon: 'insights',
  },
  { value: 'Desarrollo de software', label: { es: 'Desarrollo de software', en: 'Software development' }, icon: 'code' },
  {
    value: 'Integración de sistemas/APIs',
    label: { es: 'Integración de sistemas/APIs', en: 'Systems/API integration' },
    icon: 'hub',
  },
  { value: 'Productos JAPS', label: { es: 'Productos JAPS', en: 'JAPS products' }, icon: 'deployed_code' },
  { value: 'Alianzas', label: { es: 'Alianzas', en: 'Partnerships' }, icon: 'handshake' },
  { value: 'Otro', label: { es: 'Otro', en: 'Other' }, icon: 'chat_bubble' },
];

/** Lo que Field.astro espera: `{ value, label }` ya en el idioma de la página. */
export const optionsFor = (options: ContactOption[], lang: Lang) =>
  options.map((option) => ({ value: option.value, label: option.label[lang] }));

/** Glifos Material Symbols que usan las opciones, para el `iconNames` de Base. */
export const contactOptionIcons = [...contactReasonOptions, ...industryOptions].map((option) => option.icon);
