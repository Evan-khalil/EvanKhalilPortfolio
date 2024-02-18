import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  margin: 0;
  display: grid;
  grid-template-rows: 50px 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
`;

const Title = styled.h1`
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  text-align: center;
  color: white;
`;

const CarouselContainer = styled.main`
  grid-row: 2 / 3;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: coral;
  transition: all 0.25s linear;
  transform: ${props => `rotateY(calc(-10deg * ${props.position - props.currentPosition})) translateX(calc(-350px * ${props.position - props.currentPosition}))`};
  z-index: ${props => 5 - Math.abs(props.position - props.currentPosition)};
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10; /* Ensure it's above the items */
  
  /* Blinking animation */
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10; /* Ensure it's above the items */
  
  /* Blinking animation */
  animation: blink 1s infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const getYouTubeEmbedUrl = (url) => {
  const videoId = url.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const videos = [
    "https://www.youtube.com/embed/5j5ynQMiqec?si=vWnmlyIw-hicCvlB",
    "https://www.youtube.com/embed/1m4SZ1GNv8k?si=QxA4x3HMt83yhaL8",
    "https://www.youtube.com/embed/0Kd2BzR85vs?si=5T6QqPYrYfPgR8fD",
    "https://www.youtube.com/embed/D_mgwp8YlwU?si=BkcenFlap7j3DBMo",
    "https://www.youtube.com/embed/s_iTbsBj3dc?si=u-1pQNbk_Lpm99KW",
    "https://www.youtube.com/embed/bBdxQVK13Os?si=8IkAHuaWnHmcl7bX", 
    "https://www.youtube.com/embed/YJTSEMQSWj4?si=-LvcZB3wI3v6TcD-",
    "https://www.youtube.com/embed/M7zoKUPLPbc?si=X31KXa8QqXF1OcUk",
    "https://www.youtube.com/embed/gSwQwyqYXuU?si=B-RCMoLV8jNWx_Cp"
    ];
    
const Carousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    // Set initial position to the middle index
    setCurrentPosition(Math.floor(videos.length / 2));
  }, []);

  const handleNextClick = () => {
    setCurrentPosition(currentPosition === videos.length - 1 ? 0 : currentPosition + 1);
  };

  const handlePrevClick = () => {
    setCurrentPosition(currentPosition === 0 ? videos.length - 1 : currentPosition - 1);
  };

  return (
    <Container>
      <Title>Project highlights</Title>
      <CarouselContainer>
        {videos.map((video, index) => (
          <Item
            key={index}
            className="item"
            onClick={() => setCurrentPosition(index)}
            position={index}
            currentPosition={currentPosition}
          >
            <iframe
              title={`Video ${index + 1}`}
              width="300"
              height="400"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Item>
        ))}
        <NextButton onClick={handleNextClick}>{'>'}</NextButton>
        <PrevButton onClick={handlePrevClick}>{'<'}</PrevButton>
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
