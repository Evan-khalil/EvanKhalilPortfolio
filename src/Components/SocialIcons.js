import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css'; // Assuming you name the CSS file as SocialIcons.css

const SocialNav = () => {
  return (
    <nav className="social">
      <ul>
        <li>
          <a href="https://github.com/Evan-khalil">
            <FontAwesomeIcon icon={faGithub} size="4x"/>
            
          </a>
        </li>
        <li>
          <a href="https://se.linkedin.com/in/evan-khalil-0a6013164">
            <FontAwesomeIcon icon={faLinkedin} size="4x"/>
            
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
