import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import Spacer from "../../components/Spacer";
import Button from "../../components/Button";
import { ORDER } from "../../utilities/constants";
import PersonalDataForm from "../../components/PersonalDataForm";
import DeliveryForm from "../../components/DeliveryForm";
import PaymentForm from "../../components/PaymentForm";
import { Delivery, Payment } from "../../utilities/types";
import ExpandableCartProducts from "../../components/ExpandableCartProducts";

const Cart = () => {
  const { t } = useTranslation();

  const [delivery, setDelivery] = useState<Delivery>(null);
  const [payment, setPayment] = useState<Payment | null>(null);

  return ORDER.products ? (
    <div className="cart-page-wrapper">
      <h2 className="cart-page-title">{t("cart-page-title")}</h2>
      <div className="cart-content-details">
        <div className="cart-stage-indicator-content">
          <div className="cart-content">
            <div className="cart-stage-wrapper">
              <ExpandableCartProducts products={ORDER.products} />
              <Spacer height={20} />
              <h2 className="stage-title">{t("contact-details")}</h2>
              <Spacer height={10} />
              <div className="personal-data-form-wrapper">
                {/*<PersonalDataForm noDate />*/}
              </div>
              <Spacer height={20} />
              <div className="delivery-payment-forms">
                <div className="delivery-form-wrapper">
                  <h2 className="stage-title">{t("delivery")}</h2>
                  <Spacer height={10} />
                  <DeliveryForm delivery={delivery} setDelivery={setDelivery} />
                </div>
                <Spacer width={20} />
                <div className="payment-form-wrapper">
                  <h2 className="stage-title">{t("payment")}</h2>
                  <Spacer height={10} />
                  <PaymentForm payment={payment} setPayment={setPayment} />
                </div>
              </div>
              <Spacer height={20} />
            </div>
          </div>
        </div>
        <Spacer width={20} />
        <div className="cart-details-wrapper">
          <div className="cart-total-price-wrapper">
            <span className="cart-total-price">
              {t("total-price")} {ORDER.price}
              {t("grn")}
            </span>
            <Button
              onClick={() => {}}
              label={t("orderConfirm")}
              icon="chevron-right"
              iconClassName="fa-solid"
              className="cart-to-checkout-btn"
            />
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
