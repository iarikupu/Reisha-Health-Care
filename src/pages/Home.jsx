import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider.jsx';
import MoleculeGraphic from '../components/MoleculeGraphic.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const STANDARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Internationally Certified',
    text: 'Manufacturing facilities recognized to global standards.',
    bgImage: '/card-certified.jpg',
    bgPosition: '50% 30%',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
      </svg>
    ),
    title: 'WHO & GMP Compliant',
    text: 'Quality control laboratories managed per WHO and GMP guidelines.',
    bgImage: '/card-gmp.jpg',
    bgPosition: '50% 25%',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 2v6L4 20a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2L15 8V2" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="7" y1="15" x2="17" y2="15" />
      </svg>
    ),
    title: 'R&D Driven',
    text: 'Dedicated research departments supported by robust IT infrastructure.',
    bgImage: '/card-rnd.jpg',
    bgPosition: '50% 35%',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Stringent Quality Testing',
    text: 'Rigorous tests at every stage to ensure the best quality medicines.',
    bgImage: '/card-quality.jpg',
    bgPosition: '50% 20%',
  },
];

const FEATURED_PRODUCTS = [
  {
    name: 'MERORES',
    generic: 'Meropenem',
    tags: ['500mg / 1g', 'IV Injection'],
    highlight: 'Broad-spectrum carbapenem for MDR gram-negative organisms',
    indications: 'Severe hospital-acquired infections, meningitis, febrile neutropenia',
  },
  {
    name: 'COLIRES',
    generic: 'Colistin (Polymyxin E)',
    tags: ['1 / 2 / 3 MIU', 'IV Injection'],
    highlight: 'Last-resort option for pan-resistant gram-negative organisms',
    indications: 'XDR Acinetobacter, Pseudomonas, Klebsiella infections',
  },
  {
    name: 'ZAVIRES',
    generic: 'Ceftazidime + Avibactam',
    tags: ['2.5g', 'IV Injection'],
    highlight: 'Novel BL/BLI combination active against KPC and OXA-48 producers',
    indications: 'Carbapenem-resistant Klebsiella, complicated UTI, HAP/VAP',
  },
];

const CHEVRON = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CHECK = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

export default function Home() {
  const [aboutRef, aboutIn] = useReveal();
  const [productsRef, productsIn] = useReveal();
  const [factRef, factIn] = useReveal();

  useDocumentMeta(
    'Ressia Healthcare — Critical Care Antibiotics Manufacturer',
    'Ressia Healthcare manufactures WHO-GMP certified critical care antibiotics for hospitals and ICUs across India — carbapenems, glycopeptides, polymyxins, and BL/BLI combinations.'
  );

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="hero">
        <div className="hero-bg" role="img" aria-label="Wide view of a pharmaceutical manufacturing facility"></div>
        <div className="hero-scrim" aria-hidden="true"></div>
        <div className="wrap">
          <div className="hero-content">
            <h1>
              Care built on <span className="accent">precision</span> and trust
            </h1>
            <p className="lead">
              Ressia Healthcare manufactures medicines to the highest standards of quality, safety, and efficacy — for patients everywhere.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#about" onClick={scrollToAbout}>Learn about us</a>
            </div>
          </div>
          <div className="floating-stat">
            <strong>500+</strong>
            <span>Hospital Partners</span>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About Us" onClick={scrollToAbout}>
          {CHEVRON}
        </a>
      </section>

      <section ref={factRef} className={`section flush reveal${factIn ? ' in' : ''}`}>
        <div className="wrap">
          <div className="fact-strip" style={{ marginBottom: 0 }}>
            <div className="fact-item">
              {CHECK}
              <div><strong>WHO-GMP</strong><span>Certified</span></div>
            </div>
            <div className="fact-item">
              {CHECK}
              <div><strong>500+</strong><span>Hospital Partners</span></div>
            </div>
            <div className="fact-item">
              {CHECK}
              <div><strong>14+</strong><span>Antibiotic Molecules</span></div>
            </div>
            <div className="fact-item">
              {CHECK}
              <div><strong>Pan-India</strong><span>Distribution</span></div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="about" ref={aboutRef} className={`section dotted flush reveal${aboutIn ? ' in' : ''}`}>
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Who we are</p>
          <h2 style={{ textAlign: 'center' }}>About Us</h2>

          <div className="about-intro">
            <p>
              Our Manufacturers are internationally recognized &amp; certified with the state of the art manufacturing facility and also equipped
              with R&nbsp;&amp;&nbsp;D departments that are supported by robust information technology to ensure high efficacy in all processes of
              drug manufacturing.
            </p>
            <p>
              The facilities have well equipped quality control laboratories managed as per WHO, GMP guidelines. Stringent quality tests are
              conducted to ensure best quality medicines are produced.
            </p>
          </div>

          <div className="standards-grid">
            {STANDARDS.map((item) => (
              <div className="standard-card" key={item.title} tabIndex={0}>
                <span
                  className="card-bg"
                  style={{ backgroundImage: `url(${item.bgImage})`, backgroundPosition: item.bgPosition }}
                  aria-hidden="true"
                ></span>
                <span className="card-scrim" aria-hidden="true"></span>
                <div className="card-content">
                  <span className="standard-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={productsRef} className={`section reveal${productsIn ? ' in' : ''}`}>
        <div className="wrap">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Our portfolio</p>
          <h2 style={{ textAlign: 'center' }}>Featured Products</h2>
          <div className="about-intro" style={{ marginBottom: 40 }}>
            <p>A snapshot of our critical care antibiotic portfolio — each molecule manufactured to WHO-GMP standards and backed by uninterrupted supply.</p>
          </div>

          <div className="product-grid">
            {FEATURED_PRODUCTS.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-card-top"><h4>{p.name}</h4><span className="product-available">Available</span></div>
                <p className="product-generic">{p.generic}</p>
                <div className="product-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <p className="product-highlight">{p.highlight}</p>
                <p className="product-indications"><strong>Indications:</strong> {p.indications}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="btn btn-primary" to="/products">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="into-dark" />

      <section className="cta-banner">
        <MoleculeGraphic className="page-head-graphic" />
        <div className="wrap">
          <p className="eyebrow">What drives us</p>
          <p className="company-tag">Ressia Healthcare Pvt Ltd</p>
          <h2>Our fundamental elements are based on providing “Quality Products with Affordability.”</h2>
          <p className="lead">Our vision and mission guide every batch we manufacture and every hospital we supply.</p>
          <Link className="btn btn-white" to="/vision-mission">Read Our Vision &amp; Mission</Link>
        </div>
      </section>

      <SectionDivider variant="on-dark into-white" />
    </>
  );
}
