import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <div className="lang-switch-wrapper">
      <button
        className={`lang-btn ${i18n.language === 'ua' && ' active-lang-btn'}`}
        onClick={() => i18n.changeLanguage('ua')}
      >
        UA
      </button>
      <div className="lang-switch-border" />
      <button
        className={`lang-btn ${i18n.language === 'en' && ' active-lang-btn'}`}
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
