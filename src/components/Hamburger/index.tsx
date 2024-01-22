import "./index.css";
import React, { useState } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import SignUp from "../SignUp";
import Spacer from "../Spacer";
import { useLocation } from "react-router-dom";
import SocialLinks from "../SocialLinks";

type User = {
  img: string;
  name: string;
  secondName: string;
  id: string;
};

const initialUser: User = {
  img: "",
  name: "",
  secondName: "",
  id: "2",
};

const Hamburger = () => {
  const { t } = useTranslation();

  const location = useLocation();

  // const [user, setUser] = useState<User>(initialUser);

  const [isOpen, setMenuOpen] = useState(false);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const [isLoginTab, setLoginTab] = useState(true);

  const onMenuOpen = () => {
    setMenuOpen(true);
    // @ts-ignore
    const menu = document.getElementById("hamburger-menu");
    menu?.classList.toggle("hamburger-open");
  };

  const onMenuClose = () => {
    setMenuOpen(false);
    // @ts-ignore
    const menu = document.getElementById("hamburger-menu");
    menu?.classList.remove("hamburger-open");
  };

  const onCatalogOpen = () => {
    // @ts-ignore
    onMenuClose();
    const catalogShadow = document.getElementById("catalog-shadow");
    catalogShadow?.classList.toggle("catalog-shadow-visible");
    const cart = document.getElementById("catalog");
    cart?.classList.toggle("catalog-open");
  };

  const toggleLoginModal = () => {
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  const toggleLoginTab = (loginTabActive: boolean) => () => {
    onMenuClose();
    if (loginTabActive !== isLoginTab) {
      setLoginTab(loginTabActive);
    }
    setIsLoginModalVisible((isVisible) => !isVisible);
  };

  return (
    <div className="hamburger-wrapper">
      <Button
        icon="bars"
        color="white"
        onClick={onMenuOpen}
        iconClassName="fa-solid"
      />
      <div className={` ${isOpen && "hamburger-shadow"}`} onClick={onMenuClose}>
        <div
          id="hamburger-menu"
          className="hamburger-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            className="hamburger-close"
            icon="bars"
            color="white"
            iconClassName="fa-solid"
            onClick={onMenuClose}
          />
          <div>
            <a href="/home" className="link ">
              <div className="hamburger-link-icon-wrapper">
                <i className="fa-solid fa-house" />
              </div>
              <Spacer width={5} />
              {t("home")}
              <Spacer width={10} />
              {(location.pathname === "/home" || location.pathname === "/") && (
                <div className="hamburger-active-link" />
              )}
            </a>
            {initialUser.id && (
              <a href="/account" className="link">
                <div className="hamburger-link-icon-wrapper">
                  <i className="fa-solid fa-user" />
                </div>
                <Spacer width={5} />
                {t("account")}
                <Spacer width={10} />
                {location.pathname === "/account" && (
                  <div className="hamburger-active-link" />
                )}
              </a>
            )}
            {!initialUser.id && (
              <button onClick={toggleLoginTab(true)} className="link link-btn">
                <div className="hamburger-link-icon-wrapper">
                  <i className="fa-solid fa-right-to-bracket" />
                </div>
                <Spacer width={5} />
                {t("login")}
              </button>
            )}
            {!initialUser.id && (
              <button onClick={toggleLoginTab(false)} className="link link-btn">
                <div className="hamburger-link-icon-wrapper">
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <Spacer width={5} />
                {t("signup")}
              </button>
            )}
            <button onClick={onCatalogOpen} className="link link-btn">
              <div className="hamburger-link-icon-wrapper">
                <i className="fa-solid fa-store" />
              </div>
              <Spacer width={5} />
              {t("store")}
            </button>
            <a href="/cart" className="link">
              <div className="hamburger-link-icon-wrapper">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <Spacer width={5} />
              {t("cart")}
              <Spacer width={10} />
              {location.pathname === "/cart" && (
                <div className="hamburger-active-link" />
              )}
            </a>
            <a href="/platform" className="link">
              <div className="hamburger-link-icon-wrapper">
                <i className="fa-solid fa-shop" />
              </div>
              <Spacer width={5} />
              {t("platform")}
              <Spacer width={10} />
              {location.pathname === "/platform" && (
                <div className="hamburger-active-link" />
              )}
            </a>
            <Spacer height={10} />
            <div className="border-line" />
            <Spacer height={10} />
            <a href="/payment" className="link">
              {t("payment")}
              <Spacer width={10} />
              {location.pathname === "/payment" && (
                <div className="hamburger-active-link" />
              )}
            </a>
            <a href="/exchange" className="link">
              {t("exchange")}
              <Spacer width={10} />
              {location.pathname === "/exchange" && (
                <div className="hamburger-active-link" />
              )}
            </a>
            <a href="/contacts" className="link">
              {t("contacts")}
              <Spacer width={10} />
              {location.pathname === "/contacts" && (
                <div className="hamburger-active-link" />
              )}
            </a>
            <Spacer height={10} />
            <div className="border-line" />
            <Spacer height={10} />
            <span className="social-links-label">
              {t("socialNetworksLabel")}:
            </span>
            <Spacer height={10} />
            <div className="hamburger-socials">
              <SocialLinks color="red" />
            </div>
            <Spacer height={20} />
          </div>
        </div>
      </div>
      <Modal onBackdropClick={toggleLoginModal} isVisible={isLoginModalVisible}>
        <SignUp loginTabActive={isLoginTab} />
      </Modal>
    </div>
  );
};

export default Hamburger;
