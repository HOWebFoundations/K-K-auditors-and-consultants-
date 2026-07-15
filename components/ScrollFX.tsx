'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll effects engine, driven by one shared rAF-throttled listener:
 *  - a top scroll-progress bar (#scroll-progress-bar) that fills as you scroll;
 *  - parallax on any element carrying `data-parallax="0.2"` (the number is the
 *    strength) — full-bleed background layers that drift against the scroll.
 * Re-scans on route change so client-side navigations pick up the new layers.
 * The progress bar always runs; parallax is disabled under prefers-reduced-motion.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const bar = document.getElementById('scroll-progress-bar');
    const els = reduce
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;

      // Progress bar
      if (bar) {
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        bar.style.transform = `scaleX(${p.toFixed(4)})`;
      }

      // Parallax layers
      if (els.length) {
        const vh = window.innerHeight;
        for (const el of els) {
          const speed = parseFloat(el.dataset.parallax || '0.15');
          const r = el.getBoundingClientRect();
          if (r.bottom < -120 || r.top > vh + 120) continue; // skip offscreen
          const off = (r.top + r.height / 2 - vh / 2) / vh; // ~ -1..1
          el.style.transform = `translate3d(0, ${(-off * speed * 100).toFixed(
            2,
          )}px, 0) scale(${(1 + speed).toFixed(3)})`;
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
