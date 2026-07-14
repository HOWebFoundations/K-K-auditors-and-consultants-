import { CSSProperties } from 'react';

/**
 * K&K logo — reproduced entirely as CODE, not a raster image:
 *  - the chevron "K‹‹" monogram is an inline SVG (vector paths), and
 *  - the wordmark is real, selectable HTML text.
 * This keeps the logo crisp at any size, translatable, and free of any
 * copied photo/PNG of the original artwork.
 */

export function LogoMark({
  className,
  style,
  title = 'K&K',
}: {
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 104"
      role="img"
      aria-label={title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical bar (shared stem) with chamfered corners */}
      <polygon points="8,14 17,6 26,6 26,98 17,98 8,90" />
      {/* Chevron 1 (‹) near the bar */}
      <polygon points="74,8 30,52 74,96 74,78 48,52 74,26" />
      {/* Chevron 2 (‹) offset outward */}
      <polygon points="108,8 64,52 108,96 108,78 82,52 108,26" />
    </svg>
  );
}

export default function Logo({
  onNavy = false,
  showWord = true,
  ariaLabel = 'K&K Auditors & Consultants',
}: {
  onNavy?: boolean;
  showWord?: boolean;
  ariaLabel?: string;
}) {
  return (
    <span className={`logo${onNavy ? ' on-navy' : ''}`} aria-label={ariaLabel}>
      <LogoMark className="logo-mark" />
      {showWord && (
        <span className="logo-word">
          <span className="l1">K&amp;K | Auditors &amp; Consultants</span>
          <span className="l2">Civil Co.</span>
        </span>
      )}
    </span>
  );
}
