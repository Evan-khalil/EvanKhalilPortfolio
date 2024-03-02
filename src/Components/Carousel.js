import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

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
  position: relative; /* Added position relative for arrow positioning */
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
  width: 100%;
  height: 160%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  position: relative;
  user-select: none; /* Disable text selection */
  cursor: grab; /* Change cursor to grab */
  &:active {
    cursor: grabbing; /* Change cursor to grabbing when clicked */
  }
  &:hover .arrow {
    opacity: 1; /* Show arrows on hover */
  }
`;

const ArrowAnimation = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 34px;
  color: white;
  opacity: 0.5;
  cursor: pointer;
  animation: ${ArrowAnimation} 1s infinite;
  z-index: 10; /* Adjusted z-index to be higher than videos */
`;

const LeftArrow = styled(Arrow)`
  left: 22px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')}; /* Show/hide left arrow based on visibility */
`;

const RightArrow = styled(Arrow)`
  right: 22px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')}; /* Show/hide right arrow based on visibility */
`;

const Item = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: coral;
  transition: transform 0.4s ease;
  transform: ${props =>
    `rotateY(calc(-9deg * ${props.currentPosition - props.position})) translateX(calc(310px * ${props.currentPosition - props.position})) ${props.currentPosition === props.position ? 'scale(1.3)' : 'scale(1)'}`}; /* Adjusted space between videos and added scale transform */
  z-index: ${props => 5 - Math.abs(props.position - props.currentPosition)};
  cursor: grabbing;
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  touch-action: pan-y;
  background-color: black;
`;

const VideoLink = styled.a`
  background-color: white;
  position: absolute;
  bottom: -41px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border-radius: 50%;
  border: none;
  width: 70px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(-50%) rotate(180deg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

const YoutubeIcon = styled(FontAwesomeIcon)`
  font-size: 5em;
  color: #ff0000;
`;

const videos = [
  {
    src: "./videos/3D character model and animation.mp4",
    youtubeLink: "https://youtu.be/5j5ynQMiqec" // Add YouTube link for this video
  },
  {
    src: "./videos/Asp.Net Core.mp4",
    youtubeLink: "https://youtu.be/0Kd2BzR85vs" // Add YouTube link for this video
  },
  {
    src: "./videos/Diagram Generator.mp4",
    youtubeLink: "https://youtu.be/M7zoKUPLPbc" // Add YouTube link for this video
  },
  {
    src: "./videos/Media player.mp4",
    youtubeLink: "https://youtu.be/s_iTbsBj3dc" // Add YouTube link for this video
  },
  {
    src: "./videos/Quiz Manager.mp4",
    youtubeLink: "https://youtu.be/YJTSEMQSWj4" // Add YouTube link for this video
  },
  {
    src: "./videos/TcpListener and TcpClient.mp4",
    youtubeLink: "https://youtu.be/bBdxQVK13Os" // Add YouTube link for this video
  },
  {
    src: "./videos/TicTacToe TcpListener & TcpClient.mp4",
    youtubeLink: "https://youtu.be/1m4SZ1GNv8k" // Add YouTube link for this video
  },
  {
    src: "./videos/Unreal engine Gameplay.mp4",
    youtubeLink: "https://youtu.be/gSwQwyqYXuU" // Add YouTube link for this video
  },
  {
    src: "./videos/UDP Sockets.mp4",
    youtubeLink: "https://youtu.be/D_mgwp8YlwU" // Add YouTube link for this video
  }
];
const Carousel = () => {
  const [currentPosition, setCurrentPosition] = useState(Math.floor(videos.length / 2));
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(-1);
  const playerRefs = useRef([]);

  useEffect(() => {
    initializeVideos();
  }, []);

  const initializeVideos = () => {
    videos.forEach((video, index) => {
      const player = playerRefs.current[index];
      player.load();
    });
  };

  const handleLeftArrowClick = () => {
    if (currentPosition < videos.length - 1) {
      setCurrentPosition(currentPosition + 1);
      pauseAllVideosExcept(-1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
      pauseAllVideosExcept(-1);
    }
  };

  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
    pauseAllVideosExcept(-1);
  };

  const handleTouchMove = e => {
    if (!isSwiping) return;

    const x = e.touches[0].clientX;
    const difference = x - startX;
    let newPosition = currentPosition + difference / 500; // Adjusted divisor for slower swiping

    newPosition = Math.max(0, Math.min(newPosition, videos.length - 1));
    setCurrentPosition(newPosition);
    pauseAllVideosExcept(-1);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    const snappedPosition = Math.round(currentPosition);
    setCurrentPosition(snappedPosition);
    pauseAllVideosExcept(-1);
  };

  const handleMouseDown = e => {
    setStartX(e.clientX);
    setIsSwiping(true);
    pauseAllVideosExcept(-1);
  };

  const handleMouseMove = e => {
    if (!isSwiping) return;

    const x = e.clientX;
    const difference = x - startX;
    let newPosition = currentPosition + difference / 500; // Adjusted divisor for slower swiping

    newPosition = Math.max(0, Math.min(newPosition, videos.length - 1));
    setCurrentPosition(newPosition);
    pauseAllVideosExcept(-1);
  };

  const handleMouseUp = () => {
    setIsSwiping(false);
    const snappedPosition = Math.round(currentPosition);
    setCurrentPosition(snappedPosition);
    pauseAllVideosExcept(-1);
  };

  const handleItemClick = index => {
    setCurrentPosition(index); // Set currentPosition to the index of the clicked video
    const player = playerRefs.current[index];
    if (activeVideoIndex === index) {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    } else {
      pauseAllVideosExcept(index);
      player.play();
      setActiveVideoIndex(index);
    }
  };

  const pauseAllVideosExcept = indexToKeepPlaying => {
    playerRefs.current.forEach((player, index) => {
      if (index !== indexToKeepPlaying) {
        player.pause();
      }
    });
    setActiveVideoIndex(indexToKeepPlaying);
  };

  return (
    <Container id="Projects">
      <Title>Project highlights</Title>
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <LeftArrow
          icon={faArrowLeft}
          className="arrow"
          onClick={handleLeftArrowClick}
          visible={currentPosition < videos.length - 1} // Show/hide left arrow based on visibility
        />
        <RightArrow
          icon={faArrowRight}
          className="arrow"
          onClick={handleRightArrowClick}
          visible={currentPosition > 0} // Show/hide right arrow based on visibility
        />
        {videos.map((video, index) => (
          <Item
            key={index}
            className="item"
            position={index}
            currentPosition={currentPosition}
            onClick={() => handleItemClick(index)}
          >
            <VideoContainer
              ref={ref => (playerRefs.current[index] = ref)}
              controls
              controlsList="nodownload"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoContainer>
            <VideoLink href={video.youtubeLink} target="_blank">
              <YoutubeIcon icon={faYoutube} />
            </VideoLink>
          </Item>
        ))}
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
