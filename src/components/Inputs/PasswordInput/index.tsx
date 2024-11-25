import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';

interface PasswordInputProps {
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, error, onChange, onBlur }) => {
  const { t } = useTranslation();

  const [type, setType] = useState<'password' | 'text'>('password');
  return (
    <div className={`password-input-wrapper ${error && 'input-error'}`}>
      <label htmlFor="password" className="password-input-label">
        {error || t('passwordPlaceholder')}
      </label>
      <input
        id="password"
        name="password"
        type={type}
        className="password-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === 'password' && !!value.length && (
        <button className="eye" onClick={() => setType('text')}>
          <i className="fa-solid fa-eye"></i>
        </button>
      )}
      {type === 'text' && !!value.length && (
        <button className="eye" onClick={() => setType('password')}>
          <i className="fa-solid fa-eye-slash"></i>
        </button>
      )}
    </div>
  );
};
export default PasswordInput;
