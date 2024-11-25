import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';

interface NameInputProps {
  name: 'displayName' | 'name' | 'lastName' | 'productName';
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, value, error, onChange, onBlur }) => {
  const { t } = useTranslation();
  return (
    <div className={`name-input-wrapper ${error && 'input-error'}`}>
      <label htmlFor={name} className="name-input-label">
        {error || t(`${name}InputPlaceholder`)}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        className="name-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
export default NameInput;
