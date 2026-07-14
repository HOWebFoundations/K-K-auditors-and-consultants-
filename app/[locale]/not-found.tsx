import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';

export default function NotFound() {
  const d = getDictionary(defaultLocale);
  return (
    <section className="section">
      <div className="container center" style={{ paddingBlock: 60 }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>404</div>
        <h1 className="display">Page not found</h1>
        <p className="lead maxw-center">
          The page you are looking for doesn’t exist or has moved.
        </p>
        <Link className="btn btn-primary btn-lg mt-3" href={href(defaultLocale)}>
          {d.common.home}
        </Link>
      </div>
    </section>
  );
}
