import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/vision-mission', label: 'Vision & Mission' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/" aria-label="Ressia Healthcare home" onClick={close}>
          <img src="/logo.png" alt="Ressia Healthcare" width="168" height="56" />
        </Link>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
        </button>

        <nav className={`links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) =>
            item.disabled ? (
              <span key={item.to} className="nav-disabled">
                {item.label}
              </span>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={close}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
