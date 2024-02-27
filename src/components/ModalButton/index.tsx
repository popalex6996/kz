import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../Button";
import CatalogModal from "../Modal/Modals/CatalogModal";
import CartModal from "../Modal/Modals/CartModal";
import HamburgerModal from "../Modal/Modals/HamburgerModal";
import Modal from "../Modal";
import Spacer from "../Spacer";

import "./index.css";

const ModalButton = ({
  modal,
}: {
  modal: "hamburger" | "catalog" | "cart";
}) => {
  const { t } = useTranslation();

  //Cart modal visibility value
  const [isModalVisible, setModalVisible] = useState(false);

  //Function that switch the Cart modal to open/close
  const toggleModal = () => {
    if (!isModalVisible) {
      setModalVisible(true);
      setTimeout(() => {
        const menu = document.getElementById(modal);
        menu?.classList.toggle(`${modal}-open`);
        document.body.style.overflowY = "hidden";
      }, 0);
    } else {
      const menu = document.getElementById(modal);
      menu?.classList.remove(`${modal}-open`);
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
        setModalVisible(false);
      }, 500);
    }
  };

  return (
    <>
      {/* Hamburger modal open button */}
      {modal === "hamburger" && (
        <Button icon="bars" iconClassName="fa-solid" onClick={toggleModal} />
      )}

      {/* Cart modal open button */}
      {modal === "cart" && (
        <Button
          icon="cart-shopping"
          iconClassName="fa-solid"
          onClick={toggleModal}
        />
      )}

      {/* Catalog modal open button */}
      {modal === "catalog" && (
        <button onClick={toggleModal} className="catalog-button">
          <i className="fa-solid fa-store" />
          <Spacer width={5} />
          <span>{t("allProducts")}</span>
          <Spacer width={5} />
          <i className="fa-solid fa-chevron-down" />
        </button>
      )}

      {/* Modal content*/}
      <Modal onBackdropClick={toggleModal} isVisible={isModalVisible}>
        <div id={modal} className={modal} onClick={(e) => e.stopPropagation()}>
          {/* Hamburger modal content */}
          {modal === "hamburger" && (
            <HamburgerModal toggleMenuModal={toggleModal} />
          )}

          {/* Cart modal content */}
          {modal === "cart" && <CartModal toggleCartModal={toggleModal} />}

          {/* Catalog modal content */}
          {modal === "catalog" && (
            <CatalogModal toggleCatalogModal={toggleModal} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalButton;
