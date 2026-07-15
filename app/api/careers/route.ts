import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

const MAX_BYTES = 4 * 1024 * 1024; // 4 MB (stays under Vercel's request limit)
const ALLOWED_EXT = /\.(pdf|docx?|rtf|odt)$/i;
const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/rtf',
  'application/vnd.oasis.opendocument.text',
];

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_form' }, { status: 400 });
  }

  const name = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim();
  const phone = String(form.get('phone') || '').trim();
  const area = String(form.get('area') || '').trim();
  const message = String(form.get('message') || '').trim();
  const cv = form.get('cv');

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  // Validate the CV attachment (if provided)
  let attachment: { filename: string; content: string } | null = null;
  if (cv && cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_BYTES) {
      return NextResponse.json({ ok: false, error: 'file_too_large' }, { status: 413 });
    }
    const okType = ALLOWED_MIME.includes(cv.type) || ALLOWED_EXT.test(cv.name || '');
    if (!okType) {
      return NextResponse.json({ ok: false, error: 'file_type' }, { status: 415 });
    }
    const buf = Buffer.from(await cv.arrayBuffer());
    attachment = { filename: cv.name || 'cv', content: buf.toString('base64') };
  }

  // Dedicated careers inbox (falls back to the constant if the env var is unset)
  const to = process.env.CAREERS_TO || site.careersEmail;
  const from = process.env.CONTACT_FROM || 'K&K Careers <onboarding@resend.dev>';
  const resendKey = process.env.RESEND_API_KEY;

  const subject = `New career application: ${name}${area ? ` (${area})` : ''}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Area of interest: ${area || '-'}`,
    `CV attached: ${attachment ? attachment.filename : 'no'}`,
    '',
    message,
  ].join('\n');

  if (resendKey) {
    try {
      const payload: Record<string, unknown> = { from, to, reply_to: email, subject, text };
      if (attachment) payload.attachments = [attachment];
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        // Log but still confirm to the applicant.
        console.error('Resend careers error', await res.text());
      }
    } catch (err) {
      console.error('Careers send error', err);
    }
  } else {
    // eslint-disable-next-line no-console
    console.log('[careers] application received (no email provider configured):', {
      name,
      email,
      phone,
      area,
      cv: attachment?.filename ?? null,
    });
  }

  return NextResponse.json({ ok: true });
}
