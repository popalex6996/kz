import React from "react";
import ReactDOM from "react-dom";

import CartModal from "./Modals/CartModal";
import CatalogModal from "./Modals/CatalogModal";
import HamburgerModal from "./Modals/HamburgerModal";
import SignupModal from "./Modals/SignupModal";

import "./index.css";
import { Modal as ModalType } from "../../utilities/types";
import AccountModal from "./Modals/AccountModal";

interface ModalProps {
  hide: (modal: ModalType) => void;
  changeModal: (modal: ModalType) => void;
  modal: ModalType;
  isLoginTab: boolean;
  setLoginTab: (isLoginTab: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  hide,
  changeModal,
  modal,
  isLoginTab,
  setLoginTab,
}) => {
  return ReactDOM.createPortal(
    <div onClick={() => hide(modal)} className="modal-wrapper">
      <div id={modal} className={modal} onClick={(e) => e.stopPropagation()}>
        {/* Hamburger modal content */}
        {modal === "hamburger" && (
          <HamburgerModal
            changeModal={changeModal}
            hide={hide}
            setLoginTab={setLoginTab}
          />
        )}

        {/* Cart modal content */}
        {modal === "cart" && <CartModal hide={hide} />}

        {/* Cart modal content */}
        {modal === "account" && <AccountModal hide={hide} />}

        {/* Catalog modal content */}
        {modal === "catalog" && <CatalogModal hide={hide} />}

        {/* Signup modal content */}
        {modal === "signup" && (
          <SignupModal
            hide={hide}
            isLoginTab={isLoginTab}
            setLoginTab={setLoginTab}
          />
        )}
      </div>
    </div>,

    document.getElementById("modal-root")!,
  );
};

export default Modal;
