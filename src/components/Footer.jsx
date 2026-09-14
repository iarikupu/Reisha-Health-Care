import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <img src="/logo.png" alt="Ressia Healthcare" width="90" height="30" />
      <nav className="footer-legal" aria-label="Legal">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </nav>
      <p>&copy; 2026 Ressia Healthcare. All rights reserved.</p>
    </footer>
  );
}
