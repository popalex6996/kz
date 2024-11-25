import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';

interface EmailInputProps {
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, error, onChange, onBlur }) => {
  const { t } = useTranslation();
  return (
    <div className={`email-input-wrapper ${error && 'input-error'}`}>
      <label htmlFor="email" className="email-input-label">
        {error || t('emailPlaceholder')}
      </label>
      <input
        id="email"
        name="email"
        type="text"
        className="email-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
export default EmailInput;
