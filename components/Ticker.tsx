/**
 * Continuously-scrolling brand ticker. The track holds four identical copies of
 * the item run and translates by -50% — an exact two-segment period — so the
 * loop is seamless and the strip stays covered even on ultra-wide viewports.
 * Screen readers get one plain-text copy via aria-label; the moving copies are
 * hidden from the accessibility tree. Pauses on hover, on keyboard focus
 * (the strip is focusable, satisfying WCAG 2.2.2) and under reduced motion.
 */
export default function Ticker({ items }: { items: string[] }) {
  const seg = (key: number) => (
    <div className="ticker-seg" key={key}>
      {items.map((it, i) => (
        <span className="t" key={`${key}-${i}`}>
          {it}
          <span className="tsep" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="img" aria-label={items.join(' · ')} tabIndex={0}>
      <div className="ticker-track" aria-hidden>
        {seg(0)}
        {seg(1)}
        {seg(2)}
        {seg(3)}
      </div>
    </div>
  );
}
