import "./index.css";
import { useState } from "react";
import Button from "../Button";

const CartButton = () => {
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
      <Button icon="cart-shopping" onClick={onOpen} />
      <div className={` ${isOpen && "cart-shadow"}`} onClick={onClose}>
        <div id="cart" className="cart" onClick={(e) => e.stopPropagation()}>
          <Button
            icon="cart-shopping"
            onClick={onClose}
            className="cart-close"
          />
          <div>
            <div>Kabachochick</div>
            <div>Salo</div>
            <div>Kavunchik</div>
            <div>Grushka</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
