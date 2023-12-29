import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch";
import Button from "../Button";
import Spacer from "../Spacer";
import Modal from "../Modal";
import SignUp from "../SignUp";

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

  const onCatalogOpen = () => {
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
            <div className="border" />
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
            <button onClick={onCatalogOpen} className="nav-link">
              {t("store")}
            </button>
          </div>
        </div>
        <div className="lang-socials-wrapper">
          <LanguageSwitch />
          <Spacer height={15} />
          <div className="social-links">
            <button onClick={() => {}} className="social-link">
              <i className="fa-brands fa-facebook" />
            </button>
            <button onClick={() => {}} className="social-link">
              <i className="fa-brands fa-instagram" />
            </button>
            <button onClick={() => {}} className="social-link">
              <i className="fa-brands fa-youtube" />
            </button>
          </div>
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
