'use client';

import { useEffect, useRef } from 'react';

/**
 * Autoplaying, muted, looping background video with a poster fallback.
 * Pauses (holds on the poster) when the visitor asks their OS to reduce motion.
 */
export default function BgVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current?.pause();
    }
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
