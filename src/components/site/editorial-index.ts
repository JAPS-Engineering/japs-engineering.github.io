/** Editorial index shared by "¿Cómo te ayudamos?" (HowWeHelp) and the home
 *  industries (IndustryIndex). Desktop: each big row links out, and hovering
 *  or focusing it previews its card on the right. Mobile: the same rows as an
 *  accordion that unfolds the card under its row. Roots carry
 *  [data-editorial-index] and are bound once, so every component using the
 *  pattern can call this without stacking listeners. */
const PLAY_MS = 1300;

/** Fired on a card each time it is shown, so its glyphs can join in. */
export const PLAY_EVENT = 'editorial-index:play';

// The card plays its hover pose once via [data-play], so the change reads
// even without the cursor on it.
const play = (card: HTMLElement, timers: WeakMap<HTMLElement, number>) => {
  card.setAttribute('data-play', '');
  card.dispatchEvent(new CustomEvent(PLAY_EVENT));
  window.clearTimeout(timers.get(card));
  timers.set(card, window.setTimeout(() => card.removeAttribute('data-play'), PLAY_MS));
};

function bind(root: HTMLElement) {
  const tabs = Array.from(root.querySelectorAll<HTMLAnchorElement>('.how-help__tabs .how-help__tab'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('.how-help__panels > .how-help__panel'));
  const items = Array.from(root.querySelectorAll<HTMLElement>('.how-help-acc__item'));
  const ctaSubs = Array.from(root.querySelectorAll<HTMLElement>('.how-help__cta-sub[data-index]'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = new WeakMap<HTMLElement, number>();

  // Per-row CTA subtitles (HowWeHelp) follow the row being shown.
  const pointCta = (index?: string) =>
    ctaSubs.forEach((sub) => {
      sub.hidden = sub.dataset.index !== index;
    });

  const preview = (tab: HTMLAnchorElement) => {
    if (tab.hasAttribute('aria-current')) return;
    const index = tab.dataset.index;
    tabs.forEach((t) => {
      if (t === tab) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
    panels.forEach((panel) => {
      const on = panel.dataset.index === index;
      panel.hidden = !on;
      if (on) play(panel, timers);
      else panel.removeAttribute('data-play');
    });
    pointCta(index);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('mouseenter', () => preview(tab));
    tab.addEventListener('focus', () => preview(tab));
  });

  // Mobile accordion: one card open at a time; tapping the open row folds it.
  const setOpen = (item: HTMLElement, open: boolean) => {
    item.toggleAttribute('data-open', open);
    item.querySelector('.how-help-acc__head')?.setAttribute('aria-expanded', String(open));
    const body = item.querySelector<HTMLElement>('.how-help-acc__body');
    if (body) body.inert = !open;
    const card = item.querySelector<HTMLElement>('.how-help__panel');
    if (!card) return;
    if (open) play(card, timers);
    else card.removeAttribute('data-play');
  };

  items.forEach((item) => {
    const head = item.querySelector<HTMLElement>('.how-help-acc__head');
    head?.addEventListener('click', () => {
      const open = !item.hasAttribute('data-open');
      items.forEach((other) => setOpen(other, other === item && open));
      if (!open) return;
      pointCta(item.dataset.index);
      // Folding an item above shortens the page and can push this row up
      // under the sticky nav — bring it back once the bodies settle.
      window.setTimeout(() => {
        if (head.getBoundingClientRect().top < 96) {
          head.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        }
      }, reduce ? 0 : 420);
    });
  });
}

export function initEditorialIndex() {
  document.querySelectorAll<HTMLElement>('[data-editorial-index]').forEach((root) => {
    if (root.dataset.editorialIndexBound) return;
    root.dataset.editorialIndexBound = 'true';
    bind(root);
  });
}
