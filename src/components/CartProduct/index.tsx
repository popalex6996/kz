import "./index.css";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";
import React from "react";
import { Product } from "../../utilities/types";

interface CartProductProps {
  product: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="cart-product" key={product.name}>
      <div className="cart-product-image-name">
        <div className="cart-product-image">image</div>
        <Spacer width={10} />
        <span className="cart-product-name">{product.name}</span>
      </div>
      <span className="cart-product-amount">{product.amount}</span>
      <span className="cart-product-price">{product.price}</span>
      <div className="cart-button-amount-buttons">
        <Button
          onClick={() => {}}
          icon="plus"
          color="#711d1d"
          className="cart-button-amount-button"
          iconClassName="cart-button-amount-button-icon fa-solid"
        />
        <Spacer width={5} />
        <span className="cart-button-amount"> {product.amount}</span>
        <Spacer width={5} />
        <Button
          onClick={() => {}}
          icon="minus"
          color="#711d1d"
          className="cart-button-amount-button"
          iconClassName="cart-button-amount-button-icon fa-solid"
        />
      </div>
      <span className="cart-button-product-name">
        {product.price * product.amount}
        {t("grn")}
      </span>
      <Button
        onClick={() => {}}
        icon="trash"
        color="#711d1d"
        iconClassName="fa-solid"
      />
    </div>
  );
};

export default CartProduct;
