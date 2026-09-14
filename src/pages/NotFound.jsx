import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function NotFound() {
  useDocumentMeta('Page Not Found — Ressia Healthcare', 'This page doesn’t exist or may have moved.');

  return (
    <section className="section flush not-found">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
        <h1>Page not found</h1>
        <p className="lead" style={{ margin: '0 auto 32px', maxWidth: 480 }}>
          The page you’re looking for doesn’t exist, or may have moved.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">Back to Home</Link>
          <Link className="btn btn-secondary" to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
