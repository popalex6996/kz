import "./index.css";
import { useState } from "react";
import Button from "../Button/Button";

const Cart = () => {
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
    <div className="cart-wrapper">
      <Button type="cart" onClick={onOpen} />
      <div className={` ${isOpen && "cart-shadow"}`} onClick={onClose}>
        <div id="cart" className="cart">
          <Button className="cart-close" type="cart" onClick={onClose} />
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

export default Cart;
