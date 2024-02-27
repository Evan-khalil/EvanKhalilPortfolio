import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  margin: 0;
  display: grid;
  grid-template-rows: 50px 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
  padding-top: 10%;
  padding-bottom: 50%;
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
  width: 350px;
  height: 400px;
  background-color: coral;
  transition: all 0.25s linear;
  transform: ${props =>
    `rotateY(calc(-10deg * ${props.position - props.currentPosition})) translateX(calc(-370px * ${props.position - props.currentPosition}))`};
  z-index: ${props => 5 - Math.abs(props.position - props.currentPosition)};
  cursor: pointer;
  touch-action: pan-y; /* Allow touch events */
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const NextPrevButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10; /* Ensure it's above the items */
`;

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
  const [currentPosition, setCurrentPosition] = useState(Math.floor(videos.length / 2));
  const [startX, setStartX] = useState(0);
  const playerRefs = useRef([]);

  const handleTouchMove = e => {
    const x = e.touches[0].clientX;
    const difference = startX - x;
    if (difference > 50) {
      handlePrevClick();
    } else if (difference < -50) {
      handleNextClick();
    }
  };

  const handleMouseDown = e => {
    setStartX(e.clientX);
  };

  const handleMouseMove = e => {
    if (startX) {
      const x = e.clientX;
      const difference = startX - x;
      if (difference > 50) {
        handlePrevClick();
        setStartX(0);
      } else if (difference < -50) {
        handleNextClick();
        setStartX(0);
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  useEffect(() => {
    // Load YouTube iframe API script asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializeVideos;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  const initializeVideos = () => {
    videos.forEach((video, index) => {
      const player = new window.YT.Player(`player-${index}`, {
        height: '400',
        width: '350',
        videoId: video.split('embed/')[1].split('?')[0],
        events: {
          onReady: onPlayerReady,
        },
      });
      playerRefs.current[index] = player;
    });
  };

  const onPlayerReady = event => {
    event.target.pauseVideo();
  };

  const handleNextClick = () => {
    const nextPosition = currentPosition === videos.length - 1 ? 0 : currentPosition + 1;
    setCurrentPosition(nextPosition);
    pauseOtherVideos(nextPosition);
  };

  const handlePrevClick = () => {
    const prevPosition = currentPosition === 0 ? videos.length - 1 : currentPosition - 1;
    setCurrentPosition(prevPosition);
    pauseOtherVideos(prevPosition);
  };

  const playVideo = index => {
    const player = playerRefs.current[index];
    player.playVideo();
  };

  const pauseOtherVideos = currentPosition => {
    videos.forEach((_, index) => {
      if (index !== currentPosition) {
        const player = playerRefs.current[index];
        player.pauseVideo();
      }
    });
  };

  return (
    <Container id="Projects">
      <Title>Project highlights</Title>
      <CarouselContainer>
        {videos.map((video, index) => (
          <Item
            key={index}
            className="item"
            position={index}
            currentPosition={currentPosition}
            onClick={() => playVideo(index)}
          >
            <VideoContainer
              onTouchStart={() => setStartX(window.innerWidth / 2)} // Use the middle of the screen as the start position
            >
              <div id={`player-${index}`} />
            </VideoContainer>
          </Item>
        ))}
      </CarouselContainer>
      <NextPrevButton style={{ right: '5%' }} onClick={handleNextClick}>
        Next
      </NextPrevButton>
      <NextPrevButton style={{ left: '5%' }} onClick={handlePrevClick}>
        Previous
      </NextPrevButton>
    </Container>
  );
};

export default Carousel;
