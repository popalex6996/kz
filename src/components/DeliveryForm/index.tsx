import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import { Delivery } from '../../utilities/types';
import Spacer from '../Spacer';

interface DeliveryFormProps {
  delivery: Delivery;
  setDelivery: (delivery: Delivery) => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ delivery, setDelivery }) => {
  const { t } = useTranslation();

  return (
    <div className="delivery-form">
      <div
        className={`delivery-option ${delivery === 'sd' && 'active-delivery-option'}`}
        onClick={() => setDelivery('sd')}
      >
        <div className="delivery-option-input">
          <input type="radio" id="sd" name="delivery" value="sd" checked={delivery === 'sd'} />
          <Spacer width={10} />
          <label htmlFor="sd" className="delivery-option-label">
            <span className="delivery-option-label-text">{t('sd')}</span>
            <span className="delivery-option-price-text">({t('sdFree')})</span>
          </label>
        </div>
        {delivery === 'sd' && <Spacer height={10} />}
        {delivery === 'sd' && (
          <div className="delivery-option-details">
            <span className="delivery-option-details-text">{t('freeDeliveryText')}</span>
          </div>
        )}
      </div>

      <div
        className={`delivery-option ${delivery === 'np' && 'active-delivery-option'}`}
        onClick={() => setDelivery('np')}
      >
        <div className="delivery-option-input">
          <input type="radio" id="np" name="delivery" value="np" checked={delivery === 'np'} />
          <Spacer width={10} />
          <label htmlFor="np" className="delivery-option-label">
            <span className="delivery-option-label-text">{t('np')}</span>
            <span className="delivery-option-price-text">({t('npTariff')})</span>
          </label>
        </div>

        {delivery === 'np' && <div className="delivery-option-details">mkljnk</div>}
      </div>

      <div
        className={`delivery-option ${delivery === 'up' && 'active-delivery-option'}`}
        onClick={() => setDelivery('up')}
      >
        <div className="delivery-option-input">
          <input type="radio" id="up" name="delivery" value="up" checked={delivery === 'up'} />
          <Spacer width={10} />
          <label htmlFor="up" className="delivery-option-label">
            <span className="delivery-option-label-text">{t('up')}</span>
            <span className="delivery-option-price-text">({t('upTariff')})</span>
          </label>
        </div>

        {delivery === 'up' && <div className="delivery-option-details">mkljnk</div>}
      </div>
    </div>
  );
};
export default DeliveryForm;
