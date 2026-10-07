/** One scheduler for all visible industry chips; watermarks are always still. */
export function initIndustryMarks() {
  const marks = [...document.querySelectorAll<SVGSVGElement>('[data-industry-motion]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const events = new AbortController();
  const visible = new Set<SVGSVGElement>();
  const running = new Map<SVGSVGElement, number>();
  let timer: number | undefined;
  let last: SVGSVGElement | undefined;

  const isVisible = (mark: SVGSVGElement) => {
    const rect = mark.getBoundingClientRect();
    return mark.getClientRects().length > 0 && rect.width > 0 && rect.height > 0 &&
      rect.bottom > 0 && rect.top < window.innerHeight &&
      rect.right > 0 && rect.left < window.innerWidth;
  };
  const stop = (mark: SVGSVGElement) => {
    window.clearTimeout(running.get(mark));
    running.delete(mark);
    mark.removeAttribute('data-playing');
  };
  const play = (mark: SVGSVGElement) => {
    if (reduced.matches || document.hidden || running.has(mark) || !isVisible(mark)) return;
    mark.setAttribute('data-playing', '');
    last = mark;
    running.set(mark, window.setTimeout(() => stop(mark), 1600));
  };
  const schedule = () => {
    window.clearTimeout(timer);
    if (reduced.matches || document.hidden || !visible.size) return;
    timer = window.setTimeout(() => {
      const candidates = marks.filter(mark => visible.has(mark) && isVisible(mark));
      // An interaction takes precedence over an occasional gesture.
      if (!running.size && candidates.length) {
        const previous = candidates.indexOf(last!);
        play(candidates[(previous + 1) % candidates.length]);
      }
      schedule();
    }, 12000 + Math.random() * 6000);
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const mark = entry.target as SVGSVGElement;
      if (entry.isIntersecting && isVisible(mark)) visible.add(mark);
      else {
        visible.delete(mark);
        stop(mark);
      }
    }
    schedule();
  });
  for (const mark of marks) {
    observer.observe(mark);
    const control = mark.closest<HTMLElement>('.ind-acc__panel, .ind-item__head, .ind-other');
    if (!control) continue;
    control.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' || event.pointerType === 'pen') play(mark);
    }, { signal: events.signal });
    control.addEventListener('focus', () => play(mark), { signal: events.signal });
    control.addEventListener('click', () => {
      // Read the accordion state after its own click handler has run.
      queueMicrotask(() => {
        if (!events.signal.aborted && control.getAttribute('aria-expanded') === 'true') play(mark);
      });
    }, { signal: events.signal });
  }
  const refresh = () => {
    if (reduced.matches || document.hidden) [...running.keys()].forEach(stop);
    schedule();
  };
  reduced.addEventListener('change', refresh, { signal: events.signal });
  document.addEventListener('visibilitychange', refresh, { signal: events.signal });
  return () => {
    events.abort();
    observer.disconnect();
    window.clearTimeout(timer);
    [...running.keys()].forEach(stop);
  };
}
