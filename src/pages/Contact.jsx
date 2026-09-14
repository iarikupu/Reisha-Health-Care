import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const BUILDING_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M3 21h18" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const PHONE_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MAIL_ICON = (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2 7 12 13 22 7" />
  </svg>
);

const OFFICES = [
  { city: 'Mumbai', label: 'Corporate Office', addressLines: ['Ressia Healthcare Pvt Ltd', 'Mumbai, Maharashtra 400097'] },
  { city: 'Delhi', label: 'North India Office', addressLines: ['Ressia Healthcare Pvt Ltd', 'New Delhi 110020'] },
  { city: 'Bengaluru', label: 'South India Office', addressLines: ['Ressia Healthcare Pvt Ltd', 'Bengaluru, Karnataka 560044'] },
  { city: 'Kolkata', label: 'Registered Office', addressLines: ['Ressia Healthcare Pvt Ltd', 'Kolkata, West Bengal 700060'] },
];

const PHONE = '+91 90734 66872';
const PHONE_TEL = 'tel:+919073466872';
const OFFICE_EMAIL = 'amitava@ressia.in';

export default function Contact() {
  const [ref, inView] = useReveal();

  useDocumentMeta(
    'Contact Us — Ressia Healthcare',
    'Get in touch with Ressia Healthcare — offices in Mumbai, Delhi, Bengaluru, and Kolkata, plus direct email and phone contact for hospital and distribution inquiries.'
  );

  return (
    <>
      <PageHead
        eyebrow="Contact Us"
        title="Get in Touch"
        lead="Whether you’re a hospital procurement team, a clinician looking for product information, or a potential distribution partner — we’d love to hear from you."
      />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section dotted flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="offices-grid">
            {OFFICES.map((office) => (
              <div className="office-card" key={office.city}>
                <span className="class-icon">{BUILDING_ICON}</span>
                <h3>{office.city}</h3>
                <p className="office-label">{office.label}</p>
                <address>
                  {office.addressLines[0]}
                  <br />
                  {office.addressLines[1]}
                </address>
                <a className="office-link" href={PHONE_TEL}>
                  {PHONE_ICON}
                  {PHONE}
                </a>
                <a className="office-link" href={`mailto:${OFFICE_EMAIL}`}>
                  {MAIL_ICON}
                  {OFFICE_EMAIL}
                </a>
              </div>
            ))}
          </div>

          <div className="urgent-band">
            <div>
              <h3>For Urgent Medical Queries</h3>
              <p>If you have an urgent clinical or supply query regarding a patient currently on Ressia products, please call our medical affairs helpline directly.</p>
            </div>
            <a className="btn-white" href={PHONE_TEL}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE}
            </a>
          </div>

          <div className="contact-form" style={{ textAlign: 'center' }}>
            <h3>Write to us</h3>
            <p>Send your inquiry directly by email — product questions, quantities, or clinical documentation requests — and we’ll get back to you within one business day.</p>
            <a className="btn btn-primary" href={`mailto:${OFFICE_EMAIL}`}>
              {MAIL_ICON}
              Email {OFFICE_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
