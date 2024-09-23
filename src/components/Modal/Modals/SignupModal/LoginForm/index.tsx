import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import EmailInput from "../../../../Inputs/Email";
import Socials from "../../../../Socials";
import Spacer from "../../../../Spacer";

import {
  emailValidation,
  passwordValidation,
} from "../../../../../utilities/validation";
import PasswordInput from "../../../../Inputs/Password";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ name: string; text: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateErrors = (name: "email" | "password", text?: string) => {
    if (text) {
      setErrors((prevState) => [
        ...prevState?.filter((e) => e.name !== name),
        { name, text },
      ]);
    } else {
      setErrors((prevState) => [...prevState?.filter((e) => e.name !== name)]);
    }
  };

  const validation = () => {
    // Validate email
    if (!formData.email) {
      updateErrors("email", "Email is required");
    } else if (!emailValidation(formData.email)) {
      updateErrors("email", "Email is invalid");
    } else if (formData.email && emailValidation(formData.email)) {
      if (errors.find((e) => e.name === "email")) {
        updateErrors("email");
      }
    }
    // Validate password
    if (!formData.password) {
      updateErrors("password", "Password is required");
    } else if (!passwordValidation(formData.password)) {
      updateErrors(
        "password",
        "Password must contain at least 8 characters long,one uppercase letter, one lowercase letter, least one digit, one special character (e.g., !@#$%^&*) ",
      );
    } else if (formData.password && passwordValidation(formData.password)) {
      if (errors.find((e) => e.name === "password")) {
        updateErrors("password");
      }
    }
  };

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();
    validation();
  };

  return (
    <form id="login" className="signup-form" onSubmit={onLogin}>
      <EmailInput
        value={formData.email}
        error={errors?.find((e) => e.name === "email")?.text}
        onChange={handleInputChange}
      />
      <Spacer height={20} />
      <PasswordInput
        value={formData.password}
        error={errors?.find((e) => e.name === "password")?.text}
        onChange={handleInputChange}
      />
      <Spacer height={10} />
      <div className="reset-pass-wrapper">
        <button className="reset-pass-btn">{t("forgetPassword")}</button>
      </div>
      <Spacer height={50} />
      <button className="submit-btn" type="submit">
        {t("login")}
      </button>
      <Spacer height={20} />
      <span>{t("or")}</span>
      <Spacer height={20} />
      <Socials />
    </form>
  );
};

export default LoginForm;
