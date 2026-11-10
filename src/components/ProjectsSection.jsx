import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectPreview } from './ProjectPreview';

export function ProjectsSection({ projects = FEATURED_PROJECTS }) {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-header-split">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2 id="projects-heading" className="section-title">
              My Featured <span className="title-gold-italic">Projects</span>
            </h2>
          </div>
          <p className="projects-header-note">
            Built with React, JavaScript, semantic HTML, and responsive CSS.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const liveHref = (project.liveUrl || '').trim();
            const sourceHref = (project.sourceUrl || '').trim();
            const hasProjectLinks = Boolean(liveHref || sourceHref);

            return (
              <article key={project.id} className="project-card">
                <div className="project-preview-wrapper">
                  <ProjectPreview
                    type={project.previewType}
                    image={project.image}
                    imageAlt={project.imageAlt}
                    title={project.title}
                  />
                </div>

                <div className="project-content">
                  <div className="project-meta-top">
                    <span className="project-index-label">{project.label}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <ul
                    className="project-tags"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag} className="project-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {hasProjectLinks && (
                    <div className="project-links">
                      {liveHref && (
                        <a
                          href={liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-primary"
                        >
                          <span>Live Demo</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {sourceHref && (
                        <a
                          href={sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link-secondary"
                        >
                          <span>Source Code</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
