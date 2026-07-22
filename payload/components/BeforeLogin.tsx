import React from 'react';

/** Friendly, branded note above the login form. */
export const BeforeLogin: React.FC = () => (
  <div style={{ marginBottom: 20, lineHeight: 1.55 }}>
    <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>K&amp;K Content Manager</p>
    <p style={{ margin: '4px 0 0', color: 'var(--theme-elevation-500)' }}>
      Sign in to edit your website’s content in English, Arabic and French.
    </p>
  </div>
);

export default BeforeLogin;
