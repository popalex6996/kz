import "./index.css";
import { Modal } from "../../../../utilities/types";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterLoginButton = ({ show }: { show: (modal: Modal) => void }) => {
  const { t } = useTranslation();
  return (
    <div className="nav-link" onClick={() => show("signup")}>
      {t("login")}
    </div>
  );
};

export default FooterLoginButton;
