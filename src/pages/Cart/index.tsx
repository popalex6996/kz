import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import CartProducts from "../../components/CartProducts";
import { ORDER } from "../../utilities/constants";
import PersonalDataForm from "../../components/PersonalDataForm";

const Cart = () => {
  const { t } = useTranslation();

  const [cartStage, setStage] = useState(1);

  return ORDER.products ? (
    <div className="cart-page-wrapper">
      <h2 className="cart-page-title">{t("cart-page-title")}</h2>
      <div className="cart-content-details">
        <div className="cart-stage-indicator-content">
          <div className="cart-stage-indicator-wrapper">
            <div
              className={
                cartStage >= 1
                  ? "active-cart-stage-indicator"
                  : "cart-stage-indicator"
              }
              onClick={() => setStage(1)}
            >
              {t("selected-products")}
            </div>
            <div
              className={
                cartStage > 2 ? "active-cart-stage-border" : "cart-stage-border"
              }
            />
            <div
              className={
                cartStage >= 2
                  ? "active-cart-stage-indicator"
                  : "cart-stage-indicator"
              }
              onClick={() => setStage(2)}
            >
              {t("contact-details")}
            </div>
            <div
              className={
                cartStage > 2 ? "active-cart-stage-border" : "cart-stage-border"
              }
            />
            <div
              className={
                cartStage >= 3
                  ? "active-cart-stage-indicator"
                  : "cart-stage-indicator"
              }
              onClick={() => setStage(3)}
            >
              {t("delivery")}
            </div>
            <div
              className={
                cartStage > 3 ? "active-cart-stage-border" : "cart-stage-border"
              }
            />
            <div
              className={
                cartStage >= 4
                  ? "active-cart-stage-indicator"
                  : "cart-stage-indicator"
              }
              onClick={() => setStage(4)}
            >
              {t("payment")}
            </div>
          </div>
          <Spacer height={10} />
          <div className="cart-content">
            <div className="cart-stage-wrapper">
              {cartStage === 1 && <CartProducts products={ORDER.products} />}
              {cartStage === 2 && (
                <div className="personal-data-form-wrapper">
                  <PersonalDataForm noDate />
                </div>
              )}
            </div>
          </div>
        </div>
        <Spacer width={20} />
        <div className="cart-details-wrapper">
          {cartStage > 1 && (
            <div className="cart-details-products-wrapper">
              <CartProducts products={ORDER.products} hideDetails />
            </div>
          )}
          <div className="cart-total-price-wrapper">
            <span>{t("total-price")}</span>
            <span>
              {ORDER.price}
              {t("grn")}
            </span>
          </div>
          <Spacer height={20} />
          <div className="cart-stage-switch-btns">
            {cartStage > 1 && (
              <Button
                onClick={() => setStage((prevState) => --prevState)}
                label={t("prevStepBtn")}
                className="cart-prev-step-btn"
                icon="chevron-left"
                iconLeft
                iconClassName="fa-solid"
              />
            )}
            {cartStage > 1 && <Spacer width={20} />}
            {cartStage < 4 && (
              <Button
                onClick={() => setStage((prevState) => ++prevState)}
                label={t("nextStepBtn")}
                className="cart-next-step-btn"
                icon="chevron-right"
                iconClassName="fa-solid"
              />
            )}
          </div>
          <Spacer height={20} />
          <div className="cart-terms">
            <span>{t("cart-terms-title")}</span>
            <Spacer height={5} />
            <li>
              <a href="/privacy" target="_blank" className="cart-term">
                {t("terms2")}
              </a>
            </li>
            <Spacer height={5} />
            <li>
              <a href="/terms" target="_blank" className="cart-term">
                {t("userAgreement")}
              </a>
            </li>
          </div>
        </div>
      </div>
      <Spacer height={20} />
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
