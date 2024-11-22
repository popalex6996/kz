import "./index.css";
import { Modal } from "../../../../utilities/types";
import React from "react";
import { useTranslation } from "react-i18next";

const FooterSignupButton = ({ show }: { show: (modal: Modal) => void }) => {
  const { t } = useTranslation();
  return (
    <div className="nav-link" onClick={() => show("signup")}>
      {t("signup")}
    </div>
  );
};

export default FooterSignupButton;
