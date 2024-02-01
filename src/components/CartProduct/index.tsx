import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product } from "../../utilities/types";
import Button from "../Button";
import NumberInput from "../NumberInput";
import Spacer from "../Spacer";
import "./index.css";

interface CartProductProps {
  product: Product;
  hideDetails?: boolean;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  hideDetails = false,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="cart-product" key={product.name}>
      <div className="cart-product-image-name-amount">
        <div
          className={
            hideDetails ? "cart-product-image-sm" : "cart-product-image"
          }
        >
          image
        </div>
        <Spacer width={10} />
        <div className="cart-product-name-amount">
          <Button
            className="cart-product-name"
            onClick={() => {
              navigate(
                `/category/${product.category}/sub-category/${product.subCategory}/product/${product.id}`,
              );
            }}
            label={product.name}
          />
          <Spacer width={10} />
          <span className="cart-product-amount">
            {product.amountStep}
            {product.measurement} | {product.price}
            {t("grn")}
          </span>
        </div>
      </div>
      <Spacer width={10} />
      <NumberInput
        amount={product.amount}
        maxAmount={product.maxAmount}
        step={product.amountStep}
        measurement={product.measurement}
        hideBtns={hideDetails}
      />
      <Spacer width={20} />
      <span className="cart-product-total-price">
        {product.price * product.amount}
        {t("grn")}
      </span>
      {!hideDetails && <Spacer width={20} />}
      {!hideDetails && (
        <Button
          onClick={() => {}}
          icon="trash"
          color="#711d1d"
          iconClassName="fa-solid"
          className="remove-cart-product-btn"
        />
      )}
    </div>
  );
};

export default CartProduct;
