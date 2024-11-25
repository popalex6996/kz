import React, { useEffect, useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import CartTab from './Tabs/CartTab';
import FavouritesTab from './Tabs/FavouritesTab';
import OrdersTab from './Tabs/OrdersTab';
import PersonalDataTab from './Tabs/PersonalTab';
import ProductsTab from './Tabs/ProductsTab';
import Spacer from '../../components/Spacer';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import { ACCOUNT_TABS } from '../../utilities/constants';
import { AccountTabs } from '../../utilities/types';

// Account tabs content components
const tabs = {
  'personal-data': <PersonalDataTab />,
  favourites: <FavouritesTab />,
  cart: <CartTab />,
  orders: <OrdersTab />,
  'my-products': <ProductsTab />,
  'add-product': <ProductsTab />,
};

const Account = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  //Active tab variable
  const [activeTab, setTab] = useState<AccountTabs>('personal-data');

  //Navigate on logout to Home page
  useEffect(() => {
    if (!isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  //Set active tab form route(from account modal)
  useEffect(() => {
    if (state?.activeTab) {
      setTab(state?.activeTab);
    }
  }, [state?.activeTab]);

  //Tabs buttons component
  const AccountTab = ({ name, icon }: { name: AccountTabs; icon: string }) => (
    <button
      onClick={() => setTab(name)}
      className={activeTab === name ? 'account-menu-active-button' : 'account-menu-button'}
    >
      <div className="account-menu-icon-wrapper">
        <i className={`fa-solid fa-${icon}`} />
      </div>
      <Spacer width={10} />
      <span className="account-menu-tab-name">{t(name)}</span>
    </button>
  );

  return (
    <div className="account-wrapper">
      <div className="account-menu">
        {/* Tabs buttons */}
        {ACCOUNT_TABS.map(({ name, icon }) => (
          <AccountTab key={name} name={name} icon={icon} />
        ))}

        {/* Logout button */}
        <button onClick={() => dispatch(removeUser())} className="account-menu-button">
          <div className="account-menu-icon-wrapper">
            <i className="fa-solid fa-right-from-bracket" />
          </div>
          <Spacer width={10} />
          <span className="account-menu-tab-name">{t('logout')}</span>
        </button>
      </div>

      <Spacer width={20} />

      <div className="account-content">
        {/* Active tab component */}
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default Account;
