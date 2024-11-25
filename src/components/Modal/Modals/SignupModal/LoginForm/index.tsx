import React, { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../../../firebase';
import { useAppDispatch } from '../../../../../hooks/redux-hooks';
import { setUser } from '../../../../../store/slices/userSlice';
import { Modal } from '../../../../../utilities/types';
import { updateErrors, validation } from '../../../../../utilities/validation';
import EmailInput from '../../../../Inputs/EmailInput';
import PasswordInput from '../../../../Inputs/PasswordInput';
import Socials from '../../../../Socials';
import Spacer from '../../../../Spacer';

interface LoginFormProps {
  hide: (modal: Modal) => void;
  setResetPasswordView: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ hide, setResetPasswordView }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
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
    validation(formData, errors, setErrors, name as 'email' | 'password');
  };

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    validation(formData, errors, setErrors);
    if (errors.length || !formData.email || !formData.password) return;
    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        console.log('user =>', user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            displayName: user.displayName,
            name: user.displayName?.split(' ')[0],
            lastName: user.displayName?.split(' ')[1],
            photoURL: user.photoURL,
            password: formData.password,
          }),
        );
        navigate('/home');
        hide('signup');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-credential') {
          updateErrors(setErrors, 'email', 'Не вірний email');
          updateErrors(setErrors, 'password', 'та/або пароль');
        }
      });
  };

  return (
    <form id="login" className="signup-form" onSubmit={onLogin}>
      <EmailInput
        value={formData.email}
        error={errors?.find((e) => e.name === 'email')?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={20} />
      <PasswordInput
        value={formData.password}
        error={errors?.find((e) => e.name === 'password')?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={10} />
      <div className="reset-pass-wrapper">
        <button className="reset-pass-btn" onClick={setResetPasswordView}>
          {t('forgetPassword')}
        </button>
      </div>
      <Spacer height={30} />
      <button className="submit-btn" type="submit">
        {t('login')}
      </button>
      <Spacer height={15} />
      <span>{t('or')}</span>
      <Socials hide={hide} />
    </form>
  );
};

export default LoginForm;
