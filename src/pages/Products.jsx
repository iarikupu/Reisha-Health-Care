import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const CHECK = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

const CLASSES = [
  {
    key: 'carbapenems',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="7" y1="15" x2="17" y2="15" />
      </svg>
    ),
    title: 'Carbapenems',
    text: 'Last-resort antibiotics for multi-drug resistant gram-negative infections in ICU settings.',
    products: [
      {
        name: 'MERORES',
        generic: 'Meropenem',
        tags: ['500mg / 1g', 'IV Injection'],
        highlight: 'Broad-spectrum carbapenem for MDR gram-negative organisms',
        indications: 'Severe hospital-acquired infections, meningitis, febrile neutropenia',
      },
      {
        name: 'MERORES XS',
        generic: 'Meropenem + Sulbactam',
        tags: ['1.5g', 'IV Injection'],
        highlight: 'Carbapenem + sulbactam combination for extensively drug-resistant organisms',
        indications: 'XDR Acinetobacter, carbapenem-resistant gram-negative infections',
      },
      {
        name: 'DORIRES',
        generic: 'Doripenem',
        tags: ['500mg', 'IV Injection'],
        highlight: 'Carbapenem with enhanced activity against Pseudomonas aeruginosa',
        indications: 'Hospital-acquired pneumonia, complicated intra-abdominal infections, complicated UTI',
      },
    ],
  },
  {
    key: 'glycopeptides',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2s7 8.5 7 13a7 7 0 0 1-14 0c0-4.5 7-13 7-13z" />
      </svg>
    ),
    title: 'Glycopeptides',
    text: 'Essential antibiotics for gram-positive infections including MRSA and VRE in critical care.',
    products: [
      {
        name: 'TICORES',
        generic: 'Teicoplanin',
        tags: ['200mg / 400mg', 'IV / IM Injection'],
        highlight: 'Once-daily glycopeptide with better tolerability than vancomycin',
        indications: 'Serious gram-positive infections, MRSA, endocarditis, bone and joint infections',
      },
    ],
  },
  {
    key: 'polymyxins',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      </svg>
    ),
    title: 'Polymyxins',
    text: 'Reserve antibiotics for extensively drug-resistant gram-negative bacteria when all other options fail.',
    products: [
      {
        name: 'POLYRESS',
        generic: 'Polymyxin B',
        tags: ['500,000 IU', 'IV Injection'],
        highlight: 'Preferred polymyxin for systemic use with predictable PK/PD profile',
        indications: 'Carbapenem-resistant Enterobacteriaceae, XDR Acinetobacter, Pseudomonas',
      },
      {
        name: 'COLIRES',
        generic: 'Colistin (Polymyxin E)',
        tags: ['1 / 2 / 3 MIU', 'IV Injection'],
        highlight: 'Last-resort option for pan-resistant gram-negative organisms — available in three strengths',
        indications: 'XDR Acinetobacter, Pseudomonas, Klebsiella infections',
      },
    ],
  },
  {
    key: 'bl-bli',
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Beta-Lactam / Beta-Lactamase Inhibitor Combinations',
    text: 'Combination antibiotics that overcome beta-lactamase resistance mechanisms in critical pathogens.',
    products: [
      {
        name: 'ZAVIRES',
        generic: 'Ceftazidime + Avibactam',
        tags: ['2.5g', 'IV Injection'],
        highlight: 'Novel BL/BLI combination active against KPC and OXA-48 producers',
        indications: 'Carbapenem-resistant Klebsiella, complicated UTI, HAP/VAP',
      },
      {
        name: 'TAZOCEFTA',
        generic: 'Ceftazidime + Tazobactam',
        tags: ['2.25g', 'IV Injection'],
        highlight: 'Broad-spectrum cephalosporin-BLI combination for ICU empiric therapy',
        indications: 'Hospital-acquired pneumonia, complicated intra-abdominal infections, febrile neutropenia',
      },
      {
        name: 'CT-RES',
        generic: 'Cefepime + Tazobactam',
        tags: ['2.25g', 'IV Injection'],
        highlight: 'Fourth-generation cephalosporin with BLI for broad gram-negative coverage',
        indications: 'Febrile neutropenia, hospital-acquired pneumonia, complicated UTI, sepsis',
      },
    ],
  },
];

const TOTAL_PRODUCTS = CLASSES.reduce((sum, cls) => sum + cls.products.length, 0);

export default function Products() {
  const [ref, inView] = useReveal();
  const [ctaRef, ctaIn] = useReveal();
  const [activeFilter, setActiveFilter] = useState('all');

  useDocumentMeta(
    'Products & Pipeline — Ressia Healthcare',
    'A focused portfolio of WHO-GMP certified critical care antibiotics — carbapenems, glycopeptides, polymyxins, and beta-lactam combinations for hospitals across India.'
  );

  const visibleClasses = useMemo(
    () => (activeFilter === 'all' ? CLASSES : CLASSES.filter((cls) => cls.key === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      <PageHead
        eyebrow="Critical care antibiotics"
        title="Products & Pipeline"
        lead="A focused portfolio of critical care antibiotics — each molecule chosen for its clinical relevance, quality assurance, and reliable supply to hospitals across India."
      />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section dotted flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="fact-strip">
            <div className="fact-item">{CHECK}<div><strong>{CLASSES.length}</strong><span>Antibiotic Classes</span></div></div>
            <div className="fact-item">{CHECK}<div><strong>{TOTAL_PRODUCTS}</strong><span>Branded Products</span></div></div>
            <div className="fact-item">{CHECK}<div><strong>All</strong><span>IV Injection Forms</span></div></div>
            <div className="fact-item">{CHECK}<div><strong>WHO-GMP</strong><span>Certified</span></div></div>
          </div>

          <div className="class-tags" role="group" aria-label="Filter by antibiotic class">
            <button
              type="button"
              className={activeFilter === 'all' ? 'active' : undefined}
              aria-pressed={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            >
              All classes
            </button>
            {CLASSES.map((cls) => (
              <button
                type="button"
                key={cls.key}
                className={activeFilter === cls.key ? 'active' : undefined}
                aria-pressed={activeFilter === cls.key}
                onClick={() => setActiveFilter(cls.key)}
              >
                {cls.title}
              </button>
            ))}
          </div>

          {visibleClasses.map((cls) => (
            <div className="class-block" key={cls.key}>
              <div className="class-header">
                <span className="class-icon">{cls.icon}</span>
                <div>
                  <h3>{cls.title}</h3>
                  <p>{cls.text}</p>
                </div>
              </div>
              <div className="product-grid">
                {cls.products.map((p) => (
                  <div className="product-card" key={p.name}>
                    <div className="product-card-top"><h4>{p.name}</h4><span className="product-available">Available</span></div>
                    <p className="product-generic">{p.generic}</p>
                    <div className="product-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <p className="product-highlight">{p.highlight}</p>
                    <p className="product-indications"><strong>Indications:</strong> {p.indications}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className={`section reveal${ctaIn ? ' in' : ''}`}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Need a specific molecule?</p>
          <h2 style={{ marginBottom: 16 }}>We’re happy to help.</h2>
          <p style={{ maxWidth: 520, margin: '0 auto 28px', color: 'var(--ink-soft)', fontSize: 16 }}>
            Reach out to our team for availability, pricing, or clinical documentation on any product in our portfolio.
          </p>
          <Link className="btn btn-primary" to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
