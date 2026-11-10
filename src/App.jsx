import React from 'react';
import {
  PROFILE_CONFIG,
  RIBBON_ITEMS,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsRibbon } from './components/SkillsRibbon';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

function formatContactHref(emailValue) {
  const trimmed = (emailValue || '').trim();
  if (!trimmed) return '';
  return trimmed.startsWith('mailto:') ? trimmed : `mailto:${trimmed}`;
}

export default function App() {
  const contactHref = formatContactHref(PROFILE_CONFIG.email);
  const githubHref = (PROFILE_CONFIG.githubUrl || '').trim();
  const linkedinHref = (PROFILE_CONFIG.linkedinUrl || '').trim();
  const portraitUrl = (PROFILE_CONFIG.portraitUrl || '').trim();

  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar
        profile={PROFILE_CONFIG}
        contactHref={contactHref}
        githubHref={githubHref}
        linkedinHref={linkedinHref}
      />

      <main id="main-content">
        <Hero
          profile={PROFILE_CONFIG}
          contactHref={contactHref}
          githubHref={githubHref}
          linkedinHref={linkedinHref}
          portraitUrl={portraitUrl}
        />

        <SkillsRibbon items={RIBBON_ITEMS} />

        <SkillsSection skillGroups={SKILL_GROUPS} />

        <AboutSection profile={PROFILE_CONFIG} portraitUrl={portraitUrl} />

        <ProjectsSection projects={FEATURED_PROJECTS} />
      </main>

      <Footer
        profile={PROFILE_CONFIG}
        contactHref={contactHref}
        githubHref={githubHref}
        linkedinHref={linkedinHref}
      />
    </div>
  );
}
