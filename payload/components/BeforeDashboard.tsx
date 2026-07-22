import React from 'react';

/**
 * A plain-language welcome + how-to panel shown at the top of the dashboard, so
 * a non-technical partner (Elie/Jihad) understands what everything is and how to
 * edit it. Server component — no interactivity, themed with Payload's CSS vars.
 */
export const BeforeDashboard: React.FC = () => {
  const card: React.CSSProperties = {
    border: '1px solid var(--theme-elevation-100)',
    background: 'var(--theme-elevation-50)',
    borderRadius: 8,
    padding: '20px 24px',
    marginBottom: 28,
    lineHeight: 1.6,
  };
  const h: React.CSSProperties = { margin: '0 0 6px', fontSize: '1.35rem' };
  const p: React.CSSProperties = { margin: '0 0 12px', maxWidth: 760 };
  const li: React.CSSProperties = { marginBottom: 6 };
  const tag: React.CSSProperties = {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 5,
    background: 'var(--theme-elevation-150)',
    fontWeight: 600,
    marginRight: 6,
  };

  return (
    <div style={card}>
      <h2 style={h}>Welcome to the K&amp;K Content Manager</h2>
      <p style={p}>
        Everything your website says and shows — in <strong>English, Arabic and French</strong> —
        you can edit right here. You can’t break the design or the layout; you’re only changing the
        words and pictures.
      </p>

      <p style={{ ...p, marginBottom: 6 }}>
        <strong>What’s where:</strong>
      </p>
      <ul style={{ marginTop: 0, maxWidth: 760 }}>
        <li style={li}>
          <span style={tag}>Website Content</span> your Insights (news &amp; circular briefings),
          Services, Industries, Sectors, Resources and Leadership.
        </li>
        <li style={li}>
          <span style={tag}>Global Settings</span> your contact details &amp; footer (Site
          settings), the Home page, and the top-menu wording (Navigation).
        </li>
      </ul>

      <p style={{ ...p, marginBottom: 6 }}>
        <strong>Three things to remember:</strong>
      </p>
      <ol style={{ marginTop: 0, maxWidth: 760 }}>
        <li style={li}>
          <strong>Other languages:</strong> use the <em>Locale</em> dropdown at the top-right
          (English / العربية / Français) to switch what language you’re editing. Anything you leave
          blank in Arabic or French simply shows the English until you fill it in.
        </li>
        <li style={li}>
          <strong>To go live:</strong> click <em>Publish changes</em>. Prefer to finish later? Use{' '}
          <em>Save Draft</em> — it stays private until you publish.
        </li>
        <li style={li}>
          <strong>Every change is versioned</strong>, so nothing is ever truly lost — you can always
          roll back.
        </li>
      </ol>
    </div>
  );
};

export default BeforeDashboard;
