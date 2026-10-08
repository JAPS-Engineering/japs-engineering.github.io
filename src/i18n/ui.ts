/**
 * Textos del chrome y de los componentes compartidos (nav, footer, formulario,
 * tarjetas, aria-labels). Los textos propios de cada página viven en su vista
 * (`src/views/*View.astro`) y el contenido editorial en `src/data/` y
 * `src/data/en/`.
 *
 * `es` define las claves; `en` debe tenerlas todas y ninguna más — el
 * `satisfies` lo exige en tiempo de compilación.
 */
import type { Lang } from './routes';

const es = {
  // Nav
  'nav.label': 'Principal',
  'nav.homeAria': 'inicio',
  'nav.contact': 'Contáctanos',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'lang.choose': 'Cambiar idioma',

  // Rutas (labels de nav, footer y migas)
  'route.home': 'Inicio',
  'route.about': 'Nosotros',
  'route.services': 'Servicios',
  'route.industries': 'Industrias',
  'route.solutions': 'Soluciones',
  'route.cases': 'Casos de éxito',
  'route.contact': 'Contacto',
  'route.privacy': 'Política de privacidad y manejo de datos',
  'route.terms': 'Términos de servicio',
  'route.links': 'Enlaces',
  'crumb.privacy': 'Política de privacidad',
  'crumb.team': 'Equipo',

  // Footer
  'footer.site': 'Sitio',
  'footer.industries': 'Industrias',
  'footer.more': 'Más',
  'footer.legal': 'Legal',
  'footer.mail': 'Correo',
  'footer.incubatorNote': 'Acelerados en el Centro de Innovación UC Anacleto Angelini.',

  // Site copy
  'site.incubator': 'Acelerados en el Centro de Innovación UC Anacleto Angelini',
  'site.acceleratedAt': 'Acelerados en',
  'site.awards': 'Jump Chile 2023 · Brain Chile 2024 · HUC Social Ideas Challenge 2024',
  'site.copyright': '© 2026 JAPS Engineering. Todos los derechos reservados.',
  'site.dataNotice': 'Consulta cómo tratamos tus datos en nuestra política de privacidad.',
  'site.base': 'Centro de Innovación UC Anacleto Angelini · Santiago, Chile',

  // Industrias
  'industries.view': 'Ver {name}',
  'industries.viewSolutions': 'Ver soluciones',
  'industries.viewSolutionsFor': 'Ver soluciones para {name}',
  'industries.others': 'Otras industrias',
  'industries.all': 'Ver todas las industrias →',
  'industries.more': '+{n} más',
  'industries.notListed': '¿Tu industria no está en la lista?',
  'industries.notListedText': 'Igual conversemos: el método es el mismo, el dominio se aprende rápido.',
  'industries.talk': 'Conversemos',
  'industries.schedule': 'Agenda una reunión',
  'industries.whatWeDo': 'Ver qué hacemos',

  // Equipo
  'team.viewProfile': 'Ver perfil',
  'team.viewProfileArrow': 'Ver perfil →',
  'team.viewProfileOf': 'Ver perfil de {name}',
  'team.founder': 'Fundador',
  'team.advisor': 'Asesor',
  'team.eyebrow': 'Equipo JAPS',
  'team.write': 'Escríbele',
  'team.seeTeam': 'Ver el equipo',
  'team.linkedinOf': 'LinkedIn de {name}',
  'team.photo': 'Foto de perfil',
  'team.photoPlaceholder': 'Foto',

  // CTA band y avisos
  'cta.title': '¿Conversamos sobre tu desafío?',
  'cta.text': 'Agenda una reunión y revisemos juntos dónde la tecnología puede mover los números de tu operación.',
  'cta.label': 'Contáctanos',
  'draft.label': 'Borrador',
  'draft.text': 'Contenido preliminar, por validar antes de publicar.',

  // Productos y logos
  'product.view': 'Ver solución',
  'product.learn': 'Conocer {name}',
  'product.demo': 'Pedir una demo',

  // Cómo te ayudamos
  'howHelp.title': '¿Cómo te ayudamos?',
  'howHelp.lead': 'Te acompañamos todo el camino, entendemos tu proceso, construimos tu solución y la dejamos conversando con el resto de tu operación.',
  'howHelp.link': 'Conoce nuestros servicios →',
  'howHelp.tablist': 'Cómo te ayudamos, por etapa',
  'howHelp.ctaTitle': 'Diagnóstico gratis de 30 minutos',
  'howHelp.ctaButton': 'Agendar diagnóstico',
  'howHelp.whatsapp': 'Escríbenos por WhatsApp',
  'howHelp.deliverables': 'Qué recibes',

  // Legal
  'legal.updated': 'Última actualización:',
  'legal.effective': 'Vigente desde:',
  'legal.version': 'Versión {v}',
  'legal.draft': 'Borrador pendiente de revisión legal. No constituye aún el texto definitivo.',
  'legal.toc': 'Contenido',

  // Accesibilidad
  'a11y.loading': 'Cargando JAPS',
  'a11y.whatsapp': 'WhatsApp',

  // Formulario de contacto
  'form.firstName': 'Nombre',
  'form.firstNamePh': 'Tu nombre',
  'form.lastName': 'Apellido',
  'form.lastNamePh': 'Tu apellido',
  'form.company': 'Empresa (opcional)',
  'form.companyPh': 'Nombre de tu empresa',
  'form.jobTitle': 'Cargo (opcional)',
  'form.jobTitlePh': 'Tu cargo',
  'form.email': 'Email',
  'form.emailOptional': 'Email (opcional)',
  'form.emailPh': 'nombre@empresa.com',
  'form.phone': 'Teléfono (opcional)',
  'form.phonePh': '+56 9 …',
  'form.noteConsenty': 'Consenty verificará tu correo antes del envío. Si no lo ingresas aquí, lo solicitará junto con tu RUT.',
  'form.noteContact': 'Ingresa al menos un medio de contacto: email o teléfono.',
  'form.industry': 'Industria (opcional)',
  'form.industryPh': 'Selecciona una industria',
  'form.reason': 'Motivo',
  'form.reasonPh': 'Selecciona un motivo',
  'form.message': 'Mensaje o desafío',
  'form.messagePh': 'Cuéntanos brevemente tu desafío',
  'form.consentPre': 'Acepto el tratamiento de mis datos personales para responder esta solicitud, conforme a la',
  'form.consentLink': 'política de privacidad',
  'form.consentPost': '.',
  'form.consentyWidget': 'Verificación y preferencias de privacidad con Consenty.',
  'form.consentyNote1': 'Consulta nuestra',
  'form.consentyNote2': 'antes de enviar. No incluyas datos sensibles ni datos de terceros sin autorización. Si prefieres no usar Consenty o tienes problemas con el formulario, escríbenos a',
  'form.website': 'Sitio web',
  'form.submit': 'Enviar mensaje',
  'form.noscript': 'Necesitas JavaScript habilitado para verificar y enviar el formulario.',
  'form.msg.sdkUnavailable': 'Consenty no está disponible. Intenta nuevamente.',
  'form.msg.sdkInit': 'No se pudo iniciar Consenty.',
  'form.msg.sdkLoad': 'No se pudo cargar Consenty.',
  'form.msg.sdkRetry': 'Consenty no está disponible. Puedes reintentar al enviar.',
  'form.msg.contactMethod': 'Ingresa al menos un email o un teléfono.',
  'form.msg.notConfigured': 'El formulario aún no está configurado. Escríbenos a contacto@japs.ing.',
  'form.msg.security': 'Completa la verificación de seguridad antes de enviar.',
  'form.msg.sending': 'Enviando…',
  'form.msg.sendingStatus': 'Enviando tu mensaje…',
  'form.msg.changed': 'El formulario cambió. Revisa los datos y vuelve a enviar.',
  'form.msg.verifyFailed': 'No pudimos completar la verificación de seguridad. Intenta nuevamente.',
  'form.msg.reviewData': 'Revisa los datos ingresados e intenta nuevamente.',
  'form.msg.saveFailed': 'No pudimos guardar tu mensaje. Intenta nuevamente en unos minutos.',
  'form.msg.success': 'Gracias. Recibimos tu mensaje y te responderemos dentro de un día hábil.',
  'form.msg.sendFailed': 'No pudimos enviar tu mensaje. Intenta nuevamente.',
} as const;

export type UIKey = keyof typeof es;

const en = {
  'nav.label': 'Main',
  'nav.homeAria': 'home',
  'nav.contact': 'Contact us',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'lang.choose': 'Change language',

  'route.home': 'Home',
  'route.about': 'About',
  'route.services': 'Services',
  'route.industries': 'Industries',
  'route.solutions': 'Solutions',
  'route.cases': 'Case studies',
  'route.contact': 'Contact',
  'route.privacy': 'Privacy and data policy',
  'route.terms': 'Terms of service',
  'route.links': 'Links',
  'crumb.privacy': 'Privacy policy',
  'crumb.team': 'Team',

  'footer.site': 'Site',
  'footer.industries': 'Industries',
  'footer.more': 'More',
  'footer.legal': 'Legal',
  'footer.mail': 'Email',
  'footer.incubatorNote': 'Accelerated at the UC Anacleto Angelini Innovation Center.',

  'site.incubator': 'Accelerated at the UC Anacleto Angelini Innovation Center',
  'site.acceleratedAt': 'Accelerated at',
  'site.awards': 'Jump Chile 2023 · Brain Chile 2024 · HUC Social Ideas Challenge 2024',
  'site.copyright': '© 2026 JAPS Engineering. All rights reserved.',
  'site.dataNotice': 'See how we handle your data in our privacy policy.',
  'site.base': 'UC Anacleto Angelini Innovation Center · Santiago, Chile',

  'industries.view': 'View {name}',
  'industries.viewSolutions': 'See solutions',
  'industries.viewSolutionsFor': 'See solutions for {name}',
  'industries.others': 'Other industries',
  'industries.all': 'See all industries →',
  'industries.more': '+{n} more',
  'industries.notListed': 'Is your industry not on the list?',
  'industries.notListedText': "Let's talk anyway: the method is the same, and the domain is quick to learn.",
  'industries.talk': "Let's talk",
  'industries.schedule': 'Book a meeting',
  'industries.whatWeDo': 'See what we do',

  'team.viewProfile': 'View profile',
  'team.viewProfileArrow': 'View profile →',
  'team.viewProfileOf': "View {name}'s profile",
  'team.founder': 'Founder',
  'team.advisor': 'Advisor',
  'team.eyebrow': 'JAPS team',
  'team.write': 'Send an email',
  'team.seeTeam': 'Meet the team',
  'team.linkedinOf': '{name} on LinkedIn',
  'team.photo': 'Profile photo',
  'team.photoPlaceholder': 'Photo',

  'cta.title': 'Shall we talk about your challenge?',
  'cta.text': "Book a meeting and let's look together at where technology can move the numbers of your operation.",
  'cta.label': 'Contact us',
  'draft.label': 'Draft',
  'draft.text': 'Preliminary content, to be validated before publishing.',

  'product.view': 'View solution',
  'product.learn': 'Discover {name}',
  'product.demo': 'Request a demo',

  'howHelp.title': 'How can we help?',
  'howHelp.lead': 'We walk the whole road with you: we understand your process, build your solution and leave it talking to the rest of your operation.',
  'howHelp.link': 'Explore our services →',
  'howHelp.tablist': 'How we help, by stage',
  'howHelp.ctaTitle': 'Free 30-minute assessment',
  'howHelp.ctaButton': 'Book an assessment',
  'howHelp.whatsapp': 'Message us on WhatsApp',
  'howHelp.deliverables': 'What you get',

  'legal.updated': 'Last updated:',
  'legal.effective': 'Effective since:',
  'legal.version': 'Version {v}',
  'legal.draft': 'Draft pending legal review. This is not yet the final text.',
  'legal.toc': 'Contents',

  'a11y.loading': 'Loading JAPS',
  'a11y.whatsapp': 'WhatsApp',

  'form.firstName': 'First name',
  'form.firstNamePh': 'Your first name',
  'form.lastName': 'Last name',
  'form.lastNamePh': 'Your last name',
  'form.company': 'Company (optional)',
  'form.companyPh': 'Your company name',
  'form.jobTitle': 'Job title (optional)',
  'form.jobTitlePh': 'Your job title',
  'form.email': 'Email',
  'form.emailOptional': 'Email (optional)',
  'form.emailPh': 'name@company.com',
  'form.phone': 'Phone (optional)',
  'form.phonePh': '+56 9 …',
  'form.noteConsenty': 'Consenty will verify your email before sending. If you leave it blank here, it will ask for it along with your national ID (RUT).',
  'form.noteContact': 'Enter at least one way to reach you: email or phone.',
  'form.industry': 'Industry (optional)',
  'form.industryPh': 'Select an industry',
  'form.reason': 'Reason',
  'form.reasonPh': 'Select a reason',
  'form.message': 'Message or challenge',
  'form.messagePh': 'Tell us briefly about your challenge',
  'form.consentPre': 'I agree to the processing of my personal data to answer this request, in accordance with the',
  'form.consentLink': 'privacy policy',
  'form.consentPost': '.',
  'form.consentyWidget': 'Verification and privacy preferences with Consenty.',
  'form.consentyNote1': 'Please read our',
  'form.consentyNote2': "before sending. Don't include sensitive data or third-party data without authorization. If you'd rather not use Consenty or have trouble with the form, email us at",
  'form.website': 'Website',
  'form.submit': 'Send message',
  'form.noscript': 'You need JavaScript enabled to verify and send the form.',
  'form.msg.sdkUnavailable': 'Consenty is not available. Please try again.',
  'form.msg.sdkInit': 'Consenty could not be started.',
  'form.msg.sdkLoad': 'Consenty could not be loaded.',
  'form.msg.sdkRetry': 'Consenty is not available. You can retry when sending.',
  'form.msg.contactMethod': 'Enter at least an email or a phone number.',
  'form.msg.notConfigured': 'The form is not configured yet. Email us at contacto@japs.ing.',
  'form.msg.security': 'Complete the security check before sending.',
  'form.msg.sending': 'Sending…',
  'form.msg.sendingStatus': 'Sending your message…',
  'form.msg.changed': 'The form changed. Review the details and send again.',
  'form.msg.verifyFailed': "We couldn't complete the security check. Please try again.",
  'form.msg.reviewData': 'Review the details you entered and try again.',
  'form.msg.saveFailed': "We couldn't save your message. Please try again in a few minutes.",
  'form.msg.success': "Thank you. We received your message and we'll reply within one business day.",
  'form.msg.sendFailed': "We couldn't send your message. Please try again.",
} as const satisfies Record<UIKey, string>;

export const ui: Record<Lang, Record<UIKey, string>> = { es, en };

export type Translate = (key: UIKey, vars?: Record<string, string | number>) => string;

/** `t('industries.view', { name })` → "Ver minería". */
export function useTranslations(lang: Lang): Translate {
  return (key, vars) => {
    const text: string = ui[lang][key];
    return vars ? text.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? '')) : text;
  };
}
