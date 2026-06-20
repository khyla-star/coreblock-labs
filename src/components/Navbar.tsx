import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { mainNavItems } from '../data/navigation';
import { COMPANY_LOGO } from '../data/company';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('sidebar-open', menuOpen);
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-xl fixed-top navbar-dark scrolled${menuOpen ? ' sidebar-open' : ''}`}
      id="mainNav"
    >
      {menuOpen ? (
        <button
          type="button"
          className="navbar-backdrop d-xl-none"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

              <div className="container-fluid">
        <Link
          to="/"
          className="custom-logo-link"
          aria-label="CoreBlock Labs home"
          onClick={closeMenu}
        >
          <img
            width={36}
            height={36}
            src={COMPANY_LOGO}
            className="custom-logo"
            alt=""
          />
          <span className="custom-logo-text" aria-hidden="true">
            CoreBlock <span className="custom-logo-accent">Labs</span>
          </span>
        </Link>

        <button
          className="navbar-toggler mega-toggler d-xl-none"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
                  </button>

        <div
          className={`collapse navbar-collapse${menuOpen ? ' show sidebar-active' : ''}`}
          id="navbarMega"
        >
                      <div className="sidebar-header d-flex justify-content-between align-items-center d-xl-none mb-3">
            <Link to="/" className="custom-logo-link" onClick={closeMenu}>
              <img
                width={36}
                height={36}
                src={COMPANY_LOGO}
                className="custom-logo"
                alt=""
              />
              <span className="custom-logo-text" aria-hidden="true">
                CoreBlock <span className="custom-logo-accent">Labs</span>
              </span>
            </Link>
            <button
              type="button"
              className="btn-close"
              aria-label="Close menu"
              onClick={closeMenu}
            />
                      </div>

          <ul className="navbar-nav ms-xl-auto align-items-xl-center">
            {mainNavItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
                  </ul>
                                  </div>
              </div>
          </nav>
  );
}
