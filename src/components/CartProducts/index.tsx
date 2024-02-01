import "./index.css";
import React from "react";
import CartProduct from "../CartProduct";
import { Product } from "../../utilities/types";

interface CartProductProps {
  products: Product[];
  isModal?: boolean;
  hideDetails?: boolean;
}

const CartProducts: React.FC<CartProductProps> = ({
  products,
  isModal = false,
  hideDetails = false,
}) => {
  return (
    <div className={`${isModal ? "modal-cart-products" : "cart-products"}`}>
      {products.map((p) => (
        <CartProduct product={p} key={p.name} hideDetails={hideDetails} />
      ))}
    </div>
  );
};

export default CartProducts;
