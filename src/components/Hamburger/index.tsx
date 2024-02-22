import "./index.css";
import React, { useState } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import Modal from "../Modal";
import SignUp from "../SignUp";
import Spacer from "../Spacer";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { INITIAL_USER, MENU_LINKS } from "../../utilities/constants";

const Hamburger = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const navigate = useNavigate();

  const [isMenuVisible, setMenuModalVisible] = useState(false);

  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const [isLoginTab, setLoginTab] = useState(true);

  const [isCatalogModalVisible, setCatalogModalVisible] = useState(false);

  const toggleMenuModal = () => {
    if (!isMenuVisible) {
      setMenuModalVisible(true);
      setTimeout(() => {
        const menu = document.getElementById("hamburger-menu");
        menu?.classList.toggle("hamburger-menu-open");
        document.body.style.overflowY = "hidden";
      }, 0);
    } else {
      const menu = document.getElementById("hamburger-menu");
      menu?.classList.remove("hamburger-menu-open");
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
        setMenuModalVisible(false);
      }, 500);
    }
  };

  const toggleLoginTab = (loginTabActive: boolean) => () => {
    toggleMenuModal();
    setTimeout(() => {
      if (loginTabActive !== isLoginTab) {
        setLoginTab(loginTabActive);
      }
      setLoginModalVisible((isVisible) => !isVisible);
    }, 500);
  };

  const toggleCatalogModal = () => {
    toggleMenuModal();
    setTimeout(() => {
      const catalogShadow = document.getElementById("catalog-shadow");
      catalogShadow?.classList.toggle("catalog-shadow-visible");
      const cart = document.getElementById("catalog");
      cart?.classList.toggle("catalog-open");
    }, 500);
  };

  const MenuLink = ({ link, icon }: { link: string; icon: string }) => {
    if (link === "account" && !INITIAL_USER.id) return;
    const onNavigate = (link: string) => () => {
      toggleMenuModal();
      navigate(`/${link}`);
    };

    return (
      <button className="link" onClick={onNavigate(link)}>
        <i className={`${icon} fa-solid link-icon`} />
        <Spacer width={5} />
        {t(link)}
        <Spacer width={10} />
        {(link === "home"
          ? location.pathname === "/" || location.pathname === "/home"
          : location.pathname === `/${link}`) && (
          <div className="hamburger-active-link" />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Menu open button */}
      <Button icon="bars" iconClassName="fa-solid" onClick={toggleMenuModal} />

      {/* Menu modal */}
      <Modal onBackdropClick={toggleMenuModal} isVisible={isMenuVisible}>
        <div
          id="hamburger-menu"
          className="hamburger-menu"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu close button */}
          <Button
            icon="bars"
            iconClassName="fa-solid"
            className="hamburger-menu-close-btn"
            onClick={toggleMenuModal}
          />

          {/* Login button */}
          {!INITIAL_USER.id && (
            <button onClick={toggleLoginTab(true)} className="link link-btn">
              <i className="fa-solid fa-right-to-bracket link-icon" />
              <Spacer width={5} />
              {t("login")}
            </button>
          )}

          {/* SignUp button */}
          {!INITIAL_USER.id && (
            <button onClick={toggleLoginTab(false)} className="link link-btn">
              <i className="fa-solid fa-user-plus link-icon" />
              <Spacer width={5} />
              {t("signup")}
            </button>
          )}

          {/* Catalog button */}
          <button onClick={toggleCatalogModal} className="link link-btn">
            <i className="fa-solid fa-store link-icon" />
            <Spacer width={5} />
            {t("store")}
          </button>

          {/* Menu nav links */}
          {MENU_LINKS.map(({ link, icon }) => (
            <MenuLink link={link} icon={icon} />
          ))}

          {/* Social links */}
          <div className="hamburger-socials">
            <SocialLinks color="red" />
          </div>
        </div>
      </Modal>

      {/* SignUp modal */}
      <Modal
        onBackdropClick={() => setLoginModalVisible(false)}
        isVisible={isLoginModalVisible}
      >
        {/* SignUp component */}
        <SignUp loginTabActive={isLoginTab} />
      </Modal>
    </>
  );
};

export default Hamburger;
