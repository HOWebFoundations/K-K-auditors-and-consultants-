'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Autoplaying, muted, looping background video with a poster fallback.
 *
 * The poster image is always painted. The video is layered on top but stays
 * hidden until it is genuinely playing. If autoplay is blocked (iOS Low Power
 * Mode, reduced-motion, data saver, etc.) the video never appears, so the
 * browser never draws its native play button, and the poster simply shows.
 * The video is also non-interactive, so it can never be tapped to reveal
 * controls.
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
  const [videoOn, setVideoOn] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
      return;
    }
    const p = v.play();
    if (p && typeof p.then === 'function') {
      p.then(() => setVideoOn(true)).catch(() => setVideoOn(false));
    }
  }, []);

  return (
    <>
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="bg-video-poster" aria-hidden />
      ) : null}
      <video
        ref={ref}
        className={`bg-video${videoOn ? ' is-on' : ''}${className ? ` ${className}` : ''}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
        disablePictureInPicture
        onPlaying={() => setVideoOn(true)}
        onTimeUpdate={() => setVideoOn(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
