import React, { useState } from "react";
import "./index.css";
import Spacer from "../Spacer";
import { useTranslation } from "react-i18next";
import Socials from "../Socials";

interface SignUpProps {
  loginTabActive?: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ loginTabActive = true }) => {
  const { t } = useTranslation();
  const [isLoginTab, setLoginTab] = useState(loginTabActive);

  const onSignIn = () => {};
  const onSignUp = () => {};

  return (
    <div className="signup-wrapper">
      <div className="tabs">
        <div
          className={`tab-name ${isLoginTab && "active-tab"}`}
          onClick={() => setLoginTab(true)}
        >
          {t("login")}
        </div>
        <div
          className={`tab-name ${!isLoginTab && "active-tab"}`}
          onClick={() => setLoginTab(false)}
        >
          {t("signup")}
        </div>
      </div>
      <Spacer height={50} />
      {isLoginTab ? (
        <form id="signin" className="signup-form" onSubmit={onSignIn}>
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
      ) : (
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
          <button className="already-signed" onClick={() => setLoginTab(true)}>
            {t("alreadyExists")}
          </button>
          <Spacer height={20} />
          <span> {t("or")}</span>
          <Spacer height={20} />
          <Socials />
        </form>
      )}
    </div>
  );
};

export default SignUp;
