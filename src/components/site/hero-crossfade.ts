/**
 * Crossfade of a PageHero's photograph (one static slide) to another image.
 *
 * A clone of the slide sits on top with opacity 0; `show(image)` decodes the
 * image, fades the clone in and then commits it to the slide underneath. A
 * newer request supersedes one still loading, and with prefers-reduced-motion
 * the photograph swaps without the fade. Same technique as the /industrias
 * hero (IndustryIndex.astro).
 */
export interface HeroImage {
  src: string;
  /** CSS background-position for this photograph. */
  position?: string;
}

export function heroCrossfade(slide: HTMLElement, initial: HeroImage) {
  const incoming = slide.cloneNode(false) as HTMLElement;
  incoming.style.opacity = '0';
  incoming.style.backgroundImage = '';
  slide.after(incoming);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = initial.src;
  let queued: HeroImage = initial;
  let transitioning = false;
  let animation: Animation | undefined;

  const paint = (el: HTMLElement, image: HeroImage) => {
    el.style.backgroundImage = `url(${JSON.stringify(image.src)})`;
    el.style.backgroundPosition = image.position ?? '';
  };

  const run = async (): Promise<void> => {
    if (transitioning || queued.src === active) return;
    const image = queued;
    transitioning = true;
    try {
      const asset = new Image();
      asset.src = image.src;
      await asset.decode();
      if (queued.src !== image.src) return;
      if (!reducedMotion.matches) {
        paint(incoming, image);
        animation = incoming.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 450,
          easing: 'ease-in-out',
          fill: 'forwards',
        });
        await animation.finished;
      }
      paint(slide, image);
      active = image.src;
    } catch {
      // Keep the current photograph if the next one cannot be loaded.
    } finally {
      animation?.cancel();
      animation = undefined;
      incoming.style.backgroundImage = '';
      transitioning = false;
      if (queued.src !== active) void run();
    }
  };

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) animation?.finish();
  });

  return {
    show(image: HeroImage) {
      queued = image;
      void run();
    },
  };
}
