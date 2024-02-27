import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../../Button";
import SocialLinks from "../../../SocialLinks";
import Spacer from "../../../Spacer";

import "./index.css";
import { INITIAL_USER, MENU_LINKS } from "../../../../utilities/constants";

const HamburgerModal = ({
  toggleMenuModal,
}: {
  toggleMenuModal: () => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  //Login modal visibility value
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  //Login modal active tab value (login/signup)
  const [isLoginTab, setLoginTab] = useState(true);

  //Function that switch the Login modal to open/close and set active tab for it
  const toggleLoginTab = (loginTabActive: boolean) => () => {
    toggleMenuModal();
    setTimeout(() => {
      if (loginTabActive !== isLoginTab) {
        setLoginTab(loginTabActive);
      }
      setLoginModalVisible((isVisible) => !isVisible);
    }, 500);
  };

  //Function that switch the Catalog modal to open/close
  const toggleCatalogModal = () => {
    toggleMenuModal();
    setTimeout(() => {
      const catalogShadow = document.getElementById("catalog-shadow");
      catalogShadow?.classList.toggle("catalog-shadow-visible");
      const cart = document.getElementById("catalog");
      cart?.classList.toggle("catalog-open");
    }, 500);
  };

  //Menu link component
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
        <MenuLink key={link} link={link} icon={icon} />
      ))}

      {/* Social links */}
      <div className="hamburger-socials">
        <SocialLinks color="red" />
      </div>
    </>
  );
};

export default HamburgerModal;
