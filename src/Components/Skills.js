import React from 'react';
import './Skills.css';

const SkillsSection = () => {
  return (
    <div className="content">
      <div className="profile-skills">
        <div>
          <input type="checkbox" id="sk1" />
          <label htmlFor="sk1"></label>
          <ul className="skills skills1">
          <li className="sk-pro"><span>Programing</span></li>
          <li className="sk-dtb"><span>Databases</span></li>
          <li className="sk-dis"><span>Prototyping</span></li>
            <li className="sk-cms"><span>3d-Modeling</span></li>
            <li className="sk-ani"><span>Animation</span></li>
            <li className="more">
              <input type="checkbox" id="more-con" /><label htmlFor="more-con"></label>
              <div><span>PHOTO</span><span>API</span><span>MAPS</span><span>VIDEO</span><span>CHARTS</span><span>RWD</span></div>
            </li>
          </ul>
        </div>
        <div>
          <input type="checkbox" id="sk2" />
          <label htmlFor="sk2"></label>
          <ul className="skills skills2">
            <li className="sk-gim"><span>VS</span></li>
            <li className="sk-ado"><span>VsCode</span></li>
            <li className="sk-not"><span>SSMS</span></li>
            <li className="sk-tri"><span>Maya</span></li>
            <li className="sk-wor"><span>UE</span></li>
            <li className="more">
              <input type="checkbox" id="more-pro" /><label htmlFor="more-pro"></label>
              <div><span>JOOMLA</span><span>DRUPAL</span><span>JIRA</span><span>TRELLO</span><span>FILEZILLA</span><span>GIT</span></div>
            </li>
          </ul>
        </div>
        <div>
          <input type="checkbox" id="sk3" />
          <label htmlFor="sk3"></label>
          <ul className="skills skills3">
            <li className="sk-css"><span>C#</span></li>
            <li className="sk-htm"><span>HTML</span></li>
            <li className="sk-jav"><span>JS</span></li>
            <li className="sk-php"><span>PHP</span></li>
            <li className="sk-sql"><span>SQL</span></li>
            <li className="more">
              <input type="checkbox" id="more-len" /><label htmlFor="more-len"></label>
              <div><span>XHTML</span><span>XSL</span><span>XML</span><span>JSON</span><span>PUG</span><span>SASS</span></div>
            </li>
          </ul>
        </div>
        {/* Add more <div> for additional sections */}
      </div>
    </div>
  );
};

export default SkillsSection;
