import React, { useEffect, useState, useRef } from 'react';
import './AboutSection.css';

// Component for the About section
const About = () => {
  const [text, setText] = useState(''); // State for displaying typed text
  const [isVisible, setIsVisible] = useState(false); // State to track if section is visible
  const [currentLanguage, setCurrentLanguage] = useState('english'); // State to track current language
  const titleRef = useRef(null); // Ref for the title element

  // Translations for the about section
  const translations = {
    english: {
      aboutLines: [
        "Welcome to my portfolio! I'm thrilled to introduce myself as Evan Khalil, a recent graduate from Örebro University's Information Systems program. As I embark on my journey into the realm of system development, I'm brimming with enthusiasm to make my mark in the industry.",
        "Driven by an insatiable thirst for skill enhancement, I consider myself a highly motivated individual. My philosophy revolves around optimizing work processes to enhance our quality of life.",
        "Through my academic journey and practical experiences, I've honed crucial attributes like attention to detail, critical thinking, and problem-solving – qualities I'm eager to apply to every project I undertake.",
        "Within this portfolio, you'll discover a showcase of my past endeavors and achievements. Each represents a stepping stone in my professional growth, and I'm excited about the prospects that lie ahead.",
        "Should you have any inquiries or wish to explore potential collaborations, please feel free to reach out. Thank you for taking the time to visit my portfolio – I appreciate your interest."
      ]
    },
    swedish: {
      aboutLines: [
        "Välkommen till min portfölj! Jag är mycket glad att presentera mig själv som Evan Khalil, nyligen utexaminerad från Örebro universitets program för informationssystem. När jag ger mig in i världen av systemutveckling, är jag fylld av entusiasm för att göra min mark i branschen.",
        "Driven av en outsläcklig törst efter kompetensförbättring, ser jag mig själv som en högst motiverad individ. Min filosofi kretsar kring att optimera arbetsprocesser för att förbättra vår livskvalitet.",
        "Genom min akademiska resa och praktiska erfarenheter har jag slipat avgörande egenskaper som uppmärksamhet på detaljer, kritiskt tänkande och problemlösning - egenskaper jag ivrigt vill tillämpa på varje projekt jag tar mig an.",
        "Inom denna portfölj kommer du att upptäcka en samling av mina tidigare insatser och prestationer. Var och en utgör en milstolpe i min professionella utveckling, och jag ser med spänning fram emot de möjligheter som ligger framför oss.",
        "Om du har några frågor eller vill utforska potentiella samarbeten, tveka inte att höra av dig. Tack för att du tog dig tid att besöka min portfölj - jag uppskattar ditt intresse."
      ]
    }
  };

  // Function to handle language change
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const typingSpeed = 5; // Speed of typing effect
  const eraseDelay = 700; // Delay before erasing text
  const paragraphHeight = 70; // Height of the paragraph container
  const initialDelay = 500; // Initial delay before typing starts

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let eraseTimer;

    const aboutLines = translations[currentLanguage].aboutLines; // Get translated lines

    const typeLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex + 1));
      charIndex++;

      if (charIndex <= aboutLines[lineIndex].length) {
        setTimeout(typeLine, typingSpeed);
      } else {
        eraseTimer = setTimeout(eraseLine, eraseDelay);
      }
    };

    const eraseLine = () => {
      setText((prevText) => aboutLines[lineIndex].substring(0, charIndex - 1));
      charIndex--;

      if (charIndex >= 0) {
        setTimeout(eraseLine, typingSpeed);
      } else {
        lineIndex = (lineIndex + 1) % aboutLines.length;
        charIndex = 0;
        setTimeout(typeLine, typingSpeed);
      }
    };

    const startTypewriter = () => {
      setTimeout(typeLine, initialDelay);
    };

    startTypewriter();

    return () => clearTimeout(eraseTimer);
  }, [currentLanguage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1000);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(titleRef.current);

    return () => {
      observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`vertical-title ${isVisible ? 'show-title' : ''}`}>
          <h1 ref={titleRef} id='title'>About</h1>
        </div>
        <p className="typewriter" style={{ height: paragraphHeight }}>
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </p>
      </div>
    </section>
  );
};

export default About;
