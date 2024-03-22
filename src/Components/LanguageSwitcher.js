import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; 

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div>
      <button
        className={`language-button ${currentLanguage === 'en' ? 'en' : 'sv'}`}
        onClick={() => changeLanguage('en')}
        style={{ backgroundColor: currentLanguage === 'en' ? '#006AA7' : '', transform: currentLanguage === 'en' ? 'scale(1.1)' : '' }}
      >
        EN
      </button>
      <button
        className={`language-button ${currentLanguage === 'sv' ? 'en' : 'sv'}`}
        onClick={() => changeLanguage('sv')}
        style={{ backgroundColor: currentLanguage === 'sv' ? '#006AA7' : '', transform: currentLanguage === 'sv' ? 'scale(1.1)' : '' }}

      >
        SV
      </button>
    </div>
  );
};

export default LanguageSwitcher;
