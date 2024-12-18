import React, { useState } from 'react';

import './index.css';
import { updateProfile } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { setUser } from '../../store/slices/userSlice';
import { validation, ValidationNameType } from '../../utilities/validation';
import EmailInput from '../Inputs/EmailInput';
import NameInput from '../Inputs/NameInput';
import PasswordInput from '../Inputs/PasswordInput';
import Spacer from '../Spacer';

const PersonalDataForm: React.FC = () => {
  const { t } = useTranslation();
  const { name, lastName, email, password } = useAuth();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name,
    lastName,
    email,
    password,
  });

  const [errors, setErrors] = useState<{ name: string; text: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    validation(formData, errors, setErrors, name as ValidationNameType);
  };

  const onSave = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name === formData.name && lastName === formData.lastName) return;
    const displayName = formData.name + ' ' + formData.lastName;
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName,
      })
        .then(() => {
          dispatch(
            setUser({
              displayName,
              name: formData.name,
              lastName: formData.lastName,
            }),
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form id="personal-data" className="personal-data-form" onSubmit={onSave}>
      <div className="personal-data-form-row">
        <div className="personal-data-input-wrapper">
          <NameInput
            name="name"
            value={formData.name || ''}
            error={errors?.find((e) => e.name === 'name')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
        <Spacer width={20} />
        <div className="personal-data-input-wrapper">
          <NameInput
            name="lastName"
            value={formData.lastName || ''}
            error={errors?.find((e) => e.name === 'lastName')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
      </div>
      <Spacer height={20} />
      <div className="personal-data-form-row">
        <div className="personal-data-input-wrapper">
          <EmailInput
            value={formData.email || ''}
            error={errors?.find((e) => e.name === 'email')?.text}
            onChange={handleInputChange}
            onBlur={onInputBlur}
          />
        </div>
        <div className="personal-data-input-wrapper">
          {password && (
            <PasswordInput
              value={formData.password || ''}
              error={errors?.find((e) => e.name === 'password')?.text}
              onChange={handleInputChange}
              onBlur={onInputBlur}
            />
          )}
        </div>
      </div>
      <Spacer height={20} />
      <div className="personal-data-save-btn-wrapper">
        <button className="personal-data-save-btn" type="submit">
          {t('saveBtn')}
        </button>
      </div>
    </form>
  );
};
export default PersonalDataForm;
