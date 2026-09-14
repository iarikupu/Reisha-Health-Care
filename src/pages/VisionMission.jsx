import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function VisionMission() {
  const [ref, inView] = useReveal();

  useDocumentMeta(
    'Vision & Mission — Ressia Healthcare',
    'Our vision and mission at Ressia Healthcare — building a trusted, research-driven pharmaceutical company committed to quality, affordable healthcare across India.'
  );

  return (
    <>
      <PageHead eyebrow="What drives us" title="Vision & Mission" />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="simple-statements">
            <div className="simple-statement">
              <span className="tag">Vision</span>
              <p>We want to be one of the most well-known, respected, and successful pharmaceutical companies among medical professionals and staff, with a focus on strengthening research and development skills, developing collaborations, and growing our presence.</p>
            </div>
            <div className="simple-statement">
              <span className="tag">Mission</span>
              <p>Our mission is to offer a wide selection of branded generics that meet international quality standards while being innovative and economically priced. We work hard to establish a challenging, stimulating, and rewarding work environment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
