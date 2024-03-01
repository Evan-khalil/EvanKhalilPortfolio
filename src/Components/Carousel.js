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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  position: relative;
  user-select: none;
`;

const Item = styled.div`
  position: absolute;
  width: 300px; /* Adjusted width */
  height: 400px; /* Adjusted height */
  background-color: coral;
  transition: transform 0.3s ease; /* Adjust transition timing for smoother animation */
  transform: ${props =>
    `rotateY(calc(10deg * ${props.currentPosition - props.position})) translateX(calc(350px * ${props.currentPosition - props.position}))`}; /* Adjusted translation */
  z-index: ${props => 5 - Math.abs(props.position - props.currentPosition)};
  cursor: pointer;
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  touch-action: pan-y; /* Allow vertical scrolling */
  user-select: none; /* Disable text selection */
  background-color: black; /* Set background color to black */
`;

const VideoLink = styled.a`
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
  border: 2px solid white; /* Add border */
  padding: 8px 15px; /* Adjust padding */
  border-radius: 20px; /* Adjust border-radius */
  transition: background-color 0.3s, color 0.3s; /* Add transition */
  &:hover {
    background-color: white;
    color: black;
  }
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
  const [activeVideoIndex, setActiveVideoIndex] = useState(-1); // Track active video
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

  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
    pauseAllVideosExcept(-1);
  };

  const handleTouchMove = e => {
    if (!isSwiping) return;

    const x = e.touches[0].clientX;
    const difference = x - startX;
    let newPosition = currentPosition + difference / 2000; // Adjust divisor to control swiping speed

    // Ensure the carousel doesn't swipe beyond the first or last item
    newPosition = Math.max(0, Math.min(newPosition, videos.length - 1));

    setCurrentPosition(newPosition);
    pauseAllVideosExcept(-1);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);

    // Snap to the nearest video
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
    let newPosition = currentPosition + difference / 2000; // Adjust divisor to control swiping speed

    // Ensure the carousel doesn't swipe beyond the first or last item
    newPosition = Math.max(0, Math.min(newPosition, videos.length - 1));

    setCurrentPosition(newPosition);
    pauseAllVideosExcept(-1);
  };

  const handleMouseUp = () => {
    setIsSwiping(false);

    // Snap to the nearest video
    const snappedPosition = Math.round(currentPosition);
    setCurrentPosition(snappedPosition);
    pauseAllVideosExcept(-1);
  };

  const handleItemClick = index => {
    // Toggle play/pause for the clicked video
    const player = playerRefs.current[index];
    if (activeVideoIndex === index) {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    } else {
      // Pause all videos except the clicked one
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
        {videos.map((video, index) => (
          <Item
            key={index}
            className="item"
            position={index}
            currentPosition={currentPosition}
            onClick={() => handleItemClick(index)}
          >
            <VideoContainer
              ref={ref => playerRefs.current[index] = ref}
              controls
              controlsList="nodownload" // Prevent download button from appearing
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoContainer>
            <VideoLink href={video.youtubeLink} target="_blank">Watch on YouTube</VideoLink>
          </Item>
        ))}
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
