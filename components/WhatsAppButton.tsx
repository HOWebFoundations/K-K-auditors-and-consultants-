import { whatsappLink } from '@/lib/site';
import { IconWhatsApp } from './icons';

export default function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <IconWhatsApp />
    </a>
  );
}
