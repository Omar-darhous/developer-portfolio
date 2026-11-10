import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

function SkillIcon({ type }) {
  if (type === 'frontend') {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m10 8-2 2 2 2" className="icon-accent-stroke" />
        <path d="m14 8 2 2-2 2" className="icon-accent-stroke" />
      </svg>
    );
  }

  if (type === 'backend') {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <circle cx="6" cy="6.5" r="1" className="icon-accent-fill" />
        <circle cx="6" cy="17.5" r="1" className="icon-accent-fill" />
        <path d="M11 6.5h7" />
        <path d="M11 17.5h7" />
      </svg>
    );
  }

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" className="icon-accent-stroke" />
      <path d="M9 21V9" className="icon-accent-stroke" />
    </svg>
  );
}

const FILTER_TABS = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'markup-styling', label: 'Markup & Styling' },
  { id: 'backend', label: 'Backend & APIs' },
];

export function SkillsSection({ skillGroups = SKILL_GROUPS }) {
  const [activeSkillFilter, setActiveSkillFilter] = useState('all');

  const filteredSkillGroups =
    activeSkillFilter === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeSkillFilter);

  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-header-split">
          <div>
            <p className="section-eyebrow">Skills</p>
            <h2 id="skills-heading" className="section-title">
              <span className="title-gold-italic">Skills</span> I Provide
            </h2>
          </div>

          {/* Interactive Category Filtering */}
          <div
            className="skills-filter-bar"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeSkillFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${
                    isActive ? 'filter-pill-active' : ''
                  }`}
                  onClick={() => setActiveSkillFilter(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`skills-cards-grid ${
            filteredSkillGroups.length === 1 ? 'skills-cards-single' : ''
          }`}
        >
          {filteredSkillGroups.map((group) => (
            <article key={group.id} className="skill-light-card">
              <div className="skill-icon-circle">
                <SkillIcon type={group.iconType} />
              </div>

              <div className="skill-card-head">
                <h3 className="skill-card-title">{group.category}</h3>
                {group.subtitle && (
                  <span className="skill-card-subtitle">{group.subtitle}</span>
                )}
              </div>

              <p className="skill-card-desc">{group.description}</p>

              <ul
                className="skill-chip-list"
                aria-label={`${group.category} technologies`}
              >
                {group.skills.map((skill) => (
                  <li key={skill.name} className="skill-chip">
                    <span className="skill-chip-dot" aria-hidden="true" />
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className="skill-chip-detail">{skill.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
