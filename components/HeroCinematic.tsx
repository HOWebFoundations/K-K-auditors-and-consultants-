'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IconArrow } from './icons';

type CTA = { label: string; href: string };

/**
 * Full-bleed cinematic hero: a looping Beirut skyline clip behind the headline,
 * with scroll-linked parallax on the footage and a gentle fade on the content.
 * Fully progressive — the poster still paints instantly and is the fallback for
 * browsers that can't (or shouldn't, per reduced-motion) play the video.
 */
export default function HeroCinematic({
  eyebrow,
  title,
  subtitle,
  badges,
  primary,
  secondary,
  poster,
  video,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  primary: CTA;
  secondary: CTA;
  poster: string;
  video?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = rootRef.current;
    const media = mediaRef.current;
    const inner = innerRef.current;
    const vid = videoRef.current;

    if (reduce) {
      // Respect the setting: hold on the still, no drift, no autoplay.
      vid?.pause();
      return;
    }

    if (!root || !media) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y > vh) return; // stop working once scrolled past the hero
        // Footage drifts and slowly pushes in; content moves at a different
        // rate and fades — a layered, cinematic parallax.
        const scale = (1.08 + Math.min(y, vh) * 0.00024).toFixed(3);
        media.style.transform = `translate3d(0, ${(y * 0.34).toFixed(1)}px, 0) scale(${scale})`;
        if (inner) inner.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0)`;
        root.style.setProperty('--hero-fade', String(Math.max(0, 1 - y / 520)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero-cine" ref={rootRef}>
      <div className="hero-cine-media" ref={mediaRef} aria-hidden>
        {video ? (
          <video
            ref={videoRef}
            className="hero-cine-video"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" />
        )}
      </div>
      <div className="hero-cine-scrim" aria-hidden />

      <div className="container hero-cine-inner" ref={innerRef}>
        {eyebrow ? <div className="eyebrow light">{eyebrow}</div> : null}
        <h1 className="display hero-cine-title">{title}</h1>
        <p className="lead hero-cine-lead">{subtitle}</p>
        <div className="btn-row mt-3 hero-cine-actions">
          <Link className="btn btn-primary btn-lg" href={primary.href}>
            {primary.label}
            <IconArrow className="arrow" />
          </Link>
          <Link className="btn btn-ghost-light btn-lg" href={secondary.href}>
            {secondary.label}
            <IconArrow className="arrow" />
          </Link>
        </div>
        <div className="flex wrap gap-sm mt-4 hero-cine-chips">
          {badges.map((b) => (
            <span className="chip chip-light" key={b}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
