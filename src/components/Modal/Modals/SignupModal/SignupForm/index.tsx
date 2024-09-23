import React from "react";
import { useTranslation } from "react-i18next";

import Socials from "../../../../Socials";
import Spacer from "../../../../Spacer";

interface SignupFormProps {
  setLoginForm: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setLoginForm }) => {
  const { t } = useTranslation();
  const onSignUp = () => {};

  return (
    <form id="signup" className="signup-form" onSubmit={onSignUp}>
      <input
        className="auth-input"
        type="text"
        placeholder={t("namePlaceholder")}
      />
      <Spacer height={20} />
      <input
        className="auth-input"
        type="text"
        placeholder={t("lastNamePlaceholder")}
      />
      <Spacer height={20} />
      <input
        className="auth-input"
        type="text"
        placeholder={t("phonePlaceholder")}
      />
      <Spacer height={20} />
      <input
        className="auth-input"
        type="email"
        placeholder={t("emailPlaceholder")}
      />
      <Spacer height={20} />
      <input
        className="auth-input"
        type="password"
        placeholder={t("passwordPlaceholder")}
      />
      <Spacer height={20} />
      <div className="reset-pass-wrapper">
        <span className="terms">
          {t("terms")}{" "}
          <a href="/privacy" target="_blank" className="terms-link">
            {t("terms2")}
          </a>{" "}
          {t("terms3")}{" "}
          <a href="/terms" target="_blank" className="terms-link">
            {t("terms4")}
          </a>
        </span>
      </div>
      <Spacer height={30} />
      <button className="submit-btn" type="submit">
        {t("signup")}
      </button>
      <Spacer height={10} />
      <button className="already-signed" onClick={setLoginForm}>
        {t("alreadyExists")}
      </button>
      <Spacer height={20} />
      <span> {t("or")}</span>
      <Spacer height={20} />
      <Socials />
    </form>
  );
};

export default SignupForm;
