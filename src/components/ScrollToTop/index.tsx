import React, { useEffect, useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

const ScrollToTop: React.FC = () => {
  const { t } = useTranslation();

  const [isScroll, setScroll] = useState(false);
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition > 500);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="scroll-top"
      className={isScroll ? 'scroll-to-top-wrapper' : 'scroll-to-top-wrapper-hide'}
    >
      <span className="scroll-to-top-tooltip">{t('scrollToTop')}</span>
      <Button
        onClick={onClick}
        className="scroll-to-top"
        icon="chevron-up"
        iconClassName="fa-solid"
      />
    </div>
  );
};
export default ScrollToTop;
