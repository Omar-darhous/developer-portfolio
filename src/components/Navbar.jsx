import React, { useState, useEffect } from 'react';
import { PROFILE_CONFIG } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'top', label: 'Home', href: '#top' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

export function Navbar({
  profile = PROFILE_CONFIG,
  contactHref = '',
  githubHref = '',
  linkedinHref = '',
}) {
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const handleScroll = () => {
      const scrollTrigger = window.scrollY + 180;
      let current = 'top';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollTrigger) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div
          className={`pill-navbar ${
            mobileMenuOpen ? 'pill-navbar-expanded' : ''
          }`}
        >
          <a
            href="#top"
            className="brand-mark"
            aria-label="Omar Darhous home"
            onClick={() => handleNavClick('top')}
          >
            <span className="brand-monogram">{profile.monogram}</span>
            <span className="brand-name">{profile.name}</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>

          <nav
            id="primary-navigation"
            className={`site-nav ${mobileMenuOpen ? 'site-nav-open' : ''}`}
            aria-label="Primary navigation"
          >
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`nav-link ${
                        isActive ? 'nav-link-active' : ''
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {(contactHref || githubHref || linkedinHref) && (
            <div className="nav-actions">
              {githubHref && (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-link"
                >
                  GitHub
                </a>
              )}
              {linkedinHref && (
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-link"
                >
                  LinkedIn
                </a>
              )}
              {contactHref && (
                <a href={contactHref} className="nav-contact-btn">
                  Contact Me
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
