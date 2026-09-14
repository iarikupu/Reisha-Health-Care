import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const CONTACT_EMAIL = 'amitava@ressia.in';
const LAST_UPDATED = '7 September 2026';

export default function Terms() {
  const [ref, inView] = useReveal();

  useDocumentMeta(
    'Terms & Conditions — Ressia Healthcare',
    'The terms governing use of the Ressia Healthcare website, including our no-medical-advice and product information disclaimers.'
  );

  return (
    <>
      <PageHead eyebrow="Legal" title="Terms & Conditions" />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms & Conditions. If you do not agree,
              please do not use this website.
            </p>

            <h2>Use of This Website</h2>
            <p>
              This website is provided for general informational purposes about Ressia Healthcare Pvt Ltd, our
              company, and our critical care antibiotic portfolio. It is intended primarily for healthcare
              professionals, hospital procurement teams, distributors, and prospective employees or partners.
            </p>

            <h2>No Medical Advice</h2>
            <p>
              <strong>Nothing on this website is medical advice.</strong> Content about our products —
              including indications, dosing formats, and clinical use cases — is provided for general
              informational purposes only and is not a substitute for the professional judgment of a
              qualified physician or pharmacist. Prescription medicines described on this site must only be
              prescribed, dispensed, and used under appropriate medical supervision, in accordance with
              approved product labeling and applicable law. If you have a medical concern, consult a qualified
              healthcare professional.
            </p>

            <h2>Product Information & Availability</h2>
            <p>
              Product names, formats, and descriptions on this site are general information and may not
              reflect current regulatory status, approval, or availability in every jurisdiction. Nothing on
              this website constitutes an offer to sell, or a solicitation of an offer to buy, any product in
              a jurisdiction where such an offer or solicitation would be unlawful. Please contact us directly
              to confirm current availability, regulatory status, and pricing for your region.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Ressia Healthcare name, logo, and the text content of this website are the property of
              Ressia Healthcare Pvt Ltd unless otherwise noted, and may not be copied or reused without
              permission. Photography used on this site is licensed stock imagery used for illustrative
              purposes and does not depict Ressia Healthcare’s actual staff, facilities, or products unless
              specifically stated.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              We try to keep the information on this site accurate and up to date, but we make no warranties
              or representations, express or implied, about its completeness, accuracy, or reliability. We may
              update or correct content at any time without notice.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              This site may link to third-party websites (for example, mail or map links) for your
              convenience. We do not control and are not responsible for the content, policies, or practices
              of any third-party site.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Ressia Healthcare shall not be liable for any
              direct, indirect, incidental, or consequential loss or damage arising from your use of, or
              inability to use, this website or the information on it.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from your use of this
              website shall be subject to the exclusive jurisdiction of the courts of India.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. Continued use of this website after changes are
              posted constitutes acceptance of the revised Terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about these Terms? Write to us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            <div className="legal-note">
              These Terms are a good-faith draft covering standard website use, intellectual property, and a
              no-medical-advice disclaimer. Given that Ressia Healthcare markets prescription antibiotics, we
              strongly recommend a review by legal counsel familiar with Indian drug-advertising law (including
              the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, and the Drugs and
              Cosmetics Rules) before this is relied on in production.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
