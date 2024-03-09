import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
  opacity: ${(props) => (props.isVisible ? '0.40' : '0')};
  transition: opacity 0.5s ease; /* Add transition for opacity */
  width: 120px;
`;


const BadgeCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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

const BadgeWrapper = styled.div`
  position: relative;

  &:hover ${CustomText} {
    opacity: 1;
    bottom: 10px;
  }
`;

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

function Skills() {
  const [isVisible, setIsVisible] = useState(false); // State variable to control visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const timeout = setTimeout(() => {
              setIsVisible(false);
            }, 500);
            return () => clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById('skills'));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills'>
      <Container>
        <Title isVisible={isVisible}>Skills</Title>
        <BadgeCollection>
          <SkillBadge src="./badges/html-svgrepo-com.svg" alt="HTML" customText="HyperText Markup Language" />
          <SkillBadge src="./badges/css-3-svgrepo-com.svg" alt="CSS" customText="Cascading Style Sheets" />
          <SkillBadge src="./badges/php2-svgrepo-com.svg" alt="php" customText="Hypertext Preprocessor" />
          <SkillBadge src="./badges/csharp-svgrepo-com.svg" alt="C#" customText="C Sharp" />
          <SkillBadge src="./badges/javascript-svgrepo-com.svg" alt="JavaScript" customText="JavaScript" />
        </BadgeCollection>
        <BadgeCollection>
          <SkillBadge src="./badges/icons8-visual-studio.svg" alt="Visual Studio" customText="Microsoft Visual Studio" />
          <SkillBadge src="./badges/icons8-visual-studio-code.svg" alt="Visual Studio Code" customText="Visual Studio Code" />
          <SkillBadge src="./badges/icons8-microsoft-sql-server.svg" alt="SQL Server Management Studio" customText="SQL Server Management Studio" />
          <SkillBadge src="./badges/icons8-unreal-engine.svg" alt="Unreal Engine" customText="Unreal Engine" />
          <SkillBadge src="./badges/maya-2017.svg" alt="Autodesk Maya" customText="Autodesk Maya" />
          <SkillBadge src="./badges/icons8-gimp.svg" alt="GIMP" customText="GNU Image Manipulation Program" />
        </BadgeCollection>
      </Container>
    </section>
  );
}

export default Skills;
