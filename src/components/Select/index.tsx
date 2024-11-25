import React from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import { Category, CategoryName, SubCategory, SubCategoryName } from '../../utilities/types';

interface SelectProps {
  value?: string;
  options: Category[] | SubCategory[];
  name: 'category' | 'subCategory';
  disabled?: boolean;
  error: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  value,
  options,
  name,
  disabled = false,
  error,
  onChange,
  onBlur,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`category-select-wrapper ${error && 'select-error'} ${
        disabled && 'select-disabled'
      }`}
    >
      <label htmlFor={name} className="category-select-label">
        {error || t(`${name}InputPlaceholder`)}
      </label>
      <select
        className="category-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {!value && <option value="">Select an option</option>}
        {options.map(({ name }: { name: CategoryName | SubCategoryName }) => (
          <option key={name} value={name}>
            {t(name)}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
