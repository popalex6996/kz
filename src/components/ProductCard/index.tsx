import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Product } from "../../utilities/types";
import "./index.css";
import Spacer from "../Spacer";
import Button from "../Button";
import NumberInput from "../NumberInput";

interface ProductCardProps {
  product: Product;
  hide?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, hide = false }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  return (
    <div
      className={hide ? "hide-product-card" : "product-card"}
      onClick={() => {
        navigate(
          `/category/${product.category}/sub-category/${product.subCategory}/product/${product.id}`,
        );
      }}
    >
      <div className="favourite-btn-wrapper">
        <Button
          onClick={() => {}}
          icon="heart"
          iconClassName={product.isFavorite ? "fa-solid" : "fa-regular"}
          className="favourite-btn"
        />
      </div>
      <div className="product-card-img-wrapper">
        <img
          src={product.img}
          alt={product.name}
          className="product-card-img"
        />
      </div>
      <Spacer height={15} />
      <div className="product-card-title">{product.name}</div>
      <Spacer height={15} />
      <div className="stars-rate-wrapper">
        {[...Array(5)].map((s, index) => {
          return (
            <div
              key={product.rate + index}
              className={
                product.rate >= index + 1 ? "star active-star" : "star"
              }
            >
              <i className="fa-solid fa-star" />
            </div>
          );
        })}
      </div>
      <Spacer height={15} />
      <div className="product-card-price-buy">
        <div className="product-card-price">
          {product.price}
          {t("grn")} ({product.amountStep}
          {t(product.measurement)})
        </div>
        {value ? (
          <NumberInput
            amount={product.amount}
            maxAmount={product.maxAmount}
            step={product.amountStep}
            measurement={product.measurement}
          />
        ) : (
          <Button
            onClick={() => setValue((prevState) => ++prevState)}
            icon="cart-plus"
            color="#711d1d"
            className="product-card-buy-btn"
            iconClassName="fa-solid"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
