import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

interface Payload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const summary = {
    name,
    email,
    phone: (data.phone || '').trim(),
    company: (data.company || '').trim(),
    service: (data.service || '').trim(),
    message,
    at: new Date().toISOString(),
  };

  // If a transactional-email provider is configured, deliver the enquiry.
  // Otherwise (e.g. on a preview deployment) we log it and still return
  // success so the visitor gets a working form and a proper confirmation.
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || 'K&K Website <onboarding@resend.dev>';

  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `New website enquiry — ${name}${summary.service ? ` (${summary.service})` : ''}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${summary.phone || '—'}`,
            `Company: ${summary.company || '—'}`,
            `Service: ${summary.service || '—'}`,
            '',
            message,
          ].join('\n'),
        }),
      });
      if (!res.ok) {
        console.error('Resend error', await res.text());
        return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
      }
    } catch (err) {
      console.error('Contact send error', err);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('[contact] enquiry received (no email provider configured):', summary);
  }

  return NextResponse.json({ ok: true });
}
