import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import LanguageSwitch from '../LanguageSwitch';
import ModalButton from '../Modal/ModalButton';
import SocialLinks from '../SocialLinks';
import Spacer from '../Spacer';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const toggleCatalog = () => {
    const catalogShadow = document.getElementById('catalog-shadow');
    catalogShadow?.classList.toggle('catalog-shadow-visible');
    const cart = document.getElementById('catalog');
    cart?.classList.toggle('catalog-open');
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <div className="nav-links">
          <div className="nav-links-row">
            {/* Footer Login button */}
            <ModalButton type="footerLogin" />

            <Spacer width={10} />
            <div className="footer-links-border" />
            <Spacer width={10} />

            {/* Footer Signup button */}
            <ModalButton type="footerSignup" />
          </div>
          <a className="nav-link" href="/platform">
            {t('platform')}
          </a>
        </div>
        <div className="nav-links">
          <div className="nav-links">
            <button onClick={toggleCatalog} className="nav-link">
              {t('store')}
            </button>
          </div>
        </div>
        <div className="lang-socials-wrapper">
          <LanguageSwitch />
          <Spacer height={15} />
          <SocialLinks />
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="copyright">
          {t('copyright')}{' '}
          <a href="/privacy" target="_blank" className="copyright-terms-link">
            {t('terms2')}
            {', '}
          </a>
          <a href="/terms" target="_blank" className="copyright-terms-link">
            {t('userAgreement')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
