import React from 'react';
import styled from 'styled-components';
import './Skills.css';

const Title = styled.h1`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  text-align: center;
  color: white;
`;
function SkillBadge({ src, alt }) {
  return (
    <div className="amg-badge">
      <img src={src} alt={alt} />

    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="container-fluid amg-skills">
      <Title>Key Skills</Title>
      <div className="row amg-badge-collection">
        <SkillBadge src="./badges/html-svgrepo-com.svg" alt="HTML" />
        <SkillBadge src="./badges/css-3-svgrepo-com.svg" alt="CSS" />
        <SkillBadge src="./badges/php2-svgrepo-com.svg" alt="php" />
        <SkillBadge src="./badges/csharp-svgrepo-com.svg" alt="C#" />
        <SkillBadge src="./badges/javascript-svgrepo-com.svg" alt="JavaScript" />
      </div>
    </div>
  );
}

export default Skills;
