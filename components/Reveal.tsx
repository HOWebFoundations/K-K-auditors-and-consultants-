'use client';

import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

/**
 * Scroll-reveal wrapper. Adds `is-visible` when the element scrolls into
 * view (once). Pair with the `.reveal` / `.reveal-stagger` CSS.
 * Respects prefers-reduced-motion via the CSS.
 */
export default function Reveal({
  children,
  className = '',
  stagger = false,
  style,
  id,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = stagger ? 'reveal-stagger' : 'reveal';
  return (
    <div
      ref={ref}
      id={id}
      style={style}
      className={`${base}${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
}
