'use client';

import { FormEvent, useState } from 'react';
import { ContactDict, CareersDict } from '@/content/types';
import { IconArrow } from './icons';

export default function ApplicationForm({
  labels,
  careersForm,
  areas,
  errorMsg,
}: {
  labels: ContactDict['labels'];
  careersForm: CareersDict['form'];
  areas: string[];
  errorMsg: string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.service = `Careers application${data.area ? ` — ${data.area}` : ''}`;
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
        <strong>{careersForm.successTitle}</strong>
        <div>{careersForm.successBody}</div>
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
          <label htmlFor="area">{careersForm.position}</label>
          <select id="area" name="area" defaultValue="">
            <option value="" disabled>
              {careersForm.selectArea}
            </option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
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
      <p className="form-note mt-1">{careersForm.cvNote}</p>
    </form>
  );
}
