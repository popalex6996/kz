import "./index.css";
import { useState } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";
import CartProducts from "../CartProducts";
import { PRODUCTS } from "../../utilities/constants";

const CartButton = () => {
  const { t } = useTranslation();

  const [isOpen, setCartOpen] = useState(false);

  const onOpen = () => {
    setCartOpen(true);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.toggle("cart-open");
  };

  const onClose = () => {
    setCartOpen(false);
    // @ts-ignore
    const cart = document.getElementById("cart");
    cart?.classList.remove("cart-open");
  };

  return (
    <div className="cart-button-wrapper">
      <Button icon="cart-shopping" onClick={onOpen} iconClassName="fa-solid" />
      <div className={` ${isOpen && "cart-shadow"}`} onClick={onClose}>
        <div id="cart" className="cart" onClick={(e) => e.stopPropagation()}>
          <Button
            icon="cart-shopping"
            onClick={onClose}
            className="cart-close"
            iconClassName="fa-solid"
          />
          <div className="cart-button-content">
            <div className="cart-button-content-title">{t("cart")}</div>
            <CartProducts products={PRODUCTS} isModal />
            <Spacer height={20} />
            <div className="total-wrapper">
              <span className="total">
                {PRODUCTS.reduce((sum, i) => sum + i.price * i.amount, 0)}
                {t("grn")}
              </span>
              <Spacer width={20} />
              <Button
                onClick={() => {}}
                label="Оформити"
                color="711d1d"
                className="but-button"
              />
            </div>
            <Spacer height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
