import React from 'react';
import { RIBBON_ITEMS } from '../data/portfolioData';

export function SkillsRibbon({ items = RIBBON_ITEMS }) {
  return (
    <div className="ribbon-section" aria-label="Core competencies">
      <div className="ribbon-wave-backdrop" aria-hidden="true">
        <svg
          className="ribbon-wave-svg"
          viewBox="0 0 2880 180"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path
            className="ribbon-wave-path"
            d="M 0,24 Q 180,-12 360,24 T 720,24 T 1080,24 T 1440,24 T 1800,24 T 2160,24 T 2520,24 T 2880,24 L 2880,156 Q 2700,192 2520,156 T 2160,156 T 1800,156 T 1440,156 T 1080,156 T 720,156 T 360,156 T 0,156 Z"
          />
        </svg>
      </div>

      <div className="ribbon-front-gold">
        <div className="container ribbon-inner">
          {items.map((item, idx) => (
            <React.Fragment key={item}>
              <span className="ribbon-item">{item}</span>
              {idx < items.length - 1 && (
                <span className="ribbon-star" aria-hidden="true">
                  ✦
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsRibbon;

