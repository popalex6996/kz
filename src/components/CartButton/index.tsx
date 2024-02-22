import "./index.css";
import React, { useState } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import CartProducts from "../CartProducts";
import { ORDER } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const CartButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const [isOpen, setCartOpen] = useState(false);

  /* const onOpen = () => {
    // setCartOpen(true);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.toggle("cart-open");
    document.body.style.overflowY = "hidden";
  };*/

  const onClose = () => {
    // setCartOpen(false);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.remove("cart-open");
    document.body.style.overflowY = "scroll";
  };

  const [isCartVisible, setCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    if (!isCartVisible) {
      setCartModalVisible(true);
      setTimeout(() => {
        const menu = document.getElementById("hamburger-menu");
        menu?.classList.toggle("hamburger-open");
        document.body.style.overflowY = "hidden";
      }, 0);
    } else {
      const menu = document.getElementById("hamburger-menu");
      menu?.classList.remove("hamburger-open");
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
        setCartModalVisible(false);
      }, 500);
    }
  };

  return (
    <div className="cart-button-wrapper">
      <Button
        icon="cart-shopping"
        onClick={toggleCartModal}
        iconClassName="fa-solid"
      />
      <Modal onBackdropClick={toggleCartModal} isVisible={isCartVisible}>
        <div id="cart" className="cart" onClick={(e) => e.stopPropagation()}>
          <Button
            icon="cart-shopping"
            onClick={onClose}
            className="cart-close"
            iconClassName="fa-solid"
          />
          <div className="cart-button-content">
            <div className="cart-button-content-title">{t("cart")}</div>
            <CartProducts products={ORDER.products} isModal />
            <div className="cart-btn-total-price-wrapper">
              <span className="cart-btn-total-price">
                {t("total-price")} {ORDER.price}
                {t("grn")}
              </span>
              <Button
                onClick={() => {
                  onClose();
                  navigate("/cart");
                }}
                label={t("goToCheckoutBtn")}
                icon="chevron-right"
                iconClassName="fa-solid"
                className="cart-btn-to-checkout-btn"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartButton;
