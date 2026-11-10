import React from 'react';
import { PROFILE_CONFIG } from '../data/portfolioData';

export function Footer({
  profile = PROFILE_CONFIG,
  contactHref = '',
  githubHref = '',
  linkedinHref = '',
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-monogram footer-monogram">
              {profile.monogram}
            </span>
            <div>
              <p className="footer-name">
                {profile.name} &middot; {profile.role}
              </p>
              <p className="footer-copyright">
                &copy; {currentYear} {profile.name}. All rights reserved.
              </p>
            </div>
          </div>

          <div className="footer-links">
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action-link"
              >
                GitHub
              </a>
            )}
            {linkedinHref && (
              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-action-link"
              >
                LinkedIn
              </a>
            )}
            {contactHref && (
              <a href={contactHref} className="footer-action-link">
                Email
              </a>
            )}
            <a href="#top" className="footer-back-top">
              <span>Back to Top</span>
              <span className="back-top-arrow" aria-hidden="true">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
