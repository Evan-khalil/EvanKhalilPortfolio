import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Styled components for the container, title, and badge collection
const Container = styled.div`
  padding: 20px;
  position: relative; /* Ensure relative positioning for the title */
`;

const Title = styled.h1`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 100px; /* Adjust font size as needed */
  margin: 0;
  padding: 20px 10px; /* Adjust padding as needed */
  opacity: ${(props) => (props.isVisible ? '0.70' : '0')};
  transition: opacity 0.5s ease; /* Add transition for opacity */
  width: 120px;
  z-index: 1; /* Ensure the title is in front */
`;

const BadgeCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Keyframe animation for pulsating effect
const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components for badge, image, and custom text
const Badge = styled.div`
  margin: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover img {
    animation: ${pulsate} 1s infinite;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.5s ease;
`;

const CustomText = styled.span`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.5s ease, bottom 0.3s ease;
  font-size: 16px;
  padding: 8px 12px;
  background-color: #4CAF50; 
  color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Wrapper for badge and custom text to control hover effect
const BadgeWrapper = styled.div`
  position: relative;

  &:hover ${CustomText} {
    opacity: 1;
    bottom: 10px;
  }
`;

// SkillBadge component to render each individual skill badge
function SkillBadge({ src, alt, customText }) {
  return (
    <BadgeWrapper>
      <Badge>
        <Image src={src} alt={alt} />
        <CustomText>{customText}</CustomText>
      </Badge>
    </BadgeWrapper>
  );
}

// Skills component to render the entire skills section
function Skills() {
  const [isVisible, setIsVisible] = useState(false); // State variable to control visibility

  // useEffect hook to observe when the skills section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const timeout = setTimeout(() => {
              setIsVisible(false);
            }, 1000);
            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById('skills')); // Observe the skills section

    return () => observer.disconnect(); // Clean up the observer
  }, []);

  // Render the skills section
  return (
    <section id='skills'>
      <Container>
        <Title isVisible={isVisible}>Skills</Title> {/* Render the title with conditional opacity */}
        <BadgeCollection>
          {/* Render each skill badge */}
          <SkillBadge src="./badges/html-svgrepo-com.svg" alt="HTML" customText="HyperText Markup Language" />
          <SkillBadge src="./badges/css-3-svgrepo-com.svg" alt="CSS" customText="Cascading Style Sheets" />
          <SkillBadge src="./badges/php2-svgrepo-com.svg" alt="php" customText="Hypertext Preprocessor" />
          <SkillBadge src="./badges/csharp-svgrepo-com.svg" alt="C#" customText="C Sharp" />
          <SkillBadge src="./badges/javascript-svgrepo-com.svg" alt="JavaScript" customText="JavaScript" />
        </BadgeCollection>
        <BadgeCollection>
          {/* Render additional skill badges */}
          <SkillBadge src="./badges/icons8-visual-studio.svg" alt="Visual Studio" customText="Microsoft Visual Studio" />
          <SkillBadge src="./badges/icons8-visual-studio-code.svg" alt="Visual Studio Code" customText="Visual Studio Code" />
          <SkillBadge src="./badges/icons8-microsoft-sql-server.svg" alt="SQL Server Management Studio" customText="SQL Server Management Studio" />
          <SkillBadge src="./badges/icons8-unreal-engine.svg" alt="Unreal Engine" customText="Unreal Engine" />
          <SkillBadge src="./badges/maya-2017.svg" alt="Autodesk Maya" customText="Autodesk Maya" />
          <SkillBadge src="./badges/icons8-gimp.svg" alt="GIMP" customText="GIMP, Image Manipulation Program" />
        </BadgeCollection>
      </Container>
    </section>
  );
}

export default Skills; // Export the Skills component
