import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import CartProducts from "../../components/CartProducts";
import { PRODUCTS } from "../../utilities/constants";

const stages = [
  {
    value: 1,
    title: "selected-products",
  },
  {
    value: 2,
    title: "contact-details",
  },
  {
    value: 3,
    title: "delivery",
  },
  {
    value: 4,
    title: "payment",
  },
];

const Cart = () => {
  const { t } = useTranslation();

  const [cartStage, setStage] = useState(1);

  return PRODUCTS.length ? (
    <div className="cart-page-wrapper">
      <h2 className="cart-page-title">{t("cart-page-title")}</h2>
      <div className="cart-stage-indicator-wrapper">
        {stages.map((s, index) => (
          <>
            <div
              className={
                cartStage >= s.value
                  ? "active-cart-stage-indicator"
                  : "cart-stage-indicator"
              }
              onClick={() => setStage(s.value)}
            >
              {t(s.title)}
            </div>
            {index + 1 !== stages.length && (
              <div
                className={
                  cartStage > s.value
                    ? "active-cart-stage-border"
                    : "cart-stage-border"
                }
              />
            )}
          </>
        ))}
      </div>
      <Spacer height={20} />
      <div className="cart-content">
        <div className="cart-stage-wrapper">
          {cartStage === 1 && <CartProducts products={PRODUCTS} />}
        </div>
        <Spacer width={20} />
        <div className="cart-details-wrapper">details</div>
      </div>
    </div>
  ) : (
    <div className="cart-no-products">
      <Spacer height={50} />
      <h2 className="cart-no-products-title">{t("cart-no-products-title")}</h2>
      <Spacer height={30} />
      <Button
        onClick={() => {}}
        className="empty-cart-catalog-btn"
        icon="store"
        iconClassName="fa-solid"
        label={t("emptyCartCatalogBtn")}
      />
    </div>
  );
};

export default Cart;
