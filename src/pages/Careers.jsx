import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const CAREERS_EMAIL = 'amitava@ressia.in';
const CV_MAILTO = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Application — CV Submission')}`;

const CHECK_ICON = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
    title: 'Be Part of the Journey',
    text: 'As a growing company, every individual makes a difference. Your ideas, decisions, and contributions can directly influence our products, processes, and growth.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 22V4" />
        <path d="M4 4h14l-3 4 3 4H4" />
      </svg>
    ),
    title: 'A Culture of Ownership',
    text: 'We value people who take initiative, challenge conventional thinking, and take ownership of their work. Here, you don’t just execute tasks — you help shape the way we grow.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
    title: 'Meaningful Work',
    text: 'Pharmaceuticals are ultimately about people. Whether you work in R&D, manufacturing, quality, regulatory affairs, sales, technology, finance, or operations, your work contributes to something that matters.',
  },
];

const TRAITS = [
  'Passionate about healthcare and pharmaceuticals',
  'Curious, agile, and willing to learn',
  'Comfortable working in a fast-paced environment',
  'Driven by ownership and accountability',
  'Focused on quality, integrity, and doing the right thing',
];

export default function Careers() {
  const [introRef, introIn] = useReveal();
  const [reasonsRef, reasonsIn] = useReveal();
  const [traitsRef, traitsIn] = useReveal();

  useDocumentMeta(
    'Careers — Ressia Healthcare',
    'Build your career at Ressia Healthcare. We’re looking for talented, curious, and driven people to join a growing pharmaceutical company making an impact in critical care.'
  );

  return (
    <>
      <PageHead eyebrow="Join us" title="Careers" lead="Build your career. Make an impact." />
      <SectionDivider variant="on-dark" />

      <section ref={introRef} className={`section flush reveal${introIn ? ' in' : ''}`}>
        <div className="wrap">
          <div className="about-intro">
            <p>At Ressia Healthcare, we believe that great healthcare begins with great people.</p>
            <p>
              We are a growing pharmaceutical company driven by a simple purpose — to make quality, accessible,
              and innovative healthcare solutions available to more people. As we build and expand, we are looking
              for talented, curious, and driven individuals who want to be part of something bigger than a job.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section ref={reasonsRef} className={`section dotted flush reveal${reasonsIn ? ' in' : ''}`}>
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Why join us</p>
          <h2 style={{ textAlign: 'center', marginBottom: 40 }}>Why Join Us?</h2>

          <div className="reasons-grid">
            {REASONS.map((r) => (
              <div className="reason-card" key={r.title}>
                <span className="class-icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={traitsRef} className={`section reveal${traitsIn ? ' in' : ''}`}>
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Who we're looking for</p>
          <h2 style={{ textAlign: 'center', marginBottom: 12 }}>Who Are We Looking For?</h2>
          <p style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 32px', color: 'var(--ink-soft)', fontSize: 15.5 }}>
            We are looking for individuals who are:
          </p>

          <div className="trait-grid">
            {TRAITS.map((t) => (
              <div className="trait-item" key={t}>
                {CHECK_ICON}
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="section flush">
        <div className="wrap">
          <div className="contact-form" style={{ textAlign: 'center' }}>
            <h3>Your growth matters to us</h3>
            <p>
              If you are looking for a place where your work is visible, your ideas are valued, and your growth
              can keep pace with the company’s, we’d love to hear from you. Write to us or send your CV and we
              shall reach out to you.
            </p>
            <a className="btn btn-primary" href={CV_MAILTO}>Send Your CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
