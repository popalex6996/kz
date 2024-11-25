import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { useAuth } from '../../../../hooks/useAuth';
import { removeUser } from '../../../../store/slices/userSlice';
import { ACCOUNT_TABS } from '../../../../utilities/constants';
import { AccountTabType, Modal } from '../../../../utilities/types';
import Avatar from '../../../Avatar';
import Spacer from '../../../Spacer';

const AccountModal = ({ hide }: { hide: (modal: Modal) => void }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // onClick={() => hide("account")}
  const navigate = useNavigate();

  const { photoURL, name, lastName } = useAuth();
  const onNavigate = (tab?: string) => () => {
    hide('account');
    navigate(`/account/${tab}`);
  };

  //Menu link component
  const Link = ({ tab, icon }: { tab: AccountTabType; icon: string }) => {
    return (
      <button className="account-link" onClick={onNavigate(tab)}>
        <i className={`fa-${icon} fa-solid link-icon`} />
        <Spacer width={5} />
        {t(tab)}
      </button>
    );
  };

  return (
    <div className="account-modal">
      <button className="close-account-modal-btn" onClick={() => hide('account')}>
        <i className="fa-solid fa-chevron-right" />
      </button>
      <button className="account-name-image" onClick={onNavigate()}>
        <Avatar src={photoURL || ''} name={name?.[0]} lastName={lastName?.[0]} onClick={() => {}} />
        <Spacer width={10} />
        <div>
          <span className="initials-text">
            {name} {lastName}
          </span>
        </div>
      </button>
      <div className="links">
        {/* Nav links */}
        {ACCOUNT_TABS.map(({ name, icon }) => (
          <Link key={name} tab={name} icon={icon} />
        ))}
      </div>

      <Spacer height={10} />

      <button
        className="exit-btn"
        onClick={() => {
          hide('account');
          dispatch(removeUser());
        }}
      >
        <i className={'fa-right-from-bracket fa-solid link-icon'} />
        <Spacer width={5} />
        {t('logout')}
      </button>
    </div>
  );
};

export default AccountModal;
