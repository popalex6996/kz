import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Spacer from "../../../Spacer";

import "./index.css";
import { Modal } from "../../../../utilities/types";
import Button from "../../../Button";
import ResetPasswordForm from "./ResetPasswordForm";

interface SignupModalProps {
  hide: (modal: Modal) => void;
  isLoginTab: boolean;
  setLoginTab: (value: boolean) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  hide,
  isLoginTab,
  setLoginTab,
}) => {
  const { t } = useTranslation();

  const [resetPasswordView, setResetPasswordView] = useState(false);

  return (
    <div className="signup-wrapper">
      {resetPasswordView && (
        <Button
          onClick={() => setResetPasswordView(false)}
          icon="chevron-left"
          iconClassName="fa-solid"
          color="#711d1d"
          className="reset-password-back-btn"
        />
      )}
      {/* Modal close button */}
      <Button
        onClick={() => hide("signup")}
        icon="xmark"
        iconClassName="fa-solid"
        color="#711d1d"
        className="signup-close-btn"
      />
      {!resetPasswordView && (
        <div className="tabs">
          <button
            className={`login-tab tab-name ${isLoginTab && "active-tab"}`}
            onClick={() => setLoginTab(true)}
          >
            {t("login")}
          </button>
          <Spacer width={10} />
          <div className="signup-border-line" />
          <Spacer width={10} />
          <button
            className={`signup-tab  tab-name ${!isLoginTab && "active-tab"}`}
            onClick={() => setLoginTab(false)}
          >
            {t("signup")}
          </button>
        </div>
      )}

      {!resetPasswordView && <Spacer height={50} />}
      {resetPasswordView && (
        <ResetPasswordForm setResetPasswordView={setResetPasswordView} />
      )}
      {isLoginTab && !resetPasswordView && (
        <LoginForm
          hide={hide}
          setResetPasswordView={() => setResetPasswordView(true)}
        />
      )}
      {!isLoginTab && !resetPasswordView && (
        <SignupForm hide={hide} setLoginForm={() => setLoginTab(true)} />
      )}
    </div>
  );
};

export default SignupModal;
