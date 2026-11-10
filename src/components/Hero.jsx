import React from 'react';
import { PROFILE_CONFIG } from '../data/portfolioData';

export function Hero({
  profile = PROFILE_CONFIG,
  contactHref = '',
  githubHref = '',
  linkedinHref = '',
  portraitUrl = '',
}) {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Badge, Heading, Intro, CTA */}
        <div className="hero-copy hero-animate">
          <div className="hello-badge-wrapper">
            <span className="hello-badge">
              <span className="corner-node corner-tl" aria-hidden="true" />
              <span className="corner-node corner-tr" aria-hidden="true" />
              <span className="corner-node corner-bl" aria-hidden="true" />
              <span className="corner-node corner-br" aria-hidden="true" />
              {profile.helloBadge}
            </span>
          </div>

          <h1 className="hero-headline">
            I’m{' '}
            <span className="hero-name-highlight">{profile.name},</span>
            <br />
            {profile.role}
          </h1>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-compound-primary">
              <span className="btn-compound-label">View My Work</span>
              <span className="btn-compound-circle" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>

            {contactHref && (
              <a href={contactHref} className="btn-pill-outline">
                Contact Me
              </a>
            )}

            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
              >
                GitHub
              </a>
            )}

            {linkedinHref && (
              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Golden Circle Portrait Composition & Floating Labels */}
        <div className="hero-visual hero-animate-delayed">
          <div className="portrait-stage">
            {/* Decorative organic strokes matching the reference */}
            <span
              className="portrait-arc portrait-arc-left"
              aria-hidden="true"
            />
            <span
              className="portrait-arc portrait-arc-top"
              aria-hidden="true"
            />

            {/* Large Golden Yellow Circle */}
            <div className="golden-circle-backdrop">
              {portraitUrl ? (
                <img
                  src={portraitUrl}
                  alt={profile.name}
                  className="portrait-img"
                />
              ) : (
                <div
                  className="portrait-monogram-placeholder"
                  role="img"
                  aria-label={`${profile.name} (${profile.monogram}) monogram placeholder`}
                >
                  <div className="monogram-avatar-ring">
                    <span className="monogram-letters">{profile.monogram}</span>
                    <span className="monogram-caption">{profile.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Label 1: React Developer (Forest Green Pill) */}
            <div className="floating-tag floating-tag-green">
              <span
                className="floating-pointer pointer-top-right"
                aria-hidden="true"
              >
                ▲
              </span>
              <span>React Developer</span>
            </div>

            {/* Floating Label 2: Next.js (Golden Yellow Pill) */}
            <div className="floating-tag floating-tag-gold">
              <span
                className="floating-pointer pointer-top-left"
                aria-hidden="true"
              >
                ▲
              </span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

