/**
 * Opciones de los dos <select> del formulario de contacto.
 *
 * `value` es lo que viaja al webhook y lo que espeja el objeto
 * contact-request de Twenty: queda fijo en español aunque la página esté en
 * inglés. Sólo `label` se traduce.
 */
import type { Lang } from '../i18n/routes';

export interface ContactOption {
  value: string;
  label: Record<Lang, string>;
}

export const industryOptions: ContactOption[] = [
  { value: 'Minería', label: { es: 'Minería', en: 'Mining' } },
  { value: 'Manufactura', label: { es: 'Manufactura', en: 'Manufacturing' } },
  { value: 'Retail y comercio', label: { es: 'Retail y comercio', en: 'Retail and commerce' } },
  { value: 'Educación', label: { es: 'Centros educativos', en: 'Educational institutions' } },
  { value: 'Transporte y logística', label: { es: 'Transporte y logística', en: 'Transport and logistics' } },
  { value: 'Otra', label: { es: 'Otra', en: 'Other' } },
];

export const contactReasonOptions: ContactOption[] = [
  {
    value: 'Consultoría de transformación digital',
    label: { es: 'Consultoría de transformación digital', en: 'Digital transformation consulting' },
  },
  { value: 'Desarrollo de software', label: { es: 'Desarrollo de software', en: 'Software development' } },
  {
    value: 'Integración de sistemas/APIs',
    label: { es: 'Integración de sistemas/APIs', en: 'Systems/API integration' },
  },
  { value: 'Productos JAPS', label: { es: 'Productos JAPS', en: 'JAPS products' } },
  { value: 'Alianzas', label: { es: 'Alianzas', en: 'Partnerships' } },
  { value: 'Otro', label: { es: 'Otro', en: 'Other' } },
];

/** Lo que Field.astro espera: `{ value, label }` ya en el idioma de la página. */
export const optionsFor = (options: ContactOption[], lang: Lang) =>
  options.map((option) => ({ value: option.value, label: option.label[lang] }));
