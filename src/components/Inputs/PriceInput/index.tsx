import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';

interface PriceInputProps {
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ value, error, onChange, onBlur }) => {
  const { t } = useTranslation();

  return (
    <div className={`price-input-wrapper ${error && 'input-error'}`}>
      <label htmlFor="price" className="price-input-label">
        {error || t('priceInputPlaceholder')}
      </label>
      <input
        id="price"
        name="price"
        type="text"
        className="price-input"
        value={value}
        onChange={(e) => {
          if (e.target.value.match(/[^\d]/) || +e.target.value[0] < 1) {
            e.preventDefault();
          } else onChange(e);
        }}
        onBlur={onBlur}
      />
      <div className="currency">{t('grn')}</div>
    </div>
  );
};
export default PriceInput;
