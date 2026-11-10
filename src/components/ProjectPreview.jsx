import React from 'react';

/**
 * Displays real project screenshots inside a uniform-height preview frame,
 * preserving image proportions and centering vertical screenshots so all UI
 * controls remain visible.
 */
export function ProjectPreview({ type, image, imageAlt, title }) {
  const isCalculator = type === 'calculator';

  return (
    <div
      className={`preview-canvas ${
        isCalculator
          ? 'preview-canvas-calculator'
          : 'preview-canvas-bloomcart'
      }`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt || `${title} project screenshot`}
          className={`preview-screenshot ${
            isCalculator
              ? 'preview-screenshot-calculator'
              : 'preview-screenshot-bloomcart'
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default ProjectPreview;
