import React from 'react';
import { PROFILE_CONFIG } from '../data/portfolioData';

export function AboutSection({ profile = PROFILE_CONFIG, portraitUrl = '' }) {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-heading"
    >
      <div className="container about-grid">
        {/* Left: Golden Circle Badge & Skill Pills */}
        <div className="about-visual">
          <div className="about-golden-circle">
            {portraitUrl ? (
              <img
                src={portraitUrl}
                alt={profile.name}
                className="about-portrait-img"
              />
            ) : (
              <div className="about-monogram-box">
                <span className="about-monogram-letters">
                  {profile.monogram}
                </span>
                <span className="about-monogram-role">{profile.role}</span>
              </div>
            )}

            <span className="about-chip about-chip-top">React • Next.js</span>
            <span className="about-chip about-chip-bottom">
              API Integration
            </span>
          </div>
        </div>

        {/* Right: Factual Bio & Three Short Highlights */}
        <div className="about-copy">
          <p className="section-eyebrow eyebrow-on-dark">About Me</p>

          <h2 id="about-heading" className="section-title title-on-dark">
            Who is <span className="title-gold-italic">{profile.name}?</span>
          </h2>

          <p className="about-description">{profile.aboutSummary}</p>

          <div className="about-highlights-list">
            {profile.aboutHighlights.map((item) => (
              <div key={item.title} className="about-highlight-card">
                <h3 className="about-highlight-title">{item.title}</h3>
                <p className="about-highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="#projects" className="btn-compound-gold">
              <span className="btn-compound-label">Explore Projects</span>
              <span className="btn-compound-circle-dark" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
