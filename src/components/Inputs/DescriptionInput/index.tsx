import React from 'react';

import { useTranslation } from 'react-i18next';
import './index.css';

interface DescriptionInputProps {
  value: string;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ value, error, onChange, onBlur }) => {
  const { t } = useTranslation();
  return (
    <div className={`description-input-wrapper ${error && 'input-error'}`}>
      <label htmlFor="description" className="description-input-label">
        {error || t('descriptionInputPlaceholder')}
      </label>
      <textarea
        id="description"
        name="description"
        className="description-input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
export default DescriptionInput;
