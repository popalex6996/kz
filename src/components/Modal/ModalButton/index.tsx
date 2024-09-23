import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../Button";
import Modal from "../index";
import Spacer from "../../Spacer";

import "./index.css";
import { Modal as ModalType } from "../../../utilities/types";
import AccountButton from "./AccountButton";

const ModalButton = ({ type }: { type: ModalType }) => {
  const { t } = useTranslation();

  //Cart modal visibility value
  const [modal, setModal] = useState<ModalType | null>(null);

  const [isLoginTab, setLoginTab] = useState(true);

  const show = (currentModal: ModalType) => {
    setModal(currentModal);
    setTimeout(() => {
      const modalEl = document.getElementById(currentModal);
      modalEl?.classList.toggle(`${currentModal}-open`);
      document.body.style.overflowY = "hidden";
    }, 0);
  };

  const hide = (currentModal: ModalType) => {
    const modalEl = document.getElementById(currentModal);
    modalEl?.classList.remove(`${currentModal}-open`);
    document.body.style.overflowY = "scroll";
    setTimeout(() => setModal(null), 500);
  };

  const changeModal = (newModal: ModalType) => {
    if (modal) {
      const modalEl = document.getElementById(modal);
      modalEl?.classList.remove(`${modal}-open`);
      setModal(newModal);
      setTimeout(() => {
        const modalEl = document.getElementById(newModal);
        modalEl?.classList.toggle(`${newModal}-open`);
      }, 0);
    }
  };

  return (
    <>
      {/* Hamburger modal open button */}
      {type === "hamburger" && (
        <Button
          icon="bars"
          iconClassName="fa-solid"
          onClick={() => show("hamburger")}
        />
      )}

      {/* Cart modal open button */}
      {type === "cart" && (
        <Button
          icon="cart-shopping"
          iconClassName="fa-solid"
          onClick={() => show("cart")}
        />
      )}

      {/* Catalog modal open button */}
      {type === "catalog" && (
        <button onClick={() => show("catalog")} className="catalog-button">
          <i className="fa-solid fa-store" />
          <Spacer width={5} />
          <span>{t("allProducts")}</span>
          <Spacer width={5} />
          <i className="fa-solid fa-chevron-down" />
        </button>
      )}

      {/* Account modal open button */}
      {type === "account" && <AccountButton show={show} />}

      {/* Modal content*/}
      {modal && (
        <Modal
          hide={hide}
          changeModal={changeModal}
          modal={modal}
          isLoginTab={isLoginTab}
          setLoginTab={setLoginTab}
        />
      )}
    </>
  );
};

export default ModalButton;
