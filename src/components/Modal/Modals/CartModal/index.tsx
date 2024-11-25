import React from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ORDER } from '../../../../utilities/constants';
import { Modal } from '../../../../utilities/types';
import Button from '../../../Button';
import CartProducts from '../../../CartProducts';

import './index.css';

const CartModal = ({ hide }: { hide: (modal: Modal) => void }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Cart close button */}
      <Button
        icon="cart-shopping"
        onClick={() => hide('cart')}
        className="cart-close-btn"
        iconClassName="fa-solid"
      />

      {/* Cart modal title */}
      <span className="cart-button-content-title">{t('cart')}</span>

      {/* Cart modal products list */}
      <CartProducts products={ORDER.products} isModal />

      {/* Cart modal total price */}
      <div className="cart-btn-total-price-wrapper">
        {/* Total price text */}
        <span className="cart-btn-total-price">
          {t('total-price')} {ORDER.price}
          {t('grn')}
        </span>

        {/* Nav to Cart page button*/}
        <Button
          onClick={() => {
            hide('cart');
            navigate('/cart');
          }}
          label={t('goToCheckoutBtn')}
          icon="chevron-right"
          iconClassName="fa-solid"
          className="cart-btn-to-checkout-btn"
        />
      </div>
    </>
  );
};

export default CartModal;
