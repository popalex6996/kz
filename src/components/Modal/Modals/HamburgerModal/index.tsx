import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../../Button";
import SocialLinks from "../../../SocialLinks";
import Spacer from "../../../Spacer";

import "./index.css";
import { MENU_LINKS } from "../../../../utilities/constants";
import { Modal } from "../../../../utilities/types";
import { useAuth } from "../../../../hooks/useAuth";

const HamburgerModal = ({
  hide,
  changeModal,
  setLoginTab,
}: {
  hide: (modal: Modal) => void;
  changeModal: (newModal: Modal) => void;
  setLoginTab: (isLoginTab: boolean) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isAuth } = useAuth();

  //Menu link component
  const MenuLink = ({ link, icon }: { link: string; icon: string }) => {
    if (link === "account" && !isAuth) return;
    const onNavigate = (link: string) => () => {
      hide("hamburger");
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
        onClick={() => hide("hamburger")}
      />

      {/* Login button */}
      {!isAuth && (
        <button
          onClick={() => {
            setLoginTab(true);
            changeModal("signup");
          }}
          className="link link-btn"
        >
          <i className="fa-solid fa-right-to-bracket link-icon" />
          <Spacer width={5} />
          {t("login")}
        </button>
      )}

      {/* SignUp button */}
      {!isAuth && (
        <button
          onClick={() => {
            setLoginTab(false);
            changeModal("signup");
          }}
          className="link link-btn"
        >
          <i className="fa-solid fa-user-plus link-icon" />
          <Spacer width={5} />
          {t("signup")}
        </button>
      )}

      {/* Catalog button */}
      <button onClick={() => changeModal("catalog")} className="link link-btn">
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
