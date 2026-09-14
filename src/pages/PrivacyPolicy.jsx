import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const CONTACT_EMAIL = 'amitava@ressia.in';
const LAST_UPDATED = '7 September 2026';

export default function PrivacyPolicy() {
  const [ref, inView] = useReveal();

  useDocumentMeta(
    'Privacy Policy — Ressia Healthcare',
    'How Ressia Healthcare handles information on this website — what we collect, what we don’t, and your rights.'
  );

  return (
    <>
      <PageHead eyebrow="Legal" title="Privacy Policy" />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

            <h2>Overview</h2>
            <p>
              This Privacy Policy explains how Ressia Healthcare Pvt Ltd (“Ressia Healthcare”, “we”, “us”)
              handles information in connection with this website. We built this site to be informational —
              it does not have user accounts, a shopping cart, or online payments, and we have deliberately
              kept the amount of personal data this site touches to a minimum.
            </p>

            <h2>Information We Collect</h2>
            <p>
              <strong>This website does not use cookies, analytics, advertising trackers, or web forms that
              collect personal data.</strong> Browsing this site does not, by itself, send any personal
              information to us or to any third party.
            </p>
            <p>
              The only way information reaches us is if you choose to email us using one of the email links
              on this site (for example, on our Contact, Careers, or product pages). In that case, we receive
              whatever you include in that email — typically your name, email address, organisation, and the
              content of your message or CV — because your own email client sends it to us directly.
            </p>

            <h2>How We Use Information</h2>
            <p>We use information you send us by email solely to:</p>
            <ul>
              <li>Respond to your inquiry, question, or request;</li>
              <li>Evaluate a job application or CV you have submitted;</li>
              <li>Maintain a record of correspondence for legitimate business purposes.</li>
            </ul>
            <p>
              We do not use information you send us for marketing without your consent, and we do not sell
              or rent personal information to third parties.
            </p>

            <h2>Sharing of Information</h2>
            <p>
              We do not share personal information with third parties, except where necessary to respond to
              your request (for example, forwarding a query internally to the right team), where required by
              applicable law or a valid legal process, or with your explicit consent.
            </p>

            <h2>Cookies</h2>
            <p>
              This website does not currently set any cookies. See our{' '}
              <a href="/cookie-policy">Cookie Policy</a> for details.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain email correspondence only for as long as reasonably necessary to respond to your
              inquiry and for legitimate record-keeping, after which it may be deleted.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under India’s Digital Personal Data Protection Act, 2023, and other applicable data protection
              law, you may have the right to access, correct, or request deletion of personal data you have
              shared with us. To exercise these rights, write to us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect information sent to us. However, no method of
              transmission over email or the internet is completely secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              This website is intended for healthcare professionals, institutions, and business inquiries. It
              is not directed at children, and we do not knowingly collect personal information from minors.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with
              a revised “Last updated” date.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this policy or how we handle your information? Write to us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or see our{' '}
              <a href="/contact">Contact page</a> for our office addresses.
            </p>

            <div className="legal-note">
              This policy is a good-faith description of how this website currently operates. It is provided
              for transparency and is not a substitute for independent legal advice on data protection or
              advertising law applicable to your business.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
