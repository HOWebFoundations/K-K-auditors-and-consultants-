'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a numeric stat up from 0 to its value when scrolled into view.
 * SSR renders the final value (SEO / no-JS safe); the animation only runs
 * client-side, and is skipped for reduced-motion users.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
    if (!m) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const prefix = m[1];
    const target = parseInt(m[2].replace(/,/g, ''), 10);
    const suffix = m[3];
    // Only group with thousands separators if the source did (so a year like
    // "2012" never renders as "2,012").
    const grouped = m[2].includes(',');
    const fmt = (n: number) => (grouped ? n.toLocaleString() : String(n));
    let done = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !done) {
            done = true;
            const dur = 1300;
            let startTs = 0;
            const step = (ts: number) => {
              if (!startTs) startTs = ts;
              const t = Math.min(1, (ts - startTs) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(`${prefix}${fmt(Math.round(target * eased))}${suffix}`);
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
