import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; /* Adjust the gap between columns */
  width: 100%;
  padding: 0 20px; /* Add padding to the container */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div`
  flex-basis: calc(33.33% - 20px); /* Adjust width to fit three columns with gap */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Add padding to the section */
  background-color: #f0f0f0; /* Add background color */
  border-radius: 10px; /* Add border radius */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
`;

const Fill = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;

const SkillsSection = () => {
  return (
    <Container>
      <SkillBox>
        <Title>HTML</Title>
        <SkillBar>
          <Fill color="#e34c26" style={{ width: '77%' }} />
        </SkillBar>
      </SkillBox>
      <SkillBox>
        <Title>CSS</Title>
        <SkillBar>
          <Fill color="#268fe4" style={{ width: '80%' }} />
        </SkillBar>
      </SkillBox>
      <SkillBox>
        <Title>JavaScript</Title>
        <SkillBar>
          <Fill color="#F0DB4F" style={{ width: '60%' }} />
        </SkillBar>
      </SkillBox>
      {/* Add more SkillBox components for additional skills */}
    </Container>
  );
};

export default SkillsSection;
