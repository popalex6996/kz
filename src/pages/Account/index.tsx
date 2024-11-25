import React, { useEffect, useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import AddProductTab from './Tabs/AddProductTab';
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
import { AccountTabType } from '../../utilities/types';

// Account tabs content components
const tabs = {
  'personal-data': <PersonalDataTab />,
  favourites: <FavouritesTab />,
  cart: <CartTab />,
  orders: <OrdersTab />,
  'my-products': <ProductsTab />,
  'add-product': <AddProductTab />,
};

const Account = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { tab } = useParams();
  const { isAuth } = useAuth();

  //Active tab variable
  const [activeTab, setTab] = useState<AccountTabType>('personal-data');

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTab(tab as AccountTabType);
  }, [tab]);

  //Navigate on logout to Home page
  useEffect(() => {
    if (!isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  //Tabs buttons component
  const AccountTab = ({ name, icon }: { name: AccountTabType; icon: string }) => (
    <button
      onClick={() => navigate(`/account/${name}`)}
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
