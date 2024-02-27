import React from 'react';
import './Skills.css'; // Import the CSS file

const Section = ({ title, graphText, tooltipText }) => {
  return (
    <section className={`model-${title}`}>
      <div className="graph">{graphText}</div>
      <span className="tooltip" tooltip={tooltipText}>
        {tooltipText}
      </span>
    </section>
  );
};

const Base = () => {
  return (
    <div className="base">
      <Section title="1" graphText="HTML5" tooltipText="100%" />
      <Section title="2" graphText="CSS3" tooltipText="100%" />
      <section className="model-3">
        <div className="multi-graph">
          JavaScript
          <div data-name="jQuery" className="graph jQuery"></div>
          <div data-name="JavaScript" className="graph javaScript"></div>
        </div>
      </section>
      <Section title="4" graphText="Photoshop" tooltipText="70%" />
    </div>
  );
};

export default Base;
