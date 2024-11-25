import './index.css';
import React from 'react';

import { useTranslation } from 'react-i18next';

import { Modal } from '../../../../utilities/types';

const FooterLoginButton = ({ show }: { show: (modal: Modal) => void }) => {
  const { t } = useTranslation();
  return (
    <div className="nav-link" onClick={() => show('signup')}>
      {t('login')}
    </div>
  );
};

export default FooterLoginButton;
