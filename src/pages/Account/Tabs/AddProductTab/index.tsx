import React, { useState } from 'react';

import './index.css';
import { useTranslation } from 'react-i18next';

import DescriptionInput from '../../../../components/Inputs/DescriptionInput';
import EmailInput from '../../../../components/Inputs/EmailInput';
import NameInput from '../../../../components/Inputs/NameInput';
import PriceInput from '../../../../components/Inputs/PriceInput';
import Select from '../../../../components/Select';
import Spacer from '../../../../components/Spacer';
import { useAuth } from '../../../../hooks/useAuth';
import { CATEGORIES, SUB_CATEGORIES } from '../../../../utilities/constants';
import { CategoryName } from '../../../../utilities/types';
import { validation, ValidationNameType } from '../../../../utilities/validation';

const AddProductTab = () => {
  const { t } = useTranslation();

  const { name, email, phoneNumber } = useAuth();

  const [formData, setFormData] = useState({
    name,
    email,
    phoneNumber,
    productName: '',
    price: '',
    description: '',
    category: '',
    subCategory: '',
  });

  const [errors, setErrors] = useState<{ name: string; text: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    validation(formData, errors, setErrors, name as ValidationNameType);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSelectBlur = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name } = e.target;
    validation(formData, errors, setErrors, name as ValidationNameType);
  };

  const onAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    // if (name === formData.name && lastName === formData.lastName) return;
  };

  return (
    <form id="add-product" className="add-product-form" onSubmit={onAdd}>
      <div className="add-product-form-row">
        <h1 className="add-product-contacts">Про товар:</h1>
      </div>
      <div className="add-product-form-row">
        <div className="add-product-data-input-wrapper">
          <NameInput
            name="productName"
            value={formData.productName || ''}
            error={errors?.find((e) => e.name === 'productName')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
        <Spacer width={20} />
        <div className="add-product-data-input-wrapper">
          <PriceInput
            value={formData.price || ''}
            error={errors?.find((e) => e.name === 'price')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      <Spacer height={20} />
      <div className="add-product-form-row">
        <div className="add-product-data-input-wrapper">
          <Select
            value={formData.category}
            options={CATEGORIES}
            name="category"
            error={errors?.find((e) => e.name === 'category')?.text}
            onChange={handleSelectChange}
            onBlur={onSelectBlur}
          />
        </div>
        <Spacer width={20} />
        <div className="add-product-data-input-wrapper">
          <Select
            value={formData.subCategory}
            options={SUB_CATEGORIES[formData.category as CategoryName] || []}
            name="subCategory"
            disabled={!formData.category || formData.category === 'other'}
            error={errors?.find((e) => e.name === 'subCategory')?.text}
            onChange={handleSelectChange}
            onBlur={onSelectBlur}
          />
        </div>
      </div>
      <Spacer height={20} />
      <div className="add-product-form-row">
        <div className="add-product-data-description-input-wrapper">
          <DescriptionInput
            value={formData.description || ''}
            error={errors?.find((e) => e.name === 'description')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      <Spacer height={40} />
      <div className="add-product-form-row">
        <h1 className="add-product-contacts">Контактні данні продавця:</h1>
      </div>
      <div className="add-product-form-row">
        <div className="add-product-data-input-wrapper">
          <NameInput
            name="name"
            value={formData.name || ''}
            error={errors?.find((e) => e.name === 'name')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
        <Spacer width={20} />
        <div className="add-product-data-input-wrapper">
          <EmailInput
            value={formData.email || ''}
            error={errors?.find((e) => e.name === 'email')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      <Spacer height={20} />
      <div className="add-product-data-save-btn-wrapper">
        <button className="add-product-data-save-btn" type="submit">
          {t('addProduct')}
        </button>
      </div>
    </form>
  );
};

export default AddProductTab;
