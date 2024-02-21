import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the animation
const fillAnimation = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled components for layout and styling
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstColumn = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const SecondColumn = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-top: 20px;
  }
`;

const SkillBox = styled.div`
background-color: transparent;
padding: 20px;
  border-radius: 10px;
  width: 80%;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SkillBar = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  height: 10px;
  width: 100%;
  animation: ${fillAnimation} 1.4s ease-in-out forwards;
  opacity: 0;
`;

const Fill = styled.div`
  background-color: ${(props) => props.color};
  height: 100%;
  border-radius: 5px;
  width: ${(props) => props.width};
`;

// Main component
const ProgramsContainer = () => {
  return (
    <Container>
      {/* First Column */}
      <FirstColumn>
        <SkillBox>
          <Title>Visual Studio</Title>
          <SkillBar>
            <Fill color="#C391F7" width="95%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Visual Studio Code</Title>
          <SkillBar>
            <Fill color="#29B6F6" width="95%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>SQL Server Management Studio</Title>
          <SkillBar>
            <Fill color="#216287" width="90%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Unreal Engine</Title>
          <SkillBar>
            <Fill color="#1A6DFF" width="65%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Autodesk Maya</Title>
          <SkillBar>
            <Fill color="#0097A7" width="70%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Gimp</Title>
          <SkillBar>
            <Fill color="#A69D88" width="60%" />
          </SkillBar>
        </SkillBox>
      </FirstColumn>

      {/* Second Column */}
      <SecondColumn>
        <SkillBox>
          <Title>Html</Title>
          <SkillBar>
            <Fill color="#e34c26" width="77%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Php</Title>
          <SkillBar>
            <Fill color="#00BCD4" width="75%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>JavaScript</Title>
          <SkillBar>
            <Fill color="#F0DB4F" width="60%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>C#</Title>
          <SkillBar>
            <Fill color="#37474F" width="80%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>Sql</Title>
          <SkillBar>
            <Fill color="#D1C4E9" width="80%" />
          </SkillBar>
        </SkillBox>
        <SkillBox>
          <Title>CSS</Title>
          <SkillBar>
            <Fill color="#268fe4" width="80%" />
          </SkillBar>
        </SkillBox>
      </SecondColumn>
    </Container>
  );
};

export default ProgramsContainer;
