import PageHead from '../components/PageHead.jsx';
import SectionDivider from '../components/SectionDivider.jsx';
import useReveal from '../hooks/useReveal.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const CONTACT_EMAIL = 'amitava@ressia.in';
const LAST_UPDATED = '7 September 2026';

export default function CookiePolicy() {
  const [ref, inView] = useReveal();

  useDocumentMeta(
    'Cookie Policy — Ressia Healthcare',
    'Ressia Healthcare does not use cookies, analytics, or tracking scripts on this website.'
  );

  return (
    <>
      <PageHead eyebrow="Legal" title="Cookie Policy" />
      <SectionDivider variant="on-dark" />

      <section ref={ref} className={`section flush reveal${inView ? ' in' : ''}`}>
        <div className="wrap">
          <div className="legal-content">
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

            <h2>Do We Use Cookies?</h2>
            <p>
              <strong>No.</strong> This website does not set any cookies, does not use analytics or
              advertising trackers, and does not embed any third-party scripts that set cookies. Nothing about
              your visit to this site is tracked or recorded by us.
            </p>

            <h2>Why There’s No Cookie Banner</h2>
            <p>
              Cookie consent banners exist to get your permission before non-essential cookies or tracking
              scripts run. Since this site doesn’t use any, showing a banner asking for consent to something
              that isn’t happening would be misleading — so we don’t show one.
            </p>

            <h2>If This Changes</h2>
            <p>
              If we ever add analytics or other tools that use cookies, we will update this policy and, where
              required by law, ask for your consent before any non-essential cookie is set.
            </p>

            <h2>Your Browser’s Own Controls</h2>
            <p>
              Regardless of what any individual site does, your browser lets you view, block, or delete
              cookies at any time through its settings, and most browsers let you browse in a private/incognito
              mode that avoids storing site data locally.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this policy? Write to us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
