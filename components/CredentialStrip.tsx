import Reveal from './Reveal';

// Real memberships & standards — brand facts, language-neutral acronyms.
const CREDENTIALS = ['LACPA', 'GMN International', 'IFRS', 'ISA', 'CMA', 'ACCA', 'AOCPA'];

export default function CredentialStrip({ caption }: { caption: string }) {
  return (
    <section className="cred-strip section-tight">
      <div className="container">
        <Reveal>
          <p className="cap">{caption}</p>
          <div className="cred-row">
            {CREDENTIALS.flatMap((c, i) =>
              i === 0
                ? [
                    <span className="c" key={c}>
                      {c}
                    </span>,
                  ]
                : [
                    <span className="sep" key={`${c}-s`} aria-hidden>
                      ·
                    </span>,
                    <span className="c" key={c}>
                      {c}
                    </span>,
                  ],
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
