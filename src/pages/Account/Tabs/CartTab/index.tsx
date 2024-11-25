import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import ExpandableCartProducts from '../../../../components/ExpandableCartProducts';
import Spacer from '../../../../components/Spacer';
import { ORDER } from '../../../../utilities/constants';

const CartTab = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="account-cart-wrapper">
      <div className="account-cart-total-price-wrapper">
        <span>
          {t('total-price')} {ORDER.price}
          {t('grn')}
        </span>
        <Button
          onClick={() => navigate('/cart')}
          label={t('goToCheckoutBtn')}
          icon="chevron-right"
          iconClassName="fa-solid"
          className="to-checkout-btn"
        />
      </div>
      <Spacer height={20} />
      <ExpandableCartProducts products={ORDER.products} />
    </div>
  );
};

export default CartTab;
