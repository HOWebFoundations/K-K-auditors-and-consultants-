'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { ContactDict, CareersDict } from '@/content/types';
import { IconArrow, IconMail } from './icons';

const MAX_BYTES = 4 * 1024 * 1024;
const EXT = /\.(pdf|docx?|rtf|odt)$/i;

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
  const [fileName, setFileName] = useState('');
  const [fileErr, setFileErr] = useState('');

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    setFileErr('');
    const f = e.target.files?.[0];
    if (!f) {
      setFileName('');
      return;
    }
    if (f.size > MAX_BYTES || !EXT.test(f.name)) {
      setFileErr(careersForm.fileError);
      setFileName('');
      e.target.value = '';
      return;
    }
    setFileName(f.name);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (fileErr) return;
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch('/api/careers', { method: 'POST', body: new FormData(form) });
      if (!res.ok) {
        if (res.status === 413 || res.status === 415) {
          setStatus('idle');
          setFileErr(careersForm.fileError);
          return;
        }
        throw new Error('bad status');
      }
      setStatus('ok');
      form.reset();
      setFileName('');
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

      {/* CV upload */}
      <div className="field">
        <label htmlFor="cv">{careersForm.cvLabel}</label>
        <div className="file-input">
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx,.rtf,.odt"
            onChange={onFile}
          />
          <label htmlFor="cv" className="file-btn">
            <IconMail width={17} height={17} />
            {careersForm.cvChoose}
          </label>
          <span className="file-name">{fileName || careersForm.cvHint}</span>
        </div>
        {fileErr && (
          <span className="form-status err" style={{ marginTop: 8, padding: '9px 13px', display: 'block' }}>
            {fileErr}
          </span>
        )}
      </div>

      <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? labels.sending : labels.send}
        <IconArrow className="arrow" />
      </button>
      <p className="form-note mt-1">{careersForm.cvNote}</p>
    </form>
  );
}
