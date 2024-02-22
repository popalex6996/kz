import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Spacer from "../Spacer";
import { Payment } from "../../utilities/types";

interface PaymentFormProps {
  payment: Payment;
  setPayment: (payment: Payment) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ payment, setPayment }) => {
  const { t } = useTranslation();

  return (
    <div className="payment-form">
      <div
        className={`payment-option ${
          payment === "uponReceipt" && "active-payment-option"
        }`}
        onClick={() => setPayment("uponReceipt")}
      >
        <div className="payment-option-input">
          <input
            type="radio"
            id="uponReceipt"
            name="payment"
            value="uponReceipt"
            checked={payment === "uponReceipt"}
          />
          <Spacer width={10} />
          <label htmlFor="uponReceipt" className="payment-option-label">
            <span className="payment-option-label-text">
              {t("uponReceipt")}
            </span>
          </label>
        </div>
      </div>
      <div
        className={`payment-option ${
          payment === "payNow" && "active-payment-option"
        }`}
        onClick={() => setPayment("payNow")}
      >
        <div className="payment-option-input">
          <input
            type="radio"
            id="payNow"
            name="payment"
            value="payNow"
            checked={payment === "payNow"}
          />
          <Spacer width={10} />
          <label htmlFor="payNow" className="payment-option-label">
            <span className="payment-option-label-text">{t("payNow")}</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default PaymentForm;
