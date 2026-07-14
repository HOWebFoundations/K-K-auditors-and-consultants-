'use client';

import { FormEvent, useState } from 'react';
import { ContactDict } from '@/content/types';
import { IconArrow } from './icons';

export default function ContactForm({
  labels,
  services,
  privacyNote,
  successTitle,
  successBody,
  errorMsg,
}: {
  labels: ContactDict['labels'];
  services: { slug: string; title: string }[];
  privacyNote: string;
  successTitle: string;
  successBody: string;
  errorMsg: string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('err');
    }
  }

  if (status === 'ok') {
    return (
      <div className="form-status ok" role="status">
        <strong>{successTitle}</strong>
        <div>{successBody}</div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === 'err' && (
        <div className="form-status err" role="alert">
          {errorMsg}
        </div>
      )}
      <div className="grid grid-2" style={{ gap: 0, columnGap: 18 }}>
        <div className="field">
          <label htmlFor="name">
            {labels.name} <span className="muted">({labels.required})</span>
          </label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">
            {labels.email} <span className="muted">({labels.required})</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">{labels.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="company">{labels.company}</label>
          <input id="company" name="company" autoComplete="organization" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">{labels.service}</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            {labels.selectService}
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">
          {labels.message} <span className="muted">({labels.required})</span>
        </label>
        <textarea id="message" name="message" required />
      </div>
      <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? labels.sending : labels.send}
        <IconArrow className="arrow" />
      </button>
      <p className="form-note mt-1">{privacyNote}</p>
    </form>
  );
}
