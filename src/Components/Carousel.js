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
  grid-template-columns: auto 1fr 30px 30px 30px 30px 30px;
  align-items: center;
  justify-items: center;
  padding-top: 30%;
  padding-bottom: 50%;
  position: relative; /* Added position relative for arrow positioning */
`;

const Title = styled.h1`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  text-align: left;
  color: white;
  writing-mode: vertical-rl; /* Set text to vertical orientation */
  transform: rotate(0deg); /* Rotate text for correct orientation */
  margin: 0; /* Reset margin */
  padding-top: 600px; /* Reset padding */
  white-space: nowrap; /* Prevent text from wrapping */
  justify-self: center; /* Center text horizontally */
  align-self: center; /* Center text vertically */
  z-index: 10; /* Ensure the title is above videos */
  opacity: ${props => (props.visible ? '0.40' : '0')}; /* Initially hidden */
  transition: opacity 0.5s ease; /* Smooth transition for visibility */
  font-size:100px;
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
  z-index: 11; /* Adjusted z-index to be higher than videos */
`;

const LeftArrow = styled(Arrow)`
  left: 120px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const RightArrow = styled(Arrow)`
  right: 120px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Item = styled.div`
  position: absolute;
  width: 270px;
  height: 400px;
  background-color: coral;
  transition: transform 0.4s ease;
  transform: ${props =>
    `rotateY(calc(-9deg * ${props.currentPosition - props.position})) translateX(calc(310px * ${props.currentPosition - props.position})) ${props.currentPosition === props.position ? 'scale(1.6)' : 'scale(1)'}`}; /* Adjusted space between videos and added scale transform */
  z-index: ${props => 5 - Math.abs(props.position - props.currentPosition)};
  cursor: grabbing;

  @media (max-width: 1024px) {
    width: 230px; /* Adjusted width for iPads */
    height: 300px; /* Adjusted height for iPads */
  }
  @media (max-width: 768px) {
    width: 180px; /* Adjusted width for phones */
    height: 225px; /* Adjusted height for phones */
  }
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
  const [showArrows, setShowArrows] = useState(true);
  const [showTitle, setShowTitle] = useState(false); // Added state for controlling title visibility
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(-1);
  const playerRefs = useRef([]);

  useEffect(() => {
    initializeVideos();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowTitle(true); // Show title when section comes into view
          setTimeout(() => {
            setShowTitle(false); // Hide title after 500ms
          }, 500);
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });

    const section = document.getElementById('Projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
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

  const handleItemTouch = index => {
    handleItemClick(index);
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
      <Title visible={showTitle}>Projects</Title> {/* Set title visibility */}
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
          visible={currentPosition < videos.length - 1 && showArrows} 
        />
        <RightArrow
          icon={faArrowRight}
          className="arrow"
          onClick={handleRightArrowClick}
          visible={currentPosition > 0 && showArrows} 
        />
        {videos.map((video, index) => (
          <Item
            key={index}
            className="item"
            position={index}
            currentPosition={currentPosition}
            onClick={() => handleItemClick(index)}
            onTouchStart={() => handleItemTouch(index)}
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
