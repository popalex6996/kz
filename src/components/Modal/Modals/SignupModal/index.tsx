import React from "react";
import { useTranslation } from "react-i18next";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Spacer from "../../../Spacer";

import "./index.css";
import { Modal } from "../../../../utilities/types";

interface SignupModal {
  hide: (modal: Modal) => void;
  isLoginTab: boolean;
  setLoginTab: (value: boolean) => void;
}

const SignupModal: React.FC<SignupModal> = ({
  hide,
  isLoginTab,
  setLoginTab,
}) => {
  const { t } = useTranslation();

  return (
    <div className="signup-wrapper">
      <div className="tabs">
        <button
          className={`tab-name ${isLoginTab && "active-tab"}`}
          onClick={() => setLoginTab(true)}
        >
          {t("login")}
        </button>
        <Spacer width={10} />
        <div className="signup-border-line" />
        <Spacer width={10} />
        <button
          className={`tab-name ${!isLoginTab && "active-tab"}`}
          onClick={() => setLoginTab(false)}
        >
          {t("signup")}
        </button>
      </div>
      <Spacer height={50} />
      {(isLoginTab && <LoginForm />) || (
        <SignupForm setLoginForm={() => setLoginTab(true)} />
      )}
    </div>
  );
};

export default SignupModal;
