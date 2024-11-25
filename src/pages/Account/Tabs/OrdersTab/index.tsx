import React, { useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import Spacer from '../../../../components/Spacer';
import { ORDERS } from '../../../../utilities/constants';

const OrdersTab = () => {
  const { t } = useTranslation();

  const [orderDetails, setDetails] = useState(false);

  const toggleCatalog = () => {
    const catalogShadow = document.getElementById('catalog-shadow');
    catalogShadow?.classList.toggle('catalog-shadow-visible');
    const cart = document.getElementById('catalog');
    cart?.classList.toggle('catalog-open');
  };

  return (
    <div className="orders-wrapper">
      {!ORDERS.length ? (
        <div className="no-orders-wrapper">
          <Spacer height={30} />
          <h2 className="no-orders-title">{t('user-no-orders')}</h2>
          <Spacer height={30} />
          <Button
            onClick={toggleCatalog}
            className="user-add-products-btn"
            label={t('store')}
            icon="cart-plus"
            iconClassName="fa-solid"
          />
          <Spacer height={30} />
        </div>
      ) : (
        <div className="orders">
          {ORDERS.map((o) => (
            <div className="order-wrapper" key={o.id}>
              <div className="order-details">
                <div className="order-id-date">
                  {t('Order')}: <span className="order-value">{o.id}</span> -{' '}
                  <span className="order-value">{o.date}</span>
                </div>
                <div className="order-status">
                  {t('status')}: <span className="order-value">{o.status}</span>
                </div>
                <div className="order-price">
                  {t('price')}: <span className="order-value">{o.price}</span>
                </div>
                <div className="chevron-more">
                  <Button
                    onClick={() => setDetails((prevState) => !prevState)}
                    label={orderDetails ? t('hideDetailsBtn') : t('moreDetailsBtn')}
                    icon={orderDetails ? 'chevron-up' : 'chevron-down'}
                    iconClassName="fa-solid"
                    className="order-details-btn"
                  />
                </div>
              </div>
              {orderDetails && <Spacer height={20} />}
              {orderDetails && (
                <div className="order-details">
                  <div className="order-products">
                    {o.products.map((op) => (
                      <div className="order-product-wrapper" key={op.id}>
                        <div>image</div>
                        <Spacer width={20} />
                        <div>
                          {op.name} - {op.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="order-delivery">
                    {t('delivery')}: <span className="order-value">{o.delivery}</span>
                  </div>
                </div>
              )}
              {orderDetails && <Spacer height={20} />}
              {orderDetails && (
                <div className="order-details">
                  <Button
                    onClick={() => {}}
                    icon="circle-exclamation"
                    label={t('problemReportBtn')}
                    className="problem-btn order-details-btn"
                    iconClassName="fa-solid"
                  />
                  <Button
                    onClick={() => {}}
                    icon="rotate"
                    label={t('buyMoreBtn')}
                    className="buy-again-btn order-details-btn"
                    iconClassName="fa-solid"
                  />
                  <Button
                    onClick={() => {}}
                    icon="comment"
                    label={t('commentBtn')}
                    className="comment-btn order-details-btn"
                    iconClassName="fa-solid"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersTab;
