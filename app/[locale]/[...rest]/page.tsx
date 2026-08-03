import { notFound } from 'next/navigation';

/**
 * Catch-all for any URL under /{locale}/ that matches no real route. Without
 * this, unmatched paths fall through to Next's generic 404 instead of our
 * branded [locale]/not-found page (which renders inside the site layout).
 */
export default function CatchAll(): never {
  notFound();
}
