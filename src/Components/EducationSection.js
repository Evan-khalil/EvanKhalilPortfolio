import React, { useEffect, useState, useRef } from 'react';
import './EducationSection.css';
import { useTranslation } from 'react-i18next';

const Title = ({ isVisible }) => {
  const { t } = useTranslation();
  const titleRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      titleRef.current.classList.add('show-title');
    } else {
      titleRef.current.classList.remove('show-title');
    }
  }, [isVisible]);

  return (
    <div className={`vertical-title ${isVisible ? 'show-title' : ''}`} style={{ zIndex: 2 }}>
      <h1 ref={titleRef} id='eduTitle'>{t('education')}</h1>
    </div>
  );
};

const FlipCard = ({ frontColor, backTitle, backContent, additionalText, backColor }) => {
  const { t } = useTranslation();

  return (
    <div className="flip">
      <div className="front" style={{ backgroundColor: frontColor }}>
        <h1 className="text-shadow">{t(backTitle)}</h1>
      </div>
      <div className="back" style={{ backgroundColor: backColor }}>
        <h2>{t(backTitle)}</h2>
        <p>{t(backContent)}</p>
        <span className="additional-text">{t(additionalText)}</span>
      </div>
    </div>
  );
};

const CenteredFlipCards = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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

    observer.observe(document.getElementById('eduTitle'));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" style={{ position: 'relative' }}>
      <Title isVisible={isVisible} />
      <div className="center-container">
        <div className="flip-container">
          <FlipCard
            frontColor="#264653"
            backColor="#e9c46a"
            backTitle="bachelorInformationSystems"
            backContent="infoSystemsContent"
            additionalText="örebroUni"
          />
          <FlipCard
            frontColor="#287271"
            backColor="#f4a261"
            backTitle="programmingInternet"
            backContent="programmingInternetContent"
            additionalText="stockholmUni"
          />
          <FlipCard
            frontColor="#2a9d8f"
            backColor="#e76f51"
            backTitle="webDevelopmentII"
            backContent="webDevelopmentIIContent"
            additionalText="stockholmUni"
          />
        </div>

        <div className="flip-container">
          <FlipCard
            frontColor="#e9c46a"
            backColor="#264653"
            backTitle="programmingCSharpIII"
            backContent="programmingCSharpIIIContent"
            additionalText="malmöUni"
          />
          <FlipCard
            frontColor="#f4a261"
            backColor="#287271"
            backTitle="computerNetworksI"
            backContent="computerNetworksIContent"
            additionalText="mälardalenUni"
          />
          <FlipCard
            frontColor="#e76f51"
            backColor="#2a9d8f"
            backTitle="gameDevelopment3D"
            backContent="gameDevelopment3DContent"
            additionalText="blekingeCollege"
          />
        </div>
      </div>
    </section>
  );
};

export default CenteredFlipCards;
