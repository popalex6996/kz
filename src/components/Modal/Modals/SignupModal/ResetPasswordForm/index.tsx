import React, { useState } from 'react';

import './index.css';
import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../../../../../firebase';
import { updateErrors, validation, ValidationNameType } from '../../../../../utilities/validation';
import EmailInput from '../../../../Inputs/EmailInput';
import Spacer from '../../../../Spacer';

interface ResetPasswordFormProps {
  setResetPasswordView: (value: boolean) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ setResetPasswordView }) => {
  const [isMailSent, setSent] = useState(false);

  const [formData, setFormData] = useState<{ email: string }>({
    email: '',
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

  const resetPassword = async (event: React.FormEvent) => {
    event.preventDefault();
    validation(formData, errors, setErrors);
    if (errors.length || !formData.email) return;
    await sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        setSent(true);
      })
      .catch((e) => {
        updateErrors(setErrors, 'email', e.code);
      });
  };

  return isMailSent ? (
    <div className="signup-form">
      <h1 className="reset-title">Перевірте вашу електронну пошту</h1>
      <Spacer height={50} />
      <span className="reset-text">
        На вказану Ваму елекронну пошту ({formData.email}) було відправлено листа з подальшими
        інструкціями з відновлення паролю
      </span>
      <Spacer height={50} />
      <button className="submit-btn" onClick={() => setResetPasswordView(false)}>
        Вхід
      </button>
    </div>
  ) : (
    <form id="reset-pasword" className="signup-form" onSubmit={resetPassword}>
      <h1 className="reset-title">Забули пароль?</h1>
      <Spacer height={50} />
      <EmailInput
        value={formData.email}
        error={errors?.find((e) => e.name === 'email')?.text}
        onChange={handleInputChange}
        onBlur={onInputBlur}
      />
      <Spacer height={25} />
      <span className="reset-text">
        Для відновлення паролю введіть будь ласка вашу електронну пошту, на неї буде надіслано листа
        з подальшими інструкціями для оновлення паролю.
      </span>
      <Spacer height={50} />
      <button className="submit-btn" type="submit">
        Відновити
      </button>
    </form>
  );
};

export default ResetPasswordForm;
