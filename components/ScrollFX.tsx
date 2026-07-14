'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Lightweight scroll-parallax engine. Any element carrying `data-parallax="0.2"`
 * drifts against the scroll (the number is the strength). One shared rAF-throttled
 * listener drives every registered layer, and it re-scans on route change so
 * client-side navigations pick up the new page's layers. Disabled entirely under
 * prefers-reduced-motion. Targets should be full-bleed background layers whose
 * content is slightly over-scaled, so the drift never exposes an edge.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]'),
    );
    if (!els.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const speed = parseFloat(el.dataset.parallax || '0.15');
        const r = el.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) continue; // skip offscreen
        const off = (r.top + r.height / 2 - vh / 2) / vh; // ~ -1..1
        el.style.transform = `translate3d(0, ${(-off * speed * 100).toFixed(
          2,
        )}px, 0) scale(${(1 + speed).toFixed(3)})`;
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
