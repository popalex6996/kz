import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch";
import Spacer from "../Spacer";
import Modal from "../Modal";
import SignUp from "../SignUp";
import SocialLinks from "../SocialLinks";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isLoginTab, setLoginTab] = useState(true);

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };
  const toggleLoginTab = (loginTabActive: boolean) => () => {
    if (loginTabActive !== isLoginTab) {
      setLoginTab(loginTabActive);
    }
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  const toggleCatalog = () => {
    // @ts-ignore
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.toggle("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.toggle("catalog-open");
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <div className="nav-links">
          <div className="nav-links-row">
            <div className="nav-link" onClick={toggleLoginTab(true)}>
              {t("login")}
            </div>
            <Spacer width={10} />
            <div className="footer-links-border" />
            <Spacer width={10} />
            <div className="nav-link" onClick={toggleLoginTab(false)}>
              {t("signup")}
            </div>
          </div>
          <a className="nav-link" href="/platform">
            {t("platform")}
          </a>
        </div>
        <div className="nav-links">
          <div className="nav-links">
            <button onClick={toggleCatalog} className="nav-link">
              {t("store")}
            </button>
          </div>
        </div>
        <div className="lang-socials-wrapper">
          <LanguageSwitch />
          <Spacer height={15} />
          <SocialLinks />
        </div>
      </div>
      <div className="copyright-wrapper">
        <div className="copyright">
          {t("copyright")}{" "}
          <a href="/privacy" target="_blank" className="copyright-terms-link">
            {t("terms2")}
            {", "}
          </a>
          <a href="/terms" target="_blank" className="copyright-terms-link">
            {t("userAgreement")}
          </a>
        </div>
      </div>

      <Modal onBackdropClick={toggleLoginModal} isVisible={isLoginModalVisible}>
        <SignUp loginTabActive={isLoginTab} />
      </Modal>
    </div>
  );
};

export default Footer;
